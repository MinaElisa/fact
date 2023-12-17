console.log("[index.js]index.js started.")

window.onload=function(){

    //Set up images in batches
    var e_emergency = document.getElementsByClassName('emergency')[0];
    var icons1 = e_emergency.querySelectorAll("[id='icon']");
    for(var i=0;i<icons1.length;i++){
        icons1[i].style.backgroundImage='url("./res/icon/icon_index'+(i+1)+'.png")';
    }

    var quickcontent = document.getElementsByClassName("quickcontent")[0];
    var textfolds = quickcontent.getElementsByTagName('li');
    for(var i=0;i<textfolds.length;i++){
        if(textfolds[i].clientHeight < textfolds[i].scrollHeight){
            textfolds[i].insertAdjacentHTML('afterend','<button id="btnfold">Expand</button>');
        }
    }

    var btn = quickcontent.getElementsByTagName('button');
    for(var x=0;x<btn.length;x++){
        btn[x].addEventListener('click', function() {
            if(window.getComputedStyle(this.previousElementSibling,null).height==='100px'){
                this.previousElementSibling.style.height="auto";
                this.innerHTML='Clip';
            }else{
                this.previousElementSibling.style.height="100px";
                this.innerHTML='Expand';
            }
        });
    }
    // var btn = quickcontent.getElementsByTagName('button')[1];
    // btn.addEventListener('click', function() {
    //     if(window.getComputedStyle(textfolds[1],null).height==='100px'){
    //         textfolds[1].style.height="auto";
    //     }else{
    //         textfolds[1].style.height='100px';
    //     }
    // });

}
