<template>
  <div id="cadastro-email">
    <b-card-body class="body-padding">
      <b-container>
        <b-row>
          <b-col cols="6" class="mx-auto align">
            <b-form v-if="show">
              <b-form-group id="email-group-1" label-size="Default" label="Razão social:" v-model="form.email">
                <b-form-input size="sm" type="text" />
              </b-form-group>

              <b-row>
                <b-col cols="7">
                  <b-form-group id="email-goup-2" label-size="Default" label="Nome fantasia:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group id="password-group-1" label-size="Default" label="CNPJ:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="9">
                  <b-form-group id="password-group-2" label-size="Default" label="Logradouro:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group id="password-group-2" label-size="Default" label="Número:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="9">
                  <b-form-group id="password-group-2" label-size="Default" label="Cidade:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group id="password-group-2" label-size="Default" label="Estado:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="7">
                  <b-form-group id="password-group-2" label-size="Default" label="Complemento:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group id="password-group-2" label-size="Default" label="CEP:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="6">
                  <b-form-group id="password-group-2" label-size="Default" label="Telefone fixo:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group id="password-group-2" label-size="Default" label="Telefone celular:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-form-group id="password-group-2" label-size="Default" label="Ramo de atividade:">
                <b-form-input size="sm" type="text" />
              </b-form-group>
              
              <b-form-group id="password-group-2" label-size="Default" label="Tipo da empresa:">
                <b-form-input size="sm" type="text" />
              </b-form-group>
              
              <b-form-group id="password-group-2" label-size="Default" label="Nome do administrador:">
                <b-form-input size="sm" type="text" />
              </b-form-group>

              <b-row>
                <b-col cols="5">
                  <b-form-group id="password-group-2" label-size="Default" label="CPF:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group id="register" label-size="Default" label="Sexo:">
                      <b-form-select id="register-1"  size="sm"
                          :options="register"
                          required
                          v-model="form.register"/>
                  </b-form-group>
                </b-col>
                <b-col cols="4">
                  <b-form-group id="password-group-2" label-size="Default" label="Data de nascimento:">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-button href="/cadastro/x" variant="primary">Enviar</b-button>
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
      form: {
        email: '',
        password: '',
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


<style lang="sass">
  #cadastro-email
    .body-padding
      padding: 100px
</style>