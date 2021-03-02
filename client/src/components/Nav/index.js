import './Nav.css';
import React from 'react';

// Packages
import { Link } from "react-router-dom";

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

    const linkStyle = {
        textDecoration: 'none',
        color: 'white'
    }

    const list = [
        'BTC',
        'ETH',
        'DOGE'
    ]
    return (
        <div style={divStyle}>
            <ul style={listStyle}>
                {
                    list.map(item => {
                        return <li key={item} style={itemStyle}><Link to={`/${item}`} style={linkStyle}>{item}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Nav;