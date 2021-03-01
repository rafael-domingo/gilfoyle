import './Desktop.css';
import React from 'react';

// Components
import Title from '../../elements/Title';
import Nav from '../../components/Nav';
import Detail from '../../components/Detail';

// Packages
import Particles from 'react-tsparticles';

function Desktop() {
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        window.addEventListener('resize', () => setHeight(window.innerHeight));
        console.log(height);
    }, [height])

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
        // interactivity: {
        //   detectsOn: "canvas",
        //   events: {
        //     onClick: { enable: true, mode: "repulse" },
        //     onHover: {
        //       enable: true,
        //       mode: "bubble",
        //       parallax: { enable: false, force: 2, smooth: 10 }
        //     },
        //     resize: true
        //   },
        //   modes: {
        //     bubble: {
        //       distance: 400,
        //       duration: 0.3,
        //       opacity: 1,
        //       size: 4,
        //       speed: 3
        //     },
        //     grab: { distance: 400, line_linked: { opacity: 0.5 } },
        //     push: { particles_nb: 4 },
        //     remove: { particles_nb: 2 },
        //     repulse: { distance: 200, duration: 0.4 }
        //   }
        // },
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
                minimumValue: 1
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
            <Detail style={DetailStyle} />
        </div>
    )
}

export default Desktop;