<!--  -->
<template>
  <div>
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles "
          :key="index"
          class="titleItem"
          :class="{active:currentIndex===index}"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.title {
  display: flex;
  font-size: 12px;
}
.titleItem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 5px;
}
</style>