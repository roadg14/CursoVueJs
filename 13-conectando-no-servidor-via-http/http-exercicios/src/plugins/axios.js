import Vue from 'vue' // Importando o Vue
import axios from 'axios' // Importando o axios.

// axios global
// axios.defaults.baseURL = axiosConfigs.baseURL
// axios.defaults.headers.commom['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

// Url base para acessar o Backend.
// Usando a URL do firebase que foi criado Realtime Database
//axios.defaults.baseURL = 'https://curso-vue2-a212b-default-rtdb.firebaseio.com/'

// Headers é uma autenticação. Como assim ? Requisito para acessar tal pagina é Login e Senha.
// Adicionando Headers Globais
//axios.defaults.headers.common['Authorization'] = 'abc123' // Essas chaves sempre é mudada.

// Adicionando Headers ESPECIFICOS
//axios.defaults.headers.get['Accepts'] = 'application/json'



Vue.use({
    // Configuração Global do Axios
    install(Vue) {
        // Instancias Axios.
        //Vue.prototype.$http = axios // Instancias Axios.
        Vue.prototype.$http = axios.create({ // Instancias Axios.
            baseURL: 'https://curso-vue2-a212b-default-rtdb.firebaseio.com/',
            // Headers tambem pode entrar na configurações de instancias.
            // Headers também pode se colocado nos methods. la no Vue assim -> this.$http.defaults.headers.common['Authorization'] = 'abc123'
            headers: {
                "Authorization": "abc123"
            }
        })

        // Interceptando Requisições
        Vue.prototype.$http.interceptors.request.use(config => {  // Passando uma função config.
            //console.log(config.method) // Vai mostrar no console que foi feito uma requisição POST, GET, E OUTROS.
            return config
            // if(config.method == 'post') { // Mudando o post para put.
            //     config.method = 'put'
            // }
        }, error => Promise.reject(error)) // uma função para trata caso de error.

        // Interceptando Resposta
        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave] })
            // }

            // res.data = array
            return res
        }, error => Promise.reject(error)) // uma função para trata caso de error.
    }
})