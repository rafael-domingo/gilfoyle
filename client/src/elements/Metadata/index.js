import './Metadata.css';
import React from 'react';

// Packages
import AnimatedNumber from 'animated-number-react';

function Metadata({data, prevdata, change, playSound, sound, cramer, gilfoyle, cramerSetting, gilfoyleSetting, playBuy, playSell, playGilfoyle, mobile}) {
    
    const divStyle = {
        color: 'white',
        fontSize: '1.5em',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }

    const mobileDivStyle = {
        color: 'white',
        fontSize: '1em',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
    }

    const titleStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        
    }

    const logoStyle = {
        height: '3em',
        width: 'auto',
        margin: '20px'
    }

    const mobileLogoStyle = {
        height: '1.5em',
        width: 'auto',
        margin: '20px'
    }

    const animatedStyle = {
        width: '33%',
    }

    const mobileAnimatedStyle = {
        width: '100%'
    }
    const currentPrice = Math.ceil(data.price*100)/100;
    const currentPriceFormat = value => `$ ${value.toFixed(2)}`;

    
    const prevPrice = Math.ceil(data.price*100/100);
    const prevPriceFormat = value => `$ ${value.toFixed(2)}`;

    const priceChange = currentPrice - prevPrice;
    const pricechangeFormat = value => `$ ${value.toFixed(2)}`
    
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
    }, [priceChange, cramer, gilfoyle, playSell, playBuy, playGilfoyle])
   
    if (mobile)  {
        return (

            <div style={mobileDivStyle}>
                <div style={titleStyle}>
                    <img style={mobileLogoStyle} src={data.logo_url} alt="crypto logo" />
                    <h1>{data.currency}</h1>
                </div>
                
                <div style={mobileAnimatedStyle}>
                <AnimatedNumber
                    value={currentPrice}
                    formatValue={currentPriceFormat}
                    duration={1500}
                    />
                    <p>Current Price</p>
                </div>
                <div style={mobileAnimatedStyle}>
                    <AnimatedNumber
                        value={priceChange}
                        formatValue={pricechangeFormat}
                        duration={1500}
                        />
                    <p>Price Change</p>
                </div>
                <div style={mobileAnimatedStyle}>
                    <AnimatedNumber
                        value={prevPrice}
                        formatValue={prevPriceFormat}
                        duration={1500}
                        />
                    <p>Previous Price</p>
                </div>
               
            </div>
    
        )
    } else {
        return (

            <div style={divStyle}>
                <div style={titleStyle}>
                    <img style={logoStyle} src={data.logo_url} alt="crypto logo" />
                    <h1>{data.currency}</h1>
                </div>
                
                <div style={animatedStyle}>
                <AnimatedNumber
                    value={currentPrice}
                    formatValue={currentPriceFormat}
                    duration={1500}
                    />
                    <p>Current Price</p>
                </div>
                <div style={animatedStyle}>
                    <AnimatedNumber
                        value={priceChange}
                        formatValue={pricechangeFormat}
                        duration={1500}
                        />
                    <p>Price Change</p>
                </div>
                <div style={animatedStyle}>
                    <AnimatedNumber
                        value={prevPrice}
                        formatValue={prevPriceFormat}
                        duration={1500}
                        />
                    <p>Previous Price</p>
                </div>
               
            </div>
    
        )
    }

}

export default Metadata;