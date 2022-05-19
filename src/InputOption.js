import React, { useState } from 'react';
import './InputOption.css';

function InputOption({ Icon, title, color, like }) {

  const [changeColor, setChangeColor] = useState('gray')

  return (
    <>
      {like ? (
        <div className="inputOption" onClick={()=>setChangeColor('#0177b7')} style={{color:changeColor}}>
            <Icon />
            <h4>{title}</h4>
        </div>
      ) : (
        <div className="inputOption">
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
      )}
    </>
  )
}

export default InputOption