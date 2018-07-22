<template>
  <div id="cadastro-juridica">
    <b-card-body class="body-padding">
      <b-container>
        <b-row>
          <b-col cols="6" class="mx-auto">
            <b-form v-if="show">
              <b-row>
                <b-col cols="5">
                  <b-form-group class="label" label-size="Default" label="Nome:" v-model="form.name">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="4">
                  <b-form-group class="label" label-size="Default" label="CPF:" v-model="form.cpf">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="6">
                  <b-form-group class="label" label-size="Default" label="Banco:" v-model="form.address">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group class="label"  label-size="Default" label="Tipo de conta:">
                      <b-form-select size="sm"
                          :options="type"
                          required
                          v-model="form.type"/>
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="9">
                  <b-form-group class="label" label-size="Default" label="Cidade:" v-model="form.city">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group class="label" label-size="Default" label="Estado:" v-model="form.state">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="3">
                  <b-form-group class="label" label-size="Default" label="Agência:" v-model="form.address">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group class="label" label-size="Default" label="Conta:" v-model="form.address">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="4">
                  <b-form-group class="label" label-size="Default" label="Variação:" v-model="form.address">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-button href="" variant="primary">Enviar</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </b-card-body>
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
        state: '',
        complement: '',
        cep: '',
        phone: '',
        cell: '',
        activity: '',
        name: '',
        cpf: '',
        type: null,
        date: ''
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