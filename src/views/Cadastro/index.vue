<template>
  <div id="cadastro">
    <b-card-body class="body-padding">
      <b-container>
        <b-row>
          <b-col xl="6" class="mx-auto align">
            <p class="p-font">
              Insira os dados abaixo:
              <br/>
              <span class="text">(*) Campos obrigatórios</span>
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col xl="12" lg="12" md="12" class="mx-auto">
            <b-form v-if="show" action="enviarEmail.php" method="post" @submit="checkForm">
              <b-row>
                <b-col xl="6" lg="6" md="12">
                  <b-form-group class="label" label-size="Default" label-for="email" label="Email*:">
                    <b-form-input required size="sm" type="email" v-model="form.email"/>
                  </b-form-group>
                </b-col>
                <b-col xl="6" lg="6" md="12">
                  <b-form-group class="label" label-size="Default" label-for="cEmail" label="Confirme o email*:">
                    <b-form-input required size="sm" type="email" v-model="form.cEmail" :state="[compareEmail]" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col xl="4" lg="4" md="12">
                  <b-form-group class="label" label-size="Default" label-for="password" label="Senha*:">
                    <b-form-input required size="sm" type="password" v-model="form.password" />
                  </b-form-group>
                </b-col>
                <b-col xl="4" lg="4" md="12">
                  <b-form-group class="label" label-size="Default" label-for="cPassword" label="Confirme a senha*:">
                    <b-form-input required size="sm" type="password" v-model="form.cPassword" :state="[compareSenha]" />
                  </b-form-group>
                </b-col>
                <b-col xl="4" lg="4" md="12">
                  <b-form-group class="label" label-size="Default" label-for="register" label="Tipo de cadastro*:">
                    <b-form-select size="sm" :options="optRegister" required v-model="form.register"/>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group class="label" label-size="Default" id="password-group-2" label="Como conheceu a PaggCerto?*">
                <b-form-textarea required size="sm" id="text-area" v-model="form.tex">
                </b-form-textarea>
              </b-form-group>

              <!--Caso seja Pessoa fisica-->
              <div v-if="form.register === 'Pessoa física'">
                <Fisica />
                <Banco />
              </div>

              <!--Caso seja Pessoa fisica-->
              <div v-else-if="form.register === 'Pessoa jurídica'">
                <Juridica />
                <b-form-group class="label" label-size="Default" label="Fazer o cadastro a partir do:">
                  <input class="vertical-align" type="radio" name="gender" value="male"> CNPJ
                  <input class="vertical-align" type="radio" name="gender" value="female"> CPF<br>
                </b-form-group>
                <Banco />
              </div>

              <input class="termo vertical-align" required type="checkbox" label="Checkbox for following text input">
                Li e aceito os termos de cadastro de cliente
              <br>
              <p v-if="errors.length">
                <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                <ul>
                  <li v-bind:keyv-for="error in errors">{{ error }}</li>
                </ul>
              </p>
              <b-button
                class="margin"
                type="submit"
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
import Banco    from '../DadosBancarios/index.vue';
import Fisica   from '../CadastroFisica/index.vue';
import Juridica from '../CadastroJuridica/index.vue';

export default {
  name: 'Cadastro',
  components: {
    Banco,
    Fisica,
    Juridica
  },
  data () {
    return {
      form: {
        cEmail: '',
        check: [],
        cPassword: '',
        email: '',
        password: '',
        register: null,
        tex: '',
        status: 'not_accept'
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
    compareEmail() {
      return this.form.email != this.form.cEmail ? false : null;
    },
    compareSenha() {
      return this.form.password != this.form.cPassword ? false : null;
    }
  },
  methods: {
    checkForm:  function (e) {
      if (!this.validEmail(this.email)) {
        this.errors.push('Utilize um e-mail válido.');
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../../assets/css/index.sass'
  @import './css/style.sass'
</style>