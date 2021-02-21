

function Logo(props){
    return(
        <R ps = {props.ps}>  
            <img src = {"pp.svg"} style={{height:"60%",margin:"20%",paddingLeft:"15px"}} />
        </R>

    )
}

function Text(props){
    return (
        <R ps ={props.ps} s = {props.s}>
            <R ns t>
                <div style = {{display:"flex",height:"100%",alignItems:"center",justifyContent:"left",paddingLeft:"15px"
                                }}>
                {props.children}
                </div>
            </R>
        </R>
    )
}

/* The Rectangle component */
function R(props){
    
    /* Append dictionaries */
    function a(x,y){
        return {...x,...y};
    }

    /* Style Dictionary */
    var style = {}

    /* Float */
    const [t,b,l,r] = [props.t,props.b,props.l,props.r];
    var side = "top"
    if ((t+b+l+r) > 1) console.log("warning conflicting tblrs ! ");
    if (t){side="top"};
    if (b){side="bottom"};
    if (l){side="left"};
    if (r){side="right"};
    
    
    if (l){style=a(style,{writingMode:"vertical-lr"})}
    else if (r){style=a(style,{writingMode:"vertical-rl"})}
    else if (t){style=a(style,{writingMode:"horizontal-tb"})}
    else if (b){style=a(style,{writingMode:"horizontal-bt"})}

    /* Border sides */
    const [bt,bb,bl,br] = [props.bt,props.bb,props.bl,props.br];
    if (bt){ style=a(style,{ borderTopStyle: "solid" } ) };
    if (bb){ style=a(style,{ borderBottomStyle: "solid" } ) };
    if (bl){ style=a(style,{ borderLeftStyle: "solid" } ) };
    if (br){ style=a(style,{ borderRightStyle: "solid" } ) };

    /* noscroll */
    if (props.ns){style=a(style,{overflow:"hidden"})}

    /* Rect Size */
    const v = (!props.ps || props.ps == "top" || props.ps == "bottom")
    var [s,ms] = [props.s,props.ms];

    if (props.className != "root"){
        if (!s){s="auto"}
        if (v){style= a(style,{height:s,width:"auto"} )} /* for now */
        else {style=a(style,{width:s,height:"auto"})}
    }

    /* Pass float orientation to children */
    const updatedChildren = React.Children.map(
      props.children,
      (child, i) => {
        return React.cloneElement(child, {
        //this properties are available as a props in child components
          ps: side
        });
      }
    );

    return (
        <div childfloat={side} tel={props.tel?"true":"false"} 
            className = {"R " + (props.tel?"tel ":"nottel ") + props.className}
                style = {{...style,...props.style}}>
        
            {updatedChildren}
        
        </div>
    )
}