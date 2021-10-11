import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyOEag76xVoZWdA38Z55ozwkfkC6qgkf8",
  authDomain: "react-chatbox-mathilde.firebaseapp.com",
  databaseURL: "https://react-chatbox-mathilde-default-rtdb.firebaseio.com",

})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
