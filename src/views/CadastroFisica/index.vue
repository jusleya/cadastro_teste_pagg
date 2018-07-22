<template>
  <div id="cadastro-juridica">
    <b-card-body class="body-padding">
      <b-container>
        <b-row>
          <b-col cols="6" class="mx-auto">
            <b-form v-if="show">
              <b-form-group class="label" label-size="Default" label="Nome:">
                <b-form-input size="sm" type="text" v-model="form.name" />
              </b-form-group>

              <b-row>
                <b-col cols="4">
                  <b-form-group class="label" label-size="Default" label="CPF:">
                    <b-form-input size="sm" type="text" v-model="form.cpf" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group class="label" label-size="Default" label="Sexo:">
                      <b-form-select size="sm"
                          :options="sex"
                          required
                          v-model="form.sex"/>
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group class="label" label-size="Default" label="Data de nascimento:">
                    <b-form-input size="sm" type="text" v-model="form.date" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="9">
                  <b-form-group class="label" label-size="Default" label="Logradouro:">
                    <b-form-input size="sm" type="text" v-model="form.address" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group class="label" label-size="Default" label="Número:">
                    <b-form-input size="sm" type="text" v-model="form.number" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="9">
                  <b-form-group class="label" label-size="Default" label="Cidade:">
                    <b-form-input size="sm" type="text" v-model="form.city" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group class="label" label-size="Default" label="Estado:">
                    <b-form-input size="sm" type="text" v-model="form.state" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="7">
                  <b-form-group class="label" label-size="Default" label="Complemento:">
                    <b-form-input size="sm" type="text" v-model="form.complement" />
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group class="label" label-size="Default" label="CEP:">
                    <b-form-input size="sm" type="text" v-model="form.cep" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="6">
                  <b-form-group class="label" label-size="Default" label="Telefone fixo:">
                    <b-form-input size="sm" type="text" v-model="form.phone" />
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group class="label" label-size="Default" label="Telefone celular:">
                    <b-form-input size="sm" type="text" v-model="form.cell" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-form-group class="label" label-size="Default" label="Ramo de atividade:">
                <b-form-input size="sm" type="text" v-model="form.activity" />
              </b-form-group>

              <b-button href="/cadastro/dados-bancarios" variant="primary">Enviar</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </b-card-body>
  </div>
</template>

<script>
export default {
    name: 'CadastroFisica',
  data () {
    return {
      form: {
        address: '',
        number: '',
        city: '',
        state: '',
        complement: '',
        cep: '',
        phone: '',
        cell: '',
        activity: '',
        name: '',
        cpf: '',
        sex: null,
        date: ''
      },
      sex: [
        { text: 'Selecione', value: null },
        'Feminino', 'Masculino'
      ],
      show: true
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../../assets/css/index.sass'
</style>