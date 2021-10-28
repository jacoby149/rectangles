
function loadComp(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/babel');
    script.setAttribute('data-plugins', "transform-modules-umd");
    script.setAttribute('data-presets', "react");
    script.setAttribute('data-type',"module");
    if (url[0]=='/') url = window.location.protocol + "//" + window.location.host + url;
    console.log(url)
    script.src = url;
    head.appendChild(script);
}