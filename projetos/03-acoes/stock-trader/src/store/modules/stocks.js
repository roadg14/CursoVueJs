// Importando os stocks que estão em "./data/stocks.js"
import stocks from '../../data/stocks'

export default {
    state: { // State que vai ter uma lista de stocks varias.
        stocks: []
    },
    mutations: { // Esse setStocks vai ser para alterar as ações.
        // O primeiro paramentro de uma mutation sempre é o (state) depois voce colocar oque voce quer passar.
        setStocks(state, stocks) {  
            state.stocks = stocks
        },
        // ALterando os preços das stocks toda vez que for finalizado o dia.
        // Alterando Preço das Ações
        randomizeStocks(state) {
            // Função que vai deixar aleatorio os valores.
            state.stocks.forEach(stock => { // Para cada uma das ações.
                // Fazendo os valores sempre ficarem inteiros.
                // Oque acontece aqui "(stock.price * (1 + Math.random() - 0.42))" Esse valor ele vai de 0 ate 9,
                // ai diminuindo 0.45 eu faço com que a tendencia dos valores é subir para que ela não var para 0.
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.42))
            })
        }
    },
    actions: { 
        // buyStock vai ser a compra de stocks.
        buyStock({ commit }, order) { //
            commit('buyStock', order) 
        },
        // Iniciar os conjuntos que ações que eu tenho no projeto.
        initStocks({ commit }) { // Inicializar a lista de ações.
            commit('setStocks', stocks) // Esse stocks aqui é de onde vem o data/stocks.js
        },
        // Ramdomificar os Stocks no caso o quanto ela custa e depois vai custa outra no outro dia.
        // Alterando Preço das Ações
        randomizeStocks({ commit }) {
            commit('randomizeStocks')
        }
    },
    // Esse getters vai ser o responsavel para manter todas as ações cadastradas dentro do state.
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}