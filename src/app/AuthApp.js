import React from 'react'
import firebase from '../capabilities/firebase'

const AuthApp = () => (
  <div>
    App gos here
    <button
      type="button"
      onClick={() => firebase.auth().signOut()}
    >
      Logout
    </button>
  </div>
)

export default AuthApp
