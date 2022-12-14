import { app } from '../firebase/index.js'
import {getAuth ,signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import users from '../store/UserStore.js'
import {addUser}  from './users.js'
import loginout from '../store/loginout.js'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(response => {
    let newUser = {
        displayName: response.user.displayName,
        photoURL: response.user.photoURL,
        email: response.user.email
    } 
    users.value = {
        ... newUser
    }
    addUser(newUser)
    loginout.value = 1  
    })
    .catch(error => console.warn ('error',error))
}

const logout = () => {
    signOut(auth)
    .then(()=> 
    {users.value = (null)
    loginout.value = 0
    })
    .catch((error) => console.log('error', error))
}

export {loginWithGoogle, logout}