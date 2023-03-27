// Configurando para manda os arquivos de dados para o Firebase.

import Vue from 'vue' //Importando com Vue.
import axios from 'axios' // Importando com Axios.

Vue.use({ // Passando direto o Vue.use por que aqui o axios não é um plugin.
    install(Vue) { 
        Vue.prototype.$http = axios.create({ // Criando uma instancia do Axios.
            // baseURl para fazer o link com o firebase ou outros.
            baseURL: 'https://stock-trader-b8feb-default-rtdb.firebaseio.com/'
        })
    }
})