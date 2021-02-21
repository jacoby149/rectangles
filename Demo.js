/* App made of entirely rectangle components */
function App(){
    return (
        <R t ns bt bb br bl className="root">
            
            <R l ns bb s={"70px"} >
                    <R l ns s={"300px"}>
                        <Logo/>
                        <Text s = {"200px"}><h3>Plainpad<br/> Standalone</h3></Text>
                    </R>

                    <R tel />
                    
                    <R l ns s = {"180px"}>
                        <Text><i className="fa fa-user-circle fa-2x font-weight-bold"></i></Text>
                        <Text><i className="fa fa-moon fa-2x font-weight-bold"></i></Text>
                        <Text><i className="fa fa-file fa-2x font-weight-bold"></i></Text>
                    </R>
            </R>  
            
            <R tel l ns>

                <R t ns br s= {"270px"}>
                    <R s = {"50px"}>
                    <Text><h4>Search Bar : </h4><input placeholder="..." style={{display:"inline",width:"10em",marginLeft:"10%"}}/></Text>    
                    </R>        
                    <R tel bb bt t> 
                        <Text s={"50px"}>Note 1 :) </Text>
                        <Text s={"50px"}>Note 2 :)</Text>
                        <Text s={"50px"}>Note 3 :)</Text>
                        <Text s={"50px"}>Note 4 :)</Text>
                        <Text s={"50px"}>Note 5 :)</Text>
                        <Text s={"50px"}>Note 6 :)</Text>
                        <Text s={"50px"}>Note 7 :)</Text>
                        <Text s={"50px"}>Note 8 :)</Text>
                        <Text s={"50px"}>Note 9 :)</Text>
                        <Text s={"50px"}>Note 10 :)  </Text>
                    </R>
                    <R t>
                        <Text s={"200px"}> Plain Pad Copy in Rectangles.js</Text>
                    </R>
                </R>

                <R tel t ns><Text>Write a note here...</Text></R>
            </R>

        </R>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);