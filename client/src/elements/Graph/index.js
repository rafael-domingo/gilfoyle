import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
function Graph() {
    return (
        <div>
            <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5} limit={5}>
            <SparklinesLine color="white" style={{fill: 'none'}}/>
            <SparklinesSpots style={{stroke: 'white', fill: 'none'}}/>
            </Sparklines>
        </div>
    )
}

export default Graph;