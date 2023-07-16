import React, {useState} from "react";

import tLogo from '../assets/images/t-logo.png';
import "../card.css";

export const Card = ({onClick, card}) => {
    const handleCLick = () => {
        !isFlipped && !isDisabled && onClick(index);
    }
    return (
        <>
            <div>
                <div 
                    className="scene"
                    /*
                    className={classnames("card", {
                        "is-flipped": isFlipped,
                        "is-inactive": isInactive
                    })}
                    onClick={handleCLick}
                    */
                    >
                    <div className="card">
                        
                        <div className='card-face card-front-face'>
                            <div>
                                <img src={tLogo}/>
                            </div>
                        </div>
                        <div className="card-face card-back-face">
                            <img className='card-img' src={card.image} />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
