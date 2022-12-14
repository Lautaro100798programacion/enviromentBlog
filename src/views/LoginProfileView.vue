<script setup>
import loginComponente from "../components/Logins.vue";
import perfil from "../components/Profile.vue";
import loginout from "../store/loginout";
</script>

<template>
    <div v-if="(loginout == 0)">
        <loginComponente />
    </div>
    <div v-else>
        <perfil />
    </div>
    
</template>

<style scoped>

</style>