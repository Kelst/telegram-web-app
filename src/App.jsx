import { useState,useEffect } from 'react'
import './App.css'
const tg=window.Telegram.WebApp;
function App() {
useEffect(()=>{
tg.ready()
},[])
const onClose=()=>{
  tg.close();
}
  return (
    <div className="App">
      Hello
    <button onClick={onClose}>Закрити</button>
    </div>
  )
}

export default App
