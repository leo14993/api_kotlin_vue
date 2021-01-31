<template>

  <div>
    <h1 class="centralizado"> {{ titulo }} </h1>


    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtro por parte do titulo">
    {{ filtro }}

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">

          <imagem-responsiva v-meu-transform.animate.reverse="15" :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo" />

        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue'

export default {
  components: {
    'meu-painel' : Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  name: 'app',
  data () {
    return {
      titulo: 'Meu titulo Vue',
      fotos: [],
      filtro: '',
    };
  },

  computed: {
    fotosComFiltro(){
      if(this.filtro){
      /* filtrar */
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
        return[];
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    remove(foto) {
        alert('Remover a foto! ' + foto.titulo);
      }

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


  .centralizado {
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

</style>
