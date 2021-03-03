import React from 'react';

// Components
import Graph from '../../elements/Graph';
import Metadata from '../../elements/Metadata';

// Packages
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useSound from 'use-sound';

// Assets
// import sound from '/coin.mp3'

function Detail({graph, metadata, fetchCrypto, fetchSparklines}) {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        setData(graph);
        console.log('detail')
    }, [graph])

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
             <div style={{width: '100%', height: '2em', display: 'flex', justifyContent: 'flex-end'}}>
                    <CountdownCircleTimer
                    isPlaying
                    onComplete={() => {
                        playSound()
                        // Fetch data on complete
                        fetchCrypto()
                        setTimeout(() => {
                            fetchSparklines()    
                        }, 1000);                        
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
                <Metadata data={metadata}/>
               
              
            </div>
            
        </div>
    )

 
}

export default Detail;