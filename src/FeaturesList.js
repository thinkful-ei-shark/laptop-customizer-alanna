import React from 'react'
import FeatureItem from './FeatureItem';


export default function FeaturesList(props) {
    return Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <FeatureItem currencyFormat = {props.currencyFormat} feature= {feature} selected={props.selected} onChange={props.onChange} features={props.features}/>
          </fieldset>
        );
      });
  

}