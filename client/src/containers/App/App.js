import './App.css';
import React from 'react';

// Components
import Desktop from '../Desktop';
import Mobile from '../Mobile';

// APIs
import { NomicsAPI } from '../../util/Nomics';

// Packages
import ReactLoading from 'react-loading';
import { Switch, Route } from "react-router-dom";
import useSound from 'use-sound';

function App() {
  const [crypto, setCrypto] = React.useState();
  const [loaded, setLoaded] = React.useState(true);
  const [sound, setSound] = React.useState(false);
  const [cramer, setCramer] = React.useState(false);
  const [gilfoyle, setGilfoyle] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1000) {
        setMobile(true)
      } else {
        setMobile(false)
      }      
    });
    
    console.log(mobile);
  }, [mobile])

  React.useEffect(() => {
    console.log(`App sound`)
  }, [sound])


  const soundSetting = (value) => {
    console.log(`Sound setting: ${value}`)
    setSound(value);
  }

  const cramerSetting = (value) => {
    console.log(`cramer setting: ${value}`)

    setCramer(value);
    setGilfoyle(false);
  }

  const gilfoyleSetting = (value) => {
    console.log(`gilfoyle setting: ${value}`)

    setGilfoyle(value);
    setCramer(false);
  }


  const [playSound] = useSound(
    '/Hallelujah.mp3',
    {
        volume: 0.25
    }
  )

  const [playBuy] = useSound(
    '/Hallelujah.mp3',
    {
        volume: 1
    }
  )

  const [playSell] = useSound(
    '/SELSELLSELL.mp3',
    {
        volume: 1
    }
  )

  const [playGilfoyle] = useSound(
    '/suffer.mp3',
    {
        volume: 1
    }
  )
  if (loaded && !mobile) {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Desktop 
              soundSetting={soundSetting} 
              sound={sound} 
              playSound={playSound}
              cramer={cramer}
              gilfoyle={gilfoyle}
              cramerSetting={cramerSetting}
              gilfoyleSetting={gilfoyleSetting}
              playBuy={playBuy}
              playSell={playSell}
              playGilfoyle={playGilfoyle}/>
          </Route>
          <Route exact path='/:crypto'>
            <Desktop 
              params={false} 
              soundSetting={soundSetting} 
              sound={sound} 
              playSound={playSound}
              cramer={cramer}
              gilfoyle={gilfoyle}
              cramerSetting={cramerSetting}
              gilfoyleSetting={gilfoyleSetting}
              playBuy={playBuy}
              playSell={playSell}
              playGilfoyle={playGilfoyle}/>
          </Route>
          <Route exact path='/settings'>
            <Desktop 
              soundSetting={soundSetting} 
              sound={sound} 
              playSound={playSound}
              cramer={cramer}
              gilfoyle={gilfoyle}
              cramerSetting={cramerSetting}
              gilfoyleSetting={gilfoyleSetting}
              playBuy={playBuy}
              playSell={playSell}
              playGilfoyle={playGilfoyle}/>
          </Route>
        </Switch>
      </div>
    );
  } else {
    return (
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ReactLoading type={'spin'} height={'10%'} width={'10%'} />
      </div>
    )
  
  }


}

export default App;
