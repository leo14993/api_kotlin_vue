<template>
<div>

<nav class="navbar navbar-expand-lg navbar-bytebank">

    <a class="navbar-brand" href="#">ByteBank</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <button ></button>
        <MenuLogado v-if="usuarioEstaLogado"/>
        <MenuDesogado v-else/>

      </div>
</nav>
<h2> usuario ta logado? {{ usuarioEstaLogado }} </h2>
  <!-- <nav>
    <ul>
      <li v-for="rota in rotas">
        <router-link :to="rota.path ? rota.path : '/' ">
          {{ rota.titulo }}
        </router-link>
      </li>
    </ul>
  </nav> -->
</div>

</template>

<script>
import MenuLogado from './MenuLogado.vue'
import MenuDesogado from './MenuDeslogado.vue'

export default {
  components: {
    MenuLogado,
    MenuDesogado
  },
  computed: {
    usuarioEstaLogado () {

      return Boolean(sessionStorage.getItem('token'))
    }
  },

}
</script>

<style scoped>

  .navbar {
  background: #27ae60;
  }
  .nav-item {
    margin: 15px;
  }
  .navbar-bytebank a {
    color: #fff;
  }
  .navbar-bytebank a:hover {
    color: #000;
  }

</style>
