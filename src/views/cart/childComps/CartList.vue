<!--  -->
<template>
  <div class="cart-list">
    <CartListItem
      v-for="(item, index) in cartList"
      :key="index"
      :itemInfo="item"
    ></CartListItem>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  },
  components: {
    CartListItem
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
