<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- <Menu />  Menu importado lá de template. -->
		<router-view name="menu"></router-view> <!-- MENU.vue-->
		<!-- Animando Transições de Rotas -->
		<transition mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut">
			<router-view /> <!-- Router-view vai carregar as rotas-->
		</transition>
		<!-- // Múltiplos Router Views. -->
		<!-- <router-view name="menuInferior"></router-view> -->
	</div>
</template>

<script>
// Importando Menu.
// import Menu from './components/template/Menu.vue'

export default {
	// components: { Menu },
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
