<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
import HomeSwiper from "./childComps/HomeSwiper";
import { getHomeMultidata } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log(this.banners);
  },
  components: {
    NavBar,
    HomeSwiper
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
