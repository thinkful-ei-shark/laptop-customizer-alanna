import React from 'react';

export default function MainSummary(props){
    return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {props.summary}
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {props.currencyFormat.format(props.total)}
                </div>
                </div>
          </section>
    )
}