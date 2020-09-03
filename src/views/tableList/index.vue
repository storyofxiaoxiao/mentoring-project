<template>
  <div>
    <a-button type="primary">tableList</a-button>
    <component :is="componentId"></component>
    <!-- <BaiduMap></BaiduMap> -->
  </div>
</template>
<script>
import { Button } from "ant-design-vue";
export default {
  name: "tableList",
  components: {
    AButton: Button,
    // ******* 异步加载组件 *******
    BaiduMap(resolve) {
      require(["../../components/BaiduMap"], resolve);
    },
  },
  data() {
    return {
      componentId: "",
    };
  },
  mounted() {
    // ******* 异步加载组件 *******
    this.$nextTick(() => {
      this.componentId = "BaiduMap";
    });
  },
};
</script>