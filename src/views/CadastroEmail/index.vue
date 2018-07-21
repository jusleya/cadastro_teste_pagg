<template>
  <div id="cadastro-email">
    <b-card-body class="body-padding">
      <b-container>
        <b-row align-v="center">
          <b-col cols="4"></b-col>
          <b-col cols="4">
            <b-form>
              <b-form-group label="email" label-for="exampleInput1">
                <b-form-input type="email" placeholder="email aqui" />
              </b-form-group>
              <b-form-group label="confirmar email" label-for="exampleInput1">
                <b-form-input type="email" placeholder="email aqui" />
              </b-form-group>
              <b-form-group label="senha" label-for="exampleInput1">
                <b-form-input type="password" placeholder="senha" />
              </b-form-group>
              <b-form-group label="confirmar senha" label-for="exampleInput1">
                <b-form-input type="password" placeholder="senha" />
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </b-card-body>
  </div>
</template>

<script>
export default {
    name: 'CadastroEmail',
  data () {
    return {
      
    }
  }
}
</script>


<style lang="sass">
  #cadastro-email
    .body-padding
      padding: 100px
</style>
