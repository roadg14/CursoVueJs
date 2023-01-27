<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alternar Nome!</button>
        <hr>
        <div class="componentes">
            <!-- Para o Props funcionar tem que coloca a tag dentro do componente. abaixo -->
            <app-usuario-info 
            v-bind:nome="nome" 
            :idade="idade" 
            @nomeMudou="nome = $event" 
            :reiniciarFn="reiniciarNome"/> <!-- Utilizando o props, no arquivo UsuarioInfo é colocado o props que vai pega o nome.-->
            <!-- Usando o v-bind: para usar o methods e alterar o nome.-->
            <!-- Para o numero ser lido tem que fazer com que o nome entenda que aceitar tambem string -> nome: String.-->
            <app-usuario-editar 
            :idade="idade"
            @idadeMudou="idade = $event"/>
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Douglas',
            idade: 25
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Guilherme'
        },
        reiniciarNome() {
            this.nome = 'Douglas'
        }
    },
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
