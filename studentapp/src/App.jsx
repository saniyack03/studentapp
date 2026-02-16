import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import Navbar from './components/Navbar'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <Routes>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/view' element={<View/>}></Route>
      
      
     </Routes>
        
    </>
  )
}

export default App
