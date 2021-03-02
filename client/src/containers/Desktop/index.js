import './Desktop.css';
import React from 'react';

// Components
import Title from '../../elements/Title';
import Nav from '../../components/Nav';
import Detail from '../../components/Detail';

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
           <Particles
        options={{
          backgroundMode: {
            enable: true,
            zIndex: -1000
          },
        background: {
          color: "#000"
        },  
        fpsLimit: 60,
        particles: {
            color: {
              value: ["#f67e7d", "#843b62", "#621940"]
            },
            links: {
              color: "#ffb997",
              enable: true
            },
            move: {
              enable: true,
              speed: 6
            },
            size: {
              value: 5,
              random: {
                enable: true,
                minimumValue: 1
              },
              animation: {
                enable: true,
                speed: 2.5,
                minimumValue: 100
              }
            },
            opacity: {
              value: 0.8,
              random: {
                enable: true,
                minimumValue: 0.4
              }
            }
          }
        }
    }/>
            <Title style={TitleStyle}/>
            <Nav style={NavStyle}/>
            <Detail style={DetailStyle} graph={graphData} metadata={data}/>
        </div>
    )
    } else {
      return (
        <div style={DivStyle}>
           <Particles
        options={{
          backgroundMode: {
            enable: true,
            zIndex: -1000
          },
        background: {
          color: "#000"
        },  
        fpsLimit: 60,
        particles: {
            color: {
              value: ["#f67e7d", "#843b62", "#621940"]
            },
            links: {
              color: "#ffb997",
              enable: true
            },
            move: {
              enable: true,
              speed: 6
            },
            size: {
              value: 5,
              random: {
                enable: true,
                minimumValue: 1
              },
              animation: {
                enable: true,
                speed: 2.5,
                minimumValue: 100
              }
            },
            opacity: {
              value: 0.8,
              random: {
                enable: true,
                minimumValue: 0.4
              }
            }
          }
        }
    }/>
          <Title style={TitleStyle}/>
          <Nav style={NavStyle}/>
          {/* <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> */}
            <ReactLoading type={'spin'} height={'10%'} width={'10%'} />
          {/* </div> */}
        </div>
       
      )
    }
    
}

export default Desktop;