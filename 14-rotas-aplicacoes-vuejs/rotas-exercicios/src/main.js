import './style.css' // Importando o CSS Global.
import Vue from 'vue'
import App from './App.vue'

// Importa o Router.js para funcionar.
import router from './router'

Vue.config.productionTip = false

new Vue({
  // Registrando o router dentro da instancia do Vue.
  router,
  render: h => h(App),
}).$mount('#app')
