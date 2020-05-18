<!--  -->
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <BottomBar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
import CartList from "./childComps//CartList";
import Scroll from "components/common/scroll/Scroll";
import BottomBar from "./childComps/BottomBar";
export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  components: {
    NavBar,
    CartList,
    Scroll,
    BottomBar
  },
  methods: {},
  activated() {
    this.$refs.scroll.pageRefresh();
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.nav-bar {
  background-color: pink;
  color: #ffffff;
}
.cart {
  height: 100vh;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
