import { useState } from 'react'
import Login from './pages/Login'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App
