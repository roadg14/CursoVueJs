import Vue from 'vue' // Import do Vue.
export default new Vue({ // Uma nova instancia do Vue e retornar.
    methods: {
        alterarIdade(idade) { // Essa vai transmitir o event
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback) { // Essa vai ser chamada quando o event acontecer.
            this.$on('idadeMudou', callback)
        }
    }
})