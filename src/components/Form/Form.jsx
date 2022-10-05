import React,{useState,useEffect,useCallback} from 'react'
import { useTelegram } from '../../hooks/useTelegram'

import "./Form.css"
function Form() {
    const [country,setCountry]=useState("")
    const [city,setCity]=useState("")
    const [subject,setSubject]=useState("phisical")
    const {tg}=useTelegram();
    const onSendData = useCallback(
      () => {
        const data={
            country,
            city,
            subject
        }
        tg.sendData(JSON.stringify(data))
      },
      [country,city,subject]
    )
     useEffect(() => {
       tg.MainButton.setParams({
        text:"Надіслати дані"
       })
       
    }, []);
    useEffect(()=>{
            if(!city||!country){
                tg.MainButton.hide()
            }else {
                tg.MainButton.show()
            }
    },[city,country])
    useEffect(()=>{
        tg.onEvent("mainButtonClicked",onSendData)
return ()=>{
    tg.offEvent("mainButtonClicked",onSendData)
}
    },[onSendData])
    const onchangeCountry=(e)=>{
        setCountry(e.target.value)
    }
    const onchangeCity=(e)=>{
        setCity(e.target.value)
    }
    const onchangeSubject=(e)=>{
        setSubject(e.target.value)
    }
    return (
        <div className="form">
            <h3>Введіть ваші дані</h3>
            <input onChange={onchangeCountry} type="text" className='input' placeholder='Країна' value={country} />
            <input onChange={onchangeCity} type="text" className='input' placeholder='Місто' value={city} />
            <select value={subject} onChange={onchangeSubject} сlassNmae="select" >
                <option value="physical">Фіз.</option>
                <option value="legal">Юр.</option>
            </select>
        </div>
    )
}

export default Form
