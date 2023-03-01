<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {
        quantidade: { // Propriedades Computadas.
            get() { // Se eu quero ler um lavor que está na store.js
                // Acessando a store.js quando é feito a mudança que o store importa o carrinho.js, parametros.js
                // Modo Antes -> return this.$store.state.quantidade 
                return this.$store.state.parametros.quantidade // NovoMODO DE CHAMAR
            },
            // set vai receber um novo valor
            set(valor) { // Vai apontar.
                this.$store.commit('setQuantidade', valor)
            },
            preco: {
                get() {
                    // Acessando a store.js quando é feito a mudança que o store importa o carrinho.js, parametros.js
                // Modo Antes -> return this.$store.state.preco
                    return this.$store.state.parametros.preco // NovoMODO DE CHAMAR
                },
                set(valor) {
                    this.$store.commit('setPreco', valor)
                }
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
