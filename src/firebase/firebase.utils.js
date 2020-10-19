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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
