import React from 'react'
import Header from './components/Header'
import Home from "./components/Home"
import "./styles/app.scss"
import Work from './components/Work'

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Work/>
    </>
  )
}

export default App