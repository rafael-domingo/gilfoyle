import React from 'react';
import Particles from 'react-tsparticles';

function Background() {
    return (
        <div>
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
        </div>
    )
}

export default Background;