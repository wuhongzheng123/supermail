import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "./components/common/toast";
import fastclick from "fastclick";
import VueLazyload from "vue-lazyload";
//安装toast插件
Vue.use(toast);
//解决移动端300ms延迟
fastclick.attach(document.body);
//图片懒加载
Vue.use(VueLazyload, {
  loading: require("assets/img/common/placeholder.png")
});

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
import Router from "vue-router";
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
