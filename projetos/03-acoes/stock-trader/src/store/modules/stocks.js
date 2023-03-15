import stocks from '../../data/stocks'

export default {
    state: { // State que vai ter uma lista de stocks varias.
        stocks: []
    },
    mutations: { // Esse setStocks vai ser para alterar as ações.
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: { // buyStock vai ser a compra de stocks.
        buyStock({ commit }, order) {
            commit()
        },
        // Iniciar os conjuntos que ações que eu tenho no projeto.
        initStocks({ commit }) { // Inicializar a lista de ações.
            commit('setStocks', stocks)
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}