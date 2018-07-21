<template>
  <div id="home">
    <b-card-body class="body-padding">
      <b-container>
        <b-row>
          <b-col cols="6" class="mx-auto">
            <p class="p-font">Bem-vindo ao cadastro de clientes da empresa PaggCerto</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6" class="mx-auto">
            <b-button href="/cadastro-email">Cadastre-se</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-card-body>
  </div>
</template>

<script>
export default {
    name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>


<style lang="sass" scoped>
  @import './css/style.sass'
</style>
