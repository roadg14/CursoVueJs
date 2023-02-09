<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<!-- Usando o mixins de Usuario.-->
		<p>{{ usuarioLogado }}</p>

		<hr>
		<!-- Criando um Filto Local -->
		<!-- Deixando o cpf com os pontos e traço. Ultilizando o filtro.-->
		<p> {{ cpf | cpf | inverter }}</p>
		<p>{{ nome | inverter }}</p>

		<!-- Filtro & v-bind -->
		<!-- o v-model não vai suporta essa estrutura.-->
		<!-- Em situações que vai ser feito um bind de certos valores ele consegui aplicar-->
		<input type="text" :value="cpf | cpf | inverter">
		<hr>

		<!-- Duplicando Código para Usar os Mixins -->
		<Frutas /> <!--  -->
		<hr>
		<!-- Continuando com a dublicação do -->
		<div>
			<ul>
				<!-- Fruta vai receber frutas. que sempre quando for adicionando la em add.-->
				<li v-for="fruta in frutas" :key="fruta"> {{ fruta }} </li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add"> <!-- @keydown.enter é para quando o usuario aperta enter enviar oque escreveu.-->
		</div>

	</div>
</template>

<script>
import usuarioMixin from './usuarioMixin'
import frutasMixin from './frutasMixin' // Vindo Do arquivos.
import Frutas from './Frutas.vue'

export default {
	components: { Frutas },
	mixins: [frutasMixin, usuarioMixin],
	// Como fazer um filtro para CPF.
	filters: {
		cpf(valor) {
			const arr = valor.split('')
			arr.splice(3, 0, '.') // VAI ADICIONAR O PONTO NA TERCEIRA POSIÇÃO.
			arr.splice(7, 0, '.') // VAI ADICIONAR O PONTO NA SETIMA POSIÇÃO.
			arr.splice(11, 0, '-') // VAI ADICIONAR UM TRACINHO NA DECIMA PRIMEIRA POSIÇÃO.
			return arr.join('') // Agora tem uma array transformada em string.
		}
	},
	data() {
		return {
			cpf: '60070080090',
			nome: 'Douglas Rodrigues Ferreira Campos'
		}
	},
	created() {
        console.log('Created - App.vue!')
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
	input {
		font-size: 2.5rem;
	}
</style>
