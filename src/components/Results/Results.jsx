import './Results.css';

export const Results =({moves, timer, reset}) => {

    
    UIkit.util.on('#results_modal', 'hide', function (event) {
        // do something
        reset();
    });
    
    return (

        <div id="results_modal" className="uk-flex-top" uk-modal="bg-close: false;">
            <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-text-center">
                <h2 className="uk-modal-title">
                    <span uk-icon="star" className='uk-margin-right'></span>
                    Congratulations
                    <span uk-icon="star" className='uk-margin-left'></span>
                </h2>
                <p>
                    You did it in <span>{moves}</span> moves.
                </p>
                {timer}
                <hr className='uk-divider-icon' />
                <div className='uk-flex uk-flex-center'>
                    <button type="button" className="uk-button control-btn uk-modal-close">Restart Game</button>
                </div>
            </div>
        </div>

    )
};