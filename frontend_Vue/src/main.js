import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'  // serve para não precisar usar /#/endereco
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
