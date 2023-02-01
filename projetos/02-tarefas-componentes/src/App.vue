<template>
	<div id="app">
		<h1>Tarefas</h1>
		<NewTask @taskAdded="addTask" />
		<TaskGrid :tasks="tasks" @taskDeleted="deletedTask" />
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue';
import TaskGrid from './components/TaskGrid.vue'

export default {
	components: { TaskGrid, NewTask },
	data() {
		return {
			tasks: [ // Lista de farefas.
				{ name: 'Lavar a louça', pending: false},
				{ name: 'Comprar controle', pending: true},
			]
		}
	},
	methods: {
		addTask(task) { // Adicionando uma task
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0
			if(reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},
		deletedTask(i) { // Criando o metodo de excluir
			this.tasks.splice(i, 1) // Quantas tasks eu quero excluir.
		}
	},
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
