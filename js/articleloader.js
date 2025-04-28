// 获取当前HTML文件名（不含扩展名）
const currentHtmlName = window.location.pathname.split('/').pop().replace(/\.html$/, '');

// 从GitHub获取JSON文件的函数
async function fetchJsonFromGithub(jsonUrl) {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching JSON:', error);
        return null;
    }
}

// 动态生成HTML内容并追加到article中的函数
function generateArticleContent(pageData) {
    // 获取或创建article元素
    let article = document.querySelector('article');
    if (!article) {
        article = document.createElement('article');
        document.body.appendChild(article);
    }

    // 创建h1元素（主标题）
    if (pageData.title) {
        const h1 = document.createElement('h1');
        h1.textContent = pageData.title;
        article.appendChild(h1);
    }

    // 创建h2元素（副标题）
    if (pageData.h2title) {
        const h2 = document.createElement('h2');
        h2.textContent = pageData.h2title;
        article.appendChild(h2);
    }

    // 创建h3元素（小标题）
    if (pageData.h3title) {
        const h3 = document.createElement('h3');
        h3.textContent = pageData.h3title;
        article.appendChild(h3);
    }

    // 处理sections内容
    if (pageData.sections && Array.isArray(pageData.sections)) {
        pageData.sections.forEach(section => {
            // 创建主section元素
            const mainSection = document.createElement('section');
            article.appendChild(mainSection);

            // 创建段落p
            if (section.content) {
                const p = document.createElement('p');
                p.textContent = section.content;
                mainSection.appendChild(p);
            }

            // 创建subsection
            if (section.subcontent) {
                const subSection = document.createElement('div');
                subSection.className = 'subsection';
                subSection.textContent = section.subcontent;
                mainSection.appendChild(subSection);
            }
        });
    }
}

// 主执行函数
async function main() {
    // 替换为你的GitHub JSON文件URL
    const jsonUrl = 'https://raw.githubusercontent.com/minaelisa/fact/master/json/article.json';
    
    const jsonData = await fetchJsonFromGithub(jsonUrl);
    
    if (jsonData) {
        // 检查JSON中是否有与当前HTML文件名匹配的键
        if (jsonData.hasOwnProperty(currentHtmlName)) {
            generateArticleContent(jsonData[currentHtmlName]);
        } else {
            console.log(`No matching key found in JSON for current page: ${currentHtmlName}`);
            // 可选：显示默认内容或错误信息
            const article = document.querySelector('article') || document.createElement('article');
            article.innerHTML = '<p>内容未找到</p>';
            document.body.appendChild(article);
        }
    } else {
        console.log('Failed to load JSON data');
    }
}

// 执行主函数
document.addEventListener('DOMContentLoaded', main);