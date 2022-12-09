import { app } from '../firebase/index.js'
import {getAuth ,signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import profile from '../store/profileStore.js'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(response => profile.perfiles = response)
    .catch(error => console.warn ('error',error))
}

const logout = () => {
    signOut(auth)
    .then(()=> profile.perfiles = [])
    .catch((error) => console.log('error', error))
}

export {loginWithGoogle, logout}