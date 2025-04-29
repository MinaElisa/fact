console.log("[index.js]started.")

window.onload=function(){
    //Set up images in batches
    var e_emergency = document.getElementsByClassName('emergency')[0];
    var icons1 = e_emergency.querySelectorAll("[id='icon']");
    for(var i=0;i<icons1.length;i++){
        
        icons1[i].style.backgroundImage='url("./res/images/icon_index'+(i+1)+'.png")';
    }
    //Under .quickconnet, auto insert black space after <br>.
    var div = document.getElementsByClassName('quickcontent')[0];
    var br=div.getElementsByTagName('br');
    for(var x=0;x<br.length;x++){
        br[x].insertAdjacentHTML('afterend','&emsp;&emsp;');
    }
}
let header = document.getElementsByTagName('nav')[0];
function toggleText(id){
	const container = document.getElementById(id);
	container.classList.toggle('collapsed');
	container.classList.toggle('expanded');
}
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
        if(top >20){
            header.style = "height:40px;position:fixed;top:0; z-index:9;";
            p1.style='font-size:40px; line-height:40px;';
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:40px;';}
            main.style='margin-top:60px;';
        }
        if(top <1){
            header.style = "height:auto;position:static;";
            p1.style='font-size:40px; line-height:80px;';
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:80px;';}
            main.style='margin-top:0;';
        }
    }
    if(mediaQueryPhone.matches){
        if(top >20){
            header.style = "position:fixed;top:0; z-index:9;";
            p1.style='font-size:40px; line-height:40px;';
            main.style='margin-top:119px;';
        }
        if(top <1){
            header.style = "position:static;";
            p1.style='font-size:40px; line-height:80px;';
            main.style='margin-top:0px;';
        }
    }
    if(mediaQueryTP.matches){
        if(top >20){
            header.style = "height:40px; position:fixed;top:0; z-index:9;";
            p1.style='font-size:40px; line-height:40px;';
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:40px;';}
            main.style='margin-top:60px;';
        }
        if(top <1){
            header.style = "height:80px position:static;";
            p1.style='font-size:40px; line-height:80px;';
            for(var i=0;i<lis.length;i++){lis[i].style='line-height:80px;';}
            main.style='margin-top:0;';
        }
    }
}

function renderDataToHTML(data) {
    const container = document.getElementById('content-container');
    const pinputContainer = document.getElementById('pinput');
    
    // 清空现有内容
    pinputContainer.innerHTML = '';
    
    // 遍历每个类别
    for (const category in data) {
        if (data.hasOwnProperty(category)) {
            // 创建类别容器
            const categoryDiv = document.createElement('div');
            categoryDiv.className = `category-container ${category}`;
            
            // 添加标题
            const titleElement = document.createElement('h3');
            titleElement.className = 'title';
            titleElement.textContent = data[category].title;
            categoryDiv.appendChild(titleElement);
            
            // 添加作者和日期
            const metaDiv = document.createElement('div');
            metaDiv.className = 'meta';
            metaDiv.innerHTML = `
                <span class="author">作者: ${data[category].author}</span> | 
                <span class="date">日期: ${data[category].date}</span>
            `;
            categoryDiv.appendChild(metaDiv);
            
            container.appendChild(categoryDiv);
            
            // 将内容追加到pinput容器
            data[category].content.forEach(paragraph => {
                const pElement = document.createElement('p');
                pElement.className = category;
                pElement.textContent = paragraph;
                pinputContainer.appendChild(pElement);
            });
        }
    }
}

// 页面加载完成后执行渲染
document.addEventListener('DOMContentLoaded', function() {
    renderDataToHTML(jsonData);
});