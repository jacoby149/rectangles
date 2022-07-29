
import { pass, R, C, T, startRectangles } from 'Rectangles.js'

/* Plain Pad app made of entirely rectangles.js components */
function App() {
    /* The App Component */
    return (
        <R bb bt bl br root t theme={"dark"}>
            {/*root*/}
            <R bb l s={"70px"} theme={"brick"}>
                {/* A */}
                <R br s={"40px"}>
                <b> B </b>
                </R>
                <R br tel>
                <b> C </b>
                </R> 
                <R s={"60px"}>
                <b> D </b>
                </R>
            </R>
            <R>
            <b> E </b>
            </R> 
        </R>
    )
}

ReactDOM.render(<R><App /></R>, document.getElementById("root"));
startRectangles(document.getElementById("root"));