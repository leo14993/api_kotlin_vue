<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-bytebank">

      <a class="navbar-brand" href="#">ByteBank</a>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <MenuLogado v-if="usuarioEstaLogado"/>
        <MenuDesogado v-else/>
      </div>

    </nav>

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

      return Boolean(this.$store.state.token)
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
