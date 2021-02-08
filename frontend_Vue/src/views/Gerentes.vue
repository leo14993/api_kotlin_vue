<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente v-for="gerente in gerentes" :key="gerente.numero" :gerente="gerente" />
    </div>
    <button class="btn btn-danger" @click="efetuarLogout">Sair</button>
  </div>
</template>

<script>
import Gerente from '../components/gerentes/Gerente.vue'
import users from '../connection/users'
import { logoutMixin } from '../mixins.js'

export default {
  mixins: [logoutMixin],
  components: {
    Gerente
  },
  data() {
    return {
      gerentes: []
    }
  },
  mounted () {
    users.get('gerentes')
        .then(response => this.gerentes = response.data)
        .catch(erro => console.log(erro))
  }
}
</script>

<style>

</style>
