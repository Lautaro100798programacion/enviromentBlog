import { app } from '../firebase/index.js'
import {getAuth ,signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((response) =>console.log(response))
    .catch(error => console.warn ('error',error))
}

const logout = () => {
    signOut(auth)
    .then(()=> {console.log('logout')})
    .catch((error) => console.log('error', error))
}

export {loginWithGoogle, logout}