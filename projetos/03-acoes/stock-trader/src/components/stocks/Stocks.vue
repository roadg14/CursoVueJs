<template>
	<!-- Stock vai ser responsavel para der os items que vai ser comprado. -->
	<!-- Stock ser o template para colocar as informações e os conteudos que tem. -->
	<!-- row é uma linha e quero que essa linha quebre com 'row wrap'. -->
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
	<!-- o Stock vai mostrar o stock. -->
	<!-- :stock="stock" -> É para passar cada uma das ações para dentro desse componente, e outra é que esses dois pontos : é para interpolar como String  -->
	<!-- E tambem preciso declarar que dentro desse component como propriedade. -->
</template>

<script>

// Importando o Stock.
import Stock from './Stock.vue';

export default {
    components: { Stock },
	computed: {
        stocks() { // Indo chamar o getters.stock que está lá em "./modules/stocks.js"
			// Esse metodo vai simplemente pega os dados na store.js
            return this.$store.getters.stocks
        }
    }
}
</script>

<style>

</style>

