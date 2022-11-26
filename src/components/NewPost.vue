<script setup>
// import 
</script>

<template>

    <body>
        <h2 class="d-flex justify-content-center">New Post</h2>
        <div class="container-fluid col-10 mx-4 borde">
            <div class="row">
            <form action=""></form>
                <textarea class="textarea col-10 mx-4 mt-4 colores text-white" name="textopost" id="textopost" cols="50"
                    placeholder="Create a post"></textarea>
                <img src="../assets/img/imagen.png" alt="imagen" class="mt-3 mx-3">
                <img src="../assets/img/video.png" alt="imagen" class="mt-3 mx-3">
                <select class="col-10 mx-4 mt-4 colores text-white required " aria-label="Default select example">
                    <option selected>Choose the category</option>
                    <option value="yaguarete">Yaguarete</option>
                    <option value="forest">Forest</option>
                    <option value="energy efficiency">Energy efficiency</option>
                </select>
                    <button type="submit" class="btn btn-success col-4 mt-4 mb-2 mx-4">Post</button>
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
.colores {
    background-color: #90AFC5;
}
</style>