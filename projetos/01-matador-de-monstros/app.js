new Vue({
    el: '#app',
    data: {
        running: false, // Para sabe se o jogo esta iniciando!
        playerLife: 100, // Life do Player
        monsterLife: 100, // Life do Monstro
        logs: [

        ]
    },
    computed: {
        hasResult() { // Vai mostrar o resultado quando o life chegar a 0%
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() { // Iniciação do game.
            this.running = true,
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(special) {
            // hurt vai ser o dano inserido.
            this.hurt('monsterLife', 5, 10, special, 'Jogador', 'Monstro', 'player')
            if(this.monsterLife > 0 ) { // Caso o monstro estiver com vida maior de 0 ainda o player vai toma dano.
                this.hurt('playerLife',7, 12, false, 'Monstro', 'Jogador', 'monster') 
            } 
        },
        hurt(prop, min, max, special, source, target, cls) {
            const plus = special ? 5 : 0 // Se o especial do false ele vai ficar em 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0) // Fazendo com que o player não fique negativo.
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls) // Chamando o log tambem.
        },
        healAndHurt() {
            this.heal(10, 15) // a curar vai ser essa!
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) {
            const heal = this.getRandom(min, max) // Pegando o gerador de de valores randomicos.
            this.playerLife = Math.min(this.playerLife + heal, 100) //  Fazendo a cura, caso a curar de + 110 ou 113 ele só vai curar 100
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')
        },
        getRandom(min, max) { // valores aleatorios para ataques, para que os danos sejam aleatorios.
            const value = Math.random() * (max, min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    watch: { // FAZ O MONITORAMENTO.
        // monitorando o hasresult quando o jogador ou o monstro fica 0 o running vai para false.
        hasResult(value) { // quando o jogo for finalizado o runnig será false para sumir os botões
            if(value) this.running = false
        }
    }
})