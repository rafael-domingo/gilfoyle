import './Nav.css';
import React from 'react';

function Nav() {
   
    const divStyle = {
        color: 'white',
        width: '20%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '80%'
    }

    const listStyle = {
        listStyleType: 'none'
    }

    const itemStyle = {
        margin: '1.5em',
        fontSize: '3em'
    }

    const list = [
        'Bitcoin',
        'Ethereum',
        'Dogecoin'
    ]
    return (
        <div style={divStyle}>
            <ul style={listStyle}>
                {
                    list.map(item => {
                        return <li key={item} style={itemStyle}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Nav;