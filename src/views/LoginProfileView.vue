<script setup>
import loginComponente from "../components/Logins.vue";
import perfil from "../components/Profile.vue";
import profile from "../store/profileStore";
</script>

<template>
    <div v-if="(profile.perfiles.length === 0)">
        <loginComponente />
    </div>
    <div v-else>
        <perfil />
    </div>
    
</template>

<style scoped>

</style>