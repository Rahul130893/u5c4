import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Home} from "./components/Home"
import {Login} from "./components/Login"
import {Logout} from "./components/Logout"
import {Navbar} from "./components/Navbar"
import {NewOrder} from "./components/NewOrder"
import {Orders} from "./components/Orders"
//import {ProtextedRoute} from "./components/ProtextedRoute"
import {Routes, Route} from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>

      </Routes>

      
    </div>
  )
}

export default App
