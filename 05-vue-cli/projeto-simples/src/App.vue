<template>
    <div id="app">
        {{ titulo }}
        <button @click="titulo += '!@#$%¨&*()'">Alterar!</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titulo: 'Testando VueJs'
        }
    }
}
</script>

<style>
    #app {
        background-color: coral;
        color: #000;
    }
</style>