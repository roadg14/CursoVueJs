import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Store agora é a loja. tirado os produtos de lá no Resumo.vue
export default new Vuex.Store({ // Store é uma função que está dentro do Vuex.
    state: { // state é o Estado Centralizado do Vuex.
        produtos: []
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
})