import React from 'react';

function Metadata({data}) {
    const divStyle = {
        color: 'white',
        fontSize: '2em',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '50%'
    }
    return (
        <div style={divStyle}>
            <p>Current Price: ${data.price}</p>
            <p>Average Price</p>
            <p>1 Day Change: ${data["1d"].price_change}</p>
        </div>

    )
}

export default Metadata;