import {R,C} from 'rectangles-npm'

/* The credit/link to the original Plain Pad project */
function Credits({rna}){
    return(
        <R t rna={rna}>
            <C s={"70px"}> 
                <div style={{fontFamily:"monospace"}}>
                    <a href = "https://jacobhoffman.tk">By Jacob Hoffman</a>&nbsp; Dash Data Viewer
                </div>
            </C>
        </R>
    )
}


/* A custom sub class of Content(C). (Which makes it a subclass of (R))
/* For Custom Rectangle subclasses, make sure to pass rna through. */
function Note(props){
    return (
        <C h s={"50px"} rna={props.rna}>
            {props.children}
        </C>
    )
}


/* Custom Rectangles.js Icon Component */
function Icon(props){
    const iconClass = "fa-"+props.children;
    return(
        <C s={"50px"} rna={props.rna}>
            <i className={"fa "+ iconClass +" fa-2x font-weight-bold"}></i>
        </C>
    )
}


/* Top Pane Site Branding Component */
function Branding(props){
    return(
        <R l rna={props.rna}>

            <C l ns s = {"70px"}>{/* Plain Pad Logo */}
                <img src = {"images/d.png"} style={{height:"60%",margin:"20%",float:"right"}} />
            </C>
            
            <C l ns mc s = {"120px"}>
                <div style={{fontFamily:"monospace"}}><h3>Dash<br/> Data Viewer</h3></div>
            </C>

        </R>
    )
}


/* dash things */
function CC(props){
    return (
        <C ha = "center" 
            va = "center" 
                p = "20 0 20 0"
                    {...props}> 
                    {props.children} 
        </C>
    )
}

/* A custom sub class of Content(C). (Which makes it a subclass of (R))
/* For Custom Rectangle subclasses, make sure to pass props.ps through. */
function ListItem(props){
    return (
        <CC h s={"70px"} rna={props.rna}>
            {props.children}
        </CC>
    )
}

export {Credits,Note,Icon,Branding,ListItem,CC};