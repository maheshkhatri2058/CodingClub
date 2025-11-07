import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Demo from './Components/Demo'
import Discussion from './Pages/Discussion'
import { Link,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <> 
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/discussion' element={<Discussion/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}
export default App