<script setup>

</script>

<template>
    <body>
        <form class="text-white">
            <div class="d-flex col-12 mb-4 pt-4">
                <label for="nombredeusuario" class="form-label">Username</label>
                <input type="text" class="form-control mx-2" id="nombredeusuario" placeholder="usario">
            </div>
            <div class="d-flex col-12 mb-4">
                <label for="correo" class="form-label">Email</label>
                <input type="email" class="form-control mx-2 " id="correo" placeholder="name@example.com">
            </div>
            <div class="d-flex col-12 mb-4">
                <label for="contraseña" class="form-label">Password</label>
                <input type="password" class="form-control mx-2" id="contraseña" placeholder="contraseña">
            </div>
            <div class="d-flex justify-content-between ">
                <div class="col-3">
                <button type="submit" class="btn btn-success mb-3">Login</button>
            </div>
            <div class="col-3">
                <button type="button" @click="recuperarclave" class="btn btn-success mb-3">Forgot Password</button>
            </div>
            <div class="col-3">
                <button type="button" @click="crearcuenta" class="btn btn-success mb-3">Create account</button>
            </div>
            </div>
        </form>
    </body>
</template>

<style scoped>
body {
    background-color:  #2a3132;
    min-height: 92vh !important;
}
</style>