import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
function Graph({data}) {
    const [graphData, setGraphData] = React.useState();

    React.useEffect(() => {
        setGraphData(data)
        console.log('graph')
    }, [data]);

    return (
        <div>
            <Sparklines data={graphData} limit={9} width={100} height={20} margin={5}>
            <SparklinesLine color="white" style={{fill: 'none'}}/>
            <SparklinesSpots style={{stroke: 'white', fill: 'none'}}/>
            </Sparklines>
        </div>
    )
}

export default Graph;