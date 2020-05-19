<!--  -->
<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  props: {
    // message: {
    //   type: String,
    //   default: ""
    // },
    // isShow: {
    //   type: Boolean,
    //   default: false
    // }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    show(message, time = 2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, time);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  z-index: 999;
}
</style>
