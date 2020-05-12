<!--  -->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages1" :key="index">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    return {};
  },
  props: {
    topImages1: {
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
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>