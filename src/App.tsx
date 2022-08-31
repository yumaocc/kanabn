import  { useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    let res = localStorage.getItem('user')
    if(!res) {
      navigate('/login')
    }
  }, [navigate])
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={ <Login />}></Route>
    </Routes>
  )
}
