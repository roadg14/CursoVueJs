// Tem configurar o objeto responsavel pela nossa store, 
import Vue from 'vue'
import Vuex from 'vuex'

// Registrando os stocks que é importando um modules.
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
    // Registrando um modules. 
    modules: {
        stocks,
        portfolio
    }
})