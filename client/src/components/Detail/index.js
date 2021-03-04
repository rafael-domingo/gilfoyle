import React from 'react';

// Components
import Graph from '../../elements/Graph';
import Metadata from '../../elements/Metadata';

// Packages
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useSound from 'use-sound';

function Detail({graph, metadata, prevMetaData, fetchCrypto, fetchSparklines}) {
    const [data, setData] = React.useState(graph);
    const [sound, setSound] = React.useState(false);
    console.log(metadata);
    console.log(prevMetaData);
    console.log(graph);
    // React.useEffect(() => {
    //     setData(graph);
    //     // Call playsound to initialize, so next time it call
    //     console.log('detail')
    // }, [graph])

    const divStyle = {
        backgroundColor: '#5E29D2',
        borderRadius: '50px',
        width: '60%',
        height: '50%',
        boxShadow: '2px 4px 6px 0px rgba(0,0,0,0.5)',
        padding: '50px'
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
    
    const [playSound] = useSound(
        '/coin.mp3',
        {
            volume: 0.25
        }
    )

    return (
        <div style={divStyle}>
            <button onClick={() => setSound(!sound)}>{`Sound ${sound}`}</button>
             <div style={{width: '100%', height: '2em', display: 'flex', justifyContent: 'flex-end'}}>
                    <CountdownCircleTimer
                    isPlaying
                    onComplete={() => {
                        if (sound) {
                            playSound()
                        }
                        
                        // Fetch data on complete
                        fetchCrypto()
                        // setTimeout(() => {
                        //     fetchSparklines()    
                        // }, 1000);                        
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
            <Graph data={data}/>
            <div style={metaDataStyle}>
                <p>{metadata.currency}</p>
                <Metadata data={metadata}/>
               
              
            </div>
            
        </div>
    )

 
}

export default Detail;