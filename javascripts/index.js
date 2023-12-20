console.log("[index.js]index.js started.")

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
        br[x].insertAdjacentHTML('afterend','&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
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
    let label=header.getElementsByTagName('label')[0];
    let li=header.getElementsByTagName('li');

    const mediaQueryPC = window.matchMedia('(min-width: 1200px)')
    const mediaQueryPhone = window.matchMedia('(max-width: 800px)')

    if(mediaQueryPC.matches){
        if(top !=0){
            header.style = "height:40px;position:fixed;top:0; z-index:9";
            label.style='font-size:40px;line-height:40px;';
            for(var i=0;i<li.length;i++){
                li[i].style='line-height:40px;';
            }
        }
        else{
            header.style = "height:80px;position:static;";
            label.style='font-size:40px;line-height:80px;';
            for(var i=0;i<li.length;i++){
                li[i].style='line-height:80px;';
            }
        }
    }
    if(mediaQueryPhone.matches){
        if(top !=0){
            header.style = "position:fixed;top:0;";
            label.style='font-size:40px;line-height:40px;';
        }
        else{
            header.style = "position:static;";
            label.style='font-size:40px;line-height:80px;';
        }
    }
}

