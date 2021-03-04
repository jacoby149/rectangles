import Plainpad from 'plainpad.js'
import Dash from 'dash.js'

/* Top Pane Site Branding Component */
function App(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("demo") == "dash") return <Dash/>
    else return <Plainpad/>
}

export {App}