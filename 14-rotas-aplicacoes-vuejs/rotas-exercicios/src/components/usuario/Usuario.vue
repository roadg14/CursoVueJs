<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <router-view /> <!-- é nesse componente que vai ser aplicado as rotas aninhadas -->
        <!-- <p><strong>Código: </strong>{{ id }}</p> Atualizando os paramentros de rotas com props, ou data e watch -->
        <!-- Essa propriedade 'sucesso' está lá no CSS global -->
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    //props: ['id'], // Parâmetros de Rotas via "props" // Mesma coisa de usar o Dada ou Watch.
    //data() {
    //    return {
    //       id: this.$route.params.id
    //    }
    //},
    //watch: { // Reagindo a Mudanças em Parâmetros de Rotas
        // Monitorando o atributo route, se ele estiver mudado precisamos saber.
    //    $route(to, from) { // to = para que rota ele esta indo // from = de que rota ele veio
    //        this.id = to.params.id
    //    }
    //},
    methods: { // Navegação via Código (Navegação Imperativa)
        irParaInicio() { // Função para voltar a fazer as rotas.
            //this.$router.push('/') // Usando dessa forma $router. que é uma rota e apontando para uma dessas rotas.
            //this.$router.push({ path: '/' }) // Outra forma de fazer rota de voltar também.
            this.$router.push({ name: 'inicio'}) // Rotas Nomeadas
        }
    },
}
</script>

<style>

</style>