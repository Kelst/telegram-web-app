import React, { Children } from 'react'
import "./Button.css"
function Button({children,onClick,className}) {
  
    return (
       <button onClick={onClick} className={`button ${className}`}>{children}</button>
    )
}

export default Button
 