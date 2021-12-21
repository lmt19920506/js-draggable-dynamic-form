import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './style/var.scss'

import formDesign from '../packages/index'
Vue.use(formDesign)

Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
