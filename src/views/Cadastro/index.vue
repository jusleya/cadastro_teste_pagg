<template>
  <div id="cadastro">
    <b-card-body class="body-padding">
      <b-container>
        <b-row>
          <b-col cols="6" class="mx-auto align">
            <p class="p-font">
              Insira os dados abaixo:
              <br/>
              <span class="text">(*) Campos obrigatórios</span>
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6" class="mx-auto">
            <b-form action="#" v-if="show">
              <b-form-group class="label" label-size="Default" label-for="register" label="Tipo de cadastro*:">
                <b-form-select size="sm"
                    :options="optRegister"
                    required
                    v-model="form.register"/>
              </b-form-group>
              <b-form-group class="label" label-size="Default" label-for="email" label="Email*:">
                <b-form-input required size="sm" type="email" v-model="form.email"/>
              </b-form-group>
              <b-form-group class="label" label-size="Default" label-for="cEmail" label="Confirme o email*:">
                <b-form-input required size="sm" type="email" v-model="form.cEmail" />
              </b-form-group>
              <b-form-group class="label" label-size="Default" label-for="password" label="Senha*:">
                <b-form-input required size="sm" type="password" v-model="form.password" />
              </b-form-group>
              <b-form-group class="label" label-size="Default" label-for="cPassword" label="Confirme a senha*:">
                <b-form-input required size="sm" type="password" v-model="form.cPassword" />
              </b-form-group>
              <b-form-group class="label" label-size="Default" id="password-group-2" label="Como conheceu a PaggCerto?*">
                <b-form-textarea required size="sm" id="text-area" v-model="form.tex">
                </b-form-textarea>
              </b-form-group>
              <b-button
                :href="link"
                variant="primary">
                  Enviar
              </b-button>
              <p v-if="!this.errors">{{errors}}</p>
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
        tex: '',
        register: null
      },
      optRegister: [
        { text: 'Selecione', value: null },
        'Pessoa física', 'Pessoa jurídica'
      ],
      errors: [],
      show: true
    }
  },
  computed: {
    link() {
      if(this.form.email != '' && this.form.cEmail != '' && this.form.password != '' && this.form.cPassword != '' && this.form.register != null){
        if(this.form.email == this.form.cEmail || this.form.password == this.form.cPassword){
          if(this.form.password == this.form.cPassword || this.form.email == this.form.cEmail){
            if(this.form.register === 'Pessoa física')
              return '/cadastro/fisica';
            elseif(this.form.register === 'Pessoa jurídica')
              return '/cadastro/juridica';
          }
        }
        else return '/cadastro';
      }
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../../assets/css/index.sass'
  @import './css/style.sass'
</style>