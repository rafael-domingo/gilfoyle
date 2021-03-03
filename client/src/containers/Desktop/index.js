import './Desktop.css';
import React from 'react';

// Components
import Title from '../../elements/Title';
import Nav from '../../components/Nav';
import Detail from '../../components/Detail';
import Background from '../../elements/Background';
// APIs
import { NomicsAPI } from "../../util/Nomics";

// Packages
import Particles from 'react-tsparticles';
import ReactLoading from 'react-loading'
import { useParams } from "react-router-dom";

function Desktop({params}) {
    const crypto = useParams().crypto || 'BTC';
    const [height, setHeight] = React.useState(window.innerHeight);
    const [graphData, setGraphData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(params);
    const [metaData, setMetaData] = React.useState(null);

    React.useEffect(() => {
        window.addEventListener('resize', () => setHeight(window.innerHeight));
        console.log(height);
    }, [height])

    // Data fetching Crypto
    const fetchCrypto = () => {
      NomicsAPI.ticker(crypto).then(response => {
        setLoaded(true);
        console.log(response[0])
        console.log('ticker response received')
        if (response) {
          setMetaData(response[0]);
        } else {
          return 
        }
      })
    }

    // Data fetching Sparklines
    const fetchSparklines = () => { 
      NomicsAPI.sparkline(crypto).then(sparkResponse => {  
        if (sparkResponse[0]) {
          setGraphData(sparkResponse[0].prices)
        } else {
          setGraphData([0])
        }          
        console.log(sparkResponse)});
    }     

    // Initial data fetch before countdown starts
    React.useEffect(() => {
      setLoaded(false);
      fetchCrypto();
      setTimeout(() => {
        fetchSparklines();
      }, 1000)
      
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
          <Detail style={DetailStyle} graph={graphData} metadata={metaData} fetchCrypto={fetchCrypto} fetchSparklines={fetchSparklines}/>
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