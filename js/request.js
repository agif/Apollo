if (self == top) { 
var loadUrl = '//genieedmp.com/dmp.js?c=2618&tcid=0fe70f27f168de3ca4f6e107f5935db7f8f15d1d';
loadScript('https:' + loadUrl);

function loadScript(scriptLocationAndName) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptLocationAndName;
    head.appendChild(script);
}
}
