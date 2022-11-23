<script setup>
import presentacion from "../components/Presentacion.vue"
import categorias from "../components/Categorias.vue"
import featuredPosts from "../components/FeaturedPosts.vue"
import Subscribe from "../components/Subscribe.vue"
</script>

<template>
<body>
  <presentacion />
  <categorias />
  <featuredPosts />
  <subscribe />
</body>
</template>

<style scoped>
body {
  max-height: auto;
  background-image: url(../assets/img/bañado.jpg);
  background-size: cover;
}
</style>>
