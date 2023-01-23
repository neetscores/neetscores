import React, { useContext, useState, useEffect } from "react"
import { auth } from "../components/firebase"
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }
  function setUpRecaptha(number){
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',{},auth);
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth,number,recaptchaVerifier);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    setUpRecaptha
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}