import {reactive} from 'vue'

const commentState = reactive ({
    comentarios : [

    ],
    addComment(comment){
        this.comentarios.unshift(comment)
    }
})

export default commentState;