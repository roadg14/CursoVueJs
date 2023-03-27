import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

// Importando o Axios que vai ser usando para armazenamento no Firebase - ou Outros.
import './plugins/axios'

//importando para registrar as rotas.
import router from './router'
// Pegando agora já que importou o stocks para store. agora vem o store.
import store from './store/store'

Vue.config.productionTip = false

// Aplicando Filtro de Valor Monetário no Saldo
Vue.filter('currency', value => {
	return 'R$' + value.toLocaleString()
})

new Vue({
	router, // Registrado as Rotas.
	store, // Esse store.js são oque os importes que vão fazer funcionar as funções de comprar e venda.
	render: h => h(App),
}).$mount('#app')
