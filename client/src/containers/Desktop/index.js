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

function Desktop({params, alertSetting, soundSetting}) {
    const crypto = useParams().crypto || 'BTC';
    const [height, setHeight] = React.useState(window.innerHeight);
    const [graphData, setGraphData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(params);
    const [metaData, setMetaData] = React.useState(null);
    const [prevMetaData, setPrevMetaData] = React.useState(null);

  const handleAlertSetting = (value) => {
    return alertSetting(value);
  }

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
          console.log(metaData);
          console.log(prevMetaData);
          setPrevMetaData(metaData);
          setMetaData(response[0]);
          fetchSparklines();
          console.log('ticker response received')
        } else {
          console.log(response)
          return;
        }
      })
    }

    // Data fetching Sparklines
    const fetchSparklines = () => { 
      NomicsAPI.sparkline(crypto).then(sparkResponse => {  
        console.log('sparklines');
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
      setLoaded(false);
      fetchCrypto();
      // setTimeout(() => {
      //   fetchSparklines();
      // }, 1000)
      
    }, [crypto])

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
          <Nav style={NavStyle}/>
          <Detail style={DetailStyle} graph={graphData} metadata={metaData} prevMetaData={prevMetaData} fetchCrypto={fetchCrypto} fetchSparklines={fetchSparklines}/>
        </div>
    )
    }  else if (crypto === 'settings') {
      return (
        <div style={DivStyle}>
          <Background />
          <Title style={TitleStyle}/>
          <Nav style={NavStyle}/>
          <Settings alert={handleAlertSetting} sound={handleSoundSetting}/>
        </div>

      )
    } else {
      return (
        <div style={DivStyle}>
          <Background />
          <Title style={TitleStyle}/>
          <Nav style={NavStyle}/>
          <ReactLoading type={'spin'} height={'10%'} width={'10%'} />
          
        </div>
       
      )
    }
    
}

export default Desktop;