
import {pass,R,C,T,startRectangles} from 'Rectangles.js'

/* Plain Pad app made of entirely rectangles.js components */
function App(){


    /* Menu Collapsed State */
    const [collapse,setCollapse] = React.useState(false);
    function toggleCollapse(){
        setCollapse(!collapse);
    }


    /* Theme Color State */
    const [theme,setTheme] = React.useState("dark")
    function toggleTheme(){
        if (theme=="dark"){setTheme("light")}
        else {setTheme("dark")}
    }


    /* The App Component */
    return (
        <R root t bt bb br bl theme={theme}>
        {/* This is the root rectangle ^^^ */}


            {/* Top Pane */}
            <R l bb s={"70px"} >
                <Branding />                                
                <Icon l ns onClick={toggleCollapse}>bars</Icon>
                <R tel />
                <R l ns s = {"160px"}>
                    <Icon>user-circle</Icon>
                    <Icon onClick={toggleTheme}>moon</Icon>
                    <Icon>file</Icon>
                </R>
            </R>  
            

            {/*Everything Under Top Pane */}
            <R tel l>


                {/* Left Side Pane */}
                <R t ns br c={collapse} s= {"240px"}>
                    <R l s = {"50px"}>
                        <C h s={"100px"}>
                            <h4>User Search : </h4>
                        </C>
                        <T tel ns>Search...</T>    
                    </R>        
                    <R tel bb bt t>
                        <User>Caleb69</User> 
                        <User>Ericc</User> 
                        <User>Jennypenny</User> 
                    </R>
                    <Credits />
                </R>


                {/* Writing Pane */}
                <R t tel>
                    <GameButtons></GameButtons>
                    <SubmitButton></SubmitButton>
                </R>

                
            </R>
        </R>
    )
}


/* The credit/link to the original Plain Pad project */
function Credits(props){
    return(
        <R t {...pass(props)}>
            <C s={"70px"}> 
                <div style={{fontFamily:"monospace"}}>
                   Game Made by <a href = "https://jacobhoffman.tk">Jacob Hoffman</a>
                </div>
            </C>
        </R>
    )
}


/* A custom sub class of Content(C). (Which makes it a subclass of (R))
/* For Custom Rectangle subclasses, make sure to pass props.ps through. */
function User(props){
    return (
        <C h s={"50px"} {...pass(props)}>
            {props.children}
        </C>
    )
}


/* Custom Rectangles.js Icon Component */
function Icon(props){
    const iconClass = "fa-"+props.children;
    return(
        <C s={"50px"} {...pass(props)}>
            <i className={"fa "+ iconClass +" fa-2x font-weight-bold"}></i>
        </C>
    )
}


/* Top Pane Site Branding Component */
function Branding(props){
    return(
        <R l {...pass(props)}>
            
                <C l p = "0 0 0 22" s = {"70px"}>{/* Plain Pad Logo */}
                    <img src = {"rock.png"} style={{height:"60%"}} />
                </C>
                
                <C l ns mc s = {"120px"}>
                    <div style={{fontFamily:"monospace"}}><h3>Rock Paper<br/> Scissors</h3></div>
                </C>

        </R>
    )
}

function GameButton(props){
    return(
        <C h br ha="center" s = "33.33%" {...pass(props)}>
            <img width="50px" src={props.img} ></img>
        </C>
    )
}

function GameButtons(props){
    return(
        <R l s={"100px"} bb {...pass(props)}>
            <GameButton img="rock.png"></GameButton>
            <GameButton img="paper.png"></GameButton>
            <GameButton img="scissors.png"></GameButton>
        </R>
    )
}

function SubmitButton (props){
    return (
        <C s="100px" ha = "center" {...pass(props)}>
                <button className="button">Submit</button>
        </C>
    )
}

ReactDOM.render(<R><App /></R>,document.getElementById("root"));
startRectangles(document.getElementById("root"));