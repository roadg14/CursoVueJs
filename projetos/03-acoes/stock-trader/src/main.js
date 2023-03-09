import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

//importando para registrar as rotas.
import router from './router'

Vue.config.productionTip = false

new Vue({
	router, // Registrado a Rota.
	render: h => h(App),
}).$mount('#app')
