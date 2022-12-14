<script setup>
</script>

<template>
    <div>
        <h2 class="d-flex justify-content-center mb-3">Post</h2>
        <p class="text-white text-center">You can post and comment about the enviroment and sustainability</p>
        <div class="d-flex justify-content-around">
            <div>
                <RouterLink to="/posts"><button class="btn btn-success">Posts</button></RouterLink>
            </div>
            <div>
                <RouterLink to="/newpost"><button class="btn btn-success">Add Post</button></RouterLink>
            </div>
        </div>
        

    </div>
</template>

<style scoped>
h2 {
    color:white
}

</style>