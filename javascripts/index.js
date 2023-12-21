console.log("[index.js]started.")

window.onload=function(){

    //Set up images in batches
    var e_emergency = document.getElementsByClassName('emergency')[0];
    var icons1 = e_emergency.querySelectorAll("[id='icon']");
    for(var i=0;i<icons1.length;i++){
        
        icons1[i].style.backgroundImage='url("./res/icon/icon_index'+(i+1)+'.png")';
    }

    // Under .quickconnet, auto insert black space after <br>.
    var div = document.getElementsByClassName('quickcontent')[0];
    var br=div.getElementsByTagName('br');
    for(var x=0;x<br.length;x++){
        br[x].insertAdjacentHTML('afterend','&emsp;&emsp;');
    }
    
    // 已废弃的'文本折叠展开'功能代码
    // var quickcontent = document.getElementsByClassName("quickcontent")[0];
    // var textfolds = quickcontent.getElementsByTagName('li');
    // for(var i=0;i<textfolds.length;i++){
    //     if(textfolds[i].clientHeight < textfolds[i].scrollHeight){
    //         textfolds[i].insertAdjacentHTML('afterend','<button id="btnfold">Expand</button>');
    //     }
    // }

    // var btn = quickcontent.getElementsByTagName('button');
    // for(var x=0;x<btn.length;x++){
    //     btn[x].addEventListener('click', function() {
    //         if(window.getComputedStyle(this.previousElementSibling,null).height==='100px'){
    //             this.previousElementSibling.style.height="auto";
    //             this.innerHTML='Clip';
    //         }else{
    //             this.previousElementSibling.style.height="100px";
    //             this.innerHTML='Expand';
    //         }
    //     });
    // }
}
let header = document.getElementsByTagName('nav')[0];
window.onscroll =()=>{
    let top =document.documentElement.scrollTop || document.body.scrollTop;
    let logo=header.getElementsByClassName('LOGO')[0];
    let p1=logo.getElementsByTagName('p')[0];
    let lis=header.getElementsByTagName('li');
    let main = document.getElementsByTagName('main')[0];

    const mediaQueryPC = window.matchMedia('(min-width: 1230px)')
    const mediaQueryPhone = window.matchMedia('(max-width: 800px)')
    const mediaQueryTP = window.matchMedia('(min-width:800px) and (max-width: 1230px)')

    if(mediaQueryPC.matches){
        if(top >25){
            header.style = "height:40px;position:fixed;top:0; z-index:9;";
            p1.style='font-size:40px; line-height:40px;'
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:40px;';}
            main.style='margin-top:55px;';
        }
        if(top <1){
            header.style = "height:auto;position:static;";
            p1.style='font-size:40px; line-height:80px;'
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:80px;';}
            main.style='margin-top:0;';
        }
    }
    if(mediaQueryPhone.matches){
        if(top >25){
            header.style = "position:fixed;top:0; z-index:9;";
            p1.style='font-size:40px; line-height:40px;'
        }
        if(top <1){
            header.style = "position:static;";
            p1.style='font-size:40px; line-height:80px;'
        }
    }
    if(mediaQueryTP.matches){
        if(top >25){
            header.style = "height:40px; position:fixed;top:0; z-index:9;";
            p1.style='font-size:40px; line-height:40px;'
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:40px;';}
            main.style='margin-top:55px;';
        }
        if(top <1){
            header.style = "height:80px position:static;";
            p1.style='font-size:40px; line-height:80px;'
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:80px;';}
            main.style='margin-top:0;';
        }
    }
}

