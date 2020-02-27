import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
      apiKey: "AIzaSyD7ewBD_fOeSNBWfPuqkyIsKwo6hB-BjBs",
      authDomain: "nuxt-firebase-9d76d.firebaseapp.com",
      databaseURL: "https://nuxt-firebase-9d76d.firebaseio.com",
      projectId: "nuxt-firebase-9d76d",
      storageBucket: "nuxt-firebase-9d76d.appspot.com",
      messagingSenderId: "861848391038",
      appId: "1:861848391038:web:5b9358da119d35d87c372f",
      measurementId: "G-R6TEPNPVQ8"
    }
    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}