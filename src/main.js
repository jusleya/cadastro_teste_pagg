import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
//Components
import Header from './components/Header/index.vue'
//Views
import Home from './views/Home/index.vue'
import Cadastro from './views/Cadastro/index.vue'
import CadastroJuridica from './views/CadastroJuridica/index.vue'
import CadastroFisica from './views/CadastroFisica/index.vue'
import DadosBancarios from './views/DadosBancarios/index.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [,
  {path: '/',
    components: {
      header: Header,
      content: Home
    },
    props: {header: true, content: false}
  },

  {path: '/cadastro',
    components: {
      header: Header,
      content: Cadastro
    },
    props: {header: true, content: false}
  },

  {path: '/cadastro/juridica',
    components: {
      header: Header,
      content: CadastroJuridica
    },
    props: {header: true, content: false}
  },

  {path: '/cadastro/fisica',
    components: {
      header: Header,
      content: CadastroFisica
    },
    props: {header: true, content: false}
  },

  {path: '/cadastro/dados-bancarios',
    components: {
      header: Header,
      content: DadosBancarios
    },
    props: {header: true, content: false}
  }
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
