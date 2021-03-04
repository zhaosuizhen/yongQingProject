import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Axios from 'axios'
import qs from 'qs'
import elementUi from 'element-ui'
import echarts from "echarts";
import 'element-ui/lib/theme-chalk/index.css';
import '@/utils/nowTime'
import './assets/css/common.scss';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
  
Vue.use(VueQuillEditor)


Vue.use(elementUi);
Vue.use(echarts);
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$qs = qs
Vue.prototype.imgIp='http://39.98.226.242:8098/image/';   //图片显示ip地址



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
