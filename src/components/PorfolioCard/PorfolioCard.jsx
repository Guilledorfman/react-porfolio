import React, {useState, useEffect} from 'react'
import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';

const PorfolioCard = ({name, img, subtitle, text, cajaClass, index, setActiveNumber}) => {


const [ readMoreActive, setReadMoreActive ] = useState(false)

useEffect(()=>{
    cajaClass === 'caja' ? setReadMoreActive(false) : <></>
},[cajaClass])

  return (
        <div className={cajaClass} onClick={()=>{setActiveNumber(index)}} style={{ backgroundImage: `url(${img})` }}>
            <div className={'readmore-text ' + (readMoreActive && 'active')}>
                <p>
                    {text}
                </p>
            </div>
            <h2 className="nombre">{name}</h2>
            <div className={'readmore ' + (readMoreActive && 'active')}>
                <div className="button" onClick={()=>{setReadMoreActive(!readMoreActive)}}>
                    <div className="readmore-bars">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                    </div>
                    {readMoreActive ? <i>close</i> : <i>read more</i>}
                    
                </div>
            </div>
            <div className="buttons">
                <a href="">
                        <VisibilityIcon sx={{ fontSize: 50 }}/>
                    LIVE DEMO
                    </a>
                <a href="">
                        <CodeIcon sx={{ fontSize: 50 }}/>
                    CODE
                </a>
            </div>
            <p className="text">{subtitle}</p>
        </div>
  )
}

export default PorfolioCard