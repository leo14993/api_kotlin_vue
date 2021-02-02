import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import NovoUsuario from './components/novo_usuario/NovoUsuario.vue';

export const routes = [
  {path: '', name: 'home',component: Home, titulo: 'Home', menu: true },
  {path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true  },
  {path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false  },
  {path: '/novo-usuario', name: 'altera', component: NovoUsuario, titulo: 'Novo Usuario', menu: true  },
  {path: '*', component: Home, menu: false },

];
