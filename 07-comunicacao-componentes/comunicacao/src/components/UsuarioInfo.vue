<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>

import barramento from '../barramento.js'

export default {
    props: {
        nome:  {
            type: String,
            //requerid: true,
            default: 'Anônimo'
            //default: function() {
                //return Array(10).fill(0).join(',')
        },
        reiniciarFn: Function,
        idade: Number
    },
    //props: ['nome'], // Utilizando o props para pega de outro arquivo sem precisar importar
    methods: {
        inverterNome() { // Alterando o nome para alcontrario.
            //return this.nome
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() { // Reinicializando o nome. colocando desse jeito. -> @nomeMudou="nome = $event.novo" 
            //const antigo = this.nome
            //this.nome = 'Douglas'
            this.$emit('nomeMudou', 'Douglas')//{
                //novo: this.nome,
                //antigo
            //}) // Emitir um evento.
        }
    },
    created() { // Criando o componente
        barramento.quandoIdadeMudar(idade => { // Essa função sempre será chamda com o event acontecer.
            this.idade = idade
        })
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
