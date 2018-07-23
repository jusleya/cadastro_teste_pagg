<template>
  <div id="cadastro-juridica">
    <b-row>
      <b-col cols="6">
        <b-form-group required class="label" label-size="Default" label="Banco*:">
          <b-form-input size="sm" type="text" v-model="form.bank" />
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group required class="label" label-size="Default" label="Tipo de conta*:">
            <b-form-select size="sm"
                :options="type"
                required
                v-model="form.type"/>
        </b-form-group>
      </b-col>
    </b-row>
    
    <b-row>
      <b-col cols="3">
        <b-form-group required class="label" label-size="Default" label="Agência*:">
          <b-form-input size="sm" type="number" v-model="form.agency" />
        </b-form-group>
      </b-col>
      <b-col cols="5">
        <b-form-group required class="label" label-size="Default" label="Conta*:">
          <b-form-input size="sm" type="number" v-model="form.account" />
        </b-form-group>
      </b-col>
      <b-col cols="4">
        <b-form-group class="label" label-size="Default" label="Variação:">
          <b-form-input size="sm" type="number" v-model="form.variation" />
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: 'DadosBancarios',
  data () {
    return {
      form: {
        address: '',
        number: '',
        city: '',
        date: '',
        type: null
      },
      type: [
        { text: 'Selecione', value: null },
        'Corrente', 'Poupança'
      ],
      show: true
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../../assets/css/index.sass'
</style>