import { app } from './index.js'
import {getFirestore, addDoc, collection, onSnapshot, doc, deleteDoc} from 'firebase/firestore'
import postFirebase from '../store/postStoreFirebase.js'

const db = getFirestore(app)
const commentsRef = collection(db, "posts")

const addPost = (post) => {
    addDoc(commentsRef, post)
}

const getPost = () => {
    onSnapshot(commentsRef, snapshot => {
        postFirebase.value = []
        snapshot.forEach (doc => {
           const post = {
               nombre: doc.data().name,
               foto: doc.data().photo,
               id: doc.id,
               title: doc.data().title,
               text: doc.data().text,
               category: doc.data().category, 
               date: doc.data().date
           }
        if (!postFirebase.value.includes(post.id)){
           postFirebase.value.unshift(post)
        }
        postFirebase.value.sort((a, b) => {b.date - a.date})
        })
   })
} 

const deletePost = (id) => {
    deleteDoc(doc(commentsRef, id))
}

export {addPost, deletePost, getPost}