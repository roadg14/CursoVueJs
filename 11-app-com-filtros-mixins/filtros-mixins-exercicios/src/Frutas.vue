<template>
    <div>
        <ul>
            <!-- Fruta vai receber frutas. que sempre quando for adicionando la em add.-->
            <li v-for="fruta in frutas" :key="fruta"> {{ fruta }} </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add"> <!-- @keydown.enter é para quando o usuario aperta enter enviar oque escreveu.-->
    </div>
</template>

<script>
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'
export default {
    mixins: [frutasMixin, usuarioMixin], // Esse mixin que está no frutasmixins.js -> tem o data e os methods dentro fazendo a mesma coisa.
    created() {
        console.log('Created - Frutas.vue!')
    }
    //data() {
    //  return {
    //        fruta: '',
    //        frutas: ['Banana', 'Maça', 'Melancia']
    //    }
    //},
    //methods: { // Um função para adicionar uma nova fruta.
    //    add() {
    //        this.frutas.push(this.fruta) // Push vai mandar para fruta.
    //        this.fruta = ''
    //    }
    //},
}
</script>

<style>

</style>