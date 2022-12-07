<script setup>

</script>

<template>

    <body>
        <h2 class="d-flex justify-content-center">About us</h2>
        <div class="d-flex justify-content-center align-items-center pt-4 mx-3">
            <img src="../assets/img/earthhug.png" alt="cuadrado">
            <p class="text-white text-center">we are a organization who work to care the earth and save the envieroment.
            </p>
        </div>
        <div>
            <h2 class="d-flex justify-content-center">Our Missions</h2>
            <div class="d-flex justify-content-center">
                <div>
                    <img id="img1" class="mover" src="../assets/img/amazonas.jfif" alt="cuadrado">
                    <p class="text-white text-center px-2">Save the forests and wetlands</p>
                </div>
                <div>
                    <img class="img2 mover" src="../assets/img/cardenal.jfif" alt="cuadrado">
                    <p class="text-white text-center px-2">Protect and save the endangered species</p>
                </div>
                <div>
                    <img class="img3 mover" src="../assets/img/energia.png" alt="cuadrado">
                    <p class="text-white text-center px-2">Resposible use of energy</p>
                </div>
            </div>
        </div>
        <div>
            <h2 class="d-flex justify-content-center">Work With Us</h2>
            <div class="d-flex justify-content-between">
            <img src="../assets/img/arbolsinfondo.png" alt="arbol">
                <RouterLink to="/work">
                <div class="mt-3">
                    <button class="btn btn-success">Send CV</button>
                </div>
            </RouterLink>
            <img src="../assets/img/arbolsinfondo.png" alt="arbol">
            </div>
        </div>
    </body>
</template>

<style scoped>
body {
    min-height: 91vh !important;
}

img {
    height: 20vh !important;
    width: 25vw !important;
}

h2 {
    color: white
}

img {
    height: 20vh !important;
    width: 25vw !important;
}

#img1 {
    margin-right: 1.5em;
    border-radius: 50%;
}

.img2 {
    margin-right: 1.5em;
    border-radius: 50%;
}

.img3 {
    margin-left: 2em;
    border-radius: 50% !important;
}

.mover {
    margin-left: 0.5em;
}
</style>