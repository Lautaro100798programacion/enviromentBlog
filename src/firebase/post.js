import { app } from './index.js'
import {getFirestore, addDoc, collection, onSnapshot, doc, deleteDoc} from 'firebase/firestore'
import postFirebase from '../store/postStoreFirebase.js'

const db = getFirestore(app)
const commentsRef = collection(db, "posts")

const addPost = (post) => {
    addDoc(commentsRef, post)
}

onSnapshot(commentsRef, snapshot => {
     postFirebase.value = []
     snapshot.forEach (doc => {
        const post = {
            id: doc.id,
            title: doc.data().title,
            text: doc.data().text,
            category: doc.data().category, 
            date: doc.data().date
        }
     postFirebase.value.unshift(post)
     })
})

const deletePost = (id) => {
    deleteDoc(doc(commentsRef, id))
}

export {addPost, deletePost}