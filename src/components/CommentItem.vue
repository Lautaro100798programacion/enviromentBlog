<script setup>
import { deleteComment } from '../firebase/comentarios';
const props = defineProps({
    comment: {},
    typeof: Object
})
</script>

<template>
        <div class="d-flex">
            <img src="../assets/img/messi.png" class="fotocomentario" alt="fotocomentario">
            <p class="text-white bg-secondary col-8 mt-2">{{comment.comment }}</p>
            <img src="../assets/img/basurero.png" @click="deleteComment(comment.id)" alt="basurero" class="offset-1">
        </div>
        <p class="text-white col-9 offset-2">{{comment.date}}</p>
</template>

<style scoped>

</style>
