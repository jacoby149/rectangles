import Plainpad from './components/plainpad'
import Dash from './components/dash'
import Crm from './components/crm'

/* Top Pane Site Branding Component */
function App(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("demo") == "dash") return <Dash/>
    if (urlParams.get("demo") == "crm") return <Crm/>
    else return <Plainpad/>
}

export default App;
