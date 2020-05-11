<!--  -->
<template>
  <div class="category">
    <ul class="content">
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
    new BScroll(".category");
  },
  components: {}
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
