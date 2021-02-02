<template>

  <div class="corpo">
    <li>
      <a
      href="#"
      class="navbar-link"
      @click.prevent="efeturarLogout"
      >Logout</a>
    </li>

    <meu-menu :rotas="routes"/>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    'meu-menu' : Menu
  },

  data() {
    return {
      routes: routes.filter(route => route.menu)
    }
  },

  methods: {
    efeturarLogout (){
      localStorage.removeItem('token')
      this.$router.push({ name: 'login' })
    }
  }

}

</script>

<style lang="scss">

  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .pagina-enter, .pagina-leave-active {
    opacity: 0;
  }
  .pagina-enter-active, .paginae-leave-active{
    transition: opacity .5s ;
  }

</style>
