import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

const fb = firebase.initializeApp(firebaseConfig)

export default fb

firebase.firestore().enablePersistence()

export const db = fb.firestore()
