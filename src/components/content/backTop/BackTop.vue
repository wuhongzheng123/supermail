<!--  -->
<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.backtop {
  position: fixed;
  right: 10px;
  bottom: 50px;
}
.backtop img {
  width: 43px;
  height: 43px;
}
</style>