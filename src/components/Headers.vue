<script setup>

</script>

<template>
        <div class="d-flex justify-content-between header">
            <RouterLink to="/"><img src="../../src/assets/img/icono.png" alt="logo" class="mx-4 mt-1"></RouterLink>
            <div class="dropdown">
                <h1 class="dropdown-toggle" type="button" aria-expanded="false" data-bs-toggle="dropdown">Green</h1>
                <ul class="dropdown-menu color">
                    <li><RouterLink to="/aboutus" class="dropdown-item color">About Us</RouterLink></li>
                    <li><a class="dropdown-item color">Dropdown link</a></li>
                    <li><a class="dropdown-item color">Dropdown link</a></li>
                </ul>
            </div>
            <img class="mx-4 mt-1" src="../assets/img/mensaje.png" alt="mensaje">
        </div>
</template>
<style scope>
.header {
    height: 8vh !important;
    padding-top: 0.2em;
    background-color: #763626;
    color: #90afc5;
    font-family: moonligth;
}
img {
    height: 30px !important;
    width: 50px !important;
}
.color{
    background-color: #763626 !important;
    color: #90afc5 !important;
}
@font-face {
    font-family: 'Moonlight';
    src: url('db.onlinewebfonts.com/c/05d54ad353251b48435ecbcebea5a647?family=Moonlight+Script');
    font-style: normal;
    font-weight: normal;

}
</style>