<template>
    <!-- Responsavel por comprar uma Ação. -->
    <!-- Mesmo padrão de responsividade. xs12 md6 lg4 Documentação: grid system Vuetifyjs-->
    <v-flex class="pr-3 pb-4" xs12 md6 lg4>
       <v-card class="green darken-3 white--text">
        <v-card-title class="headline">
            <strong>{{ stock.name}} <small>(Preço: {{ stock.price }})</small></strong>
        </v-card-title>
       </v-card>
       <v-card>
            <v-container fill-height>
                <!-- o v-model vai ser um number -> e vai colocar a quantidade já de 0  -->
                <v-text-field label="Quantidade" type="number" v-model.number="quantity"/>
                <!-- Adicionando o methods de comprar! -->
                <v-btn class="green darken-3 white--text" 
                    :disabled="quantity <= 0 || !Number.isInteger(quantity)"
                    @click="buyStock">Comprar</v-btn>
            </v-container>
       </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = { // A ordem para a comprar.
                stockId: this.stock.id, // Pegando a ação pelo ID e pelo Preço.
                stockPrice: this.stock.price,
                quantity: this.quantity // Pegando quantidade de lá do v-model.
            }
        }
    },
}
</script>

<style>

</style>