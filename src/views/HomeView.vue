<script setup>
import presentacion from "../components/Presentacion.vue"
import upcoming from "../components/Upcoming.vue"
import categorias from "../components/Categorias.vue"
import Subscribe from "../components/Subscribe.vue"
import tweet from '../components/Tweets.vue'
import OrganizacionesVue from "../components/Organizaciones.vue"
import DonationandStoreVue from "../components/DonationandStore.vue"
</script>

<template>
<body>
  <presentacion class="mb-3"/>
  <upcoming class="mb-3" />
  <categorias class="mb-3" />
  <tweet class="mb-3" />
  <DonationandStore class="mb-3"/>
  <OrganizacionesVue class="mb-3"/>
  <subscribe class="pb-3"/>
</body>
</template>

<style scoped>
body {
  max-height: auto;
  background-image: url(../assets/img/bañado.jpg);
  background-size: cover;
}
</style>>
