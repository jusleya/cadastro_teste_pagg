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
          <b-col cols="12" class="mx-auto">
            <b-form v-if="show" action="enviarEmail.php" method="post">
              <b-row>
                <b-col cols="6">
                  <b-form-group class="label" label-size="Default" label-for="email" label="Email*:">
                    <b-form-input required size="sm" type="email" v-model="form.email"/>
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group class="label" label-size="Default" label-for="cEmail" label="Confirme o email*:">
                    <b-form-input required size="sm" type="email" v-model="form.cEmail" :state="[compareEmail]" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="4">
                  <b-form-group class="label" label-size="Default" label-for="password" label="Senha*:">
                    <b-form-input required size="sm" type="password" v-model="form.password" />
                  </b-form-group>
                </b-col>
                <b-col cols="4">
                  <b-form-group class="label" label-size="Default" label-for="cPassword" label="Confirme a senha*:">
                    <b-form-input required size="sm" type="password" v-model="form.cPassword" />
                  </b-form-group>
                </b-col>
                <b-col cols="4">
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
  }
}
</script>


<style lang="sass" scoped>
  @import '../../assets/css/index.sass'
  @import './css/style.sass'
</style>