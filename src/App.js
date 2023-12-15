import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Home from './pages/home/Home'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App