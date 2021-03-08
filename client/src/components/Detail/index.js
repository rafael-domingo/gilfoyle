import React from 'react';

// Components
import Graph from '../../elements/Graph';
import Metadata from '../../elements/Metadata';

// Packages
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { motion, AnimatePresence } from "framer-motion";
import ReactLoading from 'react-loading';

function Detail({graph, metadata, prevMetaData, fetchCrypto, loading, crypto, cramer, gilfoyle, cramerSetting, gilfoyleSetting, playBuy, playSell, playGilfoyle, mobile}) {
    const [graphData, setGraphData] = React.useState(graph);
    const [data, setData] = React.useState(metadata);
    const [prev, setPrev] = React.useState(prevMetaData);

    React.useEffect(() => {
        let isMounted = true;
        if (isMounted)  {
            setGraphData(graph);
            setData(metadata);
            setPrev(prevMetaData);
            // console.log(`detail current: ${metadata}`);
            // console.log(`detail previous: ${prevMetaData}`);
        }

        return () => {
            isMounted = false;
        }
  
    }, [crypto, graph,metadata,prevMetaData])

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

    const mobileDivStyle = {
        backgroundColor: '#5E29D2',
        borderRadius: '50px',
        width: '80%',
        boxShadow: '2px 4px 6px 0px rgba(0,0,0,0.5)',
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

    const mobileLoadingStyle = {
        backgroundColor: '#5E29D2',
        borderRadius: '50px',
        width: '80%',
        height: '100%',
        boxShadow: '2px 4px 6px 0px rgba(0,0,0,0.5)',
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
    
    if (!mobile && data && graphData) {
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
                        <Metadata 
                            crypto={crypto}
                            data={data} 
                            prevdata={prev} 
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
        } else if (mobile && data && graphData) {
            return (
                <AnimatePresence>
                    <motion.div
                    style={mobileDivStyle}
                    initial = "initial"
                    animate="enter"
                    transition={{ duration: 0.5 }}
                    exit="exit"
                    variants={variants}>
                        {/* <button onClick={() => setSound(!sound)}>{`Sound ${sound}`}</button> */}
                        <div style={{fontSize: '0.5em', marginRight: '0em', marginTop: '3em', width: '90%', height: '0.5em', display: 'flex', justifyContent: 'flex-end'}}>
                                <CountdownCircleTimer
                                isPlaying
                                onComplete={() => {
                                
                                    // Fetch data on complete
                                    fetchCrypto()
                        
                                    return [true, 1500]
                                }}
                                duration={20}
                                size={25}
                                strokeWidth={1}
                                trailColor={'rgba(0,0,0,0)'}
                                colors={[
                                ['#ffffff', 0],
                                ['#ffffff', 1]
                                ]}>
                                    {countdown}
                                </CountdownCircleTimer>
                            </div>
                        {/* <Graph data={graphData}/> */}
                        <div style={metaDataStyle}>
                            <Metadata 
                                data={data} 
                                prevdata={prev} 
                                cramer={cramer}
                                gilfoyle={gilfoyle}
                                cramerSetting={cramerSetting}
                                gilfoyleSetting={gilfoyleSetting}
                                playBuy={playBuy}
                                playSell={playSell}
                                playGilfoyle={playGilfoyle}
                                mobile={mobile}/>
                        </div>                  
                    </motion.div>
                </AnimatePresence>
            )
        } else if (mobile) {
            return (
                <AnimatePresence>
                    <motion.div
                    style={mobileLoadingStyle}
                    initial = "initial"
                    animate="enter"
                    transition={{ duration: 0.5 }}
                    exit="exit"
                    variants={variants}>
                        <ReactLoading type={'spin'} height={'10%'} width={'10%'} />
                    </motion.div>
                </AnimatePresence>            
            )
        } else {
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