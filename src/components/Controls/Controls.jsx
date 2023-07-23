import "./Controls.css";

export const Controls = ({moves, timer, reset}) => {
    return (
        <>
            <div className="contols uk-animation-scale-up">
                <div className="uk-grid uk-child-width-1-3 uk-grid-small uk-text-center">
                    <div className="uk-flex uk-flex-center uk-flex-middle">
                        <p className="control-heading">Moves: <br className="uk-hidden@s" /><span>{moves}</span></p>
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