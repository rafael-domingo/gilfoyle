import './Metadata.css';
import React from 'react';

// Packages
import AnimatedNumber from 'animated-number-react';

function Metadata({data}) {
    const divStyle = {
        color: 'white',
        fontSize: '2em',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        height: '50%'
    }

    const animatedStyle = {
        width: '100%',
        fontSize: '3em'
    }
    const currentPrice = Math.ceil(data.price*100)/100;
    const currentPriceFormat = value => `Current Price: ${value.toFixed(2)}`;

    const priceChange = Math.ceil(data["1d"].price_change*100)/100;
    const pricechangeFormat = value => `1 day price change: $ ${value.toFixed(2)}`

    return (

        <div style={divStyle}>
             <AnimatedNumber
                value={currentPrice}
                formatValue={currentPriceFormat}
                duration={1500}
                />
             <AnimatedNumber
                value={priceChange}
                formatValue={pricechangeFormat}
                duration={1500}
                />
        </div>

    )
}

export default Metadata;