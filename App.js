
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
                    <C tel>
                        <img src = {"https://alextselegidis.com/try/plainpad-standalone/static/media/logo.af1c98b2.svg"} style={{height:"60%",margin:"20%"}} />
                    </C>
                    <C s = {"120px"}><h3>Plainpad<br/> Design Copy</h3></C>
                </R>

                <R tel />
                
                <R l ns s = {"150px"}>
                    <C s={"50px"}><i className="fa fa-user-circle fa-2x font-weight-bold"></i></C>
                    <C s={"50px"}><i className="fa fa-moon fa-2x font-weight-bold"></i></C>
                    <C s={"50px"}><i className="fa fa-file fa-2x font-weight-bold"></i></C>
                </R>
            </R>  
            
            <R tel l>

                <R t ns br s= {"240px"}>
                    <R s = {"50px"}>
                    <C h><h4>Search Bar : </h4><input placeholder="..." style={{display:"inline",width:"5em",marginLeft:"10%"}}/></C>    
                    </R>        
                    <R tel bb bt t> 
                        <C h s={"50px"}>Note 1 :) </C>
                        <C h s={"50px"}>Note 2 :)</C>
                        <C h s={"50px"}>Note 3 :)</C>
                        <C h s={"50px"}>Note 4 :)</C>
                        <C h s={"50px"}>Note 5 :)</C>
                        <C h s={"50px"}>Note 6 :)</C>
                        <C h s={"50px"}>Note 7 :)</C>
                        <C h s={"50px"}>Note 8 :)</C>
                        <C h s={"50px"}>Note 9 :)</C>
                        <C h s={"50px"}>Note 10 :)  </C>
                    </R>
                    <R t>
                        <C s={"200px"}> <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">Plain Pad</a>&nbsp;Copy in Rectangles.js</C>
                    </R>
                </R>

                <R tel t ><C tel>Write a note here...</C></R>
            </R>
        </R>
    )
}