import React, {useState} from "react";

import tLogo from '../assets/images/t-logo.png';
import Images from "./Images";


export const Card = (props) => {

    return (
        <>
            <div >
                <div className="card-cover">
                    {/*
                    <div className='card-logo-overlay'>
                        <div>
                            <img src={tLogo}/>
                        </div>
                    </div>
                    */}
                    <img className='card' src={props.card} />
                </div>
            </div>
        </>
        
    )
}