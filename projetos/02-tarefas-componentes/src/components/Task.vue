<template>
    <div
        @click="$emit('taskStateChanged', task)" 
        class="task" :class="stateClass"> <!-- Changed é para verificar os status das tasks.-->
        <span class="close" @click.stop="$emit('taskDeleted', task)">X</span> <!-- Com o stop. ele para tambem de propagar o click que acontecer com o @click.-->
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: { type: Object, required: true}
    },
    computed: { // Computed para fazer valores computados para as pendencias.
        stateClass() {
            return {
                // se a tarefa estiver pendente vai ficar com 'PENDING' Caso esteja Completada vai ficar 'DONE'
                pending: this.task.pending, // CASO ESTEJA PENDENTE, VAI SER MARCADO.
                done: !this.task.pending // CASO CONTRARIO VAI SER ADICIONADO UMA CLASS CSS.
            }
        }
    }
}
</script>
 
<style>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }

    .pending .close {
        background-color: #B73229;
    }

    .done .close {
        background-color: #0A8F08;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>