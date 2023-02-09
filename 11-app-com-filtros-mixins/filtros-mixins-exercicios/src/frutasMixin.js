export default {
    data() {
        return {
            fruta: '',
            frutas: ['']
        }
    },
    methods: { // Um função para adicionar uma nova fruta.
        add() {
            this.frutas.push(this.fruta) // Push vai mandar para fruta.
            this.fruta = ''
        }
    },
}