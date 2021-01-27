<template>

  <div class="corpo">
    <h1 class="centralizado"> {{ titulo }} </h1>
    <label>
      <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtro por parte do titulo">

    </label>
    {{ filtro }}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos">
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {
  components: {
    'meu-painel' : Painel
  },

  name: 'app',
  data () {
    return {
      titulo: 'Meu titulo Vue',
      fotos: [],
      filtro: '',
    };
  },

  created() {

    let url = 'http://localhost:4000/v1/fotos';
    this.$http.get(url)
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
    },
}

</script>

<style lang="scss">

  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado {
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva{
    width: 100%;
  }

</style>
