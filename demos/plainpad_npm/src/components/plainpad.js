import React from 'react';
import {R,C,T} from 'rectangles-npm'
import {Note,Credits,Branding,Icon} from 'elems'

/* Plain Pad app made of entirely rectangles.js components */
function Plainpad(){


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
            

            {/* Bottom Section */}
            <R tel l>


                {/* Side Pane */}
                <R t ns br c={collapse} s= {"240px"}>
                    <R l s = {"50px"}>
                        <C h s={"100px"}>
                            <h4>Search Bar : </h4>
                        </C>
                        <T tel ns>Search...</T>    
                    </R>        
                    <R tel bb bt t>
                        <Note>Note 1 :)</Note> 
                        <Note>Note 2 :)</Note> 
                        <Note>Note 3 :)</Note> 
                    </R>
                    <Credits />
                </R>


                {/* Writing Pane */}
                <R tel t >
                    <T tel>Write a note here...</T>
                </R>

                
            </R>
        </R>
    )
}

export default Plainpad;