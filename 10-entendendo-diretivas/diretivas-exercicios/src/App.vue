<template>
	<div id="app">
		<h1>Diretivas</h1>
		<!-- Diretivas -->
		<hr>
		<p v-text="'Usando Diretiva v-text'"></p>
		<p v-html="'Usando Diretiva <strong>v-html</strong>'"></p>
		<hr>
		<!-- Usando a Diretiva Simples -> Criada la em main.js -->
		<p v-destaque>Usando diretiva simples</p>
		<!-- Usando a Diretiva Personalizada -> Criada la em main.js -->
		<p v-destaque="'green'">Usando diretiva Personalizada</p>
		<!-- Passando tambem com o data -> cor. Criada la em main.j -->
		<p v-destaque="cor">Usando diretiva Personalizada</p>
		<hr>
		<!-- Passando Argumento para Diretiva. Criada la em main.j-->
		<p v-destaque:fundo="'lightblue'">Usando diretiva Personalizada</p>

		<!-- Modificando Diretivas Personalizadas com Modificadores Criada la em main.j -->
		<p v-destaque.funto.atrasar="lightblue">Usando diretiva Personalizada e Modificadas.</p>
		<hr>

		<!-- Diretivas Localmente no script -> no directives-->
		<p v-destaque-local:funto.atrasar="lightblue"> Usando Diretiva Localmente.</p>
		<p v-destaque-local.funto.atrasar="cor"> Usando Diretiva Localmente</p>
		
		<hr>
		<!-- Usando Múltiplos Modificadores. -->
		<p v-destaque-local:funto.atrasar.alternar="lightblue"> Usando Diretiva Multiplos.</p>
		<p v-destaque-local.atrasar="cor"> Usando Diretiva Multiplos.</p>
		
		<hr>
		<!-- Passando Valores mais Complexos para as Diretivas. -->
		<p v-destaque-local:funto.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}"> Complexos para as Diretivas.</p>
		<p v-destaque-local.atrasar="{cor1: 'green', cor2: 'red', atraso: 5000, intervalo: 200}"> Complexos para as Diretivas.</p>
	</div>
</template>

<script>
export default {
	components: {},
	directives: { // Aqui tambem conseguimos definir nossas diretrivas.
		'destaque-local': { 
			bind(el, binding) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
					if(binding.modifiers['atrasar']) atraso = binding.value.atraso

					const cor1 = binding.value.cor1
					const cor2 = binding.value.cor2
					let corAtual = cor1

				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, binding.value.intervalo)
					} else {
						aplicarCor(binding.value)
					}
				}, atraso)
			}
		}
	},
	data() {
		return {
			cor: 'pink'
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
