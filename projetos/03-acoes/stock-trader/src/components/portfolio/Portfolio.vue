<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
// Importando o mapGetters.
// Uma função para mapear um getters. que é o map
import { mapGetters } from 'vuex'

// Importando tambem o stock.vue
import Stock from './Stock'

export default {
    components: { Stock },
    computed: { // Computada para usar o mapGetters. // Propriedade computada.
        ...mapGetters({
            stocks: 'stockPortfolio' // stock vai aponta para 'stockPortfolio' que está em "./modules/portfolio.js"
        })
    }
}
</script>

<style>

</style>