export default {
    computed: {
		fraseComVirgulas() {
			return this.frase4.replace(/\s/g, ',')
		},
		fraseComTamanhos() {
			return this.frase4.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
}