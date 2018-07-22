<template>
  <div id="cadastro">
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
              <b-form-group class="label" label-size="Default" label="Tipo de cadastro:">
                <b-form-select size="sm"
                    :options="optRegister"
                    required
                    v-model="form.register"/>
              </b-form-group>
              <b-form-group class="label" label-size="Default" label="Email:">
                <b-form-input required size="sm" type="email" v-model="form.email"/>
              </b-form-group>
              <b-form-group class="label" label-size="Default" id="email-goup-2" label="Confirme o email:">
                <b-form-input required size="sm" type="email" v-model="form.cEmail" />
              </b-form-group>
              <b-form-group class="label" label-size="Default" id="password-group-1" label="Senha:">
                <b-form-input required size="sm" type="password" v-model="form.password" />
              </b-form-group>
              <b-form-group class="label" label-size="Default" id="password-group-2" label="Confirme a senha:">
                <b-form-input required size="sm" type="password" v-model="form.cPassword" />
              </b-form-group>
              <!--b-form-group class="label" label-size="Default" id="password-group-2" label="Como conheceu a PaggCerto?">
                <b-form-textarea required size="sm" id="textarea1"
                      v-model="text">
                </b-form-textarea>
                <pre class="mt-3">{{ text }}</pre>
              </b-form-group-->
              <b-button
                :disabled="!formIsValid"
                :href="this.form.register === 'Pessoa física' ? '/cadastro/fisica' :
                       this.form.register === 'Pessoa jurídica' ? 'cadastro/juridica' :
                        '/cadastro'"
                variant="primary">
                  Enviar
              </b-button>
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
        cEmail: '',
        password: '',
        cPassword: '',
        register: null
      },
      optRegister: [
        { text: 'Selecione', value: null },
        'Pessoa física', 'Pessoa jurídica'
      ],
      show: true
    }
  },
  computed: {
    formIsValid() {
      return
        this.form.email !== '' &&
        this.form.cEmail !== '' &&
        this.form.password !== '' &&
        this.form.cPassword !== '' &&
        this.form.register !== null
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../../assets/css/index.sass'
</style>