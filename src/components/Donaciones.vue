<script setup>
</script>

<template>

    <body>
        <h2 class="d-flex justify-content-center bg-secondary text-white pt-2 pb-2">Proyectos</h2>
        <div v-for="i in 3" :key="i">
            <div class="card container-fluid bg-dark text-white borde mt-2 mb-2">
                <div class="row">
                    <img class="mt-3 p-0" src="../assets/img/yaguarete.png" alt="yaguarete">
                    <div class=" col-8 ">
                        <h5 class="card-title col-12 offset-1 mt-2">NombredelProyecto</h5>
                        <p class="card-text col-11 text-justify offset-1">Descripcion: Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Sed</p>
                    </div>
                </div>
                <div class="row mt-3 d-flex flex-row">
                    <div class="col-7 mx-2">
                        <a href="https://www.argentina.gob.ar/ambiente/accion/yaguarete" target="_blank" class="btn btn-danger">More Information</a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href="https://mpago.la/21PfTaN" target="_blank" class="btn btn-success">Donate</a>
                    </div>
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
    height: 6rem !important;
    width: 6rem !important;
    border-radius: 20%;
    border: 1px solid black;
}
</style>