import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBx2MQxPttItKq9mnvGBT0n_WZfqVzNbsQ",
  authDomain: "crwn-clothing-6d58f.firebaseapp.com",
  databaseURL: "https://crwn-clothing-6d58f.firebaseio.com",
  projectId: "crwn-clothing-6d58f",
  storageBucket: "crwn-clothing-6d58f.appspot.com",
  messagingSenderId: "241507937828",
  appId: "1:241507937828:web:aba72eabc5fc0b2d8932b1",
  measurementId: "G-RGKW51DNBL"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
