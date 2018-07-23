<template>
  <div id="cadastro-juridica">
    <b-card-body class="body-padding">
      <b-container>
        <b-row>
          <b-col cols="6" class="mx-auto">
            <b-form v-if="show">
              <b-form-group class="label" label-size="Default" label="Razão social*:">
                <b-form-input size="sm" type="text" v-model="form.reason" />
              </b-form-group>

              <b-row>
                <b-col cols="7">
                  <b-form-group class="label" label-size="Default" label="Nome fantasia:*">
                    <b-form-input size="sm" type="text" v-model="form.name" />
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group class="label" label-size="Default" label="CNPJ*:">
                    <b-form-input size="sm" type="number" v-model="form.cnpj" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="9">
                  <b-form-group class="label" label-size="Default" label="Logradouro*:">
                    <b-form-input size="sm" type="text" v-model="form.address" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group class="label" label-size="Default" label="Número*:">
                    <b-form-input size="sm" type="number" v-model="form.number" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="9">
                  <b-form-group class="label" label-size="Default" label="Cidade*:">
                    <b-form-input size="sm" type="text" v-model="form.city" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group class="label" label-size="Default" label="Estado*:">
                    <b-form-select size="sm"
                          :options="optState"
                          required
                          v-model="form.state"/>
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
                  <b-form-group class="label" label-size="Default" label="CEP*:">
                    <b-form-input size="sm" type="number" v-model="form.cep" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="6">
                  <b-form-group class="label" label-size="Default" label="Telefone fixo*:">
                    <b-form-input size="sm" type="tel" v-model="form.phone" />
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group class="label" label-size="Default" label="Telefone celular:">
                    <b-form-input size="sm" type="tel" v-model="form.cell" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-form-group class="label" label-size="Default" label="Ramo de atividade*:">
                <b-form-input size="sm" type="text" v-model="form.activity" />
              </b-form-group>
              
              <b-form-group class="label" label-size="Default" label="Tipo da empresa*:">
                <b-form-input size="sm" type="text" v-model="form.type" />
              </b-form-group>
              
              <b-form-group class="label" label-size="Default" label="Nome do administrador*:">
                <b-form-input size="sm" type="text" v-model="form.nameAdm" />
              </b-form-group>

              <b-row>
                <b-col cols="4">
                  <b-form-group class="label" label-size="Default" label="CPF*:">
                    <b-form-input size="sm" type="number" v-model="form.cpf" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group class="label"  label-size="Default" label="Sexo*:">
                      <b-form-select size="sm"
                          :options="optSex"
                          required
                          v-model="form.sex"/>
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group class="label" label-size="Default" label="Data de nasc.*:">
                    <b-form-input size="sm" type="date" v-model="form.date" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-button :href="link" variant="primary">Enviar</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </b-card-body>
  </div>
</template>

<script>
export default {
    name: 'CadastroJuridica',
  data () {
    return {
      form: {
        reason: '',
        name: '',
        cnpj: '',
        address: '',
        number: '',
        city: '',
        state: '',
        complement: '',
        cep: '',
        phone: '',
        cell: '',
        activity: '',
        type: '',
        nameAdm: '',
        cpf: '',
        sex: null,
        date: ''
      },
      optSex: [
        { text: 'Selecione', value: null },
        'Feminino', 'Masculino'
      ],
      optState: [
        { text: 'Selecione', value: null },
        'AC', 'AL', 'AM', 'AP', 'BA', 'CE',
        'DF', 'ES', 'GO', 'MA', 'MG', 'MS',
        'MT', 'PA', 'PB', 'PE', 'PI', 'PR',
        'RJ', 'RN', 'RO', 'RR', 'RS', 'SC',
        'SE', 'SP', 'TO'
      ],
      show: true
    }
  },
  computed: {
    link() {
      if(this.form.address != '' && this.form.number != '' && this.form.city != '' &&
        this.form.state != null && this.form.cep != '' && this.form.cel != '' &&
        this.form.activity != '' && this.form.name != '' && this.form.cpf != '' &&
        this.form.sex != null && this.form.date != ''){
        return '/cadastro/dados-bancarios'
      }
      else return '/cadastro/juridica'
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../../assets/css/index.sass'
</style>