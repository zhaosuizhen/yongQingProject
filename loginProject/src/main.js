import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import qs from 'qs'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$qs = qs
Vue.prototype.$baseUrl = process.env.ROOT_URL
Vue.use(elementUi);

Axios.get('./js/serverConfig.json').then((res) => {
  Vue.prototype.baseURL = res.data.baseURL; //接口请求地址
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
})

