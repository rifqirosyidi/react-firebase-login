import React, { useState, useEffect } from 'react'
import fire from './fire'
import './App.css'
import Login from './components/Login'
import Hero from './components/Hero'


function App() {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [hasAccount, setHasAccount] = useState(false)

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailErr('')
    setPasswordErr('')
  }

  const handleSignIn = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailErr(err.message)
            break
          case "auth/wrong-password":
            setPasswordErr(err.message)
            break
        }
      })
  }

  const handleSignUp = () => {
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-imail":
            setEmailErr(err.message)
            break
          case "auth/weak-password":
            setPasswordErr(err.message)
            break
        }
      })
  }

  const handleSignOut = () => {
    fire.auth().signOut()
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className="App">
      {user ? (
        <Hero handleSignOut={handleSignOut} />
      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailErr={emailErr}
            passwordErr={passwordErr}
          />
        )}

    </div>
  );
}

export default App;
