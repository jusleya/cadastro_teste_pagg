<template>
  <div id="cadastro-juridica">
    <b-card-body class="body-padding">
      <b-container>
        <b-row>
          <b-col cols="6" class="mx-auto">
            <b-form v-if="show">
              <b-form-group class="label" label-size="Default" label="Razão social:" v-model="form.reason">
                <b-form-input size="sm" type="text" />
              </b-form-group>

              <b-row>
                <b-col cols="7">
                  <b-form-group class="label" label-size="Default" label="Nome fantasia:" v-model="form.name">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group class="label" label-size="Default" label="CNPJ:" v-model="form.cnpj">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="9">
                  <b-form-group class="label" label-size="Default" label="Logradouro:" v-model="form.address">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group class="label" label-size="Default" label="Número:" v-model="form.number">
                    <b-form-input size="sm" type="text" />
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
                <b-col cols="7">
                  <b-form-group class="label" label-size="Default" label="Complemento:" v-model="form.complement">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group class="label" label-size="Default" label="CEP:" v-model="form.cep">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="6">
                  <b-form-group class="label" label-size="Default" label="Telefone fixo:" v-model="form.phone">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group class="label" label-size="Default" label="Telefone celular:" v-model="form.cell">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-form-group class="label" label-size="Default" label="Ramo de atividade:" v-model="form.activity">
                <b-form-input size="sm" type="text" />
              </b-form-group>
              
              <b-form-group class="label" label-size="Default" label="Tipo da empresa:" v-model="form.type">
                <b-form-input size="sm" type="text" />
              </b-form-group>
              
              <b-form-group class="label" label-size="Default" label="Nome do administrador:" v-model="form.nameAdm">
                <b-form-input size="sm" type="text" />
              </b-form-group>

              <b-row>
                <b-col cols="4">
                  <b-form-group class="label" label-size="Default" label="CPF:" v-model="form.cpf">
                    <b-form-input size="sm" type="text" />
                  </b-form-group>
                </b-col>
                <b-col cols="3">
                  <b-form-group class="label"  label-size="Default" label="Sexo:">
                      <b-form-select size="sm"
                          :options="sex"
                          required
                          v-model="form.sex"/>
                  </b-form-group>
                </b-col>
                <b-col cols="5">
                  <b-form-group class="label" label-size="Default" label="Data de nascimento:" v-model="form.date">
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