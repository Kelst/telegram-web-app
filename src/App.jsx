import './App.css'
import { useState,useEffect } from 'react'
import Header from './components/Header/Header';import { useTelegram } from './hooks/useTelegram';
0
function App() { 
   const {tg}=useTelegram() 
  useEffect(()=>{
    tg.ready()
    },[])
  
  return (
    <div className="App">
   <Header/> 
    </div>
  )
}

export default App
