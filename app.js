/* Portfolio v2: self-contained browser script */
(()=>{
const cases = [
  {
    slug:'ifa-2026', number:'01', title:'IFA 2026', subtitle:'整合传播与品牌联名', brand:'Insta360 / Antigravity', market:'德国', period:'2026',
    scope:'传播策略 / 渠道统筹 / 品牌合作',
    summary:'围绕 Beyond Capture 主题，将展会体验、内容传播与品牌合作组织为同一场 Campaign。',
    highlight:'项目结果待补充',
    overview:'在缺少新品作为传播抓手的情况下，以线索收集和现场体验为目标，从产品用途、核心卖点与本地场景出发，制定展会传播方向。',
    role:'传播主题制定、Branding / Social / PR / KOL 信息对齐，以及 Bambu Lab、EcoFlow 合作对接与现场执行。',
    questions:['目标人群与核心需求','传播任务与目标指标','本人主导与协同的职责边界'],
    strategy:[['核心主题','Beyond Capture。结合产品用途与德国本地使用场景，为各渠道明确共同的内容方向。'],['体验与传播','围绕现场体验与线索收集设计传播内容。具体用户洞察、体验路径和渠道目标待补充。'],['资源整合','Bambu Lab、EcoFlow 联名方案。合作诉求、资源交换方式与交付清单待补充。']],
    execution:[['展前','主题及信息对齐、渠道预热与合作准备。'],['展中','现场体验、联合品牌展示与实时内容。'],['展后','渠道总结与项目效果复盘。']],
    metrics:['有效线索数量','现场体验人次','内容播放 / 曝光','新增关注 / 业务结果'],
    evidence:['现场照片与展位全景','联名展示或联合内容','后台数据或线索统计截图'],
    learning:['哪些渠道组合支持了项目目标？','哪个协同问题由我推动解决？','下一次会调整哪些资源或体验环节？'],
    prompts:'目标和实际结果分开填写。线索说明去重口径，现场人次与人数分开，传播数据标明平台与周期。同比须提供可比基准。'
  },
  {
    slug:'project-eternal',number:'02',title:'PROJECT ETERNAL',subtitle:'全球 UGC 挑战',brand:'Antigravity × Insta360 × CyArk × Splatica',market:'全球',period:'待补充',
    scope:'创意机制 / 品牌联名 / 五渠道协同',
    summary:'将 8K 360° 实景重建转化为用户参与的创作挑战，协调四方品牌资源和五个传播渠道。',highlight:'用户参与与传播数据待补充',
    overview:'围绕 3D 高斯溅射实景重建的玩法，设计全球 UGC 挑战的参与机制与整体传播方案。',
    role:'活动机制与传播方案设计，官网、KOL、EDM、APP、私域 DM 的征集协同，以及社区参与机制设计。',
    questions:['目标用户的参与动机','报名到创作的主要门槛','品牌合作中本人负责的部分'],
    strategy:[['创意玩法','以 8K 360° 实景素材和 3D 高斯溅射重建为核心。具体创作要求、奖励与评选规则待补充。'],['参与机制','通过社区机制降低参与门槛。实际报名、创作、投稿与评选路径待补充。'],['品牌与渠道','整合四方品牌资源，结合官网、达人、邮件、APP 与私域触达用户。各渠道分工待补充。']],
    execution:[['活动准备','规则、合作资源、报名页与传播物料对齐。'],['征集推进','五渠道征集与用户参与问题跟进。'],['成果整理','用户作品、平台参与和传播效果汇总。']],
    metrics:['活动报名','有效投稿 / 完成作品','平台注册 / 参与转化','达人传播 / 媒体覆盖'],
    evidence:['活动主视觉与报名页面','用户作品与创作过程','平台数据、达人内容或报道'],
    learning:['哪个参与环节最容易流失？','哪些机制有效降低了创作门槛？','品牌资源如何支持用户参与？'],
    prompts:'报名、注册、投稿分别注明定义。媒体报道、独立媒体与转载分开。平台参与、活动直接成果与整体品牌传播分别列明。'
  },
  {
    slug:'a1-launch',number:'03',title:'A1 LAUNCH',subtitle:'海外 KOL 与 PR 上市传播',brand:'Antigravity A1',market:'西班牙 / 意大利',period:'2025.12 上市',
    scope:'达人策略 / 内容管理 / 媒体沟通',
    summary:'针对高单价、高教育门槛的产品，搭建达人与媒体传播路径，将产品体验转化为用户能理解的内容。',highlight:'内容交付与效果数据待补充',
    overview:'负责西班牙、意大利市场的达人矩阵和内容方向，并推进西班牙媒体深度报道及上市新闻传播。',
    role:'达人合作与内容管理、媒体 Pitch、上市信息对齐，以及基于传播漏斗和用户反馈的策略迭代。',
    questions:['目标市场的平台与内容生态','为什么选择这些达人和媒体','现金、置换与差旅的资源分配依据'],
    strategy:[['用户与内容','目标人群、认知状态与购买阻力待补充，结合具体内容说明如何转译产品卖点。'],['达人选择','按受众地域、内容适配、互动质量和历史合作表现筛选。具体矩阵与判断依据待补充。'],['预算与预期','说明头部、腰部及细分创作者的资源分工。预算和预测依据待补充。']],
    execution:[['合作准备','邀约、报价谈判、Brief、合约与排期。'],['内容交付','脚本、成片反馈、卖点校验与上线管理。'],['PR 与复盘','媒体 Pitch、评测协调、内容效果与用户反馈整理。']],
    metrics:['内容交付与传播','成本效率','点击 / 进站 / 购买','内容匹配与用户反馈'],
    evidence:['达人内容与筛选表','Brief 或修改前后对比','媒体报道和效果数据'],
    learning:['传播漏斗中的主要断点在哪里？','哪些评论或数据支持了策略变化？','达人组合和内容方向如何调整？'],
    prompts:'True Views、Total Views 与曝光保持各自口径。成本注明币种、投入范围和分母。购买结果说明归因方式，目标、预测和实际结果分开。'
  },
  {
    slug:'es-roadshow',number:'04',title:'ES ROADSHOW',subtitle:'体验路演与市场验证',brand:'Antigravity A1',market:'西班牙',period:'2026，具体日期待补充',
    scope:'体验设计 / 现场统筹 / 用户反馈',
    summary:'通过四城沉浸式体验，收集购买意向和用户反对意见，为上市后的市场判断提供依据。',highlight:'到场与购买意向数据待补充',
    overview:'将西班牙四城路演定位为上市后的市场验证与购买意向收集，定向邀请 FPV、360°、户外旅行人群和零售 VIP。',
    role:'体验闭环设计、预算和物料统筹、本地执行方管理，以及 AI 辅助报名与订金流程的搭建和问题处理。',
    questions:['希望验证的人群与购买假设','各类参与者的邀请依据','城市、场次、时间与本人负责的流程'],
    strategy:[['验证问题','产品适合谁，用户愿意为何付费，以及影响购买的关键阻力。原始假设与样本条件待补充。'],['体验闭环','结合头显试飞、场景讲解、反馈收集和意向登记。实际环节与登记方式待补充。'],['现场运营','统筹预算、物料和本地执行方，使用 AI 辅助报名系统支持活动。具体流程与证据待补充。']],
    execution:[['邀请与报名','目标人群邀请、名额管理与活动准备。'],['现场体验','沉浸试飞、场景讲解与反对意见收集。'],['意向与反馈','整理用户画像、意向登记和购买阻力。']],
    metrics:['有效报名与到场','购买意向 / 意向登记','高意向人群','主要购买阻力'],
    evidence:['试飞与活动现场','报名页面或匿名反馈表','用户意见及意向统计'],
    learning:['哪些假设得到支持，哪些需要修改？','现场样本反映了哪些人群差异？','下一步如何调整人群、内容或体验？'],
    prompts:'到场率说明分母，意向登记与实际购买分开。用户反馈提供匿名样本和统计范围。后续建议与已执行动作明确区分。'
  },
  {
    slug:'huion-mucha',number:'05',title:'HUION × MUCHA',subtitle:'国际绘画挑战与用户共创',brand:'Huion',market:'全球，具体范围待补充',period:'2025，具体日期待补充',
    scope:'创意策划 / 社群参与 / 活动运营',
    summary:'以穆夏艺术主题设计 DTIYS 绘画挑战，将艺术家、硬件和软件权益组合为用户参与资源。',highlight:'参赛与传播成果待补充',
    overview:'围绕穆夏诞辰 165 周年的艺术主题，以品牌认知、社群参与和新用户触达为目标，策划跨绘画媒介的 DTIYS 挑战。',
    role:'创意和活动规则设计、奖项及评选机制、艺术家评委邀请、软件奖品合作，以及推广、投稿跟进和获奖公布。',
    questions:['目标创作者与参与动机','主题与品牌目标的关联','本人策划、协同与运营范围'],
    strategy:[['主题与玩法','以个人风格重新创作的 DTIYS 机制，让品牌传播融入用户创作。主题推导与规则截图待补充。'],['资源组合','邀请 Hannah Alexander、Lady Moira 担任评委，推进 Clip Studio Paint 软件奖品合作。权益与各方职责待补充。'],['参与设计','跨绘画媒介投稿、奖项与评选。进入方式、投稿规则与参与门槛待补充。']],
    execution:[['活动筹备','主题、规则、评委与奖品资源协调。'],['推广与征集','艺术家内容、联合发布、广告与用户沟通。'],['评选与公布','投稿管理、评委协调和获奖公布。']],
    metrics:['有效参赛作品','参与创作者 / 新用户','传播与互动','推广投入与效果'],
    evidence:['活动主视觉与规则','代表参赛作品与评委内容','投稿记录及传播数据'],
    learning:['哪些玩法和资源促进了用户投稿？','评选与用户沟通如何保持清晰？','下一次会怎样降低参与门槛？'],
    prompts:'参赛作品与独立参赛者分开统计。传播、互动和粉丝变化分别提供平台及周期。使用用户作品时说明作品与作者，素材授权情况待补充。'
  },
  {
    slug:'slate-ibis-paint',number:'06',title:'SLATE × IBIS PAINT',subtitle:'软件权益与新品上市合作',brand:'Huion / ibis Paint',market:'待补充',period:'待补充',
    scope:'合作发起 / 内外部协调 / 上市交付',
    summary:'为首款绘画平板主动开发软件合作，协调产品试用、权益交付与联合宣传，支持新品上市。',highlight:'权益交付与联合传播结果待补充',
    overview:'针对绘画平板上市需要增加购买权益和传播话题的需求，主动提出并发起 ibis Paint 合作。',
    role:'合作提案和品牌对接、产品试用和软件测试协调、内部流程推进、权益交付、品牌露出和联合传播跟进。',
    questions:['新品上市的具体需求与时间约束','软件合作方选择与价值交换依据','本人发起、协调和交付的范围'],
    strategy:[['合作机会','结合产品使用场景，以绘画软件权益补充购买价值。机会判断与提案依据待补充。'],['双方价值','品牌、产品和软件资源如何匹配，双方预期收益与投入待补充。'],['交付方案','权益码、上线时间和联合内容。正式约定与交付标准待补充。']],
    execution:[['发起与确认','主动提案、品牌沟通、试用与方案对齐。'],['内部协调','软件测试、安全合规与相关内部流程。'],['上市交付','权益交付、社媒联动、品牌露出和技术反馈。']],
    metrics:['权益交付数量与时效','软件权益使用情况','联合内容与传播','产品或用户反馈'],
    evidence:['合作提案或权益说明','权益交付与上线证据','ibis 官方转发或联合内容'],
    learning:['合作如何实际支持了上市目标？','哪个内部或跨品牌问题由我推动解决？','下次如何优化合作验证与交付？'],
    prompts:'权益码交付、领取和使用分别说明。合作直接交付与销售效果分开。缺少可归因数据时保留空白，补充真实用户或产品反馈。'
  }
];

function routeFor(hash){
  const parts=hash.replace(/^#\/?/,'').split('/');
  const mode=['work','project','about'].includes(parts[0])?parts[0]:'work';
  return {mode,slug:cases.some(c=>c.slug===parts[1])?parts[1]:cases[0].slug,section:mode==='about'?parts[1]:null};
}

const main=document.getElementById('main');
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e=escapeHTML;
let selected=cases[0].slug;
function blankMedia(label,number,cls=''){return `<div class="media-blank ${cls}" role="img" aria-label="${e(label)}，图片待补充"><span class="media-label">${e(label)}</span><span class="media-center">图片 / 视频待补充</span><span class="media-counter">${number}</span></div>`;}
function rows(labels){return `<div class="blank-lines">${labels.map(label=>`<div class="blank-row"><span>${e(label)}</span><span class="blank-entry">待补充</span></div>`).join('')}</div>`;}
function section(n,en,zh,body){return `<section class="content-section" id="section-${n}"><h2 class="section-title">${n} / ${en}<span>${zh}</span></h2><div>${body}</div></section>`;}
function home(c){const i=cases.indexOf(c),prev=cases[(i+cases.length-1)%cases.length],next=cases[(i+1)%cases.length];return `<div class="work-layout route-enter"><div class="work-copy"><div class="identity"><h1 class="hero-name">DAVINA HUANG</h1><p class="intro">以市场洞察连接创意、内容与体验，<br>为品牌推进海外整合营销。<span class="en">INTEGRATED MARKETING / SHENZHEN</span></p></div><section class="project-stage" aria-labelledby="selected-project-title"><div class="project-client"><span class="micro-label">PROJECT</span><h2 id="selected-project-title" class="active-title">${e(c.title)}</h2></div><div class="project-deliverables"><span class="micro-label">SCOPE</span><p>${e(c.scope)}</p><span class="stage-counter">${c.number} / 06</span></div><p class="summary">${e(c.summary)}</p><a class="view-link" href="#project/${c.slug}">VIEW PROJECT <span>查看完整案例 ↗</span></a></section><div class="work-bottom"><div class="step-controls"><a href="#work/${next.slug}" class="next-project"><span>NEXT</span><b>${e(next.title)}</b><i aria-hidden="true">↓</i></a><a href="#work/${prev.slug}" class="prev-project"><span>PREV</span><b>${e(prev.title)}</b><i aria-hidden="true">↑</i></a></div><button class="index-trigger" type="button" data-open-index>INDEX <span>${c.number} / 06</span><span aria-hidden="true">＋</span></button></div><span class="browse-hint">SCROLL / ↑ ↓ 浏览项目</span></div><div class="work-media" aria-label="项目视觉素材">${c.evidence.map((label,n)=>`<button class="media-tile" type="button" data-media="${n}" aria-label="查看素材位：${e(label)}"><span class="tile-number">0${n+1}</span><span class="tile-label">${e(label)}</span><span class="tile-empty">素材待补充</span><span class="tile-expand" aria-hidden="true">↗</span></button>`).join('')}</div></div>`;}
function detail(c){const i=cases.indexOf(c),prev=cases[(i+cases.length-1)%cases.length],next=cases[(i+1)%cases.length];return `<article class="case-page route-enter"><div class="case-topline"><a class="back-link" href="#work/${c.slug}">← 返回项目索引</a><span>CASE ${c.number} / 06</span></div><h1 class="case-heading">${e(c.title)}</h1><p class="case-deck">${e(c.subtitle)}</p><dl class="case-meta"><div><dt>BRAND</dt><dd>${e(c.brand)}</dd></div><div><dt>MARKET</dt><dd>${e(c.market)}</dd></div><div><dt>PERIOD</dt><dd>${e(c.period)}</dd></div></dl><nav class="case-toc" aria-label="案例章节">${["项目概览","洞察与策略","执行与协同","成果与证据","复盘与调整"].map((label,n)=>`<button type="button" data-section="section-0${n+1}">0${n+1} ${label}</button>`).join("")}</nav><div class="case-hero">${blankMedia('项目主视觉 / 代表画面','01')}</div>${section('01','OVERVIEW','项目概览',`<p class="body-copy">${e(c.overview)}</p><div class="role-block"><div class="small-label">MY ROLE / 本人工作范围</div><p class="body-copy">${e(c.role)}</p></div>${rows(c.questions)}`)}${section('02','STRATEGY','洞察与策略',`<div class="strategy-list">${c.strategy.map(([title,body])=>`<div class="strategy-item"><h3>${e(title)}</h3><p>${e(body)}</p></div>`).join('')}</div>${rows(['洞察或策略的原始依据','方案 / 用户反馈来源'])}`)}${section('03','EXECUTION','执行与协同',`<ol class="execution-list">${c.execution.map(([title,body],n)=>`<li><span class="count">0${n+1}</span><h3>${e(title)}</h3><p>${e(body)}</p></li>`).join('')}</ol>${rows(['关键推动动作与解决的问题','本人主导 / 协同部分'])}<div class="evidence-grid">${c.evidence.map((label,n)=>blankMedia(label,`E${n+1}`)).join('')}</div>${rows(['代表内容或交付链接'])}`)}${section('04','RESULTS','成果与证据',`<table class="results-table"><caption>结果数据、统计口径与来源待补充。目标、预测和实际结果分别标注。</caption><thead><tr><th scope="col">指标</th><th scope="col">实际结果</th><th scope="col">周期 / 口径 / 来源</th></tr></thead><tbody>${c.metrics.map(m=>`<tr><th scope="row">${e(m)}</th><td>—</td><td>—</td></tr>`).join('')}</tbody></table>${rows(['本人贡献与团队整体成果的区分'])}<details class="fill-guide"><summary>数据补充提示</summary><p>${e(c.prompts)}</p></details>`)}${section('05','REFLECTION','复盘与调整',`<div class="reflection-list">${c.learning.map(q=>`<div class="reflection-row">${e(q)}<span class="blank-entry">待补充</span></div>`).join('')}</div>${rows(['已实施的调整与后续计划'])}`)}<nav class="case-navigation" aria-label="案例切换"><a href="#project/${prev.slug}"><span class="small-label">PREVIOUS CASE</span>${e(prev.title)}</a><a href="#project/${next.slug}"><span class="small-label">NEXT CASE</span>${e(next.title)}</a></nav></article>`;}
function about(){return `<article class="about-page route-enter"><h1 class="about-heading">ABOUT</h1><div class="about-intro"><div class="about-name">黄靖雯<br>Davina Huang</div><div class="about-statement"><p>关注海外用户，<br>让营销创意落地。</p><p class="about-detail">我的工作涵盖整合营销项目、KOL 内容管理、PR 传播和品牌合作。围绕 Campaign 目标制定传播方向，协调内部职能团队与外部伙伴，推进线上传播及线下活动。</p></div></div>${section('01','CAPABILITIES','核心能力',`<div class="capability-row"><h3>市场与用户洞察</h3><p>结合使用场景、购买阻力与用户反馈，形成营销判断。对应案例：ES Roadshow、A1 上市。</p></div><div class="capability-row"><h3>整合传播与资源协调</h3><p>围绕共同目标组织渠道、品牌和执行资源。对应案例：IFA 2026、Project Eternal、Slate × ibis Paint。</p></div><div class="capability-row"><h3>内容创意与用户参与</h3><p>设计活动玩法与参与机制，推进达人内容和社群共创。对应案例：Huion × Mucha、Project Eternal。</p></div>`)}${section('02','EXPERIENCE','工作经历',`<div class="experience-list"><div class="capability-row"><div>2025.08 — 至今</div><div><p class="experience-title">Insta360</p><p class="experience-sub">Marketing Specialist<br>整合营销、KOL 内容、PR 与品牌合作</p></div></div><div class="capability-row"><div>2024.07 — 2025.08</div><div><p class="experience-title">Huion 绘王科技</p><p class="experience-sub">海外推广专员<br>西语社媒活动、达人合作与品牌资源拓展</p></div></div><div class="capability-row"><div>2023.03 — 2024.07</div><div><p class="experience-title">深圳市小溪流科技有限公司</p><p class="experience-sub">海外西语运营<br>内容与社群运营、用户反馈及管理员协作</p></div></div></div>`)}${section('03','LANGUAGES & TOOLS','语言与工具',`<div class="capability-row"><h3>语言</h3><p>中文、粤语<br>英语 IELTS 7.0<br>西班牙语 DELE B2</p></div><div class="capability-row"><h3>工具</h3><p>Office、Canva、Photoshop、Premiere Pro<br>AI 辅助工具：Codex、Claude</p></div>${rows(['AI 在实际项目中的应用与证据'])}`)}<div id="resume">${section('04','RESUME','简历',`<div class="resume-holder"><div><p class="body-copy">简历下载位</p><p class="small-label">正式简历文件待补充</p></div><button class="disabled-button" disabled>PDF 待补充</button></div>`)}</div><div id="contact">${section('05','CONTACT','联系',`<div class="contact-line"><span>EMAIL</span><span>待补充</span></div><div class="contact-line"><span>LINKEDIN</span><span>待补充</span></div>`)}</div></article>`;}
function render(){closePanels();const route=routeFor(location.hash);document.documentElement.dataset.route=route.mode;const c=cases.find(item=>item.slug===route.slug);selected=c.slug;main.innerHTML=route.mode==='project'?detail(c):route.mode==='about'?about():home(c);document.title=route.mode==='project'?`${c.title} — Davina Huang`:route.mode==='about'?'About — Davina Huang':'Davina Huang — 整合营销作品集';document.querySelectorAll('[data-nav]').forEach(a=>{const active=route.mode==='about'?a.dataset.nav===(route.section||'about'):a.dataset.nav==='work';active?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current');});window.scrollTo(0,0);if(route.mode==='about'&&['contact','resume'].includes(route.section))requestAnimationFrame(()=>document.getElementById(route.section)?.scrollIntoView());}
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();main.focus();main.scrollIntoView();});
document.getElementById('theme').addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';document.getElementById('theme').setAttribute('aria-label',dark?'切换为浅色主题':'切换为深色主题');try{localStorage.setItem('davina-theme',dark?'dark':'light')}catch{}});
try{const saved=localStorage.getItem('davina-theme');if(saved==='dark'){document.documentElement.dataset.theme='dark';document.getElementById('theme').setAttribute('aria-label','切换为浅色主题')}}catch{}
window.addEventListener('hashchange',render);
let lastWheel=0,touchStart=null;
function changeProject(delta){const index=cases.findIndex(c=>c.slug===selected);location.hash=`work/${cases[(index+delta+cases.length)%cases.length].slug}`;}
const indexPanel=document.getElementById('index-panel'),mediaPanel=document.getElementById('media-panel');
function closePanels(){indexPanel?.close();mediaPanel?.close();}
function showIndex(){document.getElementById('index-list').innerHTML=cases.map(c=>`<a href="#work/${c.slug}" class="index-row" ${c.slug===selected?'aria-current="page"':''}><span>${c.number}</span><strong>${e(c.title)}</strong><span>${e(c.subtitle)}</span><b aria-hidden="true">↗</b></a>`).join('');indexPanel.showModal();}
let mediaIndex=0;
function showMedia(index,open=true){mediaIndex=(index+3)%3;const c=cases.find(item=>item.slug===selected);document.getElementById('media-content').innerHTML=`<div class="viewer-head"><span>${e(c.title)}</span><span>0${mediaIndex+1} / 03</span></div><div class="viewer-empty"><span class="viewer-number">0${mediaIndex+1}</span><h2>${e(c.evidence[mediaIndex])}</h2><p>图片 / 视频待补充</p></div>`;if(open)mediaPanel.showModal();}
main.addEventListener('click',event=>{const trigger=event.target.closest('[data-open-index],[data-media],[data-section]');if(!trigger)return;if(trigger.hasAttribute('data-open-index'))showIndex();else if(trigger.hasAttribute('data-media'))showMedia(Number(trigger.dataset.media));else document.getElementById(trigger.dataset.section)?.scrollIntoView({behavior:'smooth'});});
document.querySelectorAll('[data-close-panel]').forEach(b=>b.addEventListener('click',closePanels));
indexPanel.addEventListener('click',event=>{if(event.target.closest('a'))closePanels();if(event.target===indexPanel)closePanels();});
mediaPanel.addEventListener('click',event=>{if(event.target===mediaPanel)closePanels();});
document.querySelectorAll('[data-media-step]').forEach(b=>b.addEventListener('click',()=>showMedia(mediaIndex+Number(b.dataset.mediaStep),false)));
window.addEventListener('keydown',event=>{if(event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||event.target.matches('input,textarea,select,[contenteditable]'))return;if(mediaPanel.open&&['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();showMedia(mediaIndex+(event.key==='ArrowLeft'?-1:1),false);return;}if(indexPanel.open)return;const route=routeFor(location.hash);if(route.mode!=='work'||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();changeProject(['ArrowLeft','ArrowUp'].includes(event.key)?-1:1);});
window.addEventListener('wheel',event=>{if(routeFor(location.hash).mode!=='work'||innerWidth<=620||indexPanel.open||mediaPanel.open||Math.abs(event.deltaY)<18)return;event.preventDefault();if(Date.now()-lastWheel<800)return;lastWheel=Date.now();changeProject(event.deltaY>0?1:-1);},{passive:false});
main.addEventListener('touchstart',event=>{if(routeFor(location.hash).mode==='work'&&!indexPanel.open&&!mediaPanel.open)touchStart=[event.touches[0].clientX,event.touches[0].clientY];},{passive:true});
main.addEventListener('touchend',event=>{if(!touchStart)return;const dx=event.changedTouches[0].clientX-touchStart[0],dy=event.changedTouches[0].clientY-touchStart[1];touchStart=null;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.3)changeProject(dx<0?1:-1);},{passive:true});
render();

})();
