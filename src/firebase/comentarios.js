import {
    app
} from './index.js'
import {
    getFirestore,
    addDoc,
    collection,
    onSnapshot,
    doc,
    deleteDoc
} from 'firebase/firestore'
import commentStoreFirebase from '../store/CommentStoreFirebase.js'
import postFirebase from '../store/postStoreFirebase.js'

const db = getFirestore(app)
const commentsRef = collection(db, "comments")

const addComment = (comment) => {
    addDoc(commentsRef, comment)
}

const getComment = () => {
    onSnapshot(commentsRef, snapshot => {
        commentStoreFirebase.value = []
        snapshot.forEach(doc => {
            const comment = {
                // nombre: doc.data().name,
                // foto: doc.data().photo,
                id: doc.id,
                postId: doc.data().postId,
                comment: doc.data().comment,
                date: doc.data().fecha
            }
            commentStoreFirebase.value.unshift(comment)
        })
    })
}

const deleteComment = (id) => {
    deleteDoc(doc(collection(db, "comments"), id))
}


export {
    addComment,
    deleteComment,
    getComment
}