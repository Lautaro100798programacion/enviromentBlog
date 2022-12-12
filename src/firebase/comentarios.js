import { app } from './index.js'
import {getFirestore, addDoc, collection, onSnapshot, doc, deleteDoc} from 'firebase/firestore'
import commentStoreFirebase from '../store/CommentStoreFirebase.js'

const db = getFirestore(app)
// const commentsRef = collection(db, "posts")

// let postId = []

// const prueba = postFirebase.value.forEach ((post)=>{
//     postId.unshift(post.id) 
//     console.log(postId)
// })

// const colecciones = postId.forEach( (elemento) => {
//     collection(db, elemento)
// });

const addComment = (comment) => {
        addDoc(collection(db, "comments"), comment)
    }

onSnapshot(collection(db, "comments"), snapshot => {
     commentStoreFirebase.value = []
     snapshot.forEach (doc => {
        const comment = {
            id: doc.id,
            comment: doc.data().comment,
            date: doc.data().fecha
        }
        commentStoreFirebase.value.unshift(comment)
     })
})

const deleteComment = (id) => {
    deleteDoc(doc(collection(db, "comments"), id))
}


export {addComment, deleteComment}