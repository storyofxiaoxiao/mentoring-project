<template>
  <a-layout
    id="components-layout-demo-top"
    class="layout"
  >
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['home']"
        :style="{ lineHeight: '64px' }"
        @click="handleClick"
      >
        <a-menu-item key="home">
          home
        </a-menu-item>
        <a-menu-item key="tableList">
          tableList
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <Breadcrumb></Breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { Layout, Menu } from "ant-design-vue";
import Breadcrumb from "./components/Breadcrumb";

export default {
  name: "layout",
  components: {
    Breadcrumb,
    ALayout: Layout,
    ALayoutFooter: Layout.Footer,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    AMenu: Menu,
    AMenuItem: Menu.Item,
  },
  data() {
    return {
      // breadcrumb: baseRouterMap,
    };
  },
  methods: {
    // 点击路由前往路由页面
    handleClick(e) {
      console.log("33333-", e);
      this.$router.push({ name: e.key });
    },
  },
};
</script>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>