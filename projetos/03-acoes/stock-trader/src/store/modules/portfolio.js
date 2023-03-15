export default {
    // 
    state: { //
        funds: 10000, // saldo em conta
        stocks: [] // Quantidade que voce tem em conta
    },
    mutations: { // A mutations vai ser responsavel para muda os estados do state.
        // Função de Comprar uma Ação
        buyStock(state, { stockId, quantity, stockPrice }){
            // Tentando achar o registro para saber se já tem ações do tipo.
            const record = state.stocks.find(element => element.id == stockId)
            if(record){ // se tiver o registro.
                // pega o registro = a quantidade e vai acrecentar mas
                record.quantity += quantity
            } else { // Caso eu não tenha comprado essa ação.
                // EU vou ter que adidicionar essa ação.
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            // Ajustando o saldo para refletir a compra.
            state.funds -= stockPrice * quantity
        },
        // Função de Vender a ação.
        sellStock(state, { stockId, quantity, stockPrice }) {
            // Tentando achar o registro para saber se já tem ações do tipo.
            const record = state.stocks.find(element => element.id == stockId)
            // Fazendo a validações para saber se a quantidade de ações que eu tenho. se ela é maior que a quantidade de ações que eu quero vender.
            if(record.quantity > quantity){
                record.quantity -= quantity // Eu vou subtrair a quantidade de ações que eu vendir.
            } else { // Caso contrario eu vendo todas as ações.
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            // Ajustando o Salto.
            state.funds += stockPrice * quantity
        }
    },
    actions: {
        sellStock( {commit}, order){
            commit('sellStock', order)
        }
    },
    mutations: {
        stockPortfolio(state, getters){
            return state.stocks.map(stock => {
                const recod = getters.stocks.find(element => element.id == stockId)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}