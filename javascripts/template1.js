console.log("[template1.js]index.js started.")

window.onload=function(){

    // 根据当前html名称去追加navlogo的文本
    var temp1 = location.href.split("/");
    var temp2 = temp1.slice(temp1.length-1, temp1.length).toString(String).split(".");
    var logo = document.getElementsByClassName('LOGO')[0];
    logo.appendChild(document.createTextNode(" | "+String(temp2.slice(0,1))));
}