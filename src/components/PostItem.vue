<script setup>
import store from '../store/postStore.js'
import { deletePost } from '../firebase/post.js'
import postFirebase from '../store/postStoreFirebase';
import Comment from '../components/Comment.vue';
import CommentsContainer from '../components/CommentContainer.vue'

const props = defineProps({
    post: {},
    typeof: Object
})

const addLike = () => {
    store.like++;
}

const quitLike = () => {
    if (store.like > 0)
        store.like--;
}


</script>

<template>
    <body>
        <div class="card color borde mb-2" style="width: 100%">
            <div class="card-body">
                <div class="d-flex align-items-baseline">
                    <img :src=post.foto alt="Perfil" class="card-img-top">
                    <p class="mb-0 text-white ">{{ post.nombre }}</p>
                    <img src="../assets/img/basurero.png" @click="deletePost(post.id)" alt="basurero" class="offset-5">
                </div>
                <h5 class="card-title d-flex justify-content-center text-white mt-2 mb-0">{{ post.title }}</h5>
            </div>
            <div class="cuadrodetexto mt-0">
                <p class="card-text text-white mx-3">{{ post.text }}</p>
                <!-- <img src="../assets/img/parquenacionalriopilcomayo.png" alt="Perfil" class="fotopost"> -->
            </div>
            <div class="d-flex">
                <p class="col-6 text-white mx-1">{{ post.category }}</p>
                <p class="col-6 mb-0  text-white">{{ post.date }}</p>
            </div>
            <ul class="d-flex justify-content-center align-items-baseline margen">
                <li class="col-3 text-white d-flex align-items-baseline">
                    <button class="btn" @click="addLike"><img src="../assets/img/like.png" alt="like"></button>
                    <p class="text-white">{{ store.like }}</p>
                </li>
                <li class="col-3 text-white d-flex align-items-baseline mx-2">
                    <button class="btn" @click="quitLike"><img src="../assets/img/dislike.png" alt="like"></button>
                </li>
                <li class="col-3">
                    <img src="../assets/img/comentar.png" alt="comment">
                </li>
                <li class="col-3"><img src="../assets/img/share.png" alt="share"></li>
            </ul>
            <Comment :postId="post.id" />
            <CommentsContainer :postId="post.id" />
        </div>
    </body>
</template>

<style scoped>
h2 {
    color: white
}

.borde {
    border-radius: 1rem 0 0 0;
    margin-right: 20vh !important;
}

.cuadrodetexto {
    background-color: grey;
    margin: 0.5rem;
    border: 0.1rem solid white
}

.color {
    background-color: #336b87 !important
}

ul{
    list-style: none;
}

.margen {
    margin-left: 0% !important;
}


</style>