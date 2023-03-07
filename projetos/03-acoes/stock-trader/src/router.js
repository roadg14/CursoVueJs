import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue' // Home que vai mostrar o saldo
import Portfolio from './components/portfolio/Portfolio.vue' // Portfolio que é tudo que o usuario já comprou
import Stocks from './components/portfolio/Stock.vue' // Stocks que vai ser onde fica as ações cadastradas.

Vue.use(Router) // Registrando o Router

export default new Router({ // Importando nova rota.
    mode: 'history', // o modo que é History
    routes: [ // As rotas todas definidas.
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})