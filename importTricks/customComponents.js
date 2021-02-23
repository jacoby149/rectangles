/* The credit/link to the original Plain Pad project */
function Credits(props){
    return(
        <R t {...props}>
            <C s={"70px"}> 
                <div style={{fontFamily:"monospace"}}>
                    <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">Plain Pad</a>&nbsp;UI Copy in Rectangles.js
                </div>
            </C>
        </R>
    )
}


/* A custom sub class of Content(C). (Which makes it a subclass of (R))
/* For Custom Rectangle subclasses, make sure to pass props.ps through. */
function Note(props){
    return (
        <C h s={"50px"} {...props}>
            {props.children}
        </C>
    )
}


/* Custom Rectangles.js Icon Component */
function Icon(props){
    const iconClass = "fa-"+props.children;
    return(
        <C s={"50px"} {...props}>
            <i className={"fa "+ iconClass +" fa-2x font-weight-bold"}></i>
        </C>
    )
}


/* Top Pane Site Branding Component */
function Branding(props){
    return(
        <R l {...props}>

            <C l ns s = {"70px"}>{/* Plain Pad Logo */}
                <img src = {"https://alextselegidis.com/try/plainpad-standalone/static/media/logo.af1c98b2.svg"} style={{height:"60%",margin:"20%",float:"right"}} />
            </C>
            
            <C l ns mc s = {"120px"}>
                <div style={{fontFamily:"monospace"}}><h3>Plainpad<br/> Design Copy</h3></div>
            </C>

        </R>
    )
}