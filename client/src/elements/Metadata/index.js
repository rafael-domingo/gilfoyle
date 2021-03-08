import './Metadata.css';
import React from 'react';

// Packages
import AnimatedNumber from 'animated-number-react';

function Metadata({crypto, data, prevdata, cramer, gilfoyle, cramerSetting, gilfoyleSetting, playBuy, playSell, playGilfoyle, mobile}) {
    const [currentPrice, setCurrentPrice] = React.useState(data.price);
    const [previousPrice, setPreviousPrice] = React.useState(prevdata.price);

    React.useEffect(() => {
        setCurrentPrice(data.price);
        setPreviousPrice(currentPrice);
        console.log(`metadata current: ${data.price}`);
        console.log(`metadata previous: ${prevdata.price}`);
    }, [crypto, data, prevdata])
    

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
        width: '100%',
        margin: '1em'
    }

    const current = Math.ceil(currentPrice*100)/100;
    const currentPriceFormat = value => `$ ${value.toFixed(2)}`;
    
    const previous = Math.ceil(previousPrice*100)/100;
    const prevPriceFormat = value => `$ ${value.toFixed(2)}`;

    const priceChange = current - previous;
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
                    value={current}
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
                        value={previous}
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
                    value={current}
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
                        value={previous}
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