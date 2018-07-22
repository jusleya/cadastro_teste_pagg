<template>
  <div id="cadastro-email">
    <b-card-body class="body-padding">
      <b-container>
        <b-row>        
          <b-col cols="6" class="mx-auto align">
            <p class="p-font">Insira os dados abaixo:</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6" class="mx-auto">
            <b-form v-if="show">
              <b-form-group class="label" label-size="Default" id="register"
                    label="Tipo de cadastro:">
                  <b-form-select size="sm" id="register-1"
                      :options="register"
                      required
                      v-model="form.register"/>
              </b-form-group>
              <b-form-group class="label" label-size="Default" id="email-group-1" label="Email:" v-model="form.email">
                <b-form-input size="sm" type="email" />
              </b-form-group>
              <b-form-group class="label" label-size="Default" id="email-goup-2" label="Confirme o email:">
                <b-form-input size="sm" type="email" />
              </b-form-group>
              <b-form-group class="label" label-size="Default" id="password-group-1" label="Senha:">
                <b-form-input size="sm" type="password" />
              </b-form-group>
              <b-form-group class="label" label-size="Default" id="password-group-2" label="Confirme a senha:">
                <b-form-input size="sm" type="password" />
              </b-form-group>
              <b-form-group class="label" label-size="Default" id="password-group-2" label="Como conheceu a PaggCerto?">
                <b-form-textarea size="sm" id="textarea1"
                      v-model="text"
                      :rows="3"
                      :max-rows="6">
                </b-form-textarea>
                <pre class="mt-3">{{ text }}</pre>
              </b-form-group>
              <b-button href="/cadastro/juridica" variant="primary" v-if="form.register === 'Pessoa jurídica'">Enviar</b-button>
              <b-button href="/cadastro/" variant="primary" v-if="form.register === 'Pessoa física'">Enviar</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </b-card-body>
  </div>
</template>

<script>
export default {
    name: 'Cadastro',
  data () {
    return {
      form: {
        email: '',
        password: '',
        text: '',
        register: null
      },
      register: [
        { text: 'Selecione', value: null },
        'Pessoa física', 'Pessoa jurídica'
      ],
      show: true
    }
  }
}
</script>


<style lang="sass" scoped>
  @import './css/style.sass'
</style>