import React from 'react';

// Packages
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Switch from 'react-switch';

// Assets 

function Nav({soundSetting, sound, cramer, gilfoyle, cramerSetting, gilfoyleSetting, crypto, mobile}) {
    const [selected, setSelected] = React.useState();

    React.useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            setSelected(crypto)
        }

        return () => {
            isMounted = false;
        }
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

    const mobileDivStyle = {
        color: 'white',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '1em'
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

    const mobileItemStyle = {
        margin: '1em',
        fontSize: '1em',
    }

    const selectedItemStyle = {
        margin: '1.5em',
        fontSize: '3em',
        backgroundColor: 'rgba(94, 41, 210, 1)',
        borderRadius: '50px'
    }

    const mobileSelectedItemStyle = {
        margin: '1em',
        fontSize: '1em',
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
        'DOGE',
        'BNB',
        'BCH'
    ]

    const handleCramerChange = (checked) => {
        return cramerSetting(checked);
    }

    const handleGilfoyleChange = (checked) => {
        return gilfoyleSetting(checked);
    }

    if (mobile) {
        return (
            <div style={mobileDivStyle}>
                <ul style={listStyle}>
                    {
                        list.map(item => {
                            if (selected === item) {
                                return (
                                    <li key={item} style={mobileSelectedItemStyle}>
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
                                    <li style={mobileItemStyle} key={item}>
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
            </div>
        )
    } else {
        return (
            <div style={divStyle}>
                <ul style={listStyle}>
                    {
                        list.map(item => {
                            if (selected === item) {
                                return (
                                    <li key={item} style={selectedItemStyle}>
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
                    height={20}
                    width={48}
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
                    height={20}
                    width={48}
                    />    
                </label>
    
            </div>
        )
    }
}

export default Nav;