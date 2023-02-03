import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Criando uma diretivar personalizada
// Passando valores para suas diretivas.
//Vue.directive('destaque', {
	//bind(el, binding, vnode) { 
		//el.style.backgroundColor = 'lightgreen'
		//el.style.backgroundColor = binding.value

		// Modificando a diretiva com modificadores.
		// Fazendo um estilo com um temporizador.
		
		//let atraso = 0
		//if(binding.modifiers['atrasar']) atraso = 3000

		//setTimeout(() => {
		//	if(binding.arg === 'fundo') {
		//		el.style.backgroundColor = binding.value
		//	} else {
		//		el.style.color = binding.value
		//	}
		//}, atraso)


		// Usando angumentos na diretiva.
		//if(binding.arg === 'fundo') {
		//	el.style.backgroundColor = binding.value
		//} else {
		//	el.style.color = binding.value
		//}
	//}
//})

new Vue({
	render: h => h(App),
}).$mount('#app')
