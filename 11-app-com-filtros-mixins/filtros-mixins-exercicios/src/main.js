import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Filtro Global e Como Encadear Múltiplos Filtros.
// Uma função de reverter o nome ou numero.
Vue.filter('inverter', function(valor) { // Uma função de reverter o nome ou numero.
	return valor.split('').reverse().join('')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
