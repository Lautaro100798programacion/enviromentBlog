<script setup>
import PostItemVue from '../components/PostItem.vue';
import postFirebase from '../store/postStoreFirebase';
import { getPost } from '../firebase/post';
import { getComment } from '../firebase/comentarios';
import { onMounted } from 'vue';

onMounted (() => {
  getPost()
})
</script>
<template>

  <body>
    <div>
      <PostItemVue v-for="post in postFirebase" :post="post" :key="post.id" />
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url(../assets/img/bañadonoche.png);
  background-size: cover;
}

</style>