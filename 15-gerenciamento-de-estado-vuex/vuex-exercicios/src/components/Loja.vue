<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
// Importando tambem mapMutations é tambem uma forma de chamar o mutations.
import { mapActions, mapMutations } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
            quantidade: 1,
            preco: 9.99,
        }
    },
    methods: {
        // Chamando a Função Actions
        // ...mapActions(['adicionarProduto']),
        // Mapeando a Action. e oque o mapAction faz.
        adicionarProduto(produto) {
            this.$store.dispatch('adicionarProduto', produto)
        },
        //Usando o mapMutations
        // Usando o mapMutations para acessar o que está em store. pode ser feito assim.
        // Primeira Forma -> this.$store.commit('adicionarProduto', produto)
        // Segunda Forma com o mapMutations -> this.adicionarProduto(produto).
        ...mapMutations(['adicionarProduto']), 
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // Para alterar o estado central da aplicação.
            // this.$store.state.produtos.push(produto)
            // Usando Mutations usando dessa forma a baixo de como se chamar uma mutations.
            this.$store.commit('adicionarProduto', produto)
            // Usando Actions
            // Formas de chamar as Actions
            // Primeira Forma -> this.adicionarProduto(produto)
            // Segunda Forma -> this.$store.dispatch('adicionarProduto')
            //this.adicionarProduto(produto)
            this.$store.dispatch('adicionarProduto')
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
