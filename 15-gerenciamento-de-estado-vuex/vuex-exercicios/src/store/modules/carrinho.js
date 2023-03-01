// Modularizando o Gerenciador de Estado
export default {
    state: { // state é o Estado Centralizado do Vuex.
        produtos: [],
        // Trazendo Quantidade e preço de lá dos parametros.vue
    },
    // Usando Getters
    getters: { // Ele vai ser o responsavel para retorar o valor total.
        // Fazendo o calculo de tudo. .map faz a quantidade X preço / .reduce faz a soma de tudo.
        valorTotal(state) { // Função da soma.
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    // Mutations a função que vai alterar um dado na store
    // Mutations vai alterar algo em estado -> store.
    // A forma de chamar a mutations, é usando uma COMMIT É A FORMA QUEM TEMOS QUE CHAMAR A MUTATIONS
    mutations: { // o playload é o proprio produto.
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
        // Parametros.vue
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        // Parametros.vue
        setPreco(state, payload) {
            state.preco = payload
        }
    },
    // Usando Actions
    actions: { // Uma forma tambem é para tirar o context é colocar o {commit} dentro e retirar o context.
        adicionarProduto(context, payload) {
            setTimeout(() => {
                context.commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}