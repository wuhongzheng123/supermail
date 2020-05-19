import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((reslove, reject) => {
        let oldProduct = null;
        for (let item of context.state.cartList) {
          if (item.iid === payload.iid) {
            oldProduct = item;
          }
        };
        if (oldProduct) {
          context.commit('addCounter', oldProduct);
          reslove('当前的商品数据+1')
        } else {
          payload.count = 1;
          payload.checked = true;
          context.commit('addToCart', payload);
          reslove('添加新商品')
        }
      })

    }
  }
})

export default store
