<template>
  <div>
    <a-button type="primary">tableList</a-button>
    <a-skeleton :loading="loading">
      <!-- <div>
        <TimeLine></TimeLine>
      </div> -->
      <div :is="currentView">
      </div>
    </a-skeleton>
  </div>
</template>
<script>
import { Button, Skeleton } from "ant-design-vue";
// import TimeLine from "@/components/TimeLine";
import BaiduMap from "@/components/TimeLine";
export default {
  name: "tableList",
  components: {
    AButton: Button,
    // TimeLine,
    BaiduMap,
    ASkeleton: Skeleton,
  },
  data() {
    return {
      loading: true,
      currentView: "",
    };
  },
  mounted() {
    this.$nextTick(() => {
      // import TimeLine from "@/components/TimeLine";
      // setTimeout(() => {
      //   this.loading = false;
      // }, 1000);
      this.currentView = BaiduMap;
      // this.loading = false;
    });
  },
};
</script>