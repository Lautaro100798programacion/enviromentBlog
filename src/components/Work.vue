<script setup>

</script>

<template>
    <body class="container-fluid">
        <h2 class="d-flex justify-content-center mb-3">Work with us</h2>
        <form action="">
            <div class="mb-3 input-group align-items-center">
                <label for="name" class="form-label text-white col-3 mx-2">Name</label>
                <input type="text" class="form-control col-9 mx-2" id="name">
            </div>
            <div class="mb-3 input-group align-items-center">
                <label for="surname" class="form-label text-white col-3 mx-2">Surname</label>
                <input type="text" class="form-control col-9 mx-2" id="surname">
            </div>
            <div class="mb-3 input-group align-items-center">
                <label for="Adress" class="form-label text-white col-3 mx-2">Address</label>
                <input type="text" class="form-control col-9 mx-2" id="Adress">
            </div>
            <div class="mb-3 input-group align-items-center">
                <label for="Adress" class="form-label text-white col-3 mx-2">Country</label>
                <input type="text" class="form-control col-9 mx-2" id="Adress">
            </div>
            <div class="mb-3 input-group align-items-center">
                <label for="email" class="form-label text-white col-3 mx-2">Email</label>
                <input type="email" class="form-control col-9 mx-2" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3 input-group align-items-center">
                <label for="linkedin" class="form-label text-white col-3 mx-2">Linkedin</label>
                <input type="text" class="form-control col-9 mx-2" id="linkedin">
            </div>
            <div class="d-flex">
                <legend class="text-white col-3">Gender</legend>
                <div class="text-white d-flex justify-content-center col-9">
                    <div class="form-check mx-2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                            checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </div>
            </div>
            <div class="d-flex mb-2">
                <legend class="text-white col-3">Position</legend>
                <div class="text-white d-flex justify-content-center col-9 mx-2">
                    <div class="form-check mx-2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Position 1
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                            checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Position 2
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-3 d-flex text-white align-items-center">
                <p class="text-white col-3 mx-2">Attach your CV</p>
                <input class="col-9" type="file" name="adjunto" accept=".pdf, .jpg">
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