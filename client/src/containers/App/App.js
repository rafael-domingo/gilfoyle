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
    if (window.innerWidth < 1500) {
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
                mobile={true}/>
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
                mobile={true}/>
            </Route>     
          </Switch>
        </div>
      );
    } else {
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
                mobile={false}/>
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
                mobile={false}/>
            </Route>     
          </Switch>
        </div>
      );
    }
  

}

export default App;
