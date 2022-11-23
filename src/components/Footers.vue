<script setup>
import { RouterLink, RouterView} from 'vue-router'
</script>

<template>
    <div class="d-flex justify-content-between footer">
        <RouterLink to="/"><img src="../../src/assets/img/home.png" alt="home"></RouterLink>
        <img src="../../src/assets/img/cuadrado.png" alt="cuadrado">
        <img src="../../src/assets/img/mas.png" alt="mas">
        <img src="../../src/assets/img/categorias.png" alt="categorias">
        <img src="../../src/assets/img/trabajo.png" alt="trabajo">
    </div>
</template>

<style scope>
.footer {
    height: 6vh;
    background-color: #763626;
    color: #90afc5;
    font-family: moonligth;
    padding-left: 1em;
    padding-right: 1em;
}

img {
    height: 30px !important;
    width: 50px !important;
}

@font-face {
    font-family: 'Moonlight';
    src: url('db.onlinewebfonts.com/c/05d54ad353251b48435ecbcebea5a647?family=Moonlight+Script');
    font-style: normal;
    font-weight: normal;

}
</style>