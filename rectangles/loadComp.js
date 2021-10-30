
function loadComp(url)
{    
    var body = document.getElementsByTagName('body')[0];

    var preLoadScript = document.createElement('script');
    preLoadScript.src = url;
    body.appendChild(preLoadScript);

    var script = document.createElement('script');
    script.setAttribute('type', 'text/babel');
    script.setAttribute('data-plugins', "transform-modules-umd");
    script.setAttribute('data-presets', "react");
    script.setAttribute('data-type',"module");
    script.src = url;
    body.appendChild(script);
}