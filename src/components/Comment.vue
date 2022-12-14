<script setup>
import {addComment, deleteComment} from '../firebase/comentarios.js'
// import commentFirebase from '../store/CommentStoreFirebase.js'
import {ref} from 'vue'

const fecha1 = new Date()
const fecha = fecha1.toLocaleString()

const coment = ref('')

const props = defineProps({
    postId: '',
    typeOf: String,
})

const agregarComentario = () => {
    const comentario = {
        id: crypto.randomUUID(),
        postId: props.postId,
        comment: coment.value,
        date: fecha
    }
    addComment(comentario)
    coment.value = ''
    // console.log(comments.comentarios)
}

</script>

<template>
            <div class="d-flex align-items-center colores col-12 px-2">
                <label for="comment" class="borde"></label>
                <input v-model="coment" type="text"  class="col-8 mx-1 mb-2 mt-4 borde text-white" id="comment"
                    name="comment" placeholder="Add your comment..." required>
                <div class="col-4 mt-2">
                    <button type="submit" @click.prevent="agregarComentario" class="btn btn-success borde">Comment</button>
                </div>
            </div> 
</template>

<style scoped>
.colores {
   background-color: #336b87 !important;
   margin-left: 0.1%;
}
.borde{
    background-color: grey !important;
    border-radius: 10 0 0 10 !important;
}

::placeholder {color:white}


</style>