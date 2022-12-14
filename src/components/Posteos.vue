<script setup>
import comments from '../store/commentStore.js'
import store from '../store/postStore.js'
import { ref, onMounted } from 'vue'
import postFirebase from '../store/postStoreFirebase';
import {deletePost} from '../firebase/post.js'
import comment from '../components/Comment.vue'
import profile from '../store/profileStore.js'


onMounted(() => {
    console.log(store.posts);
})

const fecha1 = new Date()
const fecha = fecha1.toLocaleString()

// const eliminarPosteo = (id) => {
//     deletePost(id)
// }

const coment = ref('')
// const texto = ref('')
// const categorias = ref('')

// const eliminarPosteo = (id) =>
// store.posts = store.posts.filter(post => post.id !== id)

// const agregarComentario = () => {
//     const comentario = {
//         id: crypto.randomUUID(),
//         comment: coment.value,
//         date: fecha
//     }
//     addComment(comentario)
//     // comments.addComment(comentario)
//     coment.value = ''
//     console.log(comments.comentarios)
// }


//             <div v-else>
//                 <RouterLink to="/LoginProfileView"><img :src=profile.perfiles.user.photoURL alt="fotoPerfil"></RouterLink>
//             </div>
//         </div>

const prueba = () => console.log(profile);

// const addLike = () => {
//     store.like++;
// }

// const quitLike = () => {
//     if(store.like > 0) 
//     store.like--;
// }


</script>

<template>
    <body>
        <!-- <div v-for="post in postFirebase" :key=post.id class="container-fluid borde pt-2 mb-2">
            <div class="row">
                <div class="d-flex mt-1 align-items-baseline text-white">
                    <img :src=post.photo alt="Perfil" class="mx-2">
                    <p class="mb-0 ">{{post.name}}</p>
                    <img src="../assets/img/basurero.png" @click="deletePost(post.id)" alt="basurero" class="offset-5">
                </div>
                <div class="text-white mt-3">
                    <h5 class="d-flex justify-content-center ">{{ post.title }}</h5>
                    <p class="col-10 offset-1 text-justify">{{ post.text }}</p>
                    <img src="../assets/img/parquenacionalriopilcomayo.png" alt="imagen"
                        class="col-11 offset-1 imagenpost">
                    <div class="d-flex align-items-baseline offset-2">
                        <p class="mt-2 text-secondary mx-3">{{ post.category }}</p>
                        <p class="mb-0 mx-3">{{ post.date }}</p>
                    </div>
                    <ul class="d-flex justify-content-between align-items-baseline mt-2 mx-2">
                        <li class="text-white d-flex align-items-baseline">
                            <button class="btn" @click="addLike"><img src="../assets/img/like.png" alt="like"></button>
                            <p class="text-white">{{ store.like }}</p>
                        </li>
                        <li class="text-white d-flex align-items-baseline">
                            <button class="btn" @click="quitLike"><img src="../assets/img/dislike.png" alt="like"></button>
                        </li>
                        <li>
                            <img src="../assets/img/comentar.png" alt="comment">
                        </li>
                        <li><img src="../assets/img/share.png" alt="share"></li>
                        <button @click="prueba">Pruebas</button>
                    </ul>
                </div>
            </div>
            <div class="separador"></div> -->
            <!-- <comment /> -->
            <!-- <div class="row">
                <label for="comment" class="form-label "></label>
                <input v-model="coment" type="text" class="col-10 mx-4 mt-4 colores text-white" id="comment"
                    name="comment" placeholder="Add your comment..." required>
                <div class="col-7 offset-4 mt-2">
                    <button type="submit" @click="agregarComentario" class="btn btn-success">Comment</button>
                </div>
            </div>
            <div v-if="commentFirebase.length > 0">
                <div v-for="comentario in commentFirebase" :key="comentario"
                    class=" row container-fluid borde pt-2 mb-2">
                    <div class="d-flex">
                        <img src="../assets/img/messi.png" class="fotocomentario" alt="fotocomentario">
                        <p class="text-white bg-secondary col-9 mt-2">{{ comentario.comment }}</p>
                    </div>
                    <p class="text-white col-9 offset-2">{{comentario.date}}</p>
                    <button @click="deleteComment(comentario.id)">Eliminar</button>
                </div>
            </div> -->
        <!-- </div> -->
    </body>
</template>

<style scoped>
body {
    min-height: 91vh;
}

h2 {
    color: white
}

.borde {
    background-color: rgb(37, 36, 36);
    border-radius: 1rem;
    margin-right: 10% !important;

}

.imagenpost {
    height: 30vh !important;
    width: 80vw !important;
}

li {
    list-style: none;
}

.separador {
    border-top: 1px solid white
}

.fotocomentario {
    height: 3rem !important;
    width: 4rem !important;

}
</style>