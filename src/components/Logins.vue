<script setup>
import {loginWithGoogle , logout} from '../firebase/login.js'
</script>

<template>
    <body>
        <h2 class="textwhite col-4 offset-5 text-white pt-2">Login</h2>
        <form class="text-white">
            <div class="col-12 mb-4 pt-4 px-4 pb-2">
                <label for="nombredeusuario" class="form-label mx-2">Username</label>
                <input type="text" class="form-control mx-2" id="nombredeusuario" placeholder="usario">
            </div>
            <div class="col-12 mb-4 px-4 pb-2">
                <label for="correo" class="form-label mx-2">Email</label>
                <input type="email" class="form-control mx-2 " id="correo" placeholder="name@example.com">
            </div>
            <div class="col-12 mb-4 px-4 mb-0 pb-0">
                <label for="contraseña" class="form-label mx-2">Password</label>
                <input type="password" class="form-control mx-2" id="contraseña" placeholder="contraseña">
            </div>
            <div class="col-4 offset-5">
                <button type="submit" class="btn btn-success mb-3" disabled>Login</button>
            </div>
            <div class="col-7 offset-3 pb-3">
                <button type="button" @click="recuperarclave" class="btn btn-primary mb-3" disabled>I Forgot Password</button>
            </div>
            <div class="separador"></div>
            <button type="button" @click="loginWithGoogle" class="btn btn-success col-8 offset-2 mt-3 mb-3">Sign in with Google</button>
            <button type="button" @click="logout" class="btn btn-success col-8 offset-2 mt-3 mb-3">Logout with Google</button>
            <div class="separador"></div>
            <p class="text-white col-8 offset-2 pt-2">Don´t have a Green account?</p>
            <div class="col-8 offset-3">
                <button type="button" @click="crearcuenta" class="btn btn-success mb-3" disabled>Create account</button>
            </div>
        </form>
    </body>
</template>

<style scoped>
body {
    background-color:  #2a3132;
    min-height: 92vh !important;
}
.separador {
    border-top: 1px solid white
}


</style>