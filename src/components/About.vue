<script setup>

</script>

<template>
    <div>
        <h2 class="d-flex justify-content-center">About us</h2>
        <div class="d-flex justify-content-center pt-4 mx-3">
            <img src="../assets/img/cuadrado.png" alt="cuadrado">
            <p class="text-white text-center">Lorem ipsum dolor sit amet. Est commodi esse non rerum voluptate aut placeat laborum. Non nemo </p>
        </div>
        <div>
            <h2 class="d-flex justify-content-center">Featured Posts</h2>
            <div class="d-flex justify-content-center">
                <div>
                    <img id="img1" class="mover" src="../assets/img/cuadrado.png" alt="cuadrado">
                    <p class="text-white text-center px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img id="img2" class="mover" src="../assets/img/cuadrado.png" alt="cuadrado">
                    <p class="text-white text-center px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src="../assets/img/cuadrado.png" class="mover" alt="cuadrado">
                    <p class="text-white text-center px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
}

#img2 {
    margin-right: 1.5em;
}
.mover {
    margin-left: 0.5em;
}
</style>