<template>
    <div class="contador">
        <span>{{contador}}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
        <div>Teste</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0 
        }
    },
    methods: { //Metodos
        adicionar() {
            this.contador++
        },
        subtrair() {
            this.contador--
        }
    }
}
</script>

<style scoped> /* Como deixar os estilos dentro do component é só colocando dentro do -> <style scoped> */
    div {
        border: 1px solid red;
    }

    span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5 px 25px;
    }

    button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>