<template>
	<!-- Registrando algum componentes que foram geristrados de forma global do vuetify-->
	<v-app>
		<Header /> <!-- Importando e aplicando no App para que o cabeçalho fique sempre a mostrar -->
		<v-content>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>

//Importando o Header que vai ser o cabeçalho da pagina.
import Header from './components/Header.vue'

export default {
	components: { Header },
	// Podemos chamar as actions que foram feitas na no "./modules/store.js"
	created() {
		// chamando a actions de initStocks.
		this.$store.dispatch('initStocks') 
	},
}
</script>

<style>

</style>

