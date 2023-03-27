<template>
	<!-- Stock vai ser responsavel para der os items que vai ser comprado.-->
	<!-- Responsavel por comprar uma Ação. -->
    <!-- Mesmo padrão de responsividade. xs12 md6 lg4 Documentação: grid system Vuetifyjs-->
    <v-flex class="pr-3 pb-4" xs12 md6 lg4>
		<v-card class="blue darken-3 white--text">
		<v-card-title class="headline">
			<strong>
				{{ stock.name }}
				<small>
					(Preço: {{ stock.price | currency }} | Qtde: {{ stock.quantity }})
				</small>
			</strong>
		</v-card-title>
		</v-card>
		<v-card>
			<v-container fill-height>
				<!-- o v-model vai ser um number -> e vai colocar a quantidade já de 0  -->
				<v-text-field label="Quantidade" type="number" 
				v-model.number="quantity"
				:error="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"/>
				<!-- Adicionando o methods de comprar! @click="buyStock" -->
				<!-- O :disabled é para quando o fica em 0 o botão fica desabilitado-->
				<!-- O !Number tem que ser inteiro se não for inteiro o botão tambem vai está desabilitado caso de 1.5 não vai habilitar o botão.-->
				<!-- Uma função computada para que quando o saldo for insuficiente o botão não seja habilitada.-->
				<v-btn class="blue darken-3 white--text" 
					:disabled="insufficientQuantity || quantity<= 0 || !Number.isInteger(quantity)"
					@click="sellStock">{{ insufficientQuantity ? 'Insuficiente' : 'Vender' }}</v-btn>
			</v-container>
		</v-card>
	</v-flex>
</template>

<script>
// Chamando uma Action pelo mapActions
import { mapActions } from 'vuex';


export default {
	props: ['stock'], // Pegando isso lá de :stock="stock"
	data() {
        return {
            quantity: 0 // Mostrando a quantidade já do 0. usando o v-model para mostrar 0.  
        }
    },
	// Fazendo uma validação de quantidade que vai ter no portfolio.
	computed: {
		insufficientQuantity() {
			// a Quantidade que eu setei dentro do portfolio tem que ser maior do que estiver no stock.
			// Se a quantidade que eu digitei for maior do que a que eu tenho de ações significar que eu tenho quantidade insufficiente.
			return this.quantity > this.stock.quantity
			// Com isso se eu não tiver a quantidade correta eu não posso fazer a operação.
		}
	},
	methods: {
		// No momento que importamos o mapActions, para joga os metodos mapeados ou seja as ações mapeadas para dentro dos methods
		// Na hora eu tambem posso muda o nome da actions.
		...mapActions({ sellStockAction: 'sellStock' }),
		// Apóis fazer a venda ai vai ser mandado para o Portfolio.
		sellStock() { // Uma função para vender uma ação
			const order = { // A ordem para a vender.
                stockId: this.stock.id, // Pegando a ação pelo ID
                stockPrice: this.stock.price, // Pegando o preço.
                quantity: this.quantity // Pegando quantidade de lá do v-model.
            }
			// Esse this.$store.dispath('sellStock', order) é responsavel por chamar actions que está em "./modules/stocks.js" 
			//this.$store.dispatch('sellStock', order)
			this.sellStockAction(order)
			this.quantity = 0
		}
	}
}
</script>

<style>

</style>

