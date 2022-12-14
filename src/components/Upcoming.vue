<script setup>
</script>

<template>
    <div>
        <RouterLink to="/upcoming"><h2 class="d-flex justify-content-center mb-3">Upcoming Events</h2></RouterLink>
        <p class="text-white text-center">We organize a monthly meeting in different nature reserves in the country. Join us!</p>
        <div class="d-flex justify-content-center">
            <RouterLink to="/upcoming"><button class="btn btn-success">Next Events</button></RouterLink>
        </div>
        <div class="d-flex justify-content-center mt-4">
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
    border-radius: 10%;
}
#img1 {
    margin-right: 1.5em;
}
#img2 {
    margin-right: 1.5em;
}
</style>