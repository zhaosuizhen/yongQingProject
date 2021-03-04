// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import resource from "vue-resource";
import elementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//import 'font-awesome/css/font-awesome.min.css'
import geojson from "geojson";
import echarts from "echarts";
import china from "echarts/map/js/china.js";
import world from "echarts/map/js/world.js";
import fontsize from "./js/fontsize";
import vueSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import scroll from 'vue-seamless-scroll'
import 'echarts-gl'
import Video from 'video.js'
import hls from 'videojs-contrib-hls'
import 'video.js/dist/video-js.css'

import yongqing from '@/assets/yongqing.json'
echarts.registerMap('yongqing', yongqing)

import axios from 'axios'
Vue.prototype.$axios=axios 

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
  
Vue.use(VueQuillEditor)

Vue.prototype.$video = Video
// import bMap from 'bmap'
//轮播插件
Vue.use(resource);
Vue.use(elementUi);
Vue.use(geojson);
Vue.use(echarts);
Vue.use(china);
Vue.use(world);
Vue.use(fontsize);
Vue.use(vueSwiper);
Vue.use(scroll);
// Vue.use(bMap)
import "echarts-gl";
Vue.prototype.$echarts = echarts;

//全局配置地理信息地区区块颜色
Vue.prototype.globalColorConfig = {
  startColor : '#D2EC55', //渐变颜色初始值为最大值的颜色，从大到小  
  endColor :  '#309DF2',  //渐变颜色结束值为最小值的颜色，从大到小 
  colorStep : 64,  //一共有12个省，从0值开始计算，所以需要分成13个梯度
  maxArea : 100144.3, //地区面积最大值
};

Object.defineProperties(Vue.prototype, {
  echarts: { get: () => echarts }
});

Date.prototype.Format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
