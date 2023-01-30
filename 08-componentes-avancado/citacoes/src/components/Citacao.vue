<template>
    <div class="citacao">
        <!-- o slot tambem substitui  -->
        <slot name="autor"></slot> <!-- Para chama de onde voce esta importando com o slot tem que usar a propriedade slot com o mesmo nome.-->
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
        <div class="autor"><slot name="autor"></slot></div>
    </div>
</template>

<script>
export default {
    props: ['texto']
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
