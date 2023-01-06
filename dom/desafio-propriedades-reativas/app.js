new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() { // se o resultado for igual a 37 ? primeira mensagem 'se não for -> :' segunda mensagem
            return this.valor == 37 ? 'Valor igual' : 'Valor diferente'    
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});