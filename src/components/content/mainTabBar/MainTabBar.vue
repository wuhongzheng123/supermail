<!--  -->
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/home_active.svg"
        alt
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/category_active.svg"
        alt
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/cart_active.svg"
        alt
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/profile_active.svg"
        alt
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
