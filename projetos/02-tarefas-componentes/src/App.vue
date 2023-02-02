<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid :tasks="tasks" 
			@taskDeleted="deletedTask" 
			@taskStateChanged="toggleTaskState" />
		
	</div>
</template>

<script>
import TasksProgress from './components/TasksProgress.vue';
import NewTask from './components/NewTask.vue';
import TaskGrid from './components/TaskGrid.vue'

export default {
	components: { TaskGrid, NewTask, TasksProgress },
	data() {
		return {
			tasks: [] // Lista de farefas.
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length // Pegando o total de tasks.
			const done = this.tasks.filter(t => !t.pending).length // Aqui vai passar um filtro para pegar aqueles que não estão pendentes. e o tamanho.
			return Math.round(done / total * 100) || 0 // Calculando o percentual.
		}
	},
	watch: { // um local para colocar o historico.JSON.
		tasks: {
			deep: true,
			handle() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
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
		},
		toggleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	creater() {
		const json = localStorage.getItem('tasks')
		const array = JSON.parse(json)
		this.tasks = Array.isArray(array) ? array : []
	}
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
