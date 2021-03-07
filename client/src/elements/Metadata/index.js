import './Metadata.css';
import React from 'react';

// Packages
import AnimatedNumber from 'animated-number-react';

function Metadata({data, prevdata, change, playSound, sound, cramer, gilfoyle, cramerSetting, gilfoyleSetting, playBuy, playSell, playGilfoyle}) {
    
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
    const currentPriceFormat = value => `Current Price: $ ${value.toFixed(2)}`;

    
    const prevPrice = Math.ceil(data.price*100/100);
    const prevPriceFormat = value => `Previous Price: $ ${value.toFixed(2)}`;

    const priceChange = currentPrice - prevPrice;
    const pricechangeFormat = value => `Price change: $ ${value.toFixed(2)}`
    
    React.useEffect(() => {
        console.log('price change')
        if (cramer) {
            if (priceChange < 0) {
                playSell();
            } else if (priceChange > 0) {
                playBuy();
            }
        } else if (gilfoyle) {
            if (priceChange < 0 || priceChange > 0) {
                playGilfoyle();
            }
        }
    }, [priceChange])
   

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
            <AnimatedNumber
                value={prevPrice}
                formatValue={prevPriceFormat}
                duration={1500}
                />
        </div>

    )
}

export default Metadata;