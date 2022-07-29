import Plainpad from 'plainpad.js'
import {pass,R,C,T,startRectangles} from 'Rectangles.js'


function App(){
    return <Plainpad/>
}

ReactDOM.render(<R><App /></R>,document.getElementById("root"));
startRectangles(document.getElementById("root"));