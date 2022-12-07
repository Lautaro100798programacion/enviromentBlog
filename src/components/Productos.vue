<script setup>

</script>

<template>

    <body>
        <h2 class="d-flex justify-content-center bg-secondary text-white pt-2 pb-2">Productos</h2>
        <div v-for="i in 3" :key="i">
            <div class="card container-fluid bg-dark text-white borde mt-2 mb-2">
                <div class="row">
                    <img class="mt-3 p-0" src="../assets/img/remera.png" alt="yaguarete">
                    <div class=" col-8 ">
                        <h5 class="card-title col-12 offset-1 mt-2">Remera Koala Green</h5>
                        <p class="card-text col-11 text-justify offset-1">Descripcion: Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Sed</p>
                        <div class="d-flex align-items-center">
                            <div class=" col-5 mt-2">
                                <label for="size" class="mx-2">Size</label>
                                <select class="bg-dark text-white" id="Size">
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                            </div>
                            <div class="col-6 mt-3">
                                <p class="text-white display-4">$1500</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offset-5 mt-3 mb-3">
                    <a href="https://mpago.la/21PfTaN" target="_blank" class="btn btn-success">Buy</a>
                </div>
            </div>
        </div>
    </body>

</template>

<style scoped>
body {
    background-color: #2A3132
}

.borde {
    border: 1px solid white;
}


img {
    margin-left: 0.3rem !important;
    height: 12rem !important;
    width: 6rem !important;
    border-radius: 20%;
    border: 1px solid black;
}
</style>