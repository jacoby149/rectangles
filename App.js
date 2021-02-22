function Logo(props){
    return(
        <R ps = {props.ps}>  
            <img src = {"https://alextselegidis.com/try/plainpad-standalone/static/media/logo.af1c98b2.svg"} style={{height:"60%",margin:"20%",paddingLeft:"15px"}} />
        </R>

    )
}

function Text(props){
    return (
        <R {...props}>
            <R ns t h={props.h}>
                <div style = {{display:"flex",height:"100%",alignItems:"center",justifyContent:"left",paddingLeft:"15px"
                                }}>
                {props.children}
                </div>
            </R>
        </R>
    )
}

/* App made of entirely rectangle components */
function App(){
    return (
        <R t ns bt bb br bl className="root">

            {/* 
            BEST PRACTICE : 
            Include any custom styles and scripts within the app component.
            <link src = "style.css"></link>
            <script type="text/babel" src="customComponent.js"></script>
            */}

            <R l ns bb s={"70px"} >
                <R l ns s={"200px"}>
                    <Logo/>
                    <Text s = {"120px"}><h3>Plainpad<br/> Design Copy</h3></Text>
                </R>

                <R tel />
                
                <R l ns s = {"150px"}>
                    <Text s={"50px"}><i className="fa fa-user-circle fa-2x font-weight-bold"></i></Text>
                    <Text s={"50px"}><i className="fa fa-moon fa-2x font-weight-bold"></i></Text>
                    <Text s={"50px"}><i className="fa fa-file fa-2x font-weight-bold"></i></Text>
                </R>
            </R>  
            
            <R tel l>

                <R t ns br s= {"240px"}>
                    <R s = {"50px"}>
                    <Text h><h4>Search Bar : </h4><input placeholder="..." style={{display:"inline",width:"5em",marginLeft:"10%"}}/></Text>    
                    </R>        
                    <R tel bb bt t> 
                        <Text h s={"50px"}>Note 1 :) </Text>
                        <Text h s={"50px"}>Note 2 :)</Text>
                        <Text h s={"50px"}>Note 3 :)</Text>
                        <Text h s={"50px"}>Note 4 :)</Text>
                        <Text h s={"50px"}>Note 5 :)</Text>
                        <Text h s={"50px"}>Note 6 :)</Text>
                        <Text h s={"50px"}>Note 7 :)</Text>
                        <Text h s={"50px"}>Note 8 :)</Text>
                        <Text h s={"50px"}>Note 9 :)</Text>
                        <Text h s={"50px"}>Note 10 :)  </Text>
                    </R>
                    <R t>
                        <Text s={"200px"}> <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">Plain Pad</a>&nbsp;Copy in Rectangles.js</Text>
                    </R>
                </R>

                <R tel t ><Text>Write a note here...</Text></R>
            </R>
        </R>
    )
}