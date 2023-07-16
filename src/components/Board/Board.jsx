import { useEffect, useState, useRef } from "react";

import {Card} from '../Card/Card';
import {Controls} from '../Controls/Controls';
import {Results} from '../Results/Results'
import ImagesArr from "../Images";

import { v4 as uuidv4 } from 'uuid';
uuidv4();

const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
}

export default function Board(){

    const [cards, setCards] = useState(
        () => shuffleCards(ImagesArr)
    );

    const [openCards, setOpenCards] = useState([]);
    const [clearedCards, setClearedCards] = useState({});
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
    const [moves, setMoves] = useState(0);
    /*
    const [bestScore, setBestScore] = useState(
        JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
    );
    */
    const timeout = useRef(null);

    const disable = () => {
        setShouldDisableAllCards(true);
    };
    
    const enable = () => {
        setShouldDisableAllCards(false);
    };

    const checkCompletion = () => {

        if ((Object.keys(clearedCards).length * 2) === ImagesArr.length) {

            handleTimerPause();
            UIkit.modal(document.getElementById('results_modal')).show();
            /*
            const highScore = Math.min(moves, bestScore);
            setBestScore(highScore);
            localStorage.setItem("bestScore", highScore);
            */
        }
        
    };

    // Check if both the cards have same type. If they do, mark them inactive
    const evaluate = () => {

        const [first, second] = openCards;
        enable();

        if (cards[first].type === cards[second].type) {

            setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
            setOpenCards([]);
            return;
        }
        
        // Flip cards after a 500ms duration
        timeout.current = setTimeout(() => {
            setOpenCards([]);
        }, 500);

    };

    const handleCardClick = (index) => {

        if(moves === 0 && openCards.length === 0){
            handleTimerStart();
        }
        // Have a maximum of 2 items in array at once.
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            // increase the moves once we opened a pair
            setMoves((moves) => moves + 1);
            disable();
        } else {
            // If two cards are already open, we cancel timeout set for flipping cards back
            clearTimeout(timeout.current);
            setOpenCards([index]);
        }
    };

    useEffect(() => {
        let timeout = null;
        if (openCards.length === 2) {
        timeout = setTimeout(evaluate, 300);
        }
        return () => {
        clearTimeout(timeout);
        };
    }, [openCards]);

    useEffect(() => {
        checkCompletion();
    }, [clearedCards]);

    const checkIsFlipped = (index) => {
        return openCards.includes(index);
    };
    
    const checkIsInactive = (card) => {
        return Boolean(clearedCards[card.type]);
    };

    const counterRef = useRef(null);
    const [timer, setTimer] = useState(0);

    const handleTimerStart = () => {

        counterRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

    }

    const handleTimerPause = () => {
        clearInterval(counterRef.current)
      }

    const handleTimerReset = () => {
        clearInterval(counterRef.current);
        setTimer(0);
    }

    const formatTime = (timer, modal) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2);
        const minutes = `${Math.floor(timer / 60)}`;

        if(modal == true){

            return <p> With a time of <span>{minutes}</span> minutes & <span>{getSeconds}</span> seconds.</p>;

        } else {

            return <p className="control-heading"><span>{minutes}</span> Mins <span>{getSeconds}</span> Secs</p>;

        }

    }

    const handleRestart = () => {
        // Reset Timer
        handleTimerReset();

        setClearedCards({});
        setOpenCards([]);
        setMoves(0);
        setShouldDisableAllCards(false);

        // set a shuffled deck of cards
        setCards(shuffleCards(ImagesArr));

      };

    return (
        <>
            <Controls
                moves={moves}
                timer={formatTime(timer)}
                reset={handleRestart}
            />
            <div className="board uk-padding uk-padding-remove-top">
                <div className="uk-grid uk-child-width-1-4">
                    {cards.map((card, index) => {
                        return (
                            <Card 
                                key={index}
                                card={card}
                                index={index}
                                isDisabled={shouldDisableAllCards}
                                isInactive={checkIsInactive(card)}
                                isFlipped={checkIsFlipped(index)}
                                
                                onClick={handleCardClick}
                            />
                        )
                    })}
                </div>  
            </div>
            <Results 
                moves={moves}
                timer={formatTime(timer, true)}
                reset={handleRestart}
            />
        </>
    )
}