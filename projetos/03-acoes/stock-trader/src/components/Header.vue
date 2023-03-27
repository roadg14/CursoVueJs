<template>
    <!-- Cabeçalho-->
    <v-toolbar app>
        <!-- Usando as class do Vuetify / São parecidos com oque usando tambem no Bootstrap-->
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span flat to="/">Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <!-- to -> é a mesma coisa de um router-link -->
            <!-- Usando o to="" eu não preciso nem me preocupar em usar o router-link -->
            <v-btn flat to="/">Início</v-btn>
            <v-btn flat to="/portfolio">Portfólio</v-btn>
            <v-btn flat to="/stocks">Ações</v-btn>
        </v-toolbar-items>

        <!-- Space para da um espaço entre o cabeçalho. -->
        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat @click="endDay">Finalizar Dia</v-btn>
            <v-menu offset-y> <!-- O menu vai ser um drop-down -->
                <!-- Quando clicar vai aparecer a lista de carregados. -->
                <v-btn flat slot="activator">Salvar & Carregar</v-btn>
                <v-list>
                    <!-- a FUNÇÃO DE SALVAR OS DADOS. -->
                    <v-list-tile @click="saveData">
                        <v-list-tile-title>Salvar Dados</v-list-tile-title>
                    </v-list-tile>
                    <!-- CHAMANDO A FUNÇÃO QUE VAI CARREGAR OS DADOS. -->
                    <v-list-tile @click="loadData">
                        <v-list-tile-title>Carregar Dados</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <!-- Para exibir o saldo! -->
            <v-layout align-center>
                <span class="text-uppercase grey--text text--darken-2">
                    Saldo: {{ funds | currency}}
                </span>
            </v-layout>
        </v-toolbar-items>

    </v-toolbar>
</template>

<script>

// Para fazer funcionar a função de ramdomificar os valores das stocks quando finalizar o dia, tem que usar o mapActions
import { mapActions } from 'vuex';

export default {
    computed: {
        // Fazendo o funds ir buscar lá em portfolio.js
        // Fazendo a interpolação para o funds.
        funds() {
            return this.$store.getters.funds
        }
    },
    methods: {
        // Mapeando tambem o loadData que está em actions.js
        ...mapActions(['randomizeStocks', 'loadData']), // Aqui vai chamar a Actions lá em stocks.js
        endDay() { // Uma função para finalizar o dia. para quando for finalizado para o dia reandomificar os valores das ações.randomizeStocks
            this.randomizeStocks() // Chamando a Função para ativar ela quando for clicado.
        },
        // Criando um metodo para salvar
        // Paara ir buscar todas funds e as outros temos que usa o getters.
        // Lá no firebase tem que deixar as REGRAS EM -> TRUE
        saveData() { // Buscar os arquivos lá em Store/modules/
            const { funds, stockPortfolio, stocks } = this.$store.getters
            // Agora mandando um put para o firebase usando o 
            this.$http.put('data.json', { funds, stockPortfolio, stocks})
            // Nesse caso eu vou usar aqui o DATA.json depois vou passar os três valores como parâmetros
            // Então nesse caso eu vou precisar criar um objeto entre chaves com esses três valores { funds, stockPortfolio, stocks }
            // 
        },
        loadDataLocal(){ // Criei um metodo local que vai chamar a actions e 
            this.loadData() // Que vai chamar a actions
        }
    }
}
</script>

<style>

</style>

