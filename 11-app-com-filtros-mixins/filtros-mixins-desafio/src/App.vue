<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p> {{ frase | espacoPorVirgula}}</p> <!-- Feito a frase com os espaços subistituido por virgulas. -->
		<p>{{ frase | espaco-por-virgula }}</p>
		<hr>

		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ frase2 | contarPalavras }}</p> <!-- a methods que esta contando as string de cada letra estar no main.js Vue.contarPalavras. -->
		<p>{{ frase2 | contar-palavras }}</p>
		<hr>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ fraseComVirgulas }}</p> <!-- Frase com a computed -> computada igual ao 1 e 2. -->
		<p>{{ fraseComTamanhos }}</p>
		<hr>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		

	</div>
</template>

<script>

import fraseComputada from './fraseComputada' // Resposta do 4

export default {
	mixins: [fraseComputada], // Resposta do 4
	data() {
		return {
			frase: 'Essa é a frase que será usada nos desafios.',
			frase2: 'Meuka esta afiada meu casceteti',
			frase3: 'Cuidado com ele que ele te pega te pega dali te pega de lá',
			frase4: 'Ele é ele e eu sou eu'
		}
	},
	filters: {
		espacoPorVirgula(valor) {
			return valor.replace(/\s/g, ',') // Isso vai subistituir o espaço em branco por uma Virgula.
		}
	},
	computed: {
		fraseComVirgulas() {
			return this.frase3.replace(/\s/g, ',')
		},
		fraseComTamanhos() {
			return this.frase3.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
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
