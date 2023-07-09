import React, {useState} from "react";

import tLogo from '../assets/images/t-logo.png'
import lolaOne from '../assets/images/lolaOne.jpg';
import lolaTwo from '../assets/images/lolaTwo.jpg';
import lolaThree from '../assets/images/lolaThree.jpg';
import lolaFour from '../assets/images/lolaFour.jpg';
import lolaFive from '../assets/images/lolaFive.jpg';
import lolaSix from '../assets/images/lolaSix.jpg';
import lolaSeven from '../assets/images/lolaSeven.jpg';
import lolaEight from '../assets/images/lolaEight.jpg';
import lolaNine from '../assets/images/lolaNine.jpg';
import lolaTen from '../assets/images/lolaTen.jpg';
import lolaEleven from '../assets/images/lolaEleven.jpg';
import lolaTwelve from '../assets/images/lolaTwelve.jpg';

const imgArray = [lolaOne, lolaTwo, lolaThree, lolaFour, lolaFive, lolaSix, lolaSeven, lolaEight, lolaNine, lolaTen, lolaEleven, lolaTwelve];

export default function Card(){

    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * imgArray.length);
        setRandomNumber(randomNumber);
    }


    return (
        <>
            <div>
                <div className="card-cover">
                    <div className='card-logo-overlay'>
                        <div>
                            <img src={tLogo}/>
                        </div>
                    </div>
                    <img className='card' src={imgArray[randomNumber]}/>
                </div>
            </div>
        </>
    )
}