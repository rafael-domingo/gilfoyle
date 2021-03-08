import React from 'react';

// Components
import Title from '../../elements/Title';
import Nav from '../../components/Nav';
import Detail from '../../components/Detail';
import Background from '../../elements/Background';

// APIs
import { NomicsAPI } from "../../util/Nomics";

// Packages
import { useParams } from "react-router-dom";

function Desktop({params, cramer, gilfoyle, cramerSetting, gilfoyleSetting, playBuy, playSell, playGilfoyle, mobile}) {
    const crypto = useParams().crypto || 'BTC';
    const [height, setHeight] = React.useState(window.innerHeight);
    const [graphData, setGraphData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(params);
    const [metaData, setMetaData] = React.useState({price: 0});
    const [prevMetaData, setPrevMetaData] = React.useState({price: 0});

    // useEffect Hooks
    React.useEffect(() => {
        window.addEventListener('resize', () => setHeight(window.innerHeight));
        console.log(height);
    }, [height])

    // Initial data fetch before countdown starts
    React.useEffect(() => {
      let isMounted = true;
      if (isMounted) {       
        console.log('useeffect')
        setLoaded(false);
        console.log(`useEffect crypto: ${crypto}`);
        // setMetaData({price: 0})
        refreshCrypto(); 
      }
    
      return () => {
        isMounted = false;
      }
    }, [crypto])

    // crypto fetch when changing crypto currency
    const refreshCrypto = () => {

      NomicsAPI.ticker(crypto).then(response => {
        setLoaded(true);
        if (response) {
          setMetaData(response[0]);
          setPrevMetaData(response[0]);

          setTimeout(() => {

            fetchSparklines()
          }, 1000);          
        } else {
          console.log(response)
          return;
        }
      })
    }
    
    // Data fetching Crypto for countdown
    const fetchCrypto = () => {

      NomicsAPI.ticker(crypto).then(response => {
        setLoaded(true);
        if (response) {
          setMetaData(response[0]);

          setTimeout(() => {

            fetchSparklines()
          }, 1000);          
        } else {
          console.log(response)
          return;
        }
      })
    }

    // Data fetching Sparklines
    const fetchSparklines = () => { 
      NomicsAPI.sparkline(crypto).then(sparkResponse => {  
        if (sparkResponse[0]) {
          // return;
          setGraphData(sparkResponse[0].prices)
        } else {
          setGraphData([]);
          console.log(sparkResponse)
          return;
        }          
      })}

    const DivStyle = {
        height: height,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

    const mobileDivStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    }

    const DetailStyle = {
        width: '50%'
    }

    const mobileDetailStyle = {
      width: '80%'
    }

    if (!mobile && loaded && graphData && metaData) {
      return (
        <div style={DivStyle}>
          <Background />
          <Title 
            mobile={mobile} />
          <Nav 
            cramer={cramer}
            gilfoyle={gilfoyle}
            cramerSetting={cramerSetting}
            gilfoyleSetting={gilfoyleSetting}
            crypto={crypto}
            mobile={mobile} />
          <Detail 
            style={DetailStyle} 
            graph={graphData} 
            metadata={metaData} 
            prevMetaData={prevMetaData} 
            fetchCrypto={fetchCrypto} 
            crypto={crypto} 
            cramer={cramer}
            gilfoyle={gilfoyle}
            cramerSetting={cramerSetting}
            gilfoyleSetting={gilfoyleSetting}
            playBuy={playBuy}
            playSell={playSell}
            playGilfoyle={playGilfoyle}
            mobile={mobile}/>
        </div>
    ) 
    } else if (mobile && loaded && graphData && metaData) {
      return (
        <div style={mobileDivStyle}>
        <Background />
        <Title 
          mobile={mobile}/>
        <Nav 
          cramer={cramer}
          gilfoyle={gilfoyle}
          cramerSetting={cramerSetting}
          gilfoyleSetting={gilfoyleSetting}
          crypto={crypto}
          mobile={mobile} />
        <Detail 
          style={mobileDetailStyle} 
          graph={graphData} 
          metadata={metaData} 
          prevMetaData={prevMetaData} 
          fetchCrypto={fetchCrypto} 
          crypto={crypto} 
          cramer={cramer}
          gilfoyle={gilfoyle}
          cramerSetting={cramerSetting}
          gilfoyleSetting={gilfoyleSetting}
          playBuy={playBuy}
          playSell={playSell}
          playGilfoyle={playGilfoyle}
          mobile={mobile}/>
      </div>
      )
    } else if (mobile) {
      return (
        <div style={mobileDivStyle}>
          <Background />
          <Title mobile={mobile}/>
          <Nav 
            crypto={crypto}
            mobile={mobile}/>
          <Detail 
            loading={loaded}
            mobile={mobile}/>          
        </div>
       
      )
    } else {
      return (
        <div style={DivStyle}>
          <Background />
          <Title mobile={mobile}/>
          <Nav 
            crypto={crypto}
            mobile={mobile}/>
          <Detail 
            loading={loaded}
            mobile={mobile}/>          
        </div>
       
      )
    }
    
}

export default Desktop;