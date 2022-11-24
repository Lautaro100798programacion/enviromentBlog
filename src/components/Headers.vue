<script setup>

</script>

<template>
        <div class="d-flex justify-content-between pt-1 header">
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
                    <!-- <li><RouterLink to="work" class="dropdown-item color">
                        <img src="../assets/img/" alt="">
                        <p>Work with us</p>
                    </RouterLink></li> -->
                </ul>
            </div>
            <RouterLink to="/login"><img src="../assets/img/login.png" class="icon" alt="login"></RouterLink>
            <RouterLink to="/contact"><img class="mx-4 mt-1" src="../assets/img/mensaje.png" alt="mensaje"></RouterLink>
        </div>
</template>
<style scope>
.header {
    height: 8vh !important;
    padding-top: 0.2em;
    background-color: #763626;
    color: #90afc5;
    padding-left: 0,3em !important;
    padding-right: 0,5em !important;
    font-family: moonligth;
}
img {
    height: 5vh !important;
    /* width: 50px !important; */
}
.imagen {
    height: 20px !important;
    width: 20px !important;
    margin-right: 1em;
}
.color{
    background-color: #763626 !important;
    color: #90afc5 !important;
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