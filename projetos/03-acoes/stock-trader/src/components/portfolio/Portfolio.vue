<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
// Importando o mapGetters.
import { mapGetters } from 'vuex'
import Stock from './Stock'

export default {
    components: { Stock },
    computed: { // Computada para usar o mapGetters. // Propriedade computada.
        ...mapGetters({
            stocks: 'stockPortfolio'  
        })
    }
}
</script>

<style>

</style>