import React from 'react'
import '../css/App.css'
import '../index.css'
import Title from '../assets/Crystal_typo_site.png'
import { useMyContext } from './MyContext'
function StartScreen() {
  const {setActiveIndex} = useMyContext()
  return (
    <div className='startScreen'>
        <section className='headerStartScreen'>
           <img src={Title} alt="Crystal Digger" />
  
        </section>
    <section className='footerStartScreen'><h2
    onClick={()=>{setActiveIndex(1)}}>Enter site</h2> </section></div>
  )
}

export default StartScreen