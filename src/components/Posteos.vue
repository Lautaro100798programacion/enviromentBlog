<script setup>

</script>

<template>
    <body>
        <div v-for="i in 3" :key="i" class="container-fluid borde pt-2 mb-2">
            <div class="row">
                <div class="d-flex mt-1 align-item-center text-white">
                    <img src="../assets/img/messi.png" alt="" class="mx-2">
                    <div>
                        <p class="mb-0 ">Name: user1</p>
                        <p class="mb-0">Date: xx-xx-XX</p>
                        <p>category:</p>
                    </div>
                </div>
                <div class="text-white">
                    <h5 class="d-flex justify-content-center ">Titulo</h5>
                    <p class="col-10 offset-1 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur hic,
                        consequuntur culpa sint saepe laborum alias nisi maiores. Quos ad minus laborum totam culpa
                        doloribus ipsa eveniet ea explicabo excepturi.</p>
                    <img src="../assets/img/parquenacionalriopilcomayo.png" alt="imagen" class="col-11 offset-1 imagenpost">
                    <ul class="d-flex justify-content-between mt-2">
                        <li><img src="../assets/img/like.png" alt="like">
                        </li>
                        <li><img src="../assets/img/comentar.png" alt=""> </li>
                        <li><img src="../assets/img/share.png" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</template>

<style scoped>
h2 {
    color: white
}

.borde {
    background-color: #2a3132;
    margin-right: 10% !important;
}

.imagenpost {
    height: 60vh !important;
    width: 80vw !important;
}

.colores {
    background-color: #90AFC5;
}

li{
    list-style: none;
}
</style>