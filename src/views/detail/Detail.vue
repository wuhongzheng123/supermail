<!--  -->
<template>
  <div id="detail">
    <DetailNavBar class="detail-nav" @titleClick="titleClick" ref="navbar" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :topImages1="topImages" />
      <DetailBaseInfo :goods="GoodsInfo" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <DetailParamInfo :paramInfo="paramInfo" ref="params" />
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment" />
      <GoodsList :goods="recommendList" ref="recommend" />
    </scroll>
    <DetailBottomBar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShow" />
    <!-- <toast :message="message" :isShow="show" /> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNarBar";
import {
  getDetail,
  GoodsInfo,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";
import BackTop from "components/content/backTop/BackTop";
// import Toast from "components/common/toast/Toast";

import { debounce } from "common/utils";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      title: null,
      GoodsInfo: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTops: [],
      currentIndex: 0,
      themeTopYs: [],
      currentIndex: 0,
      isShow: false
      // show: "",
      // message: ""
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.iid = this.$route.params.iid;
    //根据iid请求数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      //获取商品信息
      this.GoodsInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //创建店铺新消息
      this.shop = new Shop(data.shopInfo);

      // 2.5.获取商品信息
      this.detailInfo = data.detailInfo;

      // 2.6.保存参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 2.7.保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }

      // this.$nextTick(() => {});
      //根据最新的数据，对应的DOM是已经被渲染出来了，但是图片依然没加载完
    });
    getRecommend().then(res => {
      this.recommendList = res.data.list;
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    //1.监听图片加载完成
    const refresh = debounce(this.$refs.scroll.pageRefresh, 500);
    this.$bus.$on("detailImgaeLoad", () => {
      refresh();
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
    // Toast
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.pageRefresh();

      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themeTopYs);
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    contentScroll(position) {
      // console.log(position);
      const positionY = -position.y;
      // if(positionY>0 && positionY<this.themeTopYs[1])
      let length = this.themeTopYs.length;
      for (let i in this.themeTopYs) {
        i = parseInt(i);
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
      if (-position.y > 1000) {
        this.isShow = true;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    addToCart() {
      // console.log(123);
      const product = {};
      product.image = this.topImages[0];
      product.title = this.GoodsInfo.title;
      product.desc = this.GoodsInfo.desc;
      product.price = this.GoodsInfo.nowPrice;
      product.iid = this.iid;
      // console.log(product);
      // this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product).then(res => {
        // this.message = res;
        // this.show = true;
        // setTimeout(() => {
        //   this.message = "";
        //   this.show = false;
        // }, 1500);
        this.$toast.show(res, 1500);
      });
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.content {
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
}
</style>
