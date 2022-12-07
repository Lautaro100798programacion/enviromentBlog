import {reactive} from 'vue'

const commentState = reactive ({
    comentarios : [

    ],
    addComment(comment){
        this.comentarios.push(comment)
    }
})

export default commentState;