import React from 'react';

function Metadata() {
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
            <p>Current Price</p>
            <p>Average Price</p>
            <p>Change</p>
        </div>

    )
}

export default Metadata;