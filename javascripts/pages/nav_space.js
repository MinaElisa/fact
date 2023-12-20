console.log("[nav_space.js]started.")

window.onload=function(){
    // 根据当前html名称去追加navlogo的文本
    var temp1 = location.href.split("/");
    var temp2 = temp1.slice(temp1.length-1, temp1.length).toString(String).split(".");
    var logo = document.getElementsByClassName('LOGO')[0];
    var text= document.createElement('p');
    text.style.display='inline-block';
    text.style.fontSize='40px';
    text.style.lineHeight='80px';
    text.style.color="gray";
    text.innerText=' '+String(temp2.slice(0,1));
    logo.append(text);
    //Set up images in batches
    var e_emergency = document.getElementsByClassName('banner')[0];
    var imgs = e_emergency.querySelectorAll("[id='image']");
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.backgroundImage='url("../res/images/pages/banner ('+(i+1)+').png")';
    }
    console.log("[index.js]Image batches finished, "+imgs.length+" icons been set.");
}

let header = document.getElementsByTagName('template-nav')[0];
window.onscroll =()=>{
    let top =document.documentElement.scrollTop || document.body.scrollTop;
    let logo=header.getElementsByClassName('LOGO')[0];
    let p1=logo.getElementsByTagName('p')[0];
    let p2=logo.getElementsByTagName('p')[1];
    let lis=header.getElementsByTagName('li');

    const mediaQueryPC = window.matchMedia('(min-width: 1230px)')
    const mediaQueryPhone = window.matchMedia('(max-width: 800px)')
    const mediaQueryTP = window.matchMedia('(min-width:800px) and (max-width: 1230px)')

    if(mediaQueryPC.matches){
        if(top >22){
            header.style = "position:fixed;top:0; z-index:9;";
            p1.style='font-size:40px; line-height:40px;'
            p2.style='font-size:30px; line-height:40px; color:gray; vertical-align: top;'
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:40px;';}
        }
        if(top <1){
            header.style = "position:static;";
            p1.style='font-size:40px; line-height:80px;'
            p2.style='font-size:40px; line-height:80px; color:gray;'
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:80px;';}
        }
    }
    if(mediaQueryPhone.matches){
        if(top >22){
            header.style = "position:fixed;top:0; z-index:9;";
            p1.style='font-size:40px; line-height:40px;'
            p2.style='font-size:30px; line-height:40px; color:gray; vertical-align: top;'
        }
        if(top <1){
            header.style = "position:static;";
            p1.style='font-size:40px; line-height:80px;'
            p2.style='font-size:40px; line-height:80px; color:gray;'
        }
    }
    if(mediaQueryTP.matches){
        if(top >22){
            header.style = "position:fixed;top:0; z-index:9;";
            p1.style='font-size:40px; line-height:40px;'
            p2.style='font-size:30px; line-height:40px; color:gray; vertical-align: top;'
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:40px;';}
        }
        if(top <1){
            header.style = "position:static;";
            p1.style='font-size:40px; line-height:80px;'
            p2.style='font-size:40px; line-height:80px; color:gray;'
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:80px;';}
        }
    }
}
