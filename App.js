
/* A custom sub class of Content(C). (Which makes it a subclass of (R))
/* For Custom Rectangle subclasses, make sure to pass props.ps through. */
function Note(props){
    return (
        <C h s={"50px"} {...props}>
            {props.children}
        </C>
    )
}

/* App made of entirely rectangle components */
function App(){

    const [collapse,setCollapse] = React.useState(false);
    function toggleCollapse(){
        setCollapse(!collapse);
    }

    const [theme,setTheme] = React.useState("dark")
    function toggleTheme(){
        if (theme=="dark"){setTheme("light")}
        else {setTheme("dark")}
    }

    return (
        <R t bt bb br bl className="root" theme={theme}>
            <R l ns bb s={"70px"} >
                
                <C l ns s = {"70px"}>
                    <img src = {"https://alextselegidis.com/try/plainpad-standalone/static/media/logo.af1c98b2.svg"} style={{height:"60%",margin:"20%",float:"right"}} />
                </C>
                
                <C l ns mc s = {"120px"}>
                    <div style={{fontFamily:"monospace"}}><h3>Plainpad<br/> Design Copy</h3></div>
                </C>
                
                
                <C l h ns s={"50px"} onClick={toggleCollapse}>
                    <i className="fa fa-bars fa-2x font-weight-bold"></i>
                </C>
                

                <R tel />
                
                <R l ns s = {"150px"}>
                    <C s={"50px"}>
                        <i className="fa fa-user-circle fa-2x font-weight-bold"></i>
                    </C>
                    <C s={"50px"} onClick={toggleTheme}>
                        <i className="fa fa-moon fa-2x font-weight-bold"></i>
                    </C>
                    <C s={"50px"}>
                        <i className="fa fa-file fa-2x font-weight-bold"></i>
                    </C>
                </R>
            </R>  
            
            <R tel l>

                <R t ns br c={collapse} s= {"240px"}>

                    <R l s = {"50px"}>
                        <C h s={"100px"}><h4>Search Bar : </h4></C>
                        <T tel>Search...</T>    
                    </R>        

                    <R tel bb bt t>
                        <Note>Note 0 :)</Note> 
                        <Note>Note 1 :)</Note> 
                        <Note>Note 2 :)</Note> 
                        <Note>Note 3 :)</Note> 
                        <Note>Note 4 :)</Note> 
                        <Note>Note 5 :)</Note> 
                        <Note>Note 6 :)</Note> 
                        <Note>Note 7 :)</Note> 
                        <Note>Note 8 :)</Note> 
                    </R>

                    <R t>
                        <C s={"70px"}> 
                        <div style={{fontFamily:"monospace"}}>
                            <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">Plain Pad</a>&nbsp;UI Copy in Rectangles.js
                        </div>
                        </C>
                    </R>
                </R>

                <R tel t ><T tel>Write a note here...</T></R>
            </R>
        </R>
    )
}