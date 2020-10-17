import React from 'react';
import SummaryItem from './SummaryItem';
import Total from './Total';

export default function MainSummary(props){
    return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryItem currencyFormat={props.currencyFormat} selected = {props.selected}/>
                <Total currencyFormat={props.currencyFormat} total={props.total}/>
          </section>
    )
}