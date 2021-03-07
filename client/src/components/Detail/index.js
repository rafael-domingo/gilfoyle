import React from 'react';

// Components
import Graph from '../../elements/Graph';
import Metadata from '../../elements/Metadata';

// Packages
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useSound from 'use-sound';
import { motion, AnimatePresence } from "framer-motion";
import ReactLoading from 'react-loading';

function Detail({graph, metadata, prevMetaData, fetchCrypto, loading, crypto, playSound, sound, cramer, gilfoyle, cramerSetting, gilfoyleSetting, playBuy, playSell, playGilfoyle}) {
    const [graphData, setGraphData] = React.useState(graph);
    // const [sound, setSound] = React.useState(false);
    const [data, setData] = React.useState(metadata);
    const [coin, setCoin] = React.useState(crypto);
    React.useEffect(() => {
        setGraphData(graph);
        setData(metadata);
        setCoin(crypto);

        // Call playsound to initialize, so next time it call
    }, [graph])
    const variants = {
        initial: { opacity: 0, x: 0},
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '100%', transition: {duration: 1.5}}
    }

    const divStyle = {
        backgroundColor: '#5E29D2',
        borderRadius: '50px',
        width: '60%',
        height: '50%',
        boxShadow: '2px 4px 6px 0px rgba(0,0,0,0.5)',
        padding: '50px'
    }

    const loadingStyle = {
        backgroundColor: '#5E29D2',
        borderRadius: '50px',
        width: '60%',
        height: '50%',
        boxShadow: '2px 4px 6px 0px rgba(0,0,0,0.5)',
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const metaDataStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '50%'
    }

    const countdown = ({remainingTime}) => {
        return <div>{remainingTime}</div>
    }
    
    // const [playSound] = useSound(
    //     '/Bull.mp3',
    //     {
    //         volume: 0.25
    //     }
    // )
    if (data && graphData) {
        return (
            <AnimatePresence>
                <motion.div
                style={divStyle}
                initial = "initial"
                animate="enter"
                transition={{ duration: 0.5 }}
                exit="exit"
                variants={variants}>
                    {/* <button onClick={() => setSound(!sound)}>{`Sound ${sound}`}</button> */}
                    <div style={{width: '100%', height: '2em', display: 'flex', justifyContent: 'flex-end'}}>
                            <CountdownCircleTimer
                            isPlaying
                            onComplete={() => {
                            
                                // Fetch data on complete
                                fetchCrypto()
                     
                                return [true, 1500]
                            }}
                            duration={20}
                            size={50}
                            strokeWidth={5}
                            trailColor={'rgba(0,0,0,0)'}
                            colors={[
                            ['#ffffff', 0],
                            ['#ffffff', 1]
                            ]}>
                                {countdown}
                            </CountdownCircleTimer>
                        </div>
                    <Graph data={graphData}/>
                    <div style={metaDataStyle}>
                        <p>{data.currency}</p>
                        <Metadata 
                            data={data} 
                            prevdata={prevMetaData} 
                            playSound={playSound} 
                            sound={sound}
                            cramer={cramer}
                            gilfoyle={gilfoyle}
                            cramerSetting={cramerSetting}
                            gilfoyleSetting={gilfoyleSetting}
                            playBuy={playBuy}
                            playSell={playSell}
                            playGilfoyle={playGilfoyle}/>
                    </div>                  
                </motion.div>
            </AnimatePresence>
        )
        } 
        else {
        return (
            <AnimatePresence>
                <motion.div
                style={loadingStyle}
                initial = "initial"
                animate="enter"
                transition={{ duration: 0.5 }}
                exit="exit"
                variants={variants}>
                    <ReactLoading type={'spin'} height={'10%'} width={'10%'} />
                </motion.div>
            </AnimatePresence>            
        )
    }

   
}

export default Detail;