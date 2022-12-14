<script setup>

</script>

<template>

    <body>
        <h2 class="d-flex justify-content-center pt-3">Rules and Policies</h2>
        <div class="accordion" id="accordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Rule 1
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark text-white">
                        <p>Remember the human. Green is a place for creating community and belonging, not for attacking marginalized or vulnerable groups of people.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Rule 2
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>The posts must be about enviroment and sustainability. </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Rule 3
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Respect the privacy of others. Instigating harassment, for example by revealing someone’s personal or confidential information, is not allowed. Never post or threaten to post intimate or sexually-explicit media of someone without their consent.</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="../assets/img/fondorules.png" alt="rulesimg" class="rulesimg offset-3 mt-3">
    </body>
</template>

<style scoped>
h2 {
    color: white
}
body {
    min-height: 85vh;
}
.rulesimg{
    height: 30vh !important;
    width: 40vw !important;
}
</style>