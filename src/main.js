import Vue from 'vue'
import router from './routes'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Router from 'vue-router';
import BootstrapVue from './routes';
import List from './components/List'
import Item from './components/Item'
Vue.use(BootstrapVue)
Vue.use(Router)
Vue.config.productionTip = false

// const router = new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'List',
//       component: List
//     },
//     {
//       path: '/:item',
//       name: 'Item',
//       component: Item
//     }
//   ]
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
