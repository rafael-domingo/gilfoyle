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

function App() {
  const [crypto, setCrypto] = React.useState();
  const [loaded, setLoaded] = React.useState(true);
  const [sound, setSound] = React.useState();
  const [alert, setAlert] = React.useState();

  const soundSetting = (value) => {
    setSound(value);
  }

  const alertSetting = (value) => {
    console.log(`Alert setting: ${value}`)
    setAlert(value);
  }

  if (loaded) {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Desktop soundSetting={soundSetting} alertSetting={alertSetting}/>
          </Route>
          <Route exact path='/:crypto'>
            <Desktop params={false} soundSetting={soundSetting} alertSetting={alertSetting}/>
          </Route>
          <Route exact path='/settings'>
            <Desktop soundSetting={soundSetting} alertSetting={alertSetting}/>
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
