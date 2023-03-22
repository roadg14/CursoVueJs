import Vue from 'vue'
import Router from 'vue-router'

// As paginas de navegação!
import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

// Usando o VueRouter
Vue.use(Router)

export default new Router({
    mode: 'history', // Modo historia.
    routes: [ // E a baixo as rotas que serão utilizadas.
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})