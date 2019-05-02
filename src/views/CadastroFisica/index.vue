<template>
  <div id="cadastro-juridica">
    <b-row>
      <b-col xl="5" lg="5" md="12">
        <b-form-group class="label" label-size="Default" label="Nome*:">
          <b-form-input required size="sm" type="text" v-model="form.name" />
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3" md="12">
        <b-form-group class="label" label-size="Default" label="CPF*:">
          <TheMask :mask="['###.###.###-##']" v-model="form.cpf"/>
        </b-form-group>
      </b-col>
      <b-col xl="2" lg="2" md="12">
        <b-form-group class="label" label-size="Default" label="Sexo*:">
            <b-form-select size="sm"
              :options="optSex"
              required
              v-model="form.sex"
            />
        </b-form-group>
      </b-col>
      <b-col xl="2" lg="2" md="12">
        <b-form-group class="label" label-size="Default" label="Data de nasc.*:">
          <b-form-input required size="sm" type="date" v-model="form.date" />
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3" md="12">
        <b-form-group class="label" label-size="Default" label="CEP*:">
          <b-form-input required size="sm" type="number" v-model="form.cep" />
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3" md="12">
        <b-form-group class="label" label-size="Default" label="Bairro:">
          <b-form-input size="sm" type="number" v-model="form.bairro" />
        </b-form-group>
      </b-col>
      <b-col xl="6" lg="6" md="12">
        <b-form-group class="label" label-size="Default" label="Endereço*:">
          <b-form-input required size="sm" type="text" v-model="form.address" />
        </b-form-group>
      </b-col>
      <b-col xl="2" lg="2" md="12">
        <b-form-group class="label" label-size="Default" label="Número*:">
          <b-form-input required size="sm" type="number" v-model="form.number" />
        </b-form-group>
      </b-col>
      <b-col xl="4" lg="4" md="12">
        <b-form-group class="label" label-size="Default" label="Complemento:">
          <b-form-input size="sm" type="text" v-model="form.complement" />
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3" md="12">
        <b-form-group class="label" label-size="Default" label="Estado*:">
          <b-form-select size="sm"
            :options="optState"
            required
            v-model="form.state"
          />
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3" md="12">
        <b-form-group class="label" label-size="Default" label="Cidade*:">
          <b-form-input required size="sm" type="text" v-model="form.city" />
        </b-form-group>
      </b-col>
      <b-col xl="4" lg="4" md="12">
        <b-form-group class="label" label-size="Default" label="Telefone celular*:">
          <TheMask :mask="['(##) # ####-####']" v-model="form.cell" />
        </b-form-group>
      </b-col>
      <b-col xl="4" lg="4" md="12">
        <b-form-group class="label" label-size="Default" label="Telefone fixo:">
          <TheMask :mask="['(##) # ####-####']" v-model="form.phone" />
        </b-form-group>
      </b-col>
      <b-col xl="4" lg="4" md="12">
        <b-form-group class="label" label-size="Default" label="Ramo de atividade*:">
          <b-form-input required size="sm" type="text" v-model="form.activity" />
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {TheMask} from 'vue-the-mask';

export default {
  name: 'CadastroFisica',
  components: {TheMask},

  data () {
    return {
      form: {
        address: '',
        number: '',
        city: '',
        state: null,
        complement: '',
        bairro: '',
        cep: '',
        phone: '',
        cell: '',
        activity: '',
        name: '',
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
      if(this.form.address !== '' && this.form.number !== '' && this.form.city !== '' &&
        this.form.state !== null && this.form.cep !== '' && this.form.phone !== '' &&
        this.form.activity !== '' && this.form.name !== '' && this.form.cpf !== '' &&
        this.form.sex !== null && this.form.date !== ''){
        return '/cadastro/dados-bancarios'
      }
      else return '/cadastro/fisica'
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../../assets/css/index.sass'
</style>