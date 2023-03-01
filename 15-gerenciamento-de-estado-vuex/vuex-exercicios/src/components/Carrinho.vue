<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>
// Mapeando Getters para Propriedades 
// Para usar o mapGetters
import { mapGetters } from 'vuex';

export default {
    computed: {
        // Tem que usar esse operador spred por que são duas funçães que estão indo buscar lá no store
        ...mapGetters({
            total: 'valorTotal'
        }),
        
        //total() { // Fazendo o calculo de tudo. .map faz a quantidade X preço / .reduce faz a soma de tudo.
        //    return this.$store.getters.valorTotal // Pegando a função lá do getters
        //},
        produtos() { // Indo pegar os produtos lá de store.js
            return this.$store.state.produtos // Acessando os dados que estão la na store.js // Os produtos.
        }
    }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
