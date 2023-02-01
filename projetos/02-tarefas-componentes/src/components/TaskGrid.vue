<template>
    <div class="task-grid">
        <template v-if="tasks.length"> <!-- tasks.length estiver definido ele vai avaliar as e se não estiver vai mostrar as tasks. -->
            <Task v-for="(task, i) in tasks" :key="task.name" :task="task"
                @taskDeleted="$emit('taskDeleted', i)"></Task> <!-- Fazendo um props lá para o app.vue-->
        </template>
        <p v-else class="no-task">Sua vida está em dia :)</p> <!-- Vai mostrar quando não tiver nenhuma task para se fazer.-->
    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    components: { Task },
    props: {
        tasks: { type: Array, required: true}
    }
}
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>