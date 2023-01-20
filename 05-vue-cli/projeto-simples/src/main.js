import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({ 
  //el: '#app', // Tanto faz o el: com o #app para rendezirar a pagina.
  render: h => h(App), // Porém ainda sim tem que usar o el: ou mount:(app) para poder renderizar. 
}).$mount('#app')
