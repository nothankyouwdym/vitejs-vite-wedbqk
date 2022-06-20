import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './About'
import Contact from "./Contact"
import Home from "./Home"
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
          </Route>
        </Routes>
  </BrowserRouter>
)
