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
  React.useEffect(() => {  
    NomicsAPI.ticker('DOGE').then(response => {
      console.log(response[0])
      console.log('ticker response received')
      setLoaded(true)
      setCrypto(response[0])});
    console.log('app')
  },[0])

  if (loaded) {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Desktop data={crypto}/>
          </Route>
          <Route exact path='/:crypto'>
            <Desktop data={crypto}/>
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
