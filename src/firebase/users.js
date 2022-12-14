import { app } from './index.js'
import {getFirestore, addDoc, collection, onSnapshot, doc, deleteDoc} from 'firebase/firestore'
import commentStoreFirebase from '../store/CommentStoreFirebase.js'
import postFirebase from '../store/postStoreFirebase.js'
import users from '../store/UserStore.js'

const db = getFirestore(app)
const userRef = collection(db, "users")

const addUser = (user) => {
        addDoc(collection(db, "users"), user)
    }

// const updateUser = (user) {

// }


export {addUser}