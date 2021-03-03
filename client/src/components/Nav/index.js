import './Nav.css';
import React from 'react';

// Packages
import { Link } from "react-router-dom";

// Assets 
import Setting from '../../assets/settings.png';

function Nav() {
   
    const divStyle = {
        color: 'white',
        width: '20%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '80%'
    }

    const listStyle = {
        listStyleType: 'none',
        width: '100%'
    }

    const itemStyle = {
        margin: '1.5em',
        fontSize: '3em'
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'white'
    }

    const imgStyle = {
        width: 'auto',
        height: '5em'
    }

    const divImgStyle = {
        width: '100%'
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
            <div style={divImgStyle}>
                <Link to={`/settings`}>
                    <img style={imgStyle} src={Setting} />
                </Link>
            </div>
        </div>
    )
}

export default Nav;