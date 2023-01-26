<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <Contador  v-for="c in 5" :key="c"/> <!-- com o v-for é para fazer 5 contadores.-->
    </div>
</template>

<script>
import Contador from './Contador.vue' // Importanto do Contador.vue.

export default {
    components: {
        Contador
    }
}
</script>

<style scoped> /* Como deixar os estilos dentro do component é só colocando dentro do -> <style scoped> */
    div {
        border: 1px solid blue;
    }
</style>