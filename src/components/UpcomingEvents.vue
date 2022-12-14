<script setup>

</script>

<template>

    <body class="bg-success">
        <h2 class="d-flex justify-content-center pt-2">Upcoming Events</h2>
        <div class="card" style="width: 100%">
            <h1 class="d-flex justify-content-center text-white mt-2">Proximo encuentro</h1>
            <div class="card-body">
                <img src="../assets/img/parquenacionalriopilcomayo.png" class="imgcard" alt="...">
                <h5 class="card-title text-center text-success mt-3">Visita al parque nacional rio pilcomayo</h5>
                <p class="card-text text-white text-center">El Parque Nacional Río Pilcomayo conserva una muestra representativa del Distrito Oriental del Gran Chaco, caracterizado por una gran llanura cubierta de esteros y lagunas, sabanas con palmar, isletas de monte y selva de ribera.</p>
                <p class="card-text text-white text-center">Dia: Sabado 17 de Diciembre de 2022 </p>
                <p class="card-text text-white text-center">Hora: 17:00</p>
            </div>
        </div>
        <h2 class="d-flex justify-content-center pt-2">Important Dates</h2>
        <div class="d-flex justify-content-center mt-4">
            <img class="img1" src="../assets/img/jaguar.png" alt="yaguarete">
            <img class="img2" src="../assets/img/wildlife.png" alt="forest">
            <img src="../assets/img/forest.png" alt="eficiencia-energetica">
        </div>
        <div class="d-flex justify-content-center mt-5">
            <img class="img1" src="../assets/img/earthour.png" alt="earth hour">
            <img class="img2" src="../assets/img/earthday.png" alt="earth day">
            <img src="../assets/img/arbor.png" alt="">
        </div>
    </body>
</template>
<style scoped>
body {
    min-height: 91vh !important;
}

.card {
    background-color:#804000;
}

h2 {
    color: white;

}

img {
    height: 15vh !important;
    width: 25vw !important;
    border-radius: 10%;
}

.img1 {
    margin-right: 1.5em;
}

.img2 {
    margin-right: 1.5em;
}

.imgcard{
    height: 30vh !important;
    width: 80vw !important;
    margin-left: 5vw !important;
    margin-right: 10vw !important;
}
</style>
    