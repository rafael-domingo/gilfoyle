import React from 'react';

function Title({mobile}) {

    const divStyle={
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'left',
        padding: '5em',
        height: '10%',
        width: '100%'
    }

    const mobileDivStyle = {
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        padding: '1em',
        width: '60%',
        borderBottom: '1px solid white'
    }
    const h1Style = {
        fontSize: '4em',
        width: '100%',
        fontWeight: '100'
    }

    const mobileh1Style = {
        fontSize: '2em',
        width: '100%',
        fontWeight: '100'
    }

    const spanStyle = {
        fontSize: '2em',
        width: '100%'
    }

    const mobileSpanStyle = {
        fontSize: '1em',
        width: '100%'
    }
    
    if (mobile) {
        return (
            <div style={mobileDivStyle}>
                <h1 style={mobileh1Style}>gilfoyle</h1>
                <span style={mobileSpanStyle}>Crypto Tracker</span>
            </div>
        )
    } else {
        return (
            <div style={divStyle}>
                <h1 style={h1Style}>gilfoyle</h1>
                <span style={spanStyle}>Crypto Tracker</span>
            </div>
        )
    }
    }


export default Title;