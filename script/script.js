var mql = window.matchMedia("screen and (max-width: 720px)");
var width = window.outerWidth;
var scale = width/720;

window.onload = ()=>{
    if (mql.matches) {
        document.body.style.transform = `scale(${scale})`;
    }
}