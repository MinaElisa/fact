console.log("[index.js]index.js started.")

window.onload=function(){

    //Set up images in batches
    var e_emergency = document.getElementsByClassName('emergency')[0];
    var icons1 = e_emergency.querySelectorAll("[id='icon']");
    for(var i=0;i<icons1.length;i++){
        icons1[i].style.backgroundImage='url("./icon/icon_index'+(i+1)+'.png")';
    }
    console.log("[index.js]Image batches finished, "+icons1.length+" icons been set.");
}
console.log("[index.js]index.js ended.")