import React, {useState} from "react";

import tLogo from '../assets/images/t-logo.png';
import "../card.css";

export const Card = ({onClick, card}) => {
    const handleCLick = () => {
        !isFlipped && !isDisabled && onClick(index);
    }
    return (
        <>
        /
            <div 
            onClick={handleCLick}
            >
                <div className="card-cover">
                    
                    <div className='card-face card-front-face'>
                        <div>
                            <img src={tLogo}/>
                        </div>
                    </div>
                    <div className="card-face card-back-face">
                        <img className='card' src={card.image} />
                    </div>
                </div>
            </div>
        </>
        
    )
}
