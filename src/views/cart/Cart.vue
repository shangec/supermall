<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list />

    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childComps/CartList";
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // },
    // 将getter转为计算属性
    // 用法一
    // ...mapGetters(['cartLength'])
    // 用法二
    // 自定义名称
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>

<style>
.cart {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
