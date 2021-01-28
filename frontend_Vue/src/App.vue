<template>

  <div class="corpo">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cadastro">Cadastro</a></li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>

export default {


}

</script>

<style lang="scss">

  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

</style>
