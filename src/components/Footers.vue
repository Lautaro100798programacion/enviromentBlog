<script setup>
import { RouterLink, RouterView} from 'vue-router'
</script>

<template>
    <div class="d-flex justify-content-between footer">
        <RouterLink to="/"><img src="../../src/assets/img/home.png" alt="home"></RouterLink>
        <RouterLink to="/posts"><img src="../../src/assets/img/cuadrado.png" alt="cuadrado"></RouterLink>
        <RouterLink to="/newpost"><img src="../../src/assets/img/mas.png" alt="mas"></RouterLink>
        <RouterLink to="/category"><img src="../../src/assets/img/categorias.png" alt="categorias"></RouterLink>
        <RouterLink to="/shop"><img src="../assets/img/compras.png" alt="compras"></RouterLink>
       
    </div>
</template>

<style scope>
.footer {
    height: 6vh;
    background-color: #2a3132;;
    font-family: moonligth;
    padding-left: 1em;
    padding-right: 1em;
}

img {
    height: 15px !important;
    width: 35px !important;
}

@font-face {
    font-family: 'Moonlight';
    src: url('db.onlinewebfonts.com/c/05d54ad353251b48435ecbcebea5a647?family=Moonlight+Script');
    font-style: normal;
    font-weight: normal;

}
</style>