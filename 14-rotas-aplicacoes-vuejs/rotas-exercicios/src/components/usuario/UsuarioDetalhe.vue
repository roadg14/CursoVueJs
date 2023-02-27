<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <!-- Tornando Router Links mais Dinâmico o -> dessa forma :to="`/usuario/${id}/editar`" ou na forma a baixo. -->
        <!-- Usando Rotas Nomeadas la no router.js -> :to="{ name: 'editarUsuario', params: { id }}" -->
        <router-link tag="button" primario :to="{ name: 'editarUsuario', params: { id },
            query: { completo: false, lingua: 'pt'},
            hash: '#rodape' }"> <!-- :to="`/usuario/${$route.params.id}/editar`" -->
            Editar
        </router-link>
        <!-- Usando Parâmetros da Query -> query: { completo: true, lingua: 'pt'} -> para muda a Url -->
    </div>
</template>

<script>
export default {
    props: ['id'],
    // Usando o Evento "beforeEnter"
    beforeRouteEnter(to, from, next) {
        console.log('Dentro do componente -> Usúario detalhe')
        // next(vm => { // Fazendo com que o next chame o if do usuario.
        //     console.log(vm.id)
        // })

        // Uma forma de saber se o Usúario estas ou não autenticado.
        const autenticado = true // True para o autenticado está on. e False para não conectado!
        autenticado ? next() : next(false) // Se estiver autenticado chame o Next, se não, não irar carregar a pagina.

    }
}
</script>

<style>

</style>