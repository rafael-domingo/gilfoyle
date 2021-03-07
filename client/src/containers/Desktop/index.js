import './Desktop.css';
import React from 'react';

// Components
import Title from '../../elements/Title';
import Nav from '../../components/Nav';
import Detail from '../../components/Detail';
import Background from '../../elements/Background';
import Settings from '../../components/Settings';

// APIs
import { NomicsAPI } from "../../util/Nomics";

// Packages
import Particles from 'react-tsparticles';
import ReactLoading from 'react-loading'
import { useParams } from "react-router-dom";

function Desktop({params, soundSetting, sound, playSound, cramer, gilfoyle, cramerSetting, gilfoyleSetting, playBuy, playSell, playGilfoyle}) {
    const crypto = useParams().crypto || 'BTC';
    const [height, setHeight] = React.useState(window.innerHeight);
    const [graphData, setGraphData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(params);
    const [metaData, setMetaData] = React.useState({price: 0});
    const [prevMetaData, setPrevMetaData] = React.useState(null);

  const handleSoundSetting = (value) => {
    return soundSetting(value);
  }

    React.useEffect(() => {
        window.addEventListener('resize', () => setHeight(window.innerHeight));
        console.log(height);
    }, [height])

    // Data fetching Crypto
    const fetchCrypto = () => {

      NomicsAPI.ticker(crypto).then(response => {
        setLoaded(true);
        if (response) {
            console.log(`const crypto: ${crypto}`);
          setPrevMetaData(metaData);
          setMetaData(response[0]);
          // console.log(`Desktop previous: ${prevMetaData.price}`);
          // console.log(`Desktop current: ${metaData.price}`);
          setTimeout(() => {
            fetchSparklines()
          }, 1000);          
        } else {
          console.log(response)
          return;
        }
      })
    }

    // Data fetching Sparklines
    const fetchSparklines = () => { 
      NomicsAPI.sparkline(crypto).then(sparkResponse => {  
        if (sparkResponse[0]) {
          // return;
          setGraphData(sparkResponse[0].prices)
        } else {
          console.log(sparkResponse)
          return;
        }          
      })}
         

    // Initial data fetch before countdown starts
    React.useEffect(() => {
      console.log('useeffect')
      setLoaded(false);
      console.log(`useEffect crypto: ${crypto}`);
      fetchCrypto(); 
      
    }, [useParams().crypto])

    React.useState(() => {
      console.log(`sound: ${sound}`)
    }, [sound])

    const DivStyle = {
        height: height,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
    const TitleStyle = {
        // minHeight: (height * 0.2)
    }

    const NavStyle = {
        // minHeight: (height * 0.8)
    }

    const DetailStyle = {
        width: '50%'
    }

    if (loaded && graphData && metaData) {
      return (
        <div style={DivStyle}>
          <Background />
          <Title style={TitleStyle}/>
          <Nav 
            style={NavStyle} 
            soundSetting={handleSoundSetting} 
            cramer={cramer}
            gilfoyle={gilfoyle}
            cramerSetting={cramerSetting}
            gilfoyleSetting={gilfoyleSetting}
            crypto={crypto}
            sound={sound} />
          <Detail 
            style={DetailStyle} 
            graph={graphData} 
            metadata={metaData} 
            prevMetaData={prevMetaData} 
            fetchCrypto={fetchCrypto} 
            crypto={crypto} 
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
    )
    }  else if (crypto === 'settings') {
      return (
        <div style={DivStyle}>
          <Background />
          <Title style={TitleStyle}/>
          <Nav 
            style={NavStyle} 
            soundSetting={handleSoundSetting} 
            sound={sound} />
          <Settings 
            sound={handleSoundSetting}/>
        </div>

      )
    } 
    else {
      return (
        <div style={DivStyle}>
          <Background />
          <Title style={TitleStyle}/>
          <Nav 
            style={NavStyle} 
            soundSetting={handleSoundSetting} 
            sound={sound}
            crypto={crypto}/>
          <Detail loading={loaded} />          
        </div>
       
      )
    }
    
}

export default Desktop;