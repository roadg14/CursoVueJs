import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

//importando para registrar as rotas.
import router from './router'
// Pegando agora já que importou o stocks para store. agora vem o store
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})

new Vue({
	router, // Registrado a Rota.
	store, 
	render: h => h(App),
}).$mount('#app')
