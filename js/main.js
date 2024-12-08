var themeColorMeta,pageHeaderEl,navMusicEl,consoleEl,anzhiyu_musicFirst=!1,anzhiyu_keyboard=null,anzhiyu_musicPlaying=!1,$bodyWrap=document.getElementById("body-wrap"),anzhiyu_intype=!1,anzhiyu_keyUpEvent_timeoutId=null,anzhiyu_keyUpShiftDelayEvent_timeoutId=null,rm=null,popupWindowTimer=null,adjectives=["美丽的","英俊的","聪明的","勇敢的","可爱的","慷慨的","善良的","可靠的","开朗的","成熟的","稳重的","真诚的","幽默的","豁达的","有趣的","活泼的","优雅的","敏捷的","温柔的","温暖的","敬业的","细心的","耐心的","深沉的","朴素的","含蓄的","率直的","开放的","务实的","坚强的","自信的","谦虚的","文静的","深刻的","纯真的","朝气蓬勃的","慎重的","大方的","顽强的","迷人的","机智的","善解人意的","富有想象力的","有魅力的","独立的","好奇的","干净的","宽容的","尊重他人的","体贴的","守信的","有耐性的","有责任心的","有担当的","有远见的","有智慧的","有眼光的","有冒险精神的","有爱心的","有同情心的","喜欢思考的","喜欢学习的","具有批判性思维的","善于表达的","善于沟通的","善于合作的","善于领导的","有激情的","有幽默感的","有思想的","有个性的","有正义感的","有责任感的","有创造力的","有想象力的","有艺术细胞的","有团队精神的","有协调能力的","有决策能力的","有组织能力的","有学习能力的","有执行能力的","有分析能力的","有逻辑思维的","有创新能力的","有专业素养的","有商业头脑的"],vegetablesAndFruits=["萝卜","白菜","芹菜","生菜","青椒","辣椒","茄子","豆角","黄瓜","西红柿","洋葱","大蒜","土豆","南瓜","豆腐","韭菜","花菜","西兰花","蘑菇","金针菇","苹果","香蕉","橙子","柠檬","猕猴桃","草莓","葡萄","桃子","杏子","李子","石榴","西瓜","哈密瓜","蜜瓜","樱桃","蓝莓","柿子","橄榄","柚子","火龙果"],selectRandomSong=[],musicVolume=.8,changeMusicListFlag=!1,defaultPlayMusicList=[];document.addEventListener("DOMContentLoaded",(function(){let e,t,n,o=!1;const i=n=>{const o=e=>Array.from(e).reduce(((e,t)=>e+t.offsetWidth),0);if(n){const n=o(document.querySelector("#blog_name > a").children),i=o(document.getElementById("menus").children);e=n+i,t=document.getElementById("nav")}const i=window.innerWidth<=768||e>t.offsetWidth-120;t.classList.toggle("hide-menu",i)},a=()=>{anzhiyu.sidebarPaddingR(),anzhiyu.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),o=!0},s=()=>{document.body.style.paddingRight="",anzhiyu.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),o=!1},c=function(){const e=GLOBAL_CONFIG.highlight;if(!e)return;const{highlightCopy:t,highlightLang:n,highlightHeightLimit:o,plugin:i}=e,a=GLOBAL_CONFIG_SITE.isHighlightShrink,s=t||n||void 0!==a,c="highlight.js"===i?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!s&&!o||!c.length)return;const l="prismjs"===i,r=!0===a?"closed":"",d=void 0!==a?'<i class="anzhiyufont anzhiyu-icon-angle-down expand ${highlightShrinkClass}"></i>':"",u=t?'<div class="copy-notice"></div><i class="anzhiyufont anzhiyu-icon-paste copy-button"></i>':"",m=(e,t)=>{if(void 0!==GLOBAL_CONFIG.Snackbar)anzhiyu.snackbarShow(t);else{const n=e.previousElementSibling;n.textContent=t,n.style.opacity=1,setTimeout((()=>{n.style.opacity=0}),800)}},y=e=>{const t=e.parentNode;t.classList.add("copy-true");const n=window.getSelection(),o=document.createRange(),i=l?"pre code":"table .code pre";var a;o.selectNodeContents(t.querySelectorAll(`${i}`)[0]),n.removeAllRanges(),n.addRange(o),a=e.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),m(a,GLOBAL_CONFIG.copy.success)):m(a,GLOBAL_CONFIG.copy.noSupport),n.removeAllRanges(),t.classList.remove("copy-true")},h=function(e){const t=e.target.classList;t.contains("expand")?this.classList.toggle("closed"):t.contains("copy-button")&&y(this)},g=function(){this.classList.toggle("expand-done")},p=(e,t,n)=>{const i=document.createDocumentFragment();if(s){const t=document.createElement("div");t.className=`highlight-tools ${r}`,t.innerHTML=d+e+u,anzhiyu.addEventListenerPjax(t,"click",h),i.appendChild(t)}if(o&&t.offsetHeight>o+30){const e=document.createElement("div");e.className="code-expand-btn",e.innerHTML='<i class="anzhiyufont anzhiyu-icon-angle-double-down"></i>',anzhiyu.addEventListenerPjax(e,"click",g),i.appendChild(e)}"hl"===n?t.insertBefore(i,t.firstChild):t.parentNode.insertBefore(i,t)};l?c.forEach((e=>{if(n){const t=`<div class="code-lang">${e.getAttribute("data-language")||"Code"}</div>`;anzhiyu.wrap(e,"figure",{class:"highlight"}),p(t,e)}else anzhiyu.wrap(e,"figure",{class:"highlight"}),p("",e)})):c.forEach((e=>{if(n){let t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code");p(`<div class="code-lang">${t}</div>`,e,"hl")}else p("",e,"hl")}))};const l=function(e){const t=e=>{let t="";const n=e=>e.replace(/"/g,"&quot;");return e.forEach((e=>{const o=e.alt?`alt="${n(e.alt)}"`:"",i=e.title?`title="${n(e.title)}"`:"",a=e.address?e.address:"",s=`\n        <div class="fj-gallery-item">\n          ${a?`<div class="tag-address">${a}</div>`:""}\n          <img src="${e.url}" ${o+i}>\n        </div>\n      `;t+=s})),t},n=(e,n,o)=>{const i=Number(o),a=n.length;return a>i?e.insertAdjacentHTML("beforeend",t(n.splice(0,i))):(e.insertAdjacentHTML("beforeend",t(n)),e.classList.remove("lazyload")),window.lazyLoadInstance&&window.lazyLoadInstance.update(),a>i?i:a},o=(e,o)=>{const i=e.getAttribute("data-limit")??o.length;if(!e.classList.contains("lazyload")||o.length<i)e.innerHTML=t(o),e.nextElementSibling.style.display="none";else if(!e.classList.contains("btn_album_detail_lazyload")||e.classList.contains("page_img_lazyload")){n(e,o,i);const t=()=>{const t=n(e,o,i);fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${t})`)),anzhiyu.loadLightbox(e.querySelectorAll("img")),t<Number(i)&&a.unobserve(e.nextElementSibling)},a=new IntersectionObserver(((e,n)=>{e.forEach((e=>{e.isIntersecting&&setTimeout(t(),100)}))}));a.observe(e.nextElementSibling)}else{n(e,o,i);const t=()=>{const a=n(e,o,i);fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${a})`)),anzhiyu.loadLightbox(e.querySelectorAll("img")),a<i&&e.nextElementSibling.removeEventListener("click",t)};e.nextElementSibling.addEventListener("click",t)}anzhiyu.initJustifiedGallery(e),anzhiyu.loadLightbox(e.querySelectorAll("img")),window.lazyLoadInstance&&window.lazyLoadInstance.update()},i=()=>{e.forEach((e=>{e.classList.contains("url")?(async e=>{const t=await fetch(e);return await t.json()})(e.textContent).then((t=>{o(e,t)})):o(e,JSON.parse(e.textContent))}))};window.fjGallery?i():(getCSS(`${GLOBAL_CONFIG.source.justifiedGallery.css}`),getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`).then(i))},r=function(){const e=document.getElementById("rightside"),t=window.innerHeight+56;let n=0;document.body.scrollHeight<=t&&(e.style.cssText="opacity: 1; transform: translateX(-58px)");let o=0,i=!0;const a=document.getElementById("page-header"),s=document.getElementById("popup-window"),c="function"==typeof chatBtnHide,l="function"==typeof chatBtnShow;let r=!1;const d=document.getElementById("nav-music"),u=document.getElementById("footer"),m=document.getElementById("waterfall"),y=document.getElementById("percent"),h=document.getElementById("nav-totop"),g=document.getElementById("body-wrap");let p=document.getElementById("post-comment")||document.getElementById("footer");const L=anzhiyu.throttle((()=>{const d=window.scrollY||document.documentElement.scrollTop,u=function(e){const t=e>o;return o=e,t}(d),L=Math.abs(n-d);d>60&&L<20&&0!=L||(s&&s.classList.contains("show-popup-window")&&d>60&&L>20&&0!=n&&anzhiyu.throttle((()=>{popupWindowTimer&&clearTimeout(popupWindowTimer),popupWindowTimer=setTimeout((()=>{s.classList.contains("popup-hide")||s.classList.add("popup-hide"),setTimeout((()=>{s.classList.remove("popup-hide"),s.classList.remove("show-popup-window")}),1e3)}),1e3)}),1e3)(),n=d,d>26?(u?(a.classList.contains("nav-visible")&&a.classList.remove("nav-visible"),l&&!0===i&&(chatBtnHide(),i=!1)):(a.classList.contains("nav-visible")||a.classList.add("nav-visible"),c&&!1===i&&(chatBtnShow(),i=!0)),requestAnimationFrame((()=>{anzhiyu.initThemeColor(),a.classList.add("nav-fixed")})),"0"===window.getComputedStyle(e).getPropertyValue("opacity")&&(e.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(d<=5&&requestAnimationFrame((()=>{a.classList.remove("nav-fixed"),a.classList.remove("nav-visible"),anzhiyu.initThemeColor()})),e.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=t&&(e.style.cssText="opacity: 0.8; transform: translateX(-58px)"),function(e){let t=g.clientHeight;const n=document.documentElement.clientHeight,o=e/(t>n?t-n:document.documentElement.scrollHeight-n),i=Math.round(100*o),a=i>100?100:i<=0?1:i;if(y.textContent=a,function(e){if(!e)return;if("none"==window.getComputedStyle(e).getPropertyValue("display"))return;const t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return e.offsetTop-document.documentElement.scrollTop<=t}(p||a>90)&&e>20?(h.classList.add("long"),y.textContent="返回顶部"):(h.classList.remove("long"),y.textContent=a),m){const t=e%document.documentElement.clientHeight;!r&&t+100>=document.documentElement.clientHeight?(console.info(t,document.documentElement.clientHeight),setTimeout((()=>{waterfall("#waterfall")}),500)):setTimeout((()=>{m&&waterfall("#waterfall")}),500)}}(d))}),96);u&&anzhiyu.intersectionObserver((()=>{u&&d&&768<document.body.clientWidth&&(d.style.bottom="-10px",d.style.opacity="0"),r=!0}),(()=>{u&&d&&768<document.body.clientWidth&&(d.style.bottom="20px",d.style.opacity="1")}))().observe(u),L(),anzhiyu.addEventListenerPjax(window,"scroll",L,{passive:!0})},d=function(){const e=GLOBAL_CONFIG_SITE.isToc,t=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(!n||!e&&!t)return;let o,i,a,s;if(e){const e=document.getElementById("card-toc");i=e.querySelector(".toc-content"),o=i.querySelectorAll(".toc-link"),s=i.classList.contains("is-expand");const t=t=>{const n=t.target.closest(".toc-link");n&&(t.preventDefault(),anzhiyu.scrollToDest(anzhiyu.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#","")))-60,300),window.innerWidth<900&&e.classList.remove("open"))};anzhiyu.addEventListenerPjax(i,"click",t),a=e=>{const t=e.getBoundingClientRect().top,n=i.scrollTop;t>document.documentElement.clientHeight-100&&(i.scrollTop=n+150),t<100&&(i.scrollTop=n-150)}}const c=n.querySelectorAll("h1,h2,h3,h4,h5,h6"),l=Array.from(c).filter((e=>"CrawlerTitle"!==e.id));let r="";const d=anzhiyu.throttle((()=>{!function(n){if(0===n)return!1;let c="",d="";if(l.forEach((function(e,t){if(n>anzhiyu.getEleTop(e)-80){const n=e.id;c=n?"#"+encodeURI(n):"",d=t}})),r!==d&&(t&&anzhiyu.updateAnchor(c),r=d,e)){if(i.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),""===c)return;const e=o[d];if(e.classList.add("active"),setTimeout((()=>{a(e)}),0),s)return;let t=e.parentNode;for(;!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}(window.scrollY||document.documentElement.scrollTop)}),100);anzhiyu.addEventListenerPjax(window,"scroll",d,{passive:!0})},u=e=>{const t=(window.globalFn||{}).themeChange||{};if(!t)return;Object.keys(t).forEach((n=>{(0,t[n])(e)})),rm&&rm.hideRightMenu();const o=n.querySelector(".menu-darkmode-text");if(o.textContent="light"===e?"深色模式":"浅色模式",!GLOBAL_CONFIG_SITE.isPost){document.querySelector(":root").style.setProperty("--anzhiyu-bar-background","var(--anzhiyu-meta-theme-color)"),requestAnimationFrame((()=>{anzhiyu.initThemeColor()})),document.documentElement.style.setProperty("--anzhiyu-main",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-theme")),document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23"),document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd")}},m={readmode:()=>{const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="anzhiyufont anzhiyu-icon-xmark exit-readmode",e.appendChild(t);const n=()=>{e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)};t.addEventListener("click",n)},darkmode:()=>{const e="dark"===document.documentElement.getAttribute("data-theme")?"light":"dark";"dark"===e?(activateDarkMode(),void 0!==GLOBAL_CONFIG.Snackbar&&anzhiyu.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),void 0!==GLOBAL_CONFIG.Snackbar&&anzhiyu.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),saveToLocal.set("theme",e,2),u(e)},"rightside-config":e=>{const t=e.firstElementChild;t.classList.contains("show")&&(t.classList.add("status"),setTimeout((()=>{t.classList.remove("status")}),300)),t.classList.toggle("show")},"go-up":()=>{anzhiyu.scrollToDest(0,500)},"hide-aside-btn":()=>{const e=document.documentElement.classList,t=e.contains("hide-aside")?"show":"hide";saveToLocal.set("aside-status",t,2),e.toggle("hide-aside")},"mobile-toc-button":e=>{const t=document.getElementById("card-toc");t.style.transformOrigin=`right ${e.getBoundingClientRect().top+17}px`,t.style.transition="transform 0.3s ease-in-out",t.classList.toggle("open"),t.addEventListener("transitionend",(()=>{t.style.transition="",t.style.transformOrigin=""}),{once:!0})},"chat-btn":()=>{window.chatBtnFn()},translateLink:()=>{window.translateFn.translatePage()}};document.getElementById("rightside").addEventListener("click",(function(e){const t=e.target.closest("[id]");t&&m[t.id]&&m[t.id](this)})),document.addEventListener("touchstart",(e=>{anzhiyu.removeRewardMask()}),{passive:!0});const y=()=>{const e=document.querySelectorAll("#article-container .hide-button");if(!e.length)return;const t=function(e){this.classList.add("open");const t=this.nextElementSibling.querySelectorAll(".gallery-container");t.length&&addJustifiedGallery(t)};e.forEach((e=>{e.addEventListener("click",t,{once:!0})}))},h=()=>{const e=document.querySelectorAll("#article-container .tabs");if(!e.length)return;const t=(e,t)=>{Array.from(e).forEach((e=>{e.classList.remove("active"),e!==t&&e.id!==t||e.classList.add("active")}))},n=(e,n)=>{anzhiyu.addEventListenerPjax(e.firstElementChild,"click",(function(e){const o=e.target.closest("button");if(o.classList.contains("active"))return;t(this.children,o),this.classList.remove("no-default");const i=o.getAttribute("data-href"),a=this.nextElementSibling;if(t(a.children,i),n){const e=a.querySelectorAll(`#${i} .fj-gallery`);e.length>0&&anzhiyu.initJustifiedGallery(e)}}))};e.forEach((e=>{const t=!!e.querySelectorAll(".gallery-container");n(e,t),(e=>{anzhiyu.addEventListenerPjax(e.lastElementChild,"click",(t=>{t.target.closest("button")&&anzhiyu.scrollToDest(anzhiyu.getEleTop(e),300)}))})(e)}))},g=function(e){e.forEach((e=>{const t=e.getAttribute("datetime");e.textContent=anzhiyu.diffDate(t,!0),e.style.display="inline"}))},p=e=>{if(/^(rgb|RGB)/.test(e)){return e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",").reduce(((e,t)=>e+Number(t).toString(16).padStart(2,"0")),"#")}return/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(e)&&4===e.length?Array.from(e.slice(1)).reduce(((e,t)=>e+t+t),"#"):e},L=(e,t)=>{const n=e.startsWith("#");n&&(e=e.slice(1));let o=parseInt(e,16);const i=(e,t)=>(e+=t)>255?255:e<0?0:e,a=i(o>>16,t),s=i(o>>8&255,t),c=i(255&o,t);return(n?"#":"")+String("000000"+(c|s<<8|a<<16).toString(16)).slice(-6)},f=e=>{const t=(e=>{e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((e,t,n,o)=>t+t+n+n+o+o));const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`rgb(${parseInt(t[1],16)}, ${parseInt(t[2],16)}, ${parseInt(t[3],16)})`:null})(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),[n,o,i,a]=t;return(299*o+587*i+114*a)/255e3>=.5?"light":"dark"};function E(e,t){const n=document.getElementById(e);if(n&&t){const e=n.querySelector(t);e&&e.addEventListener("click",m.darkmode)}else n&&n.addEventListener("click",m.darkmode)}window.onkeydown=function(e){123===e.keyCode&&anzhiyu.snackbarShow("开发者模式已打开，请遵循GPL协议",!1)};window.refreshFn=function(){i(!0),t.classList.add("show"),themeColorMeta=document.querySelector('meta[name="theme-color"]'),pageHeaderEl=document.getElementById("page-header"),navMusicEl=document.getElementById("nav-music"),consoleEl=document.getElementById("console"),E("console",".darkmode_switchbutton"),E("nav-naoDark",".components"),E("console-naoDark",".components"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){const e=GLOBAL_CONFIG.noticeOutdate,t=anzhiyu.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(t>=e.limitDay){const n=document.createElement("div");n.className="post-outdate-notice",n.textContent=e.messagePrev+" "+t+" "+e.messageNext;const o=document.getElementById("article-container");"top"===e.position?o.insertBefore(n,o.firstChild):o.appendChild(n)}}(),GLOBAL_CONFIG.relativeDate.post&&g(document.querySelectorAll("#post-meta time"))):((GLOBAL_CONFIG.relativeDate.homepage||GLOBAL_CONFIG.relativeDate.simplehomepage)&&g(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const e=document.getElementById("runtimeshow");if(e){const t=e.getAttribute("data-publishDate");e.textContent=`${anzhiyu.diffDate(t)} ${GLOBAL_CONFIG.runtime}`}})(),(()=>{const e=document.getElementById("last-push-date");if(e){const t=e.getAttribute("data-lastPushDate");e.textContent=anzhiyu.diffDate(t,!0)}})(),(()=>{const e=document.querySelector("#aside-cat-list.expandBtn");if(!e)return;anzhiyu.addEventListenerPjax(e,"click",(e=>{const t=e.target;"I"===t.nodeName&&(e.preventDefault(),t.parentNode.classList.toggle("expand"))}),!0)})()),GLOBAL_CONFIG.diytitle&&function(){let e,t=GLOBAL_CONFIG.diytitle.leaveTitle,n=GLOBAL_CONFIG.diytitle.backTitle,o=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title=t,clearTimeout(e)):(document.title=n+o,e=setTimeout((function(){document.title=o}),2e3))}))}(),d(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const e=document.getElementById("scroll-down");e&&anzhiyu.addEventListenerPjax(e,"click",(()=>{const e=document.getElementById("bbTimeList");e?anzhiyu.scrollToDest(e.offsetTop-62,300):anzhiyu.scrollToDest(document.getElementById("home_top").offsetTop-60,300)}))})(),c(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((function(e){const t=e.parentNode,n=e.title||e.alt;if(n&&!t.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div");o.className="img-alt is-center",o.textContent=n,t.insertBefore(o,e.nextSibling)}})),r(),window.scrollCollect&&window.scrollCollect();const e=document.querySelectorAll("#content-inner .fj-gallery");var n;e.length&&l(e),anzhiyu.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(()=>{const e=document.querySelectorAll("#article-container table");e.length&&e.forEach((e=>{e.closest(".highlight")||anzhiyu.wrap(e,"div",{class:"table-wrap"})}))})(),y(),h(),(()=>{const e=document.getElementById("switch-btn");if(!e)return;let t=!1;const n=document.getElementById("post-comment");anzhiyu.addEventListenerPjax(e,"click",(()=>{n.classList.toggle("move"),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())}))})(),document.getElementById("toggle-menu").addEventListener("click",(()=>{a()})),document.getElementById("post-comment")&&function(){let e=1,t="",n=document.createElement("div");n.id="owo-big";let o=document.querySelector("body");function i(i){"IMG"==i.target.tagName&&e&&(e=0,t=setTimeout((()=>{let e=3*i.target.clientHeight,t=3*i.target.clientWidth,a=i.x-i.offsetX-(t-i.target.clientWidth)/2;a+t>o.clientWidth&&(a-=a+t-o.clientWidth+10),a<0&&(a=10);let s=i.y-i.offsetY;n.style.height=e+"px",n.style.width=t+"px",n.style.left=a+"px",n.style.top=s+"px",n.style.display="flex",n.innerHTML=`<img src="${i.target.src}">`}),100))}function a(o){n.style.display="none",e=1,clearTimeout(t)}o.appendChild(n),new MutationObserver((e=>{e.forEach((e=>{const t=e.addedNodes;for(let e=0;e<t.length;e++){const n=t[e];if(n.nodeType===Node.ELEMENT_NODE&&n.classList.contains("OwO-body")&&!n.classList.contains("comment-barrage")){const e=n;e.addEventListener("contextmenu",(e=>e.preventDefault())),e.addEventListener("mouseover",i),e.addEventListener("mouseout",a)}}}))})).observe(document.getElementById("post-comment"),{childList:!0,subtree:!0})}(),function(){const e=document.querySelector(".topGroup");e&&e.addEventListener("mouseleave",(function(){document.getElementById("todayCard").classList.remove("hide"),document.getElementById("todayCard").style.zIndex=1}))}(),(async()=>{const e=document.querySelector(":root"),t=document.getElementById("post-top-bg")?.src;if(!t)return e.style.setProperty("--anzhiyu-bar-background","var(--anzhiyu-meta-theme-color)"),requestAnimationFrame((()=>{anzhiyu.initThemeColor()})),document.documentElement.style.setProperty("--anzhiyu-main",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-theme")),document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23"),void document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd");if(GLOBAL_CONFIG.mainTone)if(GLOBAL_CONFIG_SITE.postMainColor){let t=GLOBAL_CONFIG_SITE.postMainColor;"light"===f(t)&&(t=L(p(t),-40)),e.style.setProperty("--anzhiyu-bar-background",t),requestAnimationFrame((()=>{anzhiyu.initThemeColor()})),GLOBAL_CONFIG.mainTone.cover_change&&(document.documentElement.style.setProperty("--anzhiyu-main",t),document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23"),document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd"))}else{const n="var(--anzhiyu-theme)";let o="";"cdn"==GLOBAL_CONFIG.mainTone.mode||"both"==GLOBAL_CONFIG.mainTone.mode?o=t+"?imageAve":"api"==GLOBAL_CONFIG.mainTone.mode&&(o=GLOBAL_CONFIG.mainTone.api+t);try{const i=await fetch(o);if(i.ok&&i.headers.get("content-type")?.includes("application/json")){const t=await i.json();let n="cdn"==GLOBAL_CONFIG.mainTone.mode||"both"==GLOBAL_CONFIG.mainTone.mode?"#"+t.RGB.slice(2):t.RGB;"light"===f(n)&&(n=L(p(n),-40)),e.style.setProperty("--anzhiyu-bar-background",n),requestAnimationFrame((()=>{anzhiyu.initThemeColor()})),GLOBAL_CONFIG.mainTone.cover_change&&(document.documentElement.style.setProperty("--anzhiyu-main",n),document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23"),document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd"))}else if("both"==GLOBAL_CONFIG.mainTone.mode)try{const o=await fetch(GLOBAL_CONFIG.mainTone.api+t);if(o.ok&&o.headers.get("content-type")?.includes("application/json")){let t=(await o.json()).RGB;"light"===f(t)&&(t=L(p(t),-40)),e.style.setProperty("--anzhiyu-bar-background",t),requestAnimationFrame((()=>{anzhiyu.initThemeColor()})),GLOBAL_CONFIG.mainTone.cover_change&&(document.documentElement.style.setProperty("--anzhiyu-main",t),document.documentElement.style.setProperty("--anzhiyu-theme-op",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"23"),document.documentElement.style.setProperty("--anzhiyu-theme-op-deep",getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main")+"dd"))}else e.style.setProperty("--anzhiyu-bar-background",n),requestAnimationFrame((()=>{anzhiyu.initThemeColor()})),document.documentElement.style.setProperty("--anzhiyu-main",n)}catch{e.style.setProperty("--anzhiyu-bar-background",n),requestAnimationFrame((()=>{anzhiyu.initThemeColor()})),document.documentElement.style.setProperty("--anzhiyu-main",n)}else e.style.setProperty("--anzhiyu-bar-background",n),requestAnimationFrame((()=>{anzhiyu.initThemeColor()})),document.documentElement.style.setProperty("--anzhiyu-main",n)}catch(t){console.error("Error fetching data:",t),e.style.setProperty("--anzhiyu-bar-background",n),requestAnimationFrame((()=>{anzhiyu.initThemeColor()})),document.documentElement.style.setProperty("--anzhiyu-main",n)}}})(),(n=document.getElementById("toPageText"))&&n.addEventListener("keydown",(e=>{if(13===e.keyCode){anzhiyu.toPage();var t=document.getElementById("toPageButton").href;pjax.loadUrl(t)}})),anzhiyu.addEventListenerPjax(document.getElementById("toggle-menu"),"click",(()=>{a()})),document.getElementById("page-name").innerText=document.title.split(` | ${GLOBAL_CONFIG_SITE.configTitle}`)[0],anzhiyu.initIndexEssay(),anzhiyu.changeTimeInEssay(),anzhiyu.removeBodyPaceClass(),anzhiyu.qrcodeCreate(),anzhiyu.changeTimeInAlbumDetail(),anzhiyu.reflashEssayWaterFall(),anzhiyu.sayhi(),anzhiyu.stopImgRightDrag(),anzhiyu.addNavBackgroundInit(),anzhiyu.setValueToBodyType(),anzhiyu.catalogActive(),anzhiyu.tagsPageActive(),anzhiyu.categoriesBarActive(),anzhiyu.topCategoriesBarScroll(),anzhiyu.switchRightClickMenuHotReview(),anzhiyu.getCustomPlayList(),anzhiyu.addEventListenerConsoleMusicList(!1),anzhiyu.initPaginationObserver(),setTimeout((()=>{!function(){const e=document.querySelectorAll("input, textarea");Array.from(e).filter((e=>{"center-console"===e.id&&e.id})).forEach((e=>{e.addEventListener("focus",(()=>{anzhiyu_intype=!0})),e.addEventListener("blur",(()=>{anzhiyu_intype=!1}))}))}(),"function"==typeof addFriendLinksInFooter&&addFriendLinksInFooter()}),200)},refreshFn(),window.addEventListener("resize",(()=>{i(!1),o&&anzhiyu.isHidden(document.getElementById("toggle-menu"))&&s()})),document.getElementById("menu-mask").addEventListener("click",(e=>{s()})),n=document.getElementById("rightMenu"),E("menu-darkmode"),E("sidebar",".darkmode_switchbutton"),document.querySelector("#sidebar-menus .menus_items")&&document.querySelector("#sidebar-menus .menus_items").addEventListener("click",(e=>{const t=e.target.closest(".site-page.group");t&&t.classList.toggle("hide")})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const{limitCount:e,languages:t,copy:n,copyrightEbable:o}=GLOBAL_CONFIG.copyright;document.body.addEventListener("copy",(i=>{if(n&&anzhiyu.snackbarShow(t.copySuccess),o){i.preventDefault();const n=window.getSelection(0).toString();let o=n;return n.length>e&&(o=`${n}\n\n\n${t.author}\n${t.link}${window.location.href}\n${t.source}\n${t.info}`),i.clipboardData?i.clipboardData.setData("text",o):window.clipboardData.setData("text",o)}}))})(),GLOBAL_CONFIG.navMusic&&function(){const e=setInterval((()=>{if(navMusicEl&&navMusicEl.querySelector("#nav-music meting-js").aplayer){clearInterval(e);let t='<i class="anzhiyufont anzhiyu-icon-play"></i><span>播放音乐</span>',n='<i class="anzhiyufont anzhiyu-icon-pause"></i><span>暂停音乐</span>';navMusicEl.querySelector("#nav-music meting-js").aplayer.on("pause",(function(){navMusicEl.classList.remove("playing"),document.getElementById("menu-music-toggle").innerHTML=t,document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",document.querySelector("#consoleMusic").classList.remove("on"),anzhiyu_musicPlaying=!1,navMusicEl.classList.remove("stretch")})),navMusicEl.querySelector("#nav-music meting-js").aplayer.on("play",(function(){navMusicEl.classList.add("playing"),document.getElementById("menu-music-toggle").innerHTML=n,document.querySelector("#consoleMusic").classList.add("on"),anzhiyu_musicPlaying=!0}))}}),16)}(),GLOBAL_CONFIG.shortcutKey&&document.getElementById("consoleKeyboard")&&(localStorage.setItem("keyboardToggle","true"),document.getElementById("consoleKeyboard").classList.add("on"),anzhiyu_keyboard=!0,function(){function e(e){const t=27===e.keyCode,n=e.shiftKey,o=anzhiyu_keyboard,i=anzhiyu_intype;t&&(anzhiyu.hideLoading(),anzhiyu.hideConsole(),rm&&rm.hideRightMenu());const a=GLOBAL_CONFIG.shortcutKey.delay?GLOBAL_CONFIG.shortcutKey.delay:100,s=GLOBAL_CONFIG.shortcutKey.shiftDelay?GLOBAL_CONFIG.shortcutKey.shiftDelay:200;o&&n&&!i&&(anzhiyu_keyUpShiftDelayEvent_timeoutId=setTimeout((()=>{switch(e.keyCode){case 16:anzhiyu_keyUpEvent_timeoutId=setTimeout((()=>{document.querySelector("#keyboard-tips").classList.add("show")}),s);break;case 65:anzhiyu.switchConsole();break;case 77:anzhiyu.musicToggle();break;case 75:anzhiyu.keyboardToggle();break;case 73:anzhiyu.rightMenuToggle();break;case 82:toRandomPost();break;case 72:pjax.loadUrl("/");break;case 68:m.darkmode();break;case 70:pjax.loadUrl("/fcircle/");break;case 76:pjax.loadUrl("/link/");break;case 80:pjax.loadUrl("/about/")}e.preventDefault()}),a))}function t(e){anzhiyu_keyUpEvent_timeoutId&&clearTimeout(anzhiyu_keyUpEvent_timeoutId),anzhiyu_keyUpShiftDelayEvent_timeoutId&&clearTimeout(anzhiyu_keyUpShiftDelayEvent_timeoutId),16===e.keyCode&&document.querySelector("#keyboard-tips").classList.remove("show")}anzhiyu_keyboard=!!localStorage.getItem("keyboardToggle")&&localStorage.getItem("keyboardToggle"),window.onfocus=function(){document.getElementById("keyboard-tips").classList.remove("show")},function(){const n=window;n.removeEventListener("keydown",e),n.removeEventListener("keyup",t),n.addEventListener("keydown",e),n.addEventListener("keyup",t)}()}()),GLOBAL_CONFIG.autoDarkmode&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{void 0===saveToLocal.get("theme")&&(e.matches?u("dark"):u("light"))})),GLOBAL_CONFIG.greetingBox&&function(){const e=GLOBAL_CONFIG.greetingBox.list,t=GLOBAL_CONFIG.greetingBox.default;let n=document.createElement("div");n.id="greeting",setTimeout((()=>{n.classList.add("shown")}),1e3);let o=document.getElementById("greetingBox");if(!o)return;o.appendChild(n);const i=(new Date).getHours();let a=t;for(let t=0;t<e.length;t++)if(i>=e[t].startTime&&i<=e[t].endTime){a=e[t].greeting;break}n.innerHTML=a,setTimeout((()=>{n.classList.remove("shown"),setTimeout((()=>{o.remove()}),500)}),3e3)}(),GLOBAL_CONFIG.LA51&&function(){const e=(e,t="UTF-8",n,o)=>new Promise(((i,a)=>{const s=document.createElement("script");s.src=e,s.async=!0,o&&s.setAttribute("id",o),t&&s.setAttribute("charset",t),n&&s.setAttribute("crossorigin",n),s.onerror=a,s.onload=s.onreadystatechange=function(){const e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(s.onload=s.onreadystatechange=null,i())},document.head.appendChild(s)}));Promise.all([{url:"https://sdk.51.la/js-sdk-pro.min.js",charset:"UTF-8",crossorigin:!1,id:"LA_COLLECT"},{url:"https://sdk.51.la/perf/js-sdk-perf.min.js",crossorigin:"anonymous"}].map((({url:t,charset:n,crossorigin:o,id:i})=>e(t,n,o,i)))).then((()=>{LA.init({id:GLOBAL_CONFIG.LA51.ck,ck:GLOBAL_CONFIG.LA51.ck}),(new LingQue.Monitor).init({id:GLOBAL_CONFIG.LA51.LingQueMonitorID,sendSuspicious:!0})})).catch((e=>{console.error("加载51a统计异常，本地加载403是正常情况:",e)}))}()}));