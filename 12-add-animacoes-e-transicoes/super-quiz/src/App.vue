<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<transition name="flip" mode="out-in">
			<Question v-if="questionMode" 
				:question="questions[currentQuestion]" 
				@answered="showResult" />
			<Result v-else :result="result"  @confirmed="nextQuestion"/>
		</transition>
	</div>
</template>

<script>
import questions from './util/questions'
import Question from './components/Question.vue'
import Result from './components/Result.vue'

export default {
	components: { Question, Result },
	data() {
		return {
			result: false, // Essa variavel vai armazenar o resultado se o usuario respondeu Certo ou Errado.
			questionMode: true, // Vai ser a variavel que vai mostra a questão ou o resultado. se estiver no modo Questão vai mostra as questões, se estiver no resultado vai mostrar o resultado
			questions, // lista de questões 
			currentQuestion: 0 // Vai ser o indice da questão selecionada.
		}
	},
	methods: {
		showResult(result) {
			this.result = result
			this.questionMode = false
		},
		nextQuestion() {
			let r = Math.random() * this.questions.length // Primeiro calculado um numero aleatorio ate o tamanho da questions
			this.currentQuestion = parseInt(r) // Convertendo para ParseInt que é Inteiro.
			this.questionMode = true
		}
	},
}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

/* Adicionando as Animações */
/* Saindo da tela*/
@keyframes flip-out {
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

/* Entrando na Tela */
@keyframes flip-in {
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
