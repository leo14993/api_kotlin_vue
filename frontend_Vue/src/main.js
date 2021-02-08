import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import router  from './routes';
import provedor from './provedor';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR'
import 'bootstrap/dist/css/bootstrap.css';


Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:4000'



Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary:{
    pt_BR: {
      messages: msg
    }
  }
});

new Vue({
  el: '#app',
  router,
  store: provedor,
  render: h => h(App)
})
