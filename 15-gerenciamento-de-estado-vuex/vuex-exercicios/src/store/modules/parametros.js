export default {
    state: { // state é o Estado Centralizado do Vuex.
        // Trazendo Quantidade e preço de lá dos parametros.vue
        quantidade: 0,
        preco: 0
    },
    // Mutations a função que vai alterar um dado na store
    // Mutations vai alterar algo em estado -> store.
    // A forma de chamar a mutations, é usando uma COMMIT É A FORMA QUEM TEMOS QUE CHAMAR A MUTATIONS
    mutations: { // o playload é o proprio produto.
        // Parametros.vue
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        // Parametros.vue
        setPreco(state, payload) {
            state.preco = payload
        }
    }
}