import Vue from 'vue'
import App from './App.vue'
import VTabs from 'vue-nav-tabs'
import './global-variadles'
import router from './router'
import  './store'
import  './data/company'



Vue.use(VTabs);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
