import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import TourList from './components/TourList/TourList'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <TourList />
    </div>
  )
}

export default App
