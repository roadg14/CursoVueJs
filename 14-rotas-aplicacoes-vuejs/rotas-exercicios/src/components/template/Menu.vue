<template>
    <nav class="menu">
        <ul>
            <!-- router-link para criar links. Isso permite que o Vue Router altere a URL sem recarregar a página -->
            <router-link to="/" tag="li" active-class="active" exact> <!-- exact só vai deixar realmente esse link ativo quando o link for realmente to="/"  -->
                <a>Início</a>
            </router-link>
            <!-- a tag="li" vai transformar o router-link em li ao inves de tag a e sim li. -->
            <router-link to="/usuario" tag="li" active-class="active">
                <a>Usuário</a>
            </router-link>
            <!-- Lendo e Usando Parâmetros de Rotas Um problema ele não ler outros ID -->
           <!--
                <router-link to="/usuario/2" tag="li" active-class="active">
                <a>Usuário 2</a>
                </router-link>
           --> 
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>

</style>