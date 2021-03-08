import './App.css';
import React from 'react';

// Components
import Desktop from '../Desktop';

// APIs

// Packages
import { Switch, Route } from "react-router-dom";
import useSound from 'use-sound';

function App() {
  const [cramer, setCramer] = React.useState(false);
  const [gilfoyle, setGilfoyle] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1500) {
        setMobile(true)
        setGilfoyle(false)
        setCramer(false)
      } else {
        setMobile(false)
      }      
    });    
    console.log(mobile);
  }, [mobile])

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1500) {
        setMobile(true)
        setGilfoyle(false)
        setCramer(false)
      } else {
        setMobile(false)
      }      
    });    
    console.log(mobile);
  }, [0])

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
  // if (!mobile) {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Desktop 
              cramer={cramer}
              gilfoyle={gilfoyle}
              cramerSetting={cramerSetting}
              gilfoyleSetting={gilfoyleSetting}
              playBuy={playBuy}
              playSell={playSell}
              playGilfoyle={playGilfoyle}
              mobile={mobile}/>
          </Route>
          <Route exact path='/:crypto'>
            <Desktop 
              params={false} 
              cramer={cramer}
              gilfoyle={gilfoyle}
              cramerSetting={cramerSetting}
              gilfoyleSetting={gilfoyleSetting}
              playBuy={playBuy}
              playSell={playSell}
              playGilfoyle={playGilfoyle}
              mobile={mobile}/>
          </Route>     
        </Switch>
      </div>
    );
}

export default App;
