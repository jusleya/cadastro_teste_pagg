import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import * as firebase from 'firebase'
import App from './App.vue'
//Components
import Header from './components/Header/index.vue'
//Views
import Home from './views/Home/index.vue'
import Cadastro from './views/Cadastro/index.vue'

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
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCde3iNMmqr4aaFhU7JtodhXfwFjCIOxOQ',
      authDomain: 'cadastro-cliente-pagg.firebaseapp.com',
      databaseURL: 'https://cadastro-cliente-pagg.firebaseio.com',
      projectId: 'cadastro-cliente-pagg',
      storageBucket: 'cadastro-cliente-pagg.appspot.com'
    })
  }
})
