<!--  -->
<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item">{{ item }}</goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  components: {
    GoodsListItem
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
