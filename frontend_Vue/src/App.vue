<template>
  <div id="app">
    <!-- ul>li*2>img -->
    <h1> {{ titulo }} </h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Meu tiluto Vue',
      fotos: [],
    };
  },

  created() {

    alert('Crei o componente');
    let url = 'http://localhost:4000/v1/fotos';
    console.log("url aqui caralio");
    console.log(url);
    let promise = this.$http.get(url);
    promise.then(res => {

      res.json().then(fotos => this.fotos = fotos);
    });
  },
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
