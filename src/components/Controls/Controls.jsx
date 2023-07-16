import "./Controls.css";

export const Controls =({moves, timer, reset}) => {
    return (
        <>
            <div className="contols">
                <div className="uk-grid uk-child-width-1-3 uk-text-center">
                    <div className="uk-flex uk-flex-center uk-flex-middle">
                        <p className="control-heading">Moves: <span>{moves}</span></p>
                    </div>
                    <div>
                        <button onClick={reset} type="button" className="uk-button control-btn">Restart Game</button>
                    </div>
                    <div className="uk-flex uk-flex-center uk-flex-middle">
                        {timer}
                    </div>
                </div>
            </div>
        </>
    )
}