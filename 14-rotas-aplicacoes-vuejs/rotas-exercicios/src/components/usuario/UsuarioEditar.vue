<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <!-- As duas formas vão vincular o id. e o segundo é dinamico.-->
        <p><strong>Código: </strong>{{ id }} / {{ $route.params.id }}</p>
        <p><strong>Código: </strong>{{ $route.params.id }}</p> <!-- Tambem deixando dinamico! -->
        
        <!--  Para pegar esse valores no usuario editar.-->
        <!-- oque a query esta dizendo la na Url. usando o nome que foi usado no paramentros la na query -->
        <p><strong>Completo: </strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Lingua: </strong>{{ $route.query.lingua }}</p>
        <hr>
        
        <!-- Protegendo as rotas. Quando estiver fazer um formulario e depois de ter feito muita coisa.-->
        <!-- e sem querer for clicado em outra rota, para não perder e se realmente queiser ir para outra rota tera que ser -->
        <!-- Confirmado para não perder nenhum preenchemento de formulario.-->
        <button primario @click="confirmou = true">Confirmar</button>

        <!-- Passando Fragmento Hash, usando o Hash e para que ele serve. --> 
        <div id="rodape"> <!-- Rodape que é para o hash está em UsuarioDetalhes.vue-->
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            confirmou: false
        }
    },
    // Usando o Evento "beforeLeave"
    beforeRouteLeave(to, from, next) { // Antes dele sair para outra Rota.
        if(this.confirmou) { // Se confirmou vai chamar o next()
            next()
        } else {
            if(confirm('Tem Certeza?')) { // Caso contrario, Vai mostrar uma mensagem se tem certeza.
                // se confirmar, vai chamar o next()
                next()
            }else { // Caso contrario chamamos o next(false) e não vai poder sair da pagina.
                next(false)
            }
        }
    }
}
</script>

<style>
    #rodape {
        margin-top: 1000px;
    }
</style>