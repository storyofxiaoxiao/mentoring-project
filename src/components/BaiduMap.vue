<template>
  <a-spin
    tip="Loading..."
    :spinning="loading"
  >
    <div id="map"></div>
  </a-spin>
</template>
<script>
import { Spin } from "ant-design-vue";
export default {
  name: "BaiduMap",
  components: {
    ASpin: Spin,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    // 挂载到window上面
    window.initialize = this.initialize;
  },
  mounted() {
    // 挂载到window上面，并执行方法
    window.onload = this.loadScript();
  },
  methods: {
    loadScript() {
      var script = document.createElement("script");
      // 后面的callback会调用window对象 initialize
      script.src =
        "http://api.map.baidu.com/api?v=2.0&ak=Ojc0IDGG3MbPBTZYvSWQydfDZogjT4Gd&callback=initialize";
      document.body.appendChild(script);
    },
    initialize() {
      /*eslint-disable-next-line*/
      var mp = new BMap.Map("map");
      /*eslint-disable-next-line*/
      mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
      this.loading = false;
    },
  },
};
</script>
<style lang="less" scoped>
#map {
  height: 1200px;
}
</style>
