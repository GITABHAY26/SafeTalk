import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import { Dashboard } from './Components/Dashboard'
import { Landing } from './Components/Landing'

function App() {
  

  return (
   <div>  
   
     <BrowserRouter>
     <Appbar></Appbar>
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Landing/>}/>
     </Routes>
     </BrowserRouter>
     </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return(<>
    <button onClick={()=>{
      navigate("/");
    }}>Landing_page</button>
    
    <button onClick={()=>{
      navigate("/dashboard");
    }}>Dashbord_page</button>
    </>
  )
}

export default App
