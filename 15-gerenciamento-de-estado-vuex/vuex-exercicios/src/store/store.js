import Vue from 'vue'
import Vuex from 'vuex'

// Modularizando o Gerenciador de Estado
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

// Usando os arquivos Separados.
import * as getters from './getters.js'

Vue.use(Vuex)

// Store agora é a loja. tirado os produtos de lá no Resumo.vue
export default new Vuex.Store({ // Store é uma função que está dentro do Vuex.
    // Usando os arquivos Separados.
    state: {
        name: 'Lorem',
        surname: 'Ipsum'
    },
    getters,
    modules: { 
        carrinho, parametros 
    }
})