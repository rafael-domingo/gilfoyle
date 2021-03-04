import React from 'react';

// Components
import Setting from '../../elements/Setting';

// Packages
import { motion, AnimatePresence } from 'framer-motion';

function Settings({alert, sound}) {
    const variants = {
        initial: { opacity: 0, x: 0},
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '100%', transition: {duration: 1.5}}
    }


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

    const handleAlert = (value) => {
        return alert(value);
    }

    const handleSound = (value) => {
        return sound(value);
    }

    return (
        <AnimatePresence>
            <motion.div
            style={divStyle}
            initial = "initial"
            animate="enter"
            transition={{ duration: 0.5 }}
            exit="exit"
            variants={variants}>
                <div style={titleStyle}>
                    Settings
                </div>
                <div style={soundStyle}>
                    <div style={subtitleStyle}>
                        Sound Settings
                    </div>                
                    <Setting params="Gilfoyle" alert={handleAlert} sound={handleSound}/>
                    <Setting params="Chill" alert={handleAlert} sound={handleSound}/>
                </div>
                <div style={changeStyle}>
                    <div style={subtitleStyle}>
                        Alert Settings
                    </div>                
                    <Setting params="Relative" alert={handleAlert} sound={handleSound}/>
                    <Setting params="Absolute" alert={handleAlert} sound={handleSound}/>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Settings;