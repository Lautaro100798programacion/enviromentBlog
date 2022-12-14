<script setup>
import newPost from '../components/NewPost.vue'
import loginComponente from "../components/Logins.vue";
import users from "../store/UserStore.js";

</script>

<template>
  <div v-if="(users === null)">
   <loginComponente />     
  </div>
  <div v-else>
    <newPost />
  </div>
</template>

<style scoped>
body {
  max-height: auto;
  background-image: url(../assets/img/bañadodia.png);
  background-size: cover;
}
</style>