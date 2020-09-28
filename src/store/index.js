import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
const state = {
  cartList: []
}
const store = new Vuex.Store({
  // ...
  state,
  // mutations: {
  //   // mutations唯一的母的就是修改state中的状态
  //   // mutations中的每个方法尽可能完成的事件比较单一
  //   addCounter(state,payload){
  //     payload.count++
  //   },
  //   addToCart(state,payload){
  //     state.cartList.push(payload)
  //   }
  // },
  mutations,
  actions,
  getters
})

// 3.挂载到Vue实例
export default store
