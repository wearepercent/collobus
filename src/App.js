import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from './capabilities/firebase'
import './App.css'
import PromoScreen from './app/PromoScreen'
import AuthApp from './app/AuthApp'

const App = () => {
  const [
    user, loading, error,
  ] = useAuthState(firebase.auth())

  if (loading) {
    return <div>...Loading</div>
  }

  if (user) {
    return <AuthApp user={user} />
  }
  return (
    <PromoScreen authError={error} />
  )
}

export default App
