import React from 'react'
import fire from 'firebase'
import firebase from '../../capabilities/firebase'
import GoogleSignInButton from './GoogleSignInButton'

const provider = new fire.auth.GoogleAuthProvider()

const Login = () => (
  <div>
    <GoogleSignInButton
      onClick={() => firebase.auth().signInWithPopup(provider)}
    />
  </div>
)

export default Login
