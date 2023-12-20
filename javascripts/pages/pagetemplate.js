console.log("[template1.js]index.js started.")

window.onload=function(){
    // 根据当前html名称去追加navlogo的文本
    var temp1 = location.href.split("/");
    var temp2 = temp1.slice(temp1.length-1, temp1.length).toString(String).split(".");
    var logo = document.getElementsByClassName('LOGO')[0];
    var text= document.createElement('span');
    text.style.display='inline';
    text.style.fontSize='1.7rem';
    text.style.lineHeight='1.7rem';
    text.innerText=' '+String(temp2.slice(0,1));
    logo.appendChild(text);
}


let header = document.getElementsByTagName('template-nav')[0];
window.onscroll =()=>{
    let top =document.documentElement.scrollTop || document.body.scrollTop;
    let label=header.getElementsByTagName('label')[0];
    let a =label.getElementsByTagName('a')[0];
    let span=label.getElementsByTagName('span')[0];
    let li=header.getElementsByTagName('li');

    const mediaQueryPC = window.matchMedia('(min-width: 1230px)')
    const mediaQueryPhone = window.matchMedia('(max-width: 800px)')
    const mediaQueryTP = window.matchMedia('(min-width:800px) and (max-width: 1230px)')

    if(mediaQueryPC.matches){
        if(top !=0){
            header.style = "height:40px;position:fixed;top:0; z-index:9;";
            label.style = 'height:40px; line-height:40px;';
            span.style='font-size:1.7rem; line-height:100%;';
            for(var i=0;i<li.length;i++){li[i].style='line-height:40px;';}
        }
        else{
            header.style = "height:auto;position:static;";
            label.style='font-size:40px;line-height:80px;';
            span.style=' font-size:1.7rem;line-height:1.7rem;';
            for(var i=0;i<li.length;i++){li[i].style='line-height:80px;';}
        }
    }
    if(mediaQueryPhone.matches){
        if(top !=0){
            header.style = "position:fixed;top:0; z-index:9;";
            label.style='line-height:40px;';
            span.style='font-size:1.7rem;line-height:40px;';
        }
        else{
            header.style = "position:static;";
            label.style='line-height:80px;';
            span.style='font-size:1.7rem;line-height:1.7rem;';
        }
    }
    // if(mediaQueryTP.matches){
    //     if(top !=0){
    //         header.style = "position:fixed;top:0; z-index:9;";
    //         label.style='font-size:40px;line-height:40px;';
    //         p.style='display:inline; font-size:1rem;line-height:40px;';
    //     }
    //     else{
    //         header.style = "position:static;";
    //         label.style='font-size:40px;line-height:80px;';
    //         p.style='display:inline; font-size:1.8rem;line-height:1.8rem;';
    //     }
    // }
}