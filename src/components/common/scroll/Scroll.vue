<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="slide">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    //probeType:0,1不侦测，2手指在滚动过程中侦测，惯性移动不侦测，3只要滚动就侦测   this.$refs.wrapper
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      //发送网络请求，数据请求完后
      this.scroll && this.scroll.finishPullUp();
    },
    pageRefresh() {
      this.scroll && this.scroll.refresh();
      // console.log("--");
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>