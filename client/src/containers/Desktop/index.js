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

function Desktop({data}) {
    const [height, setHeight] = React.useState(window.innerHeight);
    const [graphData, setGraphData] = React.useState();
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('resize', () => setHeight(window.innerHeight));
        console.log(height);
    }, [height])

    React.useEffect(() => {
      setTimeout(() => {
        NomicsAPI.sparkline('DOGE').then(response => {  
          setGraphData(response[0].prices)
          console.log(response)});
          setLoaded(true);
      }, 1000)
    }, [0])

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

    if (loaded) {
      return (
        <div style={DivStyle}>
          <Background />
          <Title style={TitleStyle}/>
          <Nav style={NavStyle}/>
          <Detail style={DetailStyle} graph={graphData} metadata={data}/>
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