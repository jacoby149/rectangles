
function loadComp(url)
{    
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/babel');
    script.setAttribute('data-plugins', "transform-modules-umd");
    script.setAttribute('data-presets', "react");
    script.setAttribute('data-type',"module");
    script.src = url;
    body.appendChild(script);
}