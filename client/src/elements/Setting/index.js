import React from 'react';

// Packages
import { motion } from 'framer-motion';

function Setting({params}) {
    const divStyle = {
        borderRadius: '50px',
        border: '1px solid white',
        width: '40%',
        height: '40%',
        margin: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <motion.div 
            style={divStyle}
            whileHover={{
                backgroundColor: 'rgba(216, 216, 216, 1)',
                color: '#3E3F4F',
                transition: '0.3s ease'
            }}>
            {params}
        </motion.div>
    )
}

export default Setting;