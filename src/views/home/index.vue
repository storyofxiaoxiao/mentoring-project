<template>
  <div>
    <a-button type="primary">hello world</a-button>
  </div>
</template>
<script>
import { Button } from "ant-design-vue";
export default {
  name: "home",
  components: { AButton: Button },
  mounted() {
    // ******* PREFETCH *******
    this.$nextTick(() => {
      import(
        /* webpackPrefetch: true */
        /*webpackChunkName: 'tableList'*/
        "../tableList"
      );
    });
  },
};
</script>