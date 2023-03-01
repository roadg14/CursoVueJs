<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
// Mapeando Getters para Propriedades 
// Para usar o mapGetters
import { mapGetters } from 'vuex';

export default {
    // Vai fazer a mesma coisa que os outros.
    computed: mapGetters({
        total: 'valorTotal'
    })
    ////////////////////////////////////////
    // Como chama o getters utilizando mapGetters.
    //computed: mapGetters(['valorTotal'])
    ////////////////////////////////////////
    //computed: {
    //    total() { // Fazendo o calculo de tudo. .map faz a quantidade X preço / .reduce faz a soma de tudo.
    //        return this.$store.getters.valorTotal // Pegando a função lá do getters
    //    },
    //    produtos() {
    //        return this.$store.state.produtos
    //    }
    //}
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
</style>
