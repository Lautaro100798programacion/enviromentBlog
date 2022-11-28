<script setup>

</script>

<template>

    <body class="contenedorperfil">
        <div class="container-fluid mt-0">
            <img src="../assets/img/messi.png" alt="messi" class="imagenperfil offset-4 mt-3">
            <h3 class="col-9 offset-2 mt-3">Lionel Andres Messi</h3>
            <p class="text-center col-8 offset-2">Descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam
                corrupti illo
                quidem</p>
            <div class="d-flex justify-content-around">
                <p class="btn btn-success">Post: XXX</p>
                <p class="btn btn-success">Donations: XXX</p>
            </div>
            <div class="container-fluid mt-0">
                <h3 class="col-8 offset-4 mt-3 mb-2 text-white">Posts</h3>
                <div v-for="i in 3" :key="i" class="container-fluid   borde mb-2">
                    <div class="row">
                        <div class="d-flex mt-1 align-item-center">
                            <img src="../assets/img/messi.png" alt="" class="mx-2">
                            <div>
                                <p class="mb-0 text-white">Name: user1</p>
                                <p class="mb-0 text-white">Date: xx-xx-XX</p>
                                <p class="text-white">category:</p>
                            </div>
                        </div>
                        <h5 class="d-3 text-white">Prueba</h5>
                        <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur hic,
                            consequuntur culpa sint saepe laborum alias nisi maiores. Quos ad minus laborum totam culpa
                            doloribus ipsa eveniet ea explicabo excepturi.</p>
                        <img src="../assets/img/parquenacionalriopilcomayo.png" alt="imagen" class="imagenpost">
                        <ul class="d-flex justify-content-around mt-2">
                            <li class="d-flex text-white"><img src="../assets/img/like.png" alt="like">
                                <!-- <p>Like</p> -->
                            </li>
                            <li class="d-flex text-white"><img src="../assets/img/comentar.png" alt="comment">
                                <!-- <p class="text-white">Comment</p> -->
                            </li>
                            <li class="d-flex text-white"><img src="../assets/img/share.png" alt="share">
                                <!-- <p>Share</p> -->
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </body>

</template>

<style scoped>
.contenedorperfil {
    background-color: grey;
    min-height: 90vh;
    border: 1px solid red;
}

.imagenperfil {
    height: 20vh !important;
    width: 30vw !important;
    border: 1px solid black;
    border-radius: 50%;
    background-color: white;
}

.borde {
    background-color: #336b87;
    border-radius: 1rem;
    margin-right: 10% !important;
}
.imagenpost{
    height: 60vh !important;
    width: 80vw !important;
}
.colores {
    background-color: #90AFC5;
}
</style>