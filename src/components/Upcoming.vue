<script setup>
</script>

<template>
    <div>
        <RouterLink to="/upcoming"><h2 class="d-flex justify-content-center mb-3">Upcoming Events</h2></RouterLink>
        <div class="d-flex justify-content-center">
            <RouterLink to="/upcoming"><img id="img1" src="../assets/img/jaguar.png" alt="yaguarete"></RouterLink>
            <RouterLink to="/upcoming"><img id="img2" src="../assets/img/wildlife.png" alt="forest"></RouterLink>
            <RouterLink to="/upcoming"><img src="../assets/img/forest.png" alt="eficiencia-energetica"></RouterLink>
        </div>
    </div>
</template>

<style scoped>
h2 {
    color:white
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
</style>