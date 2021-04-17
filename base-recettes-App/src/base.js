import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
require('dotenv').config();


const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL
  

})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
