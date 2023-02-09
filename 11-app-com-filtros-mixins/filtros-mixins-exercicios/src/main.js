import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Filtro Global e Como Encadear Múltiplos Filtros.
// Uma função de reverter o nome ou numero.
Vue.filter('inverter', function(valor) { // Uma função de reverter o nome ou numero.
	return valor.split('').reverse().join('')
})

Vue.mixin({
	data() {
		return {
			global: 'Estou no Mixin Global'
		}
	},
	created() {
		console.log('Created - Global Mixin!')
	}
})

new Vue({
	render: h => h(App),
	created() {
        console.log('Created - Vue Instance!')
    },
}).$mount('#app')
