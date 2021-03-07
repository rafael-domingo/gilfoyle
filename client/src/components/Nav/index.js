import './Nav.css';
import React from 'react';

// Packages
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Switch from 'react-switch';

// Assets 

function Nav({soundSetting, sound, cramer, gilfoyle, cramerSetting, gilfoyleSetting, crypto}) {
   const [checked, setChecked] = React.useState(false);
    const [selected, setSelected] = React.useState();

    React.useEffect(() => {
        setSelected(crypto)
    }, [crypto])
    
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
        fontSize: '3em',
        borderRadius: '50px'
        
    }

    const selectedItemStyle = {
        margin: '1.5em',
        fontSize: '3em',
        backgroundColor: 'rgba(94, 41, 210, 1)',
        borderRadius: '50px'
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'rgba(216, 216, 216, 1)',
    }

    const motionStyle = {
        borderRadius: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center', 
        textAlign: 'center',
        color: 'rgba(216, 216, 216, 1)',
    }
    
    const labelStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

    const spanStyle = {
        margin: '10px'
    }

    const list = [
        'BTC',
        'ETH',
        'DOGE'
    ]

    const handleCramerChange = (checked) => {
        return cramerSetting(checked);
    }

    const handleGilfoyleChange = (checked) => {
        return gilfoyleSetting(checked);
    }

    
    return (
        <div style={divStyle}>
            <ul style={listStyle}>
                {
                    list.map(item => {
                        if (selected === item) {
                            return (
                                <li style={itemStyle} key={item} style={selectedItemStyle}>
                                    <Link to={`/${item}`} style={linkStyle}>
                                        <motion.div
                                            style={motionStyle}
                                            whileHover={{
                                            backgroundColor: 'rgba(216, 216, 216, 0.8)',
                                            color: 'rgba(0,0,0,1)'
                                        }}
                                        >
                                            {item}
                                        </motion.div>
                                    </Link>
                                </li>
                                )
                        } else {
                            return (
                                <li style={itemStyle} key={item}>
                                    <Link to={`/${item}`} style={linkStyle}>
                                        <motion.div
                                            style={motionStyle}
                                            whileHover={{
                                            backgroundColor: 'rgba(216, 216, 216, 0.8)',
                                            color: 'rgba(0,0,0,1)'
                                        }}
                                        >
                                            {item}
                                        </motion.div>
                                    </Link>
                                </li>
                                )
                        }
                     
                    })
                }
            </ul>
            <label style={labelStyle}>
            <span style={spanStyle}>Gilfoyle Mode</span>
                <Switch
                checked={gilfoyle || false}
                onChange={(checked) => handleGilfoyleChange(checked)}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                // className="react-switch"
                // id="material-switch"
                />    
            </label>
            <label style={labelStyle}>
            <span style={spanStyle}>Cramer Mode</span>
                <Switch
                checked={cramer || false}
                onChange={(checked) => handleCramerChange(checked)}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                // className="react-switch"
                // id="material-switch"
                />    
            </label>

        </div>
    )
}

export default Nav;