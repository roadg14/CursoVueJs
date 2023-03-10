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
    components: { Stock }
}
</script>

<style>

</style>