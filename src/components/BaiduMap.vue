<template>
  <div id="map"></div>
</template>
<script>
// import BMap from "module";
import BMap from "vue-baidu-map";
export default {
  name: "BaiduMap",
  mounted() {
    window.onload = this.loadScript;
  },
  methods: {
    loadScript() {
      var script = document.createElement("script");
      script.src =
        "http://api.map.baidu.com/api?v=2.0&ak=您的密钥&callback=initialize";
      document.body.appendChild(script);
    },
    initialize() {
      var mp = new BMap.Map("map");
      mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
    },
  },
};
</script>
