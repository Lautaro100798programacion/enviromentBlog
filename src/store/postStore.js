import {reactive, ref} from 'vue'

const postState = reactive ({
    posts : [

    ],
    like: (0),
    addPost(post){
        this.posts.push(post)
    },
})

const like = ref (0)


export default postState; like;