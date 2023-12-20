console.log("[nav_space.js]started.")

window.onload=function(){
    var temp1 = location.href.split("/");
    var temp2 = temp1.slice(temp1.length-1, temp1.length).toString(String).split(".");
    var logo = document.getElementsByClassName('LOGO')[0];
    var text= document.createElement('p');
    text.style.display='inline';
    text.style.fontSize='1.8rem';
    text.style.lineHeight='1.8rem';
    text.innerText=' '+String(temp2.slice(0,1));
    logo.appendChild(text);
    //Set up images in batches
    var e_emergency = document.getElementsByClassName('banner')[0];
    var imgs = e_emergency.querySelectorAll("[id='image']");
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.backgroundImage='url("../res/images/pages/banner ('+(i+1)+').png")';
    }
    console.log("[index.js]Image batches finished, "+imgs.length+" icons been set.");
}