new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		cor5: '',
		estilo5: {
			width: '130px',
			height: '130px'
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 1
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador) // Fazendo para a porcentagem quando chegar a 100%
			}, 500)
		},
		verificarTrueFalse(e) {
			if(e.target.value == 'true') {
				this.perigo = true
			} else if(e.target.value == 'false') {
				this.perigo = false
			}
		}
	}
})
