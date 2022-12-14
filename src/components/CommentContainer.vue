<script setup>
import { computed, onMounted, ref } from 'vue';
import CommentItem from './CommentItem.vue'
import commentFirebase from '../store/CommentStoreFirebase.js';
import { getComment } from '../firebase/comentarios';

const commentsWithId = ref([])

onMounted(() => { getComment() })

const props = defineProps({
    postId: "",
    typeOf: String
})

const cometariosfiltrados = computed(() => {
    commentsWithId.value = commentFirebase.value.filter(comment => comment.postId == props.postId)
}) 
</script>

<template>
    {{ cometariosfiltrados }}
    <CommentItem v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />
</template>

<style scoped>

</style>