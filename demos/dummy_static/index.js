
import { pass, R, C, T, startRectangles } from 'Rectangles.js'

/* Plain Pad app made of entirely rectangles.js components */
function App() {
    /* The App Component */
    return (
        <R root t theme={"dark"}> //root
            <R l s={"70px"}> //A
                <R s={"40px"}></R> //B
                <R tel></R> //C
                <R s={"60px"}></R> //D
            </R>
            <R></R> //E
        </R>
    )
}

ReactDOM.render(<R><App /></R>, document.getElementById("root"));
startRectangles(document.getElementById("root"));