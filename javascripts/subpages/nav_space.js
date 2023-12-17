console.log("[nav_space.js]index.js started.")

window.onload=function(){

    //Set up images in batches
    var e_emergency = document.getElementsByClassName('banner')[0];
    var imgs = e_emergency.querySelectorAll("[id='image']");
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.backgroundImage='url("../res/images/subpages/banner ('+(i+1)+').png")';
    }
    console.log("[index.js]Image batches finished, "+imgs.length+" icons been set.");
}