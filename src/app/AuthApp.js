import React from 'react'
import { Button } from 'antd'
import firebase from '../capabilities/firebase'

const AuthApp = () => (
  <div>
    App gos here
    <Button
      type="button"
      onClick={() => firebase.auth().signOut()}
    >
      Logout
    </Button>
  </div>
)

export default AuthApp
