import './Title.css';

function Title() {
    const divStyle={
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'left',
        padding: '5em',
        height: '10%',
        width: '100%'
    }

    const h1Style = {
        fontSize: '4em',
        width: '100%',
        fontWeight: '100'
    }

    const spanStyle = {
        fontSize: '2em',
        width: '100%'
    }
    
    return (
        <div style={divStyle}>
            <h1 style={h1Style}>gilfoyle</h1>
            <span style={spanStyle}>Crypto Tracker</span>
        </div>
    )
}

export default Title;