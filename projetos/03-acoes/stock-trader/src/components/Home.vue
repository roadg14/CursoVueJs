<template>
	<div>
		<h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
		<!-- v-sheet é como se fosse uma folha na tela! -->
		<v-sheet :elevation="6" class="pa-2 primary">
			<v-icon class="white--text mr-3">info</v-icon>
			<span class="headline white--text font-weight-light">
				Você pode Salvar & Carregar os Dados
			</span>
		</v-sheet>
		<v-sheet :elevation="6" class="pa-2 success darken-1 mt-3">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">
                Clique em 'Finalizar Dia' para iniciar um novo dia!
            </span>
        </v-sheet>
		<v-divider class="my-4" />
		<!-- Lembrando que esse funds é o saldo que está laá em portfolio.js-->
		<p class="display-1"><strong>Seu Saldo:</strong> {{ funds | currency }}</p>
	</div>
</template>

<script>
export default {
	computed: { 
		// Fazendo o funds ir buscar lá em portfolio.js
        funds() { 
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>

