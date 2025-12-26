import React from 'react'
import "./App.css"
import "./index.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useNavigate} from "react-router-dom";
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'

const App = () => {
  
const isLoggedIn = localStorage.getItem("currentUser");
    return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/home" element={ <Home />}  />
    </Routes>
    </BrowserRouter>
);
}


export default App