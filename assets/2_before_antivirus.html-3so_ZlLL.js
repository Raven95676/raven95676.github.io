import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,c as i,d as e,e as o,b as s,a as t,o as l}from"./app-DaqGMQob.js";const p={},d=t('<p>如果系统感染了恶性病毒，杀毒软件无法启动，可以使用下面的手段恢复。</p><h2 id="需要提前准备的部分" tabindex="-1"><a class="header-anchor" href="#需要提前准备的部分"><span>需要提前准备的部分</span></a></h2><p>为了防止电脑系统被病毒破坏后无法及时应对，建议提前准备应急杀毒工具和Windows PE。</p><h3 id="windows-pe" tabindex="-1"><a class="header-anchor" href="#windows-pe"><span>Windows PE</span></a></h3><p>关于Windows PE的详细介绍，请参考<a href="https://raven95676.github.io/prevention/7_why_windows_pe.html" target="_blank" rel="noopener noreferrer">制作WindowsPE以备不时之需</a>。</p><h3 id="应急杀毒工具" tabindex="-1"><a class="header-anchor" href="#应急杀毒工具"><span>应急杀毒工具</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>Kaspersky Virus Removal Tool会自带一个日期的病毒库与查毒引擎，请定期下载最新版的Kaspersky Virus Removal Tool以供备用，以防止断网情况无法更新。</p><p>Kaspersky Virus Removal Tool似乎无法在PE内运行（有待验证）</p><p>360系统急救箱使用时 <mark><strong>必须联网</strong></mark> ，少了联网病毒库的急救箱就好像一个人失去了左膀右臂。（岩浆膏来啦的补充）</p></div><ul><li><p><strong><a href="https://weishi.360.cn/jijiuxiang/" target="_blank" rel="noopener noreferrer">360系统急救箱</a></strong></p><ul><li>可以提前下载<a href="https://weishi.360.cn/jijiuxiang/guide.html" target="_blank" rel="noopener noreferrer">Windows PE版本</a>，根据PE的位数选择32位或64位版本，并将其存储到PE盘中，启动PE后解压即可。</li></ul></li><li><p><strong><a href="https://www.kaspersky.com/downloads/free-virus-removal-tool" target="_blank" rel="noopener noreferrer">Kaspersky Virus Removal Tool</a></strong></p><ul><li>没网的时候各位最好用这个。</li></ul></li></ul><h3 id="不推荐的应急工具" tabindex="-1"><a class="header-anchor" href="#不推荐的应急工具"><span>不推荐的应急工具</span></a></h3><ul><li><strong>ESET Online Scanner</strong>：遇到复杂病毒时可能无法启动，不适合作为应急使用。</li><li><strong>Norton Power Eraser</strong>：新时代Hash校验器，并且无法应付特别厉害的病毒</li></ul><h3 id="备用工具" tabindex="-1"><a class="header-anchor" href="#备用工具"><span>备用工具</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>从求助者的实际使用情况来看，（krd）不能正常启动的情况太多了。</p><p>故不建议使用</p><p>情报来自“岩浆膏来啦”</p></div><ul><li><strong><a href="https://www.kaspersky.com.cn/downloads/thank-you/free-rescue-disk" target="_blank" rel="noopener noreferrer">Kaspersky Rescue Disk</a></strong><ul><li>提供应急盘功能，但实机测试发现其对现代无线网卡的支持度较低（如Intel ax211无法识别）。联网时推荐使用有线连接。</li><li>详细体验可以参考<a href="https://post.smzdm.com/p/a5dxn0g8/" target="_blank" rel="noopener noreferrer">反向种草！卡巴斯基急救盘（KRD）试用体验报告</a>。</li></ul></li></ul><h2 id="系统内使用应急工具" tabindex="-1"><a class="header-anchor" href="#系统内使用应急工具"><span>系统内使用应急工具</span></a></h2><p>在系统内建议使用Kaspersky Virus Removal Tool和360系统急救箱进行扫描，尤其推荐360系统急救箱对抗Rootkit。</p><h2 id="在windows-pe中使用" tabindex="-1"><a class="header-anchor" href="#在windows-pe中使用"><span>在Windows PE中使用</span></a></h2>',16),h={id:"方法a",tabindex:"-1"},c={class:"header-anchor",href:"#方法a"},u=t('<div class="hint-container note"><p class="hint-container-title">注</p><p>该方法来自“四海一叶秋”</p></div><ol><li>安装FirPE到本地硬盘，重启后选择进入PE。</li><li>进入PE后，由于可以联网，打开浏览器下载安装360系统急救箱PE版或火绒杀毒软件。</li><li>全盘扫描并处理威胁。</li></ol><p><strong>360系统急救箱PE版的使用方式：</strong>（<a href="https://www.pixiv.net/artworks/112139971" target="_blank" rel="noopener noreferrer">自定义壁纸</a>请忽略）</p><figure><img src="https://s2.loli.net/2024/07/29/uK1IcRZkzr5FexA.gif" alt="360_jijiuxiang_pe_easyu.gif" tabindex="0" loading="lazy"><figcaption>360_jijiuxiang_pe_easyu.gif</figcaption></figure><p>另：个人建议先用360杀毒，无法处理时再使用360系统急救箱PE版。毕竟360系统急救箱可以说是六亲不认的类型（</p><h3 id="方法b" tabindex="-1"><a class="header-anchor" href="#方法b"><span>方法B</span></a></h3><p>使用<a href="https://www.kaspersky.com.cn/downloads/thank-you/free-rescue-disk" target="_blank" rel="noopener noreferrer">Kaspersky Rescue Disk</a>进行系统扫描和处理。</p><h2 id="一切手段失效时" tabindex="-1"><a class="header-anchor" href="#一切手段失效时"><span>一切手段失效时</span></a></h2><p>可以使用PE重置系统。关于PE的制作和使用，请参考<a href="https://raven95676.github.io/prevention/7_why_windows_pe.html" target="_blank" rel="noopener noreferrer">制作WindowsPE以备不时之需</a>中的相关介绍。</p><h3 id="没有pe的情况下" tabindex="-1"><a class="header-anchor" href="#没有pe的情况下"><span>没有PE的情况下</span></a></h3><ol><li><s>请移驾电脑店</s></li><li>前往网吧开台机子制作PE并下载系统镜像。（嫌下载时间长可以且手机是安卓可以手机下载相关文件后就用电脑处理必须用电脑处理的部分）</li><li>记得把需要下载的pe工具也放进去</li><li>pe可联网的，pe工具也直接在pe里面下载</li></ol>',11);function g(m,f){const a=r("Badge");return l(),i("div",null,[d,e("h3",h,[e("a",c,[e("span",null,[o("方法A "),s(a,{text:"推荐",type:"tip"})])])]),u])}const k=n(p,[["render",g],["__file","2_before_antivirus.html.vue"]]),v=JSON.parse('{"path":"/follow-up/2_before_antivirus.html","title":"杀毒软件无法启动怎么办","lang":"zh-CN","frontmatter":{"title":"杀毒软件无法启动怎么办","author":"Raven95676","date":"2024-07-29T00:00:00.000Z","icon":"fas fa-file","category":["后继措施"],"tag":["处置措施","应急恢复"],"isOriginal":true,"order":2,"description":"如果系统感染了恶性病毒，杀毒软件无法启动，可以使用下面的手段恢复。 需要提前准备的部分 为了防止电脑系统被病毒破坏后无法及时应对，建议提前准备应急杀毒工具和Windows PE。 Windows PE 关于Windows PE的详细介绍，请参考制作WindowsPE以备不时之需。 应急杀毒工具 重要 Kaspersky Virus Removal To...","head":[["meta",{"property":"og:url","content":"https://raven95676.github.io/follow-up/2_before_antivirus.html"}],["meta",{"property":"og:site_name","content":"非官方病毒吧Windows FAQ"}],["meta",{"property":"og:title","content":"杀毒软件无法启动怎么办"}],["meta",{"property":"og:description","content":"如果系统感染了恶性病毒，杀毒软件无法启动，可以使用下面的手段恢复。 需要提前准备的部分 为了防止电脑系统被病毒破坏后无法及时应对，建议提前准备应急杀毒工具和Windows PE。 Windows PE 关于Windows PE的详细介绍，请参考制作WindowsPE以备不时之需。 应急杀毒工具 重要 Kaspersky Virus Removal To..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s2.loli.net/2024/07/29/uK1IcRZkzr5FexA.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-04T14:55:47.000Z"}],["meta",{"property":"article:author","content":"Raven95676"}],["meta",{"property":"article:tag","content":"处置措施"}],["meta",{"property":"article:tag","content":"应急恢复"}],["meta",{"property":"article:published_time","content":"2024-07-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-04T14:55:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"杀毒软件无法启动怎么办\\",\\"image\\":[\\"https://s2.loli.net/2024/07/29/uK1IcRZkzr5FexA.gif\\"],\\"datePublished\\":\\"2024-07-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-04T14:55:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Raven95676\\"}]}"]]},"headers":[{"level":2,"title":"需要提前准备的部分","slug":"需要提前准备的部分","link":"#需要提前准备的部分","children":[{"level":3,"title":"Windows PE","slug":"windows-pe","link":"#windows-pe","children":[]},{"level":3,"title":"应急杀毒工具","slug":"应急杀毒工具","link":"#应急杀毒工具","children":[]},{"level":3,"title":"不推荐的应急工具","slug":"不推荐的应急工具","link":"#不推荐的应急工具","children":[]},{"level":3,"title":"备用工具","slug":"备用工具","link":"#备用工具","children":[]}]},{"level":2,"title":"系统内使用应急工具","slug":"系统内使用应急工具","link":"#系统内使用应急工具","children":[]},{"level":2,"title":"在Windows PE中使用","slug":"在windows-pe中使用","link":"#在windows-pe中使用","children":[{"level":3,"title":"方法A","slug":"方法a","link":"#方法a","children":[]},{"level":3,"title":"方法B","slug":"方法b","link":"#方法b","children":[]}]},{"level":2,"title":"一切手段失效时","slug":"一切手段失效时","link":"#一切手段失效时","children":[{"level":3,"title":"没有PE的情况下","slug":"没有pe的情况下","link":"#没有pe的情况下","children":[]}]}],"git":{"createdTime":1722258953000,"updatedTime":1722783347000,"contributors":[{"name":"Raven95676","email":"Raven95676@proton.me","commits":7}]},"readingTime":{"minutes":2.98,"words":893},"filePathRelative":"follow-up/2_before_antivirus.md","localizedDate":"2024年7月29日","autoDesc":true}');export{k as comp,v as data};