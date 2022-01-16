import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './style/global.scss'
import echarts from 'echarts'
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
Vue.use(dataV)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
