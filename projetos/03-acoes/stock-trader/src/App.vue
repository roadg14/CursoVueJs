<template>
	<!-- Registrando algum componentes que foram geristrados de forma global do vuetify-->
	<v-app>
		<Header />
		<v-content>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>

//Imports
import Header from './components/Header.vue'
export default {
	components: { Header },
	created() {
		this.$store.dispatch('initStocks')
	},
}
</script>

<style>

</style>

