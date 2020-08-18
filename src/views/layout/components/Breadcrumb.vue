<template>
  <div class="breadcrumb">
    <a-breadcrumb>
      <a-breadcrumb-item
        v-for="(item, index) in breadcrumbSource"
        :key="index"
      >
        <span v-if="index === 0">{{ item.name}}</span>
        <span v-else>{{item.name}}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script>
import { Breadcrumb } from "ant-design-vue";
import { baseRouterMap } from "@/router/index";
export default {
  name: "BreadCrumb",
  components: {
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item,
  },
  data() {
    return {
      breadcrumbSource: baseRouterMap,
    };
  },
  mounted() {
    console.log("breadcrumbSource", this.breadcrumbSource);
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    // 面包屑数据生成
    getBreadcrumb() {
      if (this.$route.matched[0].name === this.$route.matched[1].name) {
        this.breadcrumbSource = this.$route.matched.slice(0, 1);
        console.log("this.breadcrumbSource--111-", this.breadcrumbSource);
      } else {
        this.breadcrumbSource = this.$route.matched;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.breadcrumb {
  background-color: transparent;
  padding: 20px 20px 0px;
  margin-bottom: 16px;
}
</style>