import "../Controls.css";

export default function Controls(){

    const handleRestart = () => {
        setClearedCards({});
        setOpenCards([]);
        setShowModal(false);
        setMoves(0);
        setShouldDisableAllCards(false);
        // set a shuffled deck of cards
        setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
    };

    return (
        <>
            <div className="contols">
                <div className="uk-grid uk-child-width-1-3 uk-text-center">
                    <div className="uk-flex uk-flex-center uk-flex-middle">
                        <p className="control-heading">Move 0</p>
                    </div>
                    <div>
                        <button onClick={handleRestart} type="button" className="uk-button control-btn">Restart Game</button>
                    </div>
                    <div className="uk-flex uk-flex-center uk-flex-middle">
                        <p className="control-heading">0 Mins 0 Secs</p>
                    </div>
                </div>
            </div>
        </>
    )
}