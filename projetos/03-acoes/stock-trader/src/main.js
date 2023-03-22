import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

//importando para registrar as rotas.
import router from './router'

// Pegando agora já que importou o stocks para store. agora vem o store.
import store from './store/store'

Vue.config.productionTip = false

new Vue({
	router, // Registrado as Rotas.
	store, // Esse store.js são oque os importes que vão fazer funcionar as funções de comprar e venda.
	render: h => h(App),
}).$mount('#app')
