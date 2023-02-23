<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<!-- Colocando os alertas. -->
		<!-- dismissible é o X para fechar o alerta. -->
		<b-alert show dismissible v-for="mensagem in mensagens" 
			:key="mensagem.texto"
			:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<!-- -->
		<!-- Formulario de cadastro. -->
		<b-card>
			<b-form-group labe="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group labe="E-mail:">
				<b-form-input type="email" size="lg"
					v-model="usuario.email" placeholder="Informe o E-mail"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" 
			variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" 
			variant="success" class="ml-2">Obter Usuários</b-button>
		</b-card>
		<!-- -->
		<hr>
		<!-- Lista que vai aparecer quando for chamaos o Obter usuarios. -->
		<b-list-group> <!-- Pegando a lista de usuarios criados. -->
			<!-- Já que ususarios são objetos. e vai percorrer o usuario e a chave é o id  -->
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }} <br>
				<strong>E-mail: </strong> {{ usuario.email }} <br>
				<strong>ID: </strong> {{ id }} <br>
				<!-- Buttons para carregar e excluir os usuarios. -->
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
// import axios from 'axios' // Usando Axios Localmente

export default {
	data() {
		return {
			mensagens: [], // Mensagem de alerta
			usuarios: [],
			id: null, // Deixando o id nulo.
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() { // Função que vai limpar.
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = [] // Fazendo a mensagem receber uma array vazia.
		},
		carregar(id) { // Vai ser o Alterar oque se faltou, caso tenha digitado errado alguma coisas o carregar vai poder alterar.
			this.id = id
			// Usando o operador spread
			this.usuario = { ...this.usuarios[id] } // Vai ser criado um novo objeto para não alterar a instancia que está sendo referenciada pela lista de elemento.
		},
		excluir(id) { // usando a URL para conseguir excluir. chamando a URL e dizendo com o id qual ele vai excluir.
			// Metodo para excluir do Firebase, usando esse URL --> (`/usuarios/${id}.json`)
			// no final chamando o methods limpar() para limpar o formulario.
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar())
				// Catch que é a função para tratar erro. 
				.catch(() => {
					this.mensagens.push({
						texto: 'Problema para excluir',
						tipo: 'danger'
					})
				})
		},
		salvar() { // salvar vai fazer o alterar e caso não exista vai salvar.
			// Se estiver o this.id setado o metodo que eu vou usar é o 'patch' -> que é alterar.
			// Se o id não estiver setado, significar que irei fazer um 'post' -> que é Salvar um Novo.
			const metodo = this.id ? 'patch' : 'post'
			// O final da URL tambem vai mudar se estiver setado. 'path' -> `/${this.id}.json`
			// Caso não contrario colocar 'post' -> '.json'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			// Como chamar agora de uma forma generica. que é o paramentro. que vai fazer funcionar.
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {
					this.limpar()
					// colocando oque o alerta vai mostrar quando Salvar
					this.mensagens.push({ // Colocando as mensagem do alert.
						texto: 'Operação realizada com Sucesso!',
						tipo: 'success'
					})
				}) // Chamando o then. e o limpar() para os input ficarem limpo.

		},
		obterUsuarios() { // Pegando os usuarios get 
			// Como é chamando os usuarios.get
			this.$http.get('usuarios.json').then(res => { // Isso aqui tambem serve como uma função get.
				this.usuarios = res.data
			})

			// Usando Axios Localmente
			//axios('https://curso-vue2-a212b-default-rtdb.firebaseio.com/').then(res => {
			//	this.usuarios = res.data
			//})
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>

<!-- salvar() {
		this.$http.post('usuarios.json', this.usuario) // Como mandar para o Realtime Database - firebase
			.then(() => this.limpar()) // Quando for mandando o Post, o limpar vai deixar em branco os inputs.
		} 
-->