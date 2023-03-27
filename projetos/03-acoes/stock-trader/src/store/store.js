// Tem configurar o objeto responsavel pela nossa store, 
import Vue from 'vue'
import Vuex from 'vuex'

// Registrando a que vai carregar os dados de lá do firebase.
import actions from './actions'

// Registrando os stocks que é importando um modules.
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
    // Registrando um modules.
    actions,
    modules: {
        stocks,
        portfolio
    }
})