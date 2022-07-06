

window.onload = ()=>{
    var mql = window.matchMedia("screen and (max-width: 720px)");
    var width = window.outerWidth;
    var scale = width/720;
    var wrap = document.getElementById('wrap');
    if (mql.matches) {
        wrap.style.transform = `scale(${scale})`;
    }
}