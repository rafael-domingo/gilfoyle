import React from 'react';

// Packages
import { motion } from 'framer-motion';

function Setting({params, alert, sound}) {
    const divStyle = {
        borderRadius: '50px',
        border: '1px solid white',
        width: '40%',
        height: '40%',
        margin: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'none',
        // border: 'none',
        fontSize: '1em',
        color: 'rgba(216, 216, 216, 1)'
    }


    return (
        <motion.button 
            onClick={() => alert(params)}
            style={divStyle}
            whileHover={{
                backgroundColor: 'rgba(216, 216, 216, 1)',
                color: '#3E3F4F',
                transition: '0.3s ease'
            }}>            
            {params}
        </motion.button>
    )
}

export default Setting;