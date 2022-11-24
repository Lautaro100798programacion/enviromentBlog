<script setup>

</script>

<template>

    <body>
        <h2 class="d-flex justify-content-center mb-3">Contact</h2>
        <form action="">
            <div class="mb-3 input-group align-items-center">
                <label for="name" class="form-label text-white mx-2">Name</label>
                <input type="text" class="form-control mx-2" id="name">
            </div>
            <div class="mb-3 input-group align-items-center">
                <label for="surname" class="form-label text-white mx-2">Surname</label>
                <input type="text" class="form-control mx-2" id="surname">
            </div>
            <div class="mb-3 input-group align-items-center">
                <label for="email" class="form-label text-white mx-2">Email</label>
                <input type="email" class="form-control mx-2" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3 input-group align-items-center">
                <label for="subject" class="form-label text-white mx-2">Country</label>
                <input type="text" class="form-control mx-2" id="subject">
            </div>
            <div class="mb-3 input-group align-items-center">
                <label for="message" class="form-label text-white mx-2">Message</label>
                <textarea class="form-control mx-2" id="message" rows="3"></textarea>
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-success mb-3">Submit</button>
            </div>
        </form>
    </body>

</template>

<style scoped>
h2 {
    color: white
}
</style>