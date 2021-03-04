import './Nav.css';
import React from 'react';

// Packages
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

// Assets 
import Setting from '../../assets/settings.png';

function Nav() {
   
    const divStyle = {
        color: 'white',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '80%'
    }

    const listStyle = {
        listStyleType: 'none',
        width: '100%',
        margin: '0px',
        padding: '0px'
    }

    const itemStyle = {
        margin: '1.5em',
        fontSize: '3em'
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'rgba(216, 216, 216, 1)',
    }

    const imgStyle = {
        width: 'auto',
        height: '5em',
    }

    const motionStyle = {
        borderRadius: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center', 
        textAlign: 'center',
        color: 'rgba(216, 216, 216, 1)',
        padding: '30px'
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
                        return (
                        <li style={itemStyle}>
                            <Link to={`/${item}`} style={linkStyle}>
                                <motion.div
                                    style={motionStyle}
                                    whileHover={{
                                    backgroundColor: 'rgba(216, 216, 216, 0.8)',
                                    color: 'rgba(0,0,0,1)'
                                }}>
                                    {item}
                                </motion.div>
                            </Link>
                        </li>
                        )
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