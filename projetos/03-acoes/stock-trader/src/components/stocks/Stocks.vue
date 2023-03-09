<template>
    <!-- row é uma linha e quero que essa linha quebre com 'row wrap' -->
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
// Importando o Stock.
import Stock from './Stock.vue';

export default {
    components: { Stock },
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 110 },
                { id: 2, name: 'Google', price: 280 },
                { id: 3, name: 'Apple', price: 220 },
                { id: 4, name: 'Twitch', price: 93 },
            ]
        }
    }
}
</script>

<style>

</style>