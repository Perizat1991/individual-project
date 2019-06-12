import Vue from 'vue'
import router from './routes'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(Router)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
