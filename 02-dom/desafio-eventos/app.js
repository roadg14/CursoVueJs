new Vue({
    el: '#desafio',
    data: {
        valor1: '',
        valor2: ''
    },
    methods: {
        buttonAlert() {
            alert('O botão foi confirmado!')
        },
        armazenar(e){
            this.valor1 = e.target.value
        },
        armazenar2(e){
            this.valor2 = e.target.value
        }
    },
})