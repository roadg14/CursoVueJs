<template>
	<!-- Stock vai ser responsavel para der os items que vai ser comprado.-->
	<!-- Responsavel por comprar uma Ação. -->
    <!-- Mesmo padrão de responsividade. xs12 md6 lg4 Documentação: grid system Vuetifyjs-->
    <v-flex class="pr-3 pb-4" xs12 md6 lg4>
		<v-card class="green darken-3 white--text">
		 <v-card-title class="headline">
			<strong>
				{{ stock.name }}
				<small>
					(Preço: {{ stock.price }} | Qtde: {{ stock.quantity }})
				</small>
			</strong>
		 </v-card-title>
		</v-card>
		<v-card>
			 <v-container fill-height>
				 <!-- o v-model vai ser um number -> e vai colocar a quantidade já de 0  -->
				 <v-text-field label="Quantidade" type="number" v-model.number="quantity"/>
				 <!-- Adicionando o methods de comprar! @click="buyStock" -->
				 <!-- O :disabled é para quando o fica em 0 o botão fica desabilitado-->
				 <!-- O !Number tem que ser inteiro se não for inteiro o botão tambem vai está desabilitado caso de 1.5 não vai habilitar o botão.-->
				 <v-btn class="green darken-3 white--text" 
					 :disabled="quantity <= 0 || !Number.isInteger(quantity)"
					 @click="buyStock">Comprar</v-btn>
			 </v-container>
		</v-card>
	 </v-flex>
</template>

<script>

export default {
	props: ['stock'], // Pegando isso lá de :stock="stock"
	data() {
        return {
            quantity: 0 // Mostrando a quantidade já do 0. usando o v-model para mostrar 0.  
        }
    },
	methods: {
		// Apóis fazer a comprar ai vai ser mandado para o Portfolio.
		buyStock() { // Uma função para comprar uma ação.
			const order = { // A ordem para a comprar.
                stockId: this.stock.id, // Pegando a ação pelo ID
                stockPrice: this.stock.price, // Pegando o preço.
                quantity: this.quantity // Pegando quantidade de lá do v-model.
            }
			// Esse this.$store.dispath('buyStock', order) é responsavel por chamar actions que está em "./modules/stocks.js" 
			this.$store.dispatch('buyStock', order)
			this.quantity = 0
		}
	}
}
</script>

<style>

</style>

