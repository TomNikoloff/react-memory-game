import { useEffect, useState, useRef } from "react";

import {Card} from './Card';
import ImagesArr from "./Images";

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

//shuffleCards(Images);

export default function Board(){

    const [cards, setCards] = useState(
        () => shuffleCards(ImagesArr)
    );

    const [openCards, setOpenCards] = useState([]);
    const [clearedCards, setClearedCards] = useState({});
    //const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
    const [moves, setMoves] = useState(0);
    const [showModal, setShowModal] = useState(false);
    /*
    const [bestScore, setBestScore] = useState(
        JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
    );
    */
    const timeout = useRef(null);
/*
    const disable = () => {
        setShouldDisableAllCards(true);
    };
    
    const enable = () => {
        setShouldDisableAllCards(false);
    };
*/
    const checkCompletion = () => {
        if (Object.keys(clearedCards).length === ImagesArr.length) {
        setShowModal(true);
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
        // Have a maximum of 2 items in array at once.
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            // increase the moves once we opened a pair
            setMoves((moves) => moves + 1);
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

    const checkIsFlipped = (index) => {
        return openCards.includes(index);
    };
    
    const checkIsInactive = (card) => {
        return Boolean(clearedCards[card.type]);
    };
/*
    const handleRestart = () => {
        setClearedCards({});
        setOpenCards([]);
        setShowModal(false);
        setMoves(0);
        setShouldDisableAllCards(false);
        // set a shuffled deck of cards
        setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
    };
*/
    return (
        <>
            <div className="uk-grid uk-child-width-1-4@m uk-child-width-1-6@l">
                {cards.map((card, index) => {
                    return (
                        <Card 
                            key={uuidv4()}
                            card={card}
                            index={index}
                            /*
                            isDisabled={shouldDisableAllCards}
                            */
                            isInactive={checkIsInactive(card)}
                            isFlipped={checkIsFlipped(index)}
                            
                            onClick={handleCardClick}
                        />
                    )
                })}
            </div>  
        </>
    )
}