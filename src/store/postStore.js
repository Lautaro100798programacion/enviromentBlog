import {reactive, ref} from 'vue'
import { shouldTransformRef } from 'vue/compiler-sfc';

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