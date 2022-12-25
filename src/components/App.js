import React from "react"
import Navbar from './Navbar'
import Section from './Section'
import About from "./About"
export default function App() {

  return (
    <div>
      <Navbar />
      <div>
      <Section text='ABOUT'/>
      <About/>
      </div>
      
    </div>
  )
  
}


