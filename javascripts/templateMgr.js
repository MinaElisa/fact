console.log("[templateMgr.js]templateMgr.js started.");
class TemplateNav extends HTMLElement{
    connectedCallback() {
        this.innerHTML=`
        <div class="LOGO"><p><a href="https://minaelisa.github.io/fact">F.A.C.T.</a></p></div>
        <ul>
            <li><a href="https://minaelisa.github.io/fact/pages/nav/news.html">资讯</a></li>
            <li><a href="https://minaelisa.github.io/fact/pages/nav/news.html">事实</a></li>
            <li><a href="https://minaelisa.github.io/fact/pages/nav/news.html">安全</a></li>
            <li><a href="https://minaelisa.github.io/fact/pages/nav/space.html">星球环境</a></li>
        </ul>
        `
    }
}
class TemplateFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML=`
        <footer>
            <ul class="footer-lists">
                <li>
                    <p>互动</p>
                    <p><a href="#" target="_blank">数据信息反馈</a></p>
                    <p><a href="#" target="_blank" target="_blank">资讯合作</a></p>
                    <p><a href="#" target="_blank" target="_blank">取得联系</a></p>
                </li>
                <li>
                    <p>友好网站</p>
                    <p><a href="https://www.nature.com/" target="_blank">Nature</a></p>
                    <p><a href="https://www.thelancet.com/" target="_blank">The Lancet</a></p>
                    <p><a href="https://www.mem.gov.cn/index.shtml" target="_blank">中国应急管理部</a></p>
                    <p><a href="https://www.usfa.fema.gov/" target="_blank">U.S. Fire Administraction</a></p>
                    <p><a href="https://www.who.int/">世界卫生组织(WHO)</a></p>
                    <p><a href="https://www.wikipedia.org/" target="_blank">Wikipedia</a></p>
                    <p><a href="https://zh.wikihow.com/%E9%A6%96%E9%A1%B5">wikihow中文</a></p>
                </li>
                <li>
                    <p>声明</p>
                    <p><a href="#" target="_blank">浏览者数据收集公布</a></p>
                    <p><a href="#" target="_blank">网站内容核查原则</a></p>
                    <p><a href="#" target="_blank">网站核心原则</a></p>
                    
                </li>
                <li></li>
                <li class="bottomlogo">
                    <p>F.A.C.T</p>
                    <p>A Commonweal, Non-Marketing website for everyone.</p>
                    <p>一个公益、非营销性质的网站.</p>
                </li>
            </ul>
            <hr style="width: 80%;margin:0 auto;">
            <p class="sign">&nbsp;&nbsp;F.A.C.T.&nbsp;Group&nbsp;-Focus.Accuracy.Case.Truth</p>
        </footer>
        `
    }
}
customElements.define('template-footer',TemplateFooter);
customElements.define('template-nav',TemplateNav);

