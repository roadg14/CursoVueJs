new Vue({
    el: '#desafio',
    data: {
        nome: 'Douglas',
        idade: 25,
        linkImagem: 'https://pbs.twimg.com/media/FiRRfNfXEAMCwmk.jpg'
    },
    methods: {
        multiplicarIdade: function() {
            return this.idade * 3 
        },
        sorteNumero(){ // Gerando um numero aleatorio 
            this.Math.random 
        }
    },
})