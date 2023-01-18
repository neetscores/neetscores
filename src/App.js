import React from "react"
import { AuthProvider } from "./contexts/AuthContext"
import { HashRouter, Routes, Route } from "react-router-dom"
import './App.css'
import AdminDashboard from "./components/AdminDashboard"
import AdminLogin from "./components/AdminLogin"
import UserLogin from "./components/UserLogin"
import Error from "./Error"
import SharedLayout from "./components/SharedLayout"
import AboutUs from "./components/AboutUs"
function App() {
  return (
    <div className="App">
        <HashRouter>
        <AuthProvider>
          <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<UserLogin/>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>
            <Route path="/user" element={<UserLogin/>}/>
            <Route path="/admin" element={<AdminDashboard/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </AuthProvider>
        </HashRouter>
    </div>
  )
}

export default App