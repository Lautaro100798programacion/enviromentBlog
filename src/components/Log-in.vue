<script setup>

</script>

<template>
     <form action="" @submit.prevent="ingreso">
                <div class="mb-3 col-3">
                    <label for="nombredeusuario" class="form-label">Ingrese su nombre de usuario</label>
                    <input v-model="login.nombre" type="text" class="form-control" id="nombredeusuario"
                        placeholder="usario">
                </div>
                <div class="mb-3 col-3">
                    <label for="correo" class="form-label">Ingrese su correo electronico</label>
                    <input v-model="login.email" type="email" class="form-control" id="correo"
                        placeholder="name@example.com">
                </div>
                <div class="mb-3 col-3">
                    <label for="contraseña" class="form-label">Elija una contraseña</label>
                    <input v-model="login.contrasena" type="password" class="form-control" id="contraseña"
                        placeholder="contraseña">
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Ingresar</button>
                </div>
                <div class="col-auto">
                    <button type="button" @click="recuperarclave" class="btn btn-primary mb-3">Recuperar contraseña</button>
                </div>
                <div class="col-auto">
                    <button type="button" @click="crearcuenta" class="btn btn-primary mb-3">Crear cuenta</button>
                </div>
            </form>
</template>

<style scoped>

</style>