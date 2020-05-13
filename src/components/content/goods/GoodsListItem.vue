<!--  -->
<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" @load="imgaeLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
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
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgaeLoad() {
      if (this.$route.path.indexOf("/home") != -1) {
        this.$bus.$emit("homeImgaeLoad");
      } else if (this.$route.path.indexOf("/detail") != -1) {
        this.$bus.$emit("detailImgaeLoad");
      }
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods img {
  width: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
