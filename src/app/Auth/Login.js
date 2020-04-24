import React from 'react'
import fire from 'firebase'
import firebase from '../../capabilities/firebase'
import GoogleSignInButton from './GoogleSignInButton'

const provider = new fire.auth.GoogleAuthProvider()

const Login = () => (
  <>
    <GoogleSignInButton
      onClick={() => firebase.auth().signInWithPopup(provider)}
    />
  </>
)

export default Login
