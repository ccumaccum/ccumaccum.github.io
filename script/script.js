

window.onload = ()=>{
    var mql = window.matchMedia("screen and (max-width: 720px)");
    var width = window.outerWidth;
    var scale = width/720;
    if (mql.matches) {
        document.getElementById('wrap').style.transform = `scale(${scale})`;
    }
}