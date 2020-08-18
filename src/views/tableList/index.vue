<template>
  <div>
    <a-button type="primary">tableList</a-button>
    <a-skeleton :loading="loading">
      <div>
        <TimeLine></TimeLine>
      </div>
    </a-skeleton>
  </div>
</template>
<script>
import { Button, Skeleton } from "ant-design-vue";
import TimeLine from "@/components/TimeLine";
export default {
  name: "tableList",
  components: {
    AButton: Button,
    TimeLine,
    ASkeleton: Skeleton,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      // import TimeLine from "@/components/TimeLine";
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>