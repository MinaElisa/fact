// 1. 定义JSON数据URL
const JSON_URL = 'https://raw.githubusercontent.com/minaelisa/fact/master/json/index.json';

// 2. 主渲染函数
async function renderBanner() {
    try {
        // 获取JSON数据
        const response = await fetch(JSON_URL);
        if (!response.ok) throw new Error('网络响应不正常');
        const jsonData = await response.json();
        console.log(jsonData);
        // 3. 使用模板字符串渲染bannertitle
        const bannertitle = document.querySelector('.bannertitle');
        bannertitle.innerHTML = `
            <h3>${jsonData.banner.title}</h3>
            <div class="bannercontent">
                ${jsonData.bannertitle.content.map(text => `<p>${text}</p>`).join('')}
            </div>
        `;
        
    } catch (error) {
        console.error('渲染失败:', error);
        document.body.innerHTML += `<div class="error">加载数据失败: ${error.message}</div>`;
    }
}

// 5. 页面加载时执行
document.addEventListener('DOMContentLoaded', renderBanner);