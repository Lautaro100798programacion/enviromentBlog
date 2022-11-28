<script setup>

</script>

<template>

    <body>
        <h2 class="d-flex justify-content-center text-white">Productos</h2>
        <div v-for="i in 8" :key="i" class="d-flex flex-column margen mb-3">
            <div class="card" style="width: 18rem;">
                <img src="../assets/img/yaguarete.png" alt="yaguarete">
                <div class="card-body d-flex flex-column justify-content-center">
                    <h5 class="card-title d-flex justify-content-center">NombredelProyecto</h5>
                    <p class="card-text">Descripcion: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nisi dolorem consectetur facere voluptas id soluta magni exercitationem maxime harum sunt obcaecati eveniet, a deserunt quam voluptates architecto, cupiditate facilis!</p>
                    <a href="#" class="btn btn-success">Donate</a>
                </div>
            </div>
        </div>
    </body>

</template>

<style scoped>
body{
    background-color: #2A3132
}
.margen {
    margin-left: 5% !important;
}
img {
    height: 18rem !important;
    width: 18rem !important;
}
</style>