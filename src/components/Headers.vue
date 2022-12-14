<script setup>
import loginout from '../store/loginout';
import users from '../store/UserStore';
</script>

<template>
        <div class="d-flex justify-content-between pt-2 header">
            <RouterLink to="/"><img src="../../src/assets/img/icono.png" alt="logo" class="mx-4 mt-1"></RouterLink>
            <div class="dropdown">
                <h1 class="dropdown-toggle" type="button" aria-expanded="false" data-bs-toggle="dropdown">Green</h1>
                <ul class="dropdown-menu color">
                    <li><RouterLink to="/aboutus" class="dropdown-item color d-flex pb-0">
                        <img src="../assets/img/aboutus.png" alt="about us" class="imagen">
                        <p>About Us</p>
                    </RouterLink></li>
                    <li><RouterLink to="/rules" class="dropdown-item color d-flex pb-0">
                        <img src="../assets/img/rulesandpolicies.png" alt="rules and policies" class="imagen">
                        <p>Rules and Policies</p>
                    </RouterLink></li>
                    <li><RouterLink to="/work" class="dropdown-item color d-flex pb-0">
                        <img src="../../src/assets/img/trabajo.png" alt="trabajo" class="imagen">
                        <p>Work with us</p>
                    </RouterLink></li>
                    <li><RouterLink to="/contact" class="dropdown-item color d-flex pb-0">
                        <img src="../assets/img/mensaje.png" alt="mensaje" class="imagen">
                        <p>Contact us</p>
                    </RouterLink></li>
                </ul>
            </div>
            <div v-if="(loginout === 0)">
                <RouterLink to="/LoginProfileView"><img src="../assets/img/perfil.png" class="icon" alt="login"></RouterLink>
            </div>
            <div v-else>
                <RouterLink to="/LoginProfileView"><img :src=users.photoURL alt="fotoPerfil"></RouterLink>
            </div>
        </div>
</template>
<style scope>
.header {
    height: 8vh !important;
    background-color: #2A3132;
    color: #90afc5;
    padding-left: 0,3em !important;
    padding-right: 1.2em !important;
    font-family: moonligth;
}
img {
    height: 5vh !important;

}
.imagen {
    height: 20px !important;
    width: 20px !important;
    margin-right: 1em;
}
.color{
    background-color: grey !important;
    color: black !important;
}
.icon{
    margin-left: 1em;
}
@font-face {
    font-family: 'Moonlight';
    src: url('db.onlinewebfonts.com/c/05d54ad353251b48435ecbcebea5a647?family=Moonlight+Script');
    font-style: normal;
    font-weight: normal;

}
</style>