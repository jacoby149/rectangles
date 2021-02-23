
/* A custom sub class of Content(C). (Which makes it a subclass of (R))
/* For Custom Rectangle subclasses, make sure to pass props.ps through. */
function Note(props){
    return (
        <C h s={"50px"} ps = {props.ps}>
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

    return (
        <R t ns bt bb br bl className="root">
            <R l ns bb s={"70px"} >
                
                <C l ns s = {"70px"}>
                    <img src = {"https://alextselegidis.com/try/plainpad-standalone/static/media/logo.af1c98b2.svg"} style={{height:"60%",margin:"20%",float:"right"}} />
                </C>
                
                <C l ns d s = {"120px"}>
                    <h3>Plainpad<br/> Design Copy</h3>
                </C>
                
                
                <C h l ns s={"50px"}>
                    <i onClick={toggleCollapse} className="fa fa-bars fa-2x font-weight-bold"></i>
                </C>
                

                <R tel />
                
                <R l ns s = {"150px"}>
                    <C s={"50px"}><i className="fa fa-user-circle fa-2x font-weight-bold"></i></C>
                    <C s={"50px"}><i className="fa fa-moon fa-2x font-weight-bold"></i></C>
                    <C s={"50px"}><i className="fa fa-file fa-2x font-weight-bold"></i></C>
                </R>
            </R>  
            
            <R tel l>

                <R t ns br c={collapse} s= {"240px"}>
                    <R s = {"50px"}>
                    <C h><h4>Search Bar : </h4><input placeholder="..." style={{display:"inline",width:"5em",marginLeft:"10%"}}/></C>    
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
                        <C s={"200px"}> <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">Plain Pad</a>&nbsp;Copy in Rectangles.js</C>
                    </R>
                </R>

                <R tel t ><T tel>Write a note here...</T></R>
            </R>
        </R>
    )
}