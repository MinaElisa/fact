console.log("[index.js]index.js started.")

window.onload=function(){

    var e_emergency = document.getElementsByClassName('emergency')[0];
    var icons1 = e_emergency.querySelectorAll("[id='icon']");
    for(var i=0;i<icons1.length;i++){
        icons1[i].style.backgroundImage='url("./icon/icon'+(i+1)+'.png")';
    }
    console.log("[index.js]Icon images was procced, "+icons1.length+" images been set.");
}