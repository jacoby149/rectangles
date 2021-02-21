function dimDiff(div,nottel){
    var [w,h]=[0,0];
    for (var i = 0; i < nottel.length; i++) {
        var child = nottel[i];
        [w,h]=[w+child.clientWidth,h+child.clientHeight];
    }
    return [(div.clientWidth-w) + "px",(div.clientHeight-h) + "px"];
}

function telescope(div){
    const children = [...div.childNodes].filter(e=> e.classList.contains("R"));
    const nottel = [...children].filter(e => e.classList.contains("nottel"));
    const tel = [...children].filter(e =>  e.classList.contains("tel"));
    console.log(nottel,tel)
    /* Do some telescoping */
    if (tel.length == 1){
        const t = tel[0];
        const [dwidth,dheight] = dimDiff(div,nottel)
        console.log(dwidth,dheight)
        const side = div.getAttribute('childfloat');
        console.log(side);
        const h = side=="left" || side=="right";
        const v = side=="top" || side=="bottom";
        if (h) { t.style.width = dwidth;}
        else if (v){ t.style.height = dheight;}
        console.log(t.style.width,t.style.height);
    }

    /* Alert Multi Telescope Issue */
    if (tel.length > 1){
        console.log("Warning. too many telescopic rects.");return;
    }

    /* Recurse */
    for (var i = 0; i < children.length; i++) {
        const child = children[i]
        telescope(child);
    }

}

/* Start Telescope.js */
window.onresize = function(event) {telescope(app);};
telescope(app);