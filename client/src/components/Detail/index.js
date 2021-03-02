import React from 'react';

import Graph from '../../elements/Graph';
import Metadata from '../../elements/Metadata';

function Detail({graph, metadata}) {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        setData(graph);
        console.log('detail')
    }, [graph])

    const divStyle = {
        backgroundColor: '#5E29D2',
        borderRadius: '50px',
        width: '60%',
        height: '50%',
        boxShadow: '2px 4px 6px 0px rgba(0,0,0,0.5)'
    }

    const metaDataStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '50%'
    }
    return (
        <div style={divStyle}>
            <Graph data={data}/>
            <div style={metaDataStyle}>
                <Metadata data={metadata}/>
            </div>
        </div>
    )

 
}

export default Detail;