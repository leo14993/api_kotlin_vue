import Vue from 'vue'
import VueRouter from 'vue-router';
import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import NovoUsuario from './components/novo_usuario/NovoUsuario.vue';
import Login from './components/login/Login.vue';
import Gerentes from './views/Gerentes.vue';


import provedor from './provedor'

Vue.use(VueRouter);

const routes = [
  {path: '', name: 'home',component: Home, titulo: 'Home', menu: true },
  {path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
  {path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false  },
  {path: '/novo_usuario', name: 'novo.usuario', component: NovoUsuario, titulo: 'Novo Usuario', menu: true, meta: { publica: true}  },
  {path: '/login', name: 'login', component: Login, titulo: 'Login', menu: true, meta: { publica: true}  },
  {path: '/gerentes', name: 'gerentes', component: Gerentes, titulo: 'Gerentes', menu: true  },
  {path: '*', component: Home, menu: false },

];

const router = new VueRouter({
  routes,
  mode: 'history'  // serve para não precisar usar /#/endereco
})


router.beforeEach((routeTo, routeFrom, next) => {

  if (!routeTo.meta.publica && !provedor.state.token) {
    return next({ path: '/login' })
  }
  next()
})

export default router
