<!--  -->
<template>
  <div class="category">
    <ul>
      <button @click="btn">按钮</button>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    //probeType:0,1不侦测，2手指在滚动过程中侦测，惯性移动不侦测，3只要滚动就侦测
    const bscroll = new BScroll(".category", {
      probeType: 3,
      pullUpLoad: true
    });
    bscroll.on("scroll", position => {
      // console.log(position);
    });
    bscroll.on("pullingUp", () => {
      console.log("上拉");
      //发送网络请求，数据请求完后
      bscroll.finishPullUp();
    });
  },
  components: {},
  methods: {
    btn() {
      console.log(123);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.category {
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>
