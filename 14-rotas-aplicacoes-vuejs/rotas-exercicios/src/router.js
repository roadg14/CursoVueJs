// Importando o Vue e Router.
import Vue from 'vue'
import Router from 'vue-router'

// Importando os componentes
import Inicio from './components/Inicio.vue'
// import Usuario from './components/usuario/Usuario.vue'

// Importando Menu para utilizar como Mútiplos Router Views
import Menu from './components/template/Menu.vue'
import MenuAlternativo from './components/template/MenuAlternativo.vue'

// Configurando Rotas Filhas (Rotas Aninhadas).
// import UsuarioLista from './components/usuario/UsuarioLista.vue'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue' // Para fazer o import dinamico preciso comentar esse.

// Registrando o plugin no Router
Vue.use(Router)

// Carregando Rotas Tardiamente.
// Fazendo tambem um import dinamico
// Agrupando os imports com esse  /* webpackChunkName */
const Usuario = () => import(/* webpackChunkName */'./components/usuario/UsuarioEditar.vue') 
const UsuarioLista = () => import(/* webpackChunkName */'./components/usuario/UsuarioEditar.vue') 
const UsuarioDetalhe = () => import(/* webpackChunkName */'./components/usuario/UsuarioEditar.vue') 
const UsuarioEditar = () => import(/* webpackChunkName */'./components/usuario/UsuarioEditar.vue') 


// Criando objeto aparti da Função Router.
// Tirando o export default e colocando const é para que posso 
const router = new Router({
    // Rotas // E mode de navegação.
    mode: 'history', // Modo history não usa o /#/ !//! // Modo hash usa o /#/
    scrollBehavior(to, from, savedPosition){ //Controlando o Comportamento de Rolagem (Scroll)
        if(savedPosition) { //savedPosition estiver setado volte savedPosition
            return savedPosition
        }
        // Nem sempre vai ter que usar esse Scroll.
        // return { x: 0, y: 1000 } // Forçando o Scroll descer ate onde o rodape está.
        // to é "Para onde está indo" e "Para onde ele vai".
        if(to.hash) { // Se a rota de destino tem o hash.
            // Caso tenha o hash, vai retornar
            return { selector: to.hash } // selector: to.hash -> é assim que eu quero que faça um scroll para o elemento hash
        }
        return { x: 0, y: 0 }
    },
    routes: [{ // Rotas // é uma array // Cada objeto que estiver dentro dessa array vai ser responsavel por mapea uma Rota.
        name: 'inicio', // Rotas Nomeadas // Que esta ligada ao Usuario.vue -> irParaInicio
        path: '/', // Sempre que navegar pela Barra '/' vai para o inicio.
        // component: Inicio, //
        components: { // Múltiplos Router Views 
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario', // Quando o usuario navegar por essa path. vai para o component Usuario.
        // component: Usuario, // Múltiplos Router Views.
        components: { // Usando e dando ao name="menu" que vai para o arquivo menu.
            default: Usuario,
            menu: MenuAlternativo,
            menuInferior: MenuAlternativo
        },
        // Resumindo, props tambem vai fazer a atualização de quando for mudado a rota.
        // Sempre que for mudado, será notificado.
        props: true, // Todos os parâmetros dessa rota serão passados como propriedade pro componente que será invocado.
        // Configurando Rotas Filhas (Rotas Aninhadas).
        children: [ // Formulario que estão no usuario.vue
            { path: '', component: UsuarioLista }, // Quando só for a /usuario ele vai mostrar a lista
            { path: ':id', component: UsuarioDetalhe, props: true, // Quando for :id ele vai mostra os detalhes
            // Usando o Evento "beforeEnter"
            beforeEnter: (to, from, next) => { // Mapeando por onde está navegando.
            //    console.log('Antes da rota -> usúario detalhe')
                next()
            } }, // Quando for :id ele vai mostra os detalhes
             // e quando for o :id/editar ele vai mostrar o Usuario Editar.
            { path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'editarUsuario' }, // Criando Links com Rotas Nomeadas
        ]

    }, { // Redirecionamento // redirect -> Entra em uma Url e depois ser redirecionado para outra url  
        path: '/redirecionar',
        redirect: '/usuario'
    }, { // Redirecionamento // redirect -> Configurando Rota "Pega Tudo"
        path: '*',
        redirect: '/'
    }]
})
// Mapeando as rotas por onde esta navagando.
// Recebe a rota de Destino = to / A rota de Origem = from / 
// Se não for chamado o next, significar que vai ser interrompido a navegação
router.beforeEach((to, from, next) => {
    // console.log('Antes das rotas -> Global')
    next() // Tem que chamar o Next.
}) // Cada navegação Antes 

export default router