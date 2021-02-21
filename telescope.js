function adjustWidth(tel){
    if (tel.length > 1){
        console.log("Warning. " + tel.length + " telescopic elements inside of ...");
        console.log(div);
        console.log("there should be 1 or less.")
    }
    if (tel.length > 1){console.log("To many telescopic rects.");}
    else if (tel.length >0)
        tel[0].width = dwidth;
}

function telescope(div){

    var regChildren = div.getElementsByClassName('R nottel');
    var tel = div.getElementsByClassname('R tel');
    
    /* Do some telescoping */
    if (tel.length == 1){
        var [dwidth,dheight] = dimDiff(div,regChildren)
        var side = div.side;
        if (side=="left" || side=="right") tel[0].width = dwidth;
        else if (side=="top" || side=="bottom") tel[0].height = dheight;
    }

    /* Alert Multi Telescope Issue */
    if (tel.length > 1){
        console.log("Warning. too many telescopic rects.");return;
    }

    /* Recurse */
    for (var i = 0; i < regChildren.length; i++) {
        var child = regChildren[i]
        telescope(child);
    }

}

/* Start Telescope.js */
window.onresize = function(event) {telescope(app);};
telescope(app);