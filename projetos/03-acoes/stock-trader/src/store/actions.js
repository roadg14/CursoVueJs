// Usando o vue para fazer o acesso Axios que tambem vai precisar fazer requesições.
// vai fazer requisição para pega os dados no firebase
import Vue from 'vue'

export default {
    // LoadData vai lá no backend que é em firebase pega todas as informações.
    loadData({ commit }) { // o nome da função vai ser loadData - o commit vai ser o respondavel para chamar todas as Mutations.
        Vue.prototype.$http('data.json').then(resp => { // Requisição ajax.
            const data = resp.data // a Resposta do data.json
            if(data) { // Se data tiver mesmo dados lá. 
                commit('setStocks', data.stocks) // Vou chama o commit e seta o setStocks.
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}