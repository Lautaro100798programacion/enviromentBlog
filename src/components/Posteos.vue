<script setup>

</script>

<template>

    <body>
        <div v-for="i in 3" :key="i" class="container-fluid col-10 mx-4 borde mb-2">
            <div class="row">
                <div class="d-flex mt-1 align-item-center">
                    <img src="../assets/img/perfil.png" alt="" class="mx-2">
                    <div>
                        <p class="mb-0 text-white">Name: user1</p>
                        <p class="mb-0 text-white">Date: xx-xx-XX</p>
                        <p class="text-white">category:</p>
                    </div>
                </div>
                <h5 class="d-3 text-white">Prueba</h5>
                <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur hic, consequuntur culpa sint saepe laborum alias nisi maiores. Quos ad minus laborum totam culpa doloribus ipsa eveniet ea explicabo excepturi.</p>
                <img src="../assets/img/parquenacionalriopilcomayo.png" alt="imagen" class="imagenpost">
                <ul class="d-flex mt-2">
                    <li class="d-flex text-white"><img src="../assets/img/like.png" alt="like"><p>Like</p></li>
                    <li class="d-flex text-white"><img src="../assets/img/comentar.png" alt=""><p class="text-white">Comment</p></li>
                    <li class="d-flex text-white"><img src="../assets/img/share.png" alt=""><p>Share</p></li>
                </ul>
            </div>
        </div>
    </body>
</template>

<style scoped>
h2 {
    color: white
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