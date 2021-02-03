import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import NovoUsuario from './components/novo_usuario/NovoUsuario.vue';
import Login from './components/login/Login.vue';
import Gerentes from './views/Gerentes.vue';

export const routes = [
  {path: '', name: 'home',component: Home, titulo: 'Home', menu: true },
  {path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true  },
  {path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false  },
  {path: '/novo_usuario', name: 'novo.usuario', component: NovoUsuario, titulo: 'Novo Usuario', menu: true  },
  {path: '/login', name: 'login', component: Login, titulo: 'Login', menu: true  },
  {path: '/gerentes', name: 'gerentes', component: Gerentes, titulo: 'Gerentes', menu: true  },
  {path: '*', component: Home, menu: false },

];
