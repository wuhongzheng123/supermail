<!--  -->
<template>
  <div id="detail">
    <DetailNavBar />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNarBar";
export default {
  data() {
    return {
      iid: null
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.iid = this.$route.params.iid;
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  components: {
    DetailNavBar
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>