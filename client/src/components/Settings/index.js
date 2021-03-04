import React from 'react';

// Components
import Setting from '../../elements/Setting';

// Packages
import { motion } from 'framer-motion';

function Settings() {
    const divStyle = {
        backgroundColor: 'rgba(62, 63, 79, 0.9)',
        borderRadius: '50px',
        width: '60%',
        height: '50%',
        boxShadow: '2px 4px 6px 0px rgba(0,0,0,0.5)',
        padding: '50px',
        color: 'white',
        fontSize: '3em'
    }

    const soundStyle = {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const changeStyle = {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const titleStyle = {
        width: '50%',
        textAlign: 'left',
        fontSize: '2em',
        margin: '20px'
    }

    const subtitleStyle = {
        width: '50%',
        textAlign: 'right',
        fontSize: '1em'
    }
    return (
        <div style={divStyle}>
            <div style={titleStyle}>
                Settings
            </div>
            <div style={soundStyle}>
                <div style={subtitleStyle}>
                    Sound Settings
                </div>                
                <Setting params="Gilfoyle"/>
                <Setting params="Chill"/>
            </div>
            <div style={changeStyle}>
                <div style={subtitleStyle}>
                    Alert Settings
                </div>                
                <Setting params="Relative"/>
                <Setting params="Absolute"/>
            </div>
        </div>
    )
}

export default Settings;