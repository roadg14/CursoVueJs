<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<!-- Usando as linguagem Bootstrap. -->
		<b-button variant="primary" class="mb-4" 
		@click="exibir = !exibir">Mostra Mensagem</b-button> <!-- @click é para mostra e não mostrar o texto. -->
		
		<!-- "Fade" com Propriedade CSS transition -->
		<transition name="fade">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<!-- "Slide" com Propriedade CSS animation -->
		<!-- appear -> quando colocando em qualquer animação para atualizar e aparecer no carregamento.-->
		<transition name="slide" type="" appear> <!-- O type escolhe uma preferia de animação.-->
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<!-- Usando v-show tambem faz a mesma coisa que o v-if -->
	
		<!-- Usando Nomes Diferentes de Classes CSS -->
		<!-- Dicionando animações com as class no transition -->
		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<!-- Usando Nomes e Atributos Dinâmicos -->
		<!-- Dando uma opção de que animação que usar.-->
		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao" mode="out-in"> <!-- O mode="out-in" -> Para a animação é, Primeiro o um vai sair e depois o outro vai entrar-->
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert> <!-- Precisamos coloca uma key para a transição-->
			<!-- Transicionar entre Múltiplos Elementos // Usando o v-if e v-else -->
			<b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
		</transition>


		<!-- Entendendo Animação em JavaScript -->
		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<!-- Animação com JavaScript com a entrada e saida -->
		<!-- Excluindo CSS da Animação usando o :css="false"-->
		<transition
		:css="false" 
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>
		<!-- Animando Componentes Dinâmicos -->
		<div class="mb-4">
			<b-button variant="primary" @click="componenteSelecionado = 'AlertaInfo'" class="mr-2" >Info</b-button>
			<b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>	
		</div>
		<transition name="fade" mode="out-in"> <!-- A mesma coisa de antes, o mode="out-in" faz com que uma animação só apareça quando a volta ja saiu. -->
			<component :is="componenteSelecionado"></component>
		</transition>


		<hr>
		<!-- Removendo alunos ao clica no nome deles -->
		<!-- Usando <transition-group> - Preparações -->
		<b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
		<!-- Usando <transition-group> para Animar Listas -->
		<transition-group name="slide" > <!-- So vai funciona quando tiver o :key -->
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>


</template>

<script>

import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'

export default {
	components: {AlertaAdvertencia, AlertaInfo},
	data() {
		return {
			alunos: ['Roberto', 'Julio', 'Douglas', 'Debora'], // Usando <transition-group> - Preparações
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false, // Se eu deixar true e coloca o appear vai carregar a animação assim que atualizar.
			exibir2: true, // Animação com JavaScript
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo' //Animando Componentes Dinâmicos
		}
	},
	methods: {
		adicionarAluno() {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1)
		},
		animar(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => { 
				const novaLargura = this.larguraBase + 
				(negativo ? -rodada * 10 : rodada * 10) // novaLargura vai fica recebendo 10
				el.style.width = `${novaLargura}px` // dizendo onde vai vai receber que é na largura e em px.
				rodada++ 
				if(rodada > 30) { // if quando rodada for maior que 30 pare.
					clearInterval(temporizador) // Limpando o temporizador.
					done() // Chamando a conclusão.
				}
			}, 20)
		},
		beforeEnter(el) { // Antes de Entrar
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) { // Entrar // Tambem recebe a função done -> é para saber onde a animação foi concluida.
			this.animar(el, done, false)
			// done() // O done é importante para que saiva quando a animação foi concluida.
		},
		//afterEnter(el) { // Depois de Entrar
		//	console.log('afterEnter')
		//},
		//enterCancelled() { // Cancelar Entrar
		//	console.log('enterCancelled')
		//},

		// Parte de Saida

		beforeLeave(el) { // Antes de Sair
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) { // Sair // Tambem recebe a função done -> é para saber onde a animação foi concluida.
			// Temporirador para da largura ao quadrado.
			this.animar(el, done, true)
			//done()
		},
		//afterLeave(el) { // Depois de Sair
		//	console.log('afterleave')
		//},
		//leaveCancelled() { // Cancelar Saida
		//	console.log('leaveCancelled')
		//}
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
		font-size: 1.5rem;
	}

	/* Animação com JavaScript */
	.caixa {
		height: 100px;
		width: 300px;
		margin: 30px auto;
		background-color: lightgreen;
	}

	/* Fazendo uma animação com fade. mostrando a mensagem.  */
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

	/* E retirando a mensagem */ 
	.fade-enter-active, .fade-leave-active {
		transition: opacity 2s;
	}

	/* Usando o Keyframes -> slide */
	@keyframes slide-in {
		from { transform: translateY(40px); }
		to { transform: translateY(0); }
	}

	@keyframes slide-out {
		from { transform: translateY(0); }
		to { transform: translateY(40px); }
	}

	.slide-enter-active {
		animation: slide-in 2s ease;
		transition: opacity 2s;
	}

	.slide-leave-active {
		position: absolute; /*Usando <transition-group> para Animar Listas*/
		width: 100%; /*Usando <transition-group> para Animar Listas*/
		animation: slide-out 2s ease;
		transition: opacity 2s;
	}

	.slide-enter, .slide-leave-to { /* Quando a animação esta sendo finalizada o opacidade cai pra  0*/
		opacity: 0;
	}
	
	.slide-move { /**/
		transition: transform 1s; /*Usando <transition-group> para Animar Listas*/
	}
</style>

<!-- Usando o css para da animação -->

<!-- /* Fazendo uma animação com fade. mostrando a mensagem.  */
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 2s;
	}

	.fade-enter-to {
		opacity: 1;
	}

	/* E retirando a mensagem */ 
	.fade-leave {
		opacity: 1;
	}

	.fade-leave-active {
		transition: opacity 2s;
	}

	.fade-leave-to {
		opacity: 0;
	} 

/* Usando agora a opacidade que usando no fade em slide*/
	.slide-enter, .slide-leave-to {
		opacity: 0;
	}

	.slide-enter-active, .slide-leave-active {
		transition: opacity 2s;
	}

-->

<!-- Script.
	methods: {
		beforeEnter(el) { // Antes de Entrar
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) { // Entrar // Tambem recebe a função done -> é para saber onde a animação foi concluida.
			// Temporirador para da largura ao quadrado.
			let rodada = 1
			const temporizador = setInterval(() => { 
				const novaLargura = this.larguraBase + rodada * 10 // novaLargura vai fica recebendo 10
				el.style.width = `${novaLargura}px` // dizendo onde vai vai receber que é na largura e em px.
				rodada++ 
				if(rodada > 30) { // if quando rodada for maior que 30 pare.
					clearInterval(temporizador) // Limpando o temporizador.
					done() // Chamando a conclusão.
				}
			}, 20)
			// done() // O done é importante para que saiva quando a animação foi concluida.
		},
		afterEnter(el) { // Depois de Entrar
			console.log('afterEnter')
		},
		enterCancelled() { // Cancelar Entrar
			console.log('enterCancelled')
		},

		// Parte de Saida

		beforeLeave(el) { // Antes de Sair
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) { // Sair // Tambem recebe a função done -> é para saber onde a animação foi concluida.
			// Temporirador para da largura ao quadrado.
			let rodada = 1
			const temporizador = setInterval(() => { 
				const novaLargura = this.larguraBase - rodada * 10 // novaLargura vai fica recebendo 10
				el.style.width = `${novaLargura}px` // dizendo onde vai vai receber que é na largura e em px.
				rodada++ 
				if(rodada > 30) { // if quando rodada for maior que 30 pare.
					clearInterval(temporizador) // Limpando o temporizador.
					done() // Chamando a conclusão.
				}
			}, 20)
			//done()
		},
		//afterLeave(el) { // Depois de Sair
		//	console.log('afterleave')
		//},
		//leaveCancelled() { // Cancelar Saida
		//	console.log('leaveCancelled')
		//}
-->