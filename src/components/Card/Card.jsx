import React, {useState} from "react";

import tLogo from '../../assets/images/t-logo.png';
import "./Card.css";

export const Card = ({onClick, card, index, isInactive, isFlipped, isDisabled}) => {

    const handleCLick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };

    return (
        <>
            <div className="">
                <div className="scene">
                    <div                     
                        className={"card " + (isFlipped ? "is-flipped" : "") + (isInactive ? " is-inactive" : "")}
                        onClick={handleCLick}
                    >
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
