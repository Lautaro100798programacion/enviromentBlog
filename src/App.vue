<script setup>
import { RouterLink, RouterView } from 'vue-router'
import main from '../src/views/HomeView.vue'
import footers from '../src/components/Footers.vue'
import headers from '../src/components/Headers.vue'
</script>

<template>
   <headers class="sticky-top "/>
   <routerView class="pt-2" />
   <footers class="sticky-bottom" />
</template>

<style scoped>

</style>

