import React from "react"
import { AuthProvider } from "./contexts/AuthContext"
import { HashRouter, Routes, Route } from "react-router-dom"
import './App.css'
import AdminDashboard from "./components/AdminDashboard"
import AdminLogin from "./components/AdminLogin"
import UserLogin from "./components/UserLogin"
import Error from "./components/Error"
import SharedLayout from "./components/SharedLayout"
import AboutUs from "./components/AboutUs"
import UserDashBoard from "./components/UserDashBoard"
<link href='https://fonts.googleapis.com/css?family=Andika' rel='stylesheet'></link>
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
            <Route path="/result" element={<UserDashBoard/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </AuthProvider>
        </HashRouter>
    </div>
  )
}

export default App