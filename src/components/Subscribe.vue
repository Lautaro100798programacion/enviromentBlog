<script setup>
function enviar() {
    alert("Your request has been successfully received. Thank you!")
}
</script>

<template>
    <div class="text-white">
        <h2 class="d-flex justify-content-center">Suscribe to the newsletter</h2>
        <form action=""  @submit.prevent="enviar">
            <div class="d-flex inputs px-4">
                <label for="exampleFormControlInput1" class="form-label mx-2">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                    required>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <button type="submit" class="btn btn-success text-center">Subscribe</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.inputs {
    max-height: 5vh !important;
}
</style>
