<template>
	<!-- Registrando algum componentes que foram geristrados de forma global do vuetify-->
	<v-app>
		<Header /> <!-- Importando e aplicando no App para que o cabeçalho fique sempre a mostrar -->
		<v-content>
			<v-container>
				<transition name="slide" mode="out-in"> <!-- Animando a Transição de Rotas -->
					<router-view></router-view>
				</transition>
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
	@keyframes slide-in { /* Animação de Entrada*/
		from { transform: translateY(-30px); opacity: 0; }
		to { transform: translateY(0px); opacity: 1; }
	}

	@keyframes slide-out { /* Animação de Saida*/
		from { transform: translateY(0px); opacity: 1; }
		to { transform: translateY(-30px); opacity: 0; }
	}

	.slide-enter-active { /* Tempo da animação Entrando */
		animation: slide-in 0.3s ease;
	}

	.slide-leave-active { /* Tempo da animação Saindo */
		animation: slide-out 0.3s ease;
	}
</style>

