<script setup>

</script>

<template>
    <body>
        <h2 class="d-flex justify-content-center mb-3 pt-3 text-white">Categories</h2>
        <div class="d-flex justify-content-center">
            <img id="img1" src="../assets/img/yaguareta.png" alt="yaguarete">
            <img id="img2" src="../assets/img/forest.jfif" alt="forest">
            <img id="img3" src="../assets/img/eficienciaenergetica.png" alt="eficiencia-energetica">
        </div>
        <img src="../assets/img/construccion.png" class="mt-4 construccion" alt="construccion">
    </body>
</template>

<style scoped>
body {
    background-color: black;
    min-height: 87vh
}
img {
    height: 15vh !important;
    width: 25vw !important;
}
#img1 {
    margin-right: 1.5em;
}
#img2 {
    margin-right: 1.5em;
}
.construccion{
    height: 50vh !important;
    width: 80vw !important;
    margin-left: 10vw; ;
    margin-right: 10vw;
}
</style>