/* Portfolio v3: self-contained browser script. Content source: CV 内容稿 v4 (2026-10-12). */
(()=>{
/* ================= MEDIA MAP =================
   放图方法:把文件放进 assets/<slug>/,然后在下面填相对路径(例 'assets/ifa-2026/hero.jpg')。
   留空 '' = 该素材位自动隐藏/中性显示。hero = 案例页主视觉;evidence 三项对应各案例 evidence 标签顺序。
   视频:填 .mp4/.webm 路径即可(自动用 <video>)。 */
/* MEDIA:放图到 assets/<slug>/ 后在此登记 {src,cap};hero=案例主视觉,gallery=成果区图集。见 assets/README.md */
/* period/market 为 null = 页面隐藏该字段。 */
const cases = [
  {
    slug:'ifa-2026', number:'01', title:'IFA 2026', kind:'展会整合传播与品牌联名', brand:'Antigravity', market:'德国', period:'2026',
    subtitle:'5,041 条线索,较 IFA 2025 增长 455%',
    highlight:'飞行笼体验次数同比 +146% · 展会 KOL 内容 241K 播放 · 现场销售 €6,508.5',
    scope:'传播策略 / 渠道统筹 / 品牌联名',
    summary:'在没有新品作为传播抓手的情况下,以「Beyond Capture」统一各渠道内容方向,把展会体验、内容传播与品牌联名组织成同一场 Campaign。',
    overview:'担任 IFA 2026 营销侧负责人,以线索收集和现场体验为核心目标。在缺少新品的前提下,从产品用途、核心卖点及德国本地场景出发制定传播主题,为各渠道明确共同的内容方向。',
    role:'营销侧负责人:制定「Beyond Capture」传播主题;统筹 Branding、Social、PR、KOL 信息对齐;设计 Bambu Lab、EcoFlow 两个联名方案,负责品牌对接、资源协调与现场执行。',
    strategy:[['核心主题','Beyond Capture。从产品用途、核心卖点与德国本地场景出发,为 Branding、Social、PR、KOL 明确共同的内容方向。'],['体验与线索','以线索收集与现场体验为核心目标,围绕 Antigravity 展位体验与飞行笼设计现场互动。'],['品牌联名','根据合作方资源与产品契合度设计 Bambu Lab、EcoFlow 两个联名方案,实现产品互展与线上联合传播。']],
    execution:[['展前','主题与信息对齐,各渠道预热,联名合作对接。'],['展中','现场体验与飞行笼互动、联名产品互展、实时内容产出。'],['展后','各渠道总结与线上联合传播。']],
    results:[['线索收集','5,041 条','较 IFA 2025 增长 455%'],['现场体验','1,000+ 次','Antigravity 展位体验互动;飞行笼体验次数同比 +146%'],['内容传播','241K 播放','展会 KOL 内容累计,不含 pre-launch;官方渠道新增关注 1,006'],['现场销售','€6,508.5','展会现场销售额']],
    evidence:['展位全景与现场体验','Bambu Lab / EcoFlow 联名展示','Beyond Capture 主视觉'],
    learning:['没有新品时,一个从使用场景出发的统一主题,能让 Branding、Social、PR、KOL 围绕同一方向产出内容。','以合作方资源与产品契合度挑选联名伙伴,让联名同时服务现场互展与线上传播,而不只是露出。','把线索与体验设为核心 KPI,现场互动设计直接服务于可量化的结果。']
  },
  {
    slug:'project-eternal',number:'02',title:'Project Eternal',kind:'全球 UGC 挑战',brand:'Antigravity × Insta360 × CyArk × Splatica',market:'全球',period:'2026.04—07',
    subtitle:'700+ 家国际媒体报道,达目标的 7 倍',
    highlight:'2,000+ 活动报名 · 48 小时内 300 人注册 Splatica · 35 条 KOL 视频 4.5M 曝光',
    note:'项目收录于影石 2025 年报(2026.04 发布)',
    scope:'创意机制 / 四方品牌联名 / 五渠道协同',
    summary:'以「8K 360° 实景重建 3D 高斯溅射」为核心玩法,联合四方品牌,以庞贝古城等文化遗产 3D 档案为叙事支点,把技术挑战做成全球媒体话题。',
    overview:'主导设计全球 UGC 挑战的参与机制与整体传播方案:Antigravity × Insta360 × CyArk × Splatica 四方联名,以 8K 360° 实景重建 3D 高斯溅射为核心玩法,联动 SuperSplat、80LV 及 3DGS 社区冷启动。',
    role:'参与机制与整体传播方案由本人制定;统筹官网、KOL、EDM、APP、私域 DM 五渠道征集;设计社区 giveaway 机制降低参与门槛。',
    strategy:[['创意玩法','以 8K 360° 实景重建 3D 高斯溅射为核心玩法,让用户以创作参与品牌活动。'],['叙事支点','以庞贝古城等文化遗产 3D 档案作为叙事支点,把产品技术挑战拉升到文化遗产保护的传播层级。'],['冷启动与渠道','联动 SuperSplat、80LV 及 3DGS 社区冷启动;官网、KOL、EDM、APP、私域 DM 五渠道协同推进征集。']],
    execution:[['冷启动','四方联名资源对齐,联动 SuperSplat、80LV 与 3DGS 社区。'],['征集推进','五渠道协同征集,社区 giveaway 机制降低参与门槛。'],['传播放大','国际媒体与 KOL 内容放大活动声量。']],
    results:[['媒体报道','700+ 家','目标 100 家的 7 倍;覆盖 The Verge、TechRadar、ANSA、PetaPixel 等'],['活动报名','2,000+','全球报名'],['平台注册','300 人','48 小时内注册 Splatica 平台'],['KOL 传播','4.5M 曝光','35 条 KOL 视频']],
    evidence:['活动主视觉与报名页','用户 3D 高斯溅射作品','媒体报道与 KOL 内容'],
    learning:['文化遗产叙事让技术玩法具备媒体价值,是媒体报道远超目标的关键支点。','垂直社区(SuperSplat、80LV、3DGS)冷启动,比单纯投放更适合高门槛的创作型玩法。','五渠道协同加 giveaway 机制,用于降低从报名到创作的参与门槛。']
  },
  {
    slug:'a1-launch',number:'03',title:'A1 Launch',kind:'海外 KOL 与 PR 上市传播',brand:'Antigravity A1',market:'意大利 / 西班牙',period:'2025.12 上市',
    subtitle:'60 条 KOL 视频 · 4.49M 曝光,交付量全海外市场第一',
    highlight:'6 位百万级头部博主 · 7 家西班牙头部媒体深度报道 · 28 篇新闻稿',
    scope:'达人策略 / 内容管理 / 媒体 Pitch',
    summary:'入职 4 个月即负责 A1 上市传播,把高单价、高教育门槛产品的卖点转译为创作者内容,并主动 pitch 西班牙头部媒体。',
    overview:'Antigravity A1 于 2025.12.04 上市。负责意大利、西班牙市场的达人矩阵与内容方向,并推进西班牙媒体深度报道与上市新闻稿分发。',
    role:'制定三市场达人矩阵与内容方向;主动 pitch 西班牙头部媒体;建立 KOL 复盘体系并完成诊断。',
    strategy:[['卖点转译','将高单价、高教育门槛产品的卖点转译为创作者内容,让用户看懂产品价值。'],['达人矩阵','意大利、西班牙市场达人矩阵,合作 6 位百万级头部博主。'],['主动 PR','主动 pitch 并谈成 El País、El Mundo、La Vanguardia 等 7 家西班牙头部媒体深度报道。']],
    execution:[['上市准备','三市场达人矩阵与内容方向制定,上市信息对齐。'],['内容交付','上市期及后续投放的达人内容交付与上线管理。'],['PR 与复盘','媒体 pitch、28 篇新闻稿分发,按漏斗复盘 KOL 表现。']],
    results:[['KOL 视频','60 条','上市期及后续投放合并口径;交付量居全海外市场第一'],['KOL 曝光','4.49M','同上口径'],['头部博主','6 位','百万级粉丝博主'],['媒体报道','7 家深度报道','西班牙头部媒体(El País、El Mundo、La Vanguardia 等);上市周期分发 28 篇新闻稿']],
    evidence:['A1 上市主视觉','代表 KOL 内容','西班牙媒体报道'],
    // TODO(CV 开放槽位 3):「推动 KOL 策略从大众曝光转向人群验证与内容资产产出」——确认是已推动还是建议后,加入第 3 条 learning。
    learning:['建立「注意 → 点击 → 购买」漏斗复盘体系,用来定位 KOL 内容的转化断点。','分类归纳用户反对意见,作为调整内容方向与达人选择的依据。']
  },
  {
    slug:'es-roadshow',number:'04',title:'ES Roadshow',kind:'A1 西班牙沉浸式路演 · 市场验证',brand:'Antigravity A1',market:'西班牙四城',period:null /* TODO: 路演日期待用户提供 */,
    subtitle:'四城 40 席,到场率 95%',
    highlight:'定位为上市后 PMF 验证与购买意向收集,而非品牌曝光',
    scope:'体验设计 / 全链路统筹 / 用户验证',
    summary:'把四城路演定义为 PMF 验证:定向邀请高潜人群,每场小规模、高浓度体验闭环,沉淀购买意向用户画像与核心反对意见。',
    overview:'将 A1 西班牙四城路演定义为上市后的 PMF 验证与购买意向收集,而非品牌曝光。定向邀请 X 系列用户、360 重度用户、户外/旅行创作者及零售 VIP。',
    role:'路演定位与体验闭环设计;统筹物料、行程住宿与本地执行方管理;运用 AI 自建报名与订金收款系统,并在活动前修复支付故障与名额超卖问题。',
    strategy:[['验证定位','上市后的 PMF 验证与购买意向收集,而非品牌曝光。'],['定向邀请','X 系列用户、360 重度用户、户外/旅行创作者及零售 VIP。'],['体验闭环','goggles 沉浸试飞 → 场景讲解 → 反对意见收集 → 可退订金意向登记,每场小规模高浓度。']],
    execution:[['报名系统','运用 AI 自建报名与订金收款系统(报名后台、名单管理、签名表)。'],['风险修复','活动前快速修复支付故障与名额超卖缺陷。'],['现场执行','统筹物料、行程住宿与本地执行方,完成四城体验闭环。']],
    results:[['城市','4 城','西班牙'],['席位','40 席','定向邀请、小规模高浓度'],['到场率','95%',''],['产出','用户画像与反对意见','沉淀购买意向用户画像与核心反对意见,反哺 A1 西班牙 GTM 策略']],
    evidence:['沉浸试飞现场','AI 自建报名与订金系统','场景讲解与意向登记'],
    // TODO(CV 开放槽位 1):路演结论一句(哪类人群购买意向最强 / 第一阻力是什么),确认后加入 learning 首条。
    learning:['用「可退订金意向登记」代替口头意向,让购买意向更可衡量。','把反对意见收集设计进体验流程,输出直接反哺 GTM 策略。','用 AI 快速自建报名与收款工具,降低小规模验证活动的执行成本。']
  },
  {
    slug:'huion-mucha',number:'05',title:'Huion × Mucha',kind:'国际绘画挑战与用户共创',brand:'Huion 绘王',market:'国际',period:null /* TODO: 活动日期待用户提供 */,
    subtitle:'736 份参赛作品的国际绘画挑战',
    highlight:'穆夏诞辰 165 周年 · DTIYS 挑战 · 艺术家评委 + Clip Studio Paint 奖品合作',
    scope:'创意策划 / 资源协同 / 全程运营',
    summary:'抓住穆夏诞辰 165 周年的艺术主题,策划 DTIYS(以个人风格重新创作)挑战,让品牌传播融入用户创作。',
    overview:'以品牌认知、社群参与及新用户触达为目标,围绕穆夏诞辰 165 周年策划跨绘画媒介的 DTIYS 挑战,制定投稿规则、奖项及评选机制。',
    role:'创意策划与规则、奖项、评选机制设计;邀请评委、洽谈软件奖品合作;统筹推广与广告投放;主导投稿跟进、评委协调、用户沟通及获奖公布。',
    strategy:[['主题与玩法','穆夏诞辰 165 周年 + DTIYS 机制,跨绘画媒介投稿,让品牌传播融入用户创作。'],['资源组合','邀请 Hannah Alexander、Lady Moira 担任评委,洽谈 Clip Studio Paint 软件奖品,组合艺术家内容、Huion 硬件与软件权益。'],['推广','统筹推广内容、联合发布及广告投放。']],
    execution:[['活动筹备','主题、投稿规则、奖项与评选机制,评委与奖品资源协调。'],['推广与征集','艺术家内容、联合发布、广告投放与用户沟通。'],['评选与公布','投稿跟进、评委协调与获奖公布。']],
    results:[['参赛作品','736 份','全程运营收获'],['评委','2 位艺术家','Hannah Alexander、Lady Moira'],['奖品合作','Clip Studio Paint','软件奖品合作'],['同期社媒活动','2.2M 曝光','另一场新品绘画比赛:201 幅有效投稿,品牌提及量环比 +30%']],
    evidence:['活动主视觉与规则','代表参赛作品','评委与艺术家内容'],
    learning:['用艺术纪念节点 + DTIYS 这一创作者熟悉的格式,降低参与理解成本。','评委、硬件与软件权益组合成奖励池,提升挑战对创作者的吸引力。']
  },
  {
    slug:'slate-ibis-paint',number:'06',title:'Slate × ibis Paint',kind:'软件权益与新品上市合作',brand:'Huion 绘王 / ibis Paint',market:null,period:null /* TODO: 上市时间与市场待用户提供 */,
    subtitle:'上市前交付 20K 软件权益码',
    highlight:'主动发起合作 · 获 ibis 官方账号转发',
    scope:'合作发起 / 内外部协调 / 上市交付',
    summary:'为公司首款绘画平板上市主动提出并发起 ibis Paint 软件合作,用外部品牌资源补充购买权益与传播话题。',
    overview:'针对公司首款绘画平板上市需要增加购买权益及传播话题的需求,主动提出并发起 ibis Paint 软件合作。',
    role:'合作提案与对接;协调产品试用、软件测试、安全合规及内部流程;推进权益方案落地;协调合作方社媒宣传、修正品牌露出;收集技术问题推动产品优化。',
    strategy:[['合作机会','以绘画软件权益补充新品购买价值,并制造上市传播话题。'],['外部资源','以 ibis Paint 的品牌与用户资源支持新品上市。'],['交付方案','上市前交付权益码,配合合作方社媒宣传。']],
    execution:[['发起与对接','主动提出合作并对接合作方。'],['内部协调','产品试用、软件测试、安全合规与内部流程。'],['上市交付','交付 20K 权益码,协调社媒宣传与品牌露出,收集技术问题。']],
    results:[['权益码','20K','上市前交付'],['联合传播','ibis 官方转发','协调合作方社媒宣传并修正品牌露出'],['产品反馈','技术问题收集','推动产品优化'],['合作性质','主动发起','为公司首款绘画平板上市']],
    evidence:['合作主视觉','软件权益说明','ibis 官方转发'],
    learning:['从上市需求倒推合作:新品缺购买权益与话题时,软件合作可以同时补齐两者。','跨品牌合作要把测试、合规等内部流程前置,才能保证上市前按时交付。']
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
const isVideo=src=>/\.(mp4|webm|mov)$/i.test(src);
function mediaEl(src,label){return isVideo(src)?`<video src="${e(src)}" muted playsinline loop autoplay aria-label="${e(label)}"></video>`:`<img src="${e(src)}" alt="${e(label)}" loading="lazy" onerror="this.closest('[data-fig]')?.remove()">`;}
function fig(src,label,cls=''){return src?`<figure class="media-fig ${cls}" data-fig>${mediaEl(src,label)}<figcaption>${e(label)}</figcaption></figure>`:'';}
function section(n,en,zh,body){return `<section class="content-section" id="section-${n}"><h2 class="section-title">${n} / ${en}<span>${zh}</span></h2><div>${body}</div></section>`;}
function meta(label,val){return val?`<div><dt>${label}</dt><dd>${e(val)}</dd></div>`:'';}
function mediaItems(c){const m=MEDIA[c.slug];const own=[m.hero,...m.gallery].filter(Boolean);const extra=[...(LINKS[c.slug]||[]).filter(k=>k.home!==false).map(k=>({src:k.cover,cap:k.label})),...(KOL_CASES[c.slug]||[]).map(k=>({src:k.cover,cap:k.creator}))].filter(x=>x.src&&!own.some(o=>o.src===x.src));return [...own,...extra];}
function homeTiles(c){const it=mediaItems(c);return [0,1,2].map(n=>{const g=it[n];return g?`<button class="media-tile has-media${g.fit==='contain'?' contain':''}" type="button" data-media="${n}" aria-label="查看:${e(g.cap)}">${mediaEl(g.src,g.cap)}<span class="tile-number">0${n+1}</span><span class="tile-label">${e(g.cap)}</span><span class="tile-expand" aria-hidden="true">↗</span></button>`:`<div class="media-tile neutral" aria-hidden="true"><span class="tile-number">0${n+1}</span><span class="tile-label">${e(c.evidence[n])}</span></div>`;}).join('');}
function home(c){const i=cases.indexOf(c),prev=cases[(i+cases.length-1)%cases.length],next=cases[(i+1)%cases.length],m=MEDIA[c.slug];return `<div class="work-layout route-enter"><div class="work-copy"><div class="identity"><h1 class="hero-name">DAVINA HUANG</h1><p class="intro">专注西语与欧洲市场的整合营销:<br>把本地洞察变成可量化的 Campaign。<span class="en">INTEGRATED MARKETING · SPANISH-SPEAKING & EUROPEAN MARKETS · SHENZHEN</span></p></div><section class="project-stage" aria-labelledby="selected-project-title"><div class="project-client"><span class="micro-label">PROJECT</span><h2 id="selected-project-title" class="active-title">${e(c.title)}</h2></div><div class="project-deliverables"><span class="micro-label">SCOPE</span><p>${e(c.scope)}</p><span class="stage-counter">${c.number} / 06</span></div><p class="summary"><strong>${e(c.subtitle)}</strong><br>${e(c.summary)}</p><p class="result-line">${e(c.highlight)}</p><a class="view-link" href="#project/${c.slug}">VIEW PROJECT <span>查看完整案例 ↗</span></a></section><div class="work-bottom"><div class="step-controls"><a href="#work/${next.slug}" class="next-project"><span>NEXT</span><b>${e(next.title)}</b><i aria-hidden="true">↓</i></a><a href="#work/${prev.slug}" class="prev-project"><span>PREV</span><b>${e(prev.title)}</b><i aria-hidden="true">↑</i></a></div><button class="index-trigger" type="button" data-open-index>INDEX <span>${c.number} / 06</span><span aria-hidden="true">＋</span></button></div><span class="browse-hint">SCROLL / ↑ ↓ 浏览项目</span></div><div class="work-media" aria-label="项目视觉素材">${homeTiles(c)}</div></div>`;}
const MEDIA = {
  'ifa-2026':{hero:{src:'assets/ifa-2026/hero-booth-team.jpg',cap:'IFA 2026 Antigravity 展位团队'},gallery:[
    {src:'assets/ifa-2026/goggles-trial.jpg',cap:'观众佩戴 goggles 沉浸体验'},
    {src:'assets/ifa-2026/bambu-lab-cobrand.jpg',cap:'Bambu Lab 联名:现场展示 3D 打印配件'},
    {src:'assets/ifa-2026/ecoflow-codisplay.jpg',cap:'EcoFlow 联名产品互展与 IFA Deals 促销'}]},
  'project-eternal':{hero:{src:'assets/project-eternal/hero-techradar.jpg',cap:'TechRadar 报道配图'},gallery:[
]},
  'a1-launch':{hero:null,gallery:[
]},
  'es-roadshow':{hero:{src:'assets/es-roadshow/hero-group-tent.jpg',cap:'ES Roadshow 现场合影'},gallery:[
    {src:'assets/es-roadshow/hero-outdoor-trial.jpg',cap:'户外 goggles 沉浸试飞'},
    {src:'assets/es-roadshow/gear-table.jpg',cap:'体验装备台'}]},
  'huion-mucha':{hero:null,gallery:[]},
  'slate-ibis-paint':{hero:{src:'assets/slate-ibis-paint/hero-ibispaint-preinstalled.jpg',cap:'Huion × ibisPaint:Kamvas Slate 预装 ibisPaint X',fit:'contain'},gallery:[
    {src:'assets/slate-ibis-paint/all-in-one-art-suite.jpg',cap:'Kamvas Slate 11 & 13:All-in-One Art Suite',fit:'contain'},
    {src:'assets/slate-ibis-paint/rights-table.jpg',cap:'用户权益:ibisPaint X 与 Clip Studio Paint',fit:'contain'}]}
};
/* 相关链接(案例页「相关链接 / Evidence」行);yt = YouTube 视频 id,显示小缩略图 */
const LINKS = {
  'es-roadshow':[{label:'Roadshow 视频 1',src:'YouTube',url:'https://www.youtube.com/watch?v=E1G3492MAhM&t=107s',cover:'assets/es-roadshow/covers/yt-video1.jpg'},{label:'Roadshow 视频 2',src:'YouTube',url:'https://www.youtube.com/watch?v=pQAA7wP1x5k',cover:'assets/es-roadshow/covers/yt-video2.jpg'}],
  'project-eternal':[{label:'Project Eternal 官网页',src:'antigravity.tech',url:'https://www.antigravity.tech/us/project-eternal/gaussian-splatting',cover:'assets/project-eternal/covers/official.jpg'},{label:'UGC 官方贴文',src:'Instagram',url:'https://www.instagram.com/antigravity_global/p/DXhFjEAmzQt/',cover:'assets/project-eternal/covers/ig-ugc.jpg'},{label:'TechRadar 报道',src:'TechRadar',url:'https://www.techradar.com/cameras/i-turned-my-local-beauty-spot-into-an-immersive-3d-environment-using-splatica-and-my-insta360-cameras-and-the-whole-process-is-surprisingly-easy',cover:'' /* 与主图重复,改用中性平台卡 */},{label:'Corridor Crew 视频(7.18M 订阅)',src:'YouTube',url:'https://www.youtube.com/watch?v=X8yRlA7jqEQ',cover:'assets/project-eternal/covers/yt-corridor.jpg'},{label:'影石 2025 年报:全景时空胶囊计划',src:'微信公众号',url:'https://mp.weixin.qq.com/s/Yplv0SzQNg4SEEa-6kfUtw',cover:'assets/project-eternal/covers/wechat.jpg'}],
  'huion-mucha':[{label:'活动发布',src:'Instagram',url:'https://www.instagram.com/huiontableta/p/DLzdoPgOPlR/',cover:'assets/huion-mucha/covers/ig-launch.jpg'},{label:'截稿提醒',src:'Instagram',url:'https://www.instagram.com/huiontableta/p/DMXLY0mpd3x/',cover:'assets/huion-mucha/covers/ig-deadline.jpg'},{label:'获奖公布',src:'Instagram',url:'https://www.instagram.com/huiontableta/p/DNXXiky1DXH/',cover:'assets/huion-mucha/covers/ig-winners.jpg'}],
  'slate-ibis-paint':[{label:'合作贴文',src:'Instagram',url:'https://www.instagram.com/huiontablet/p/DJo2TkWtD2e/',cover:'' /* 与图集 All-in-One 图重复,改用中性平台卡 */},{label:'官网权益页',src:'huion.com',url:'https://www.huion.com/subject/kamvas-slate-11-13-software-promo.html',cover:'assets/slate-ibis-paint/covers/huion-promo.jpg',home:false /* 横幅含文字,首页方格裁切不佳 */}]
};
/* 归档链接:不在页面渲染,备用素材 / 面试补充 */
const ARCHIVE_LINKS = ['https://www.instagram.com/huiontablet/p/DMb0JSyRvo6/','https://www.instagram.com/huiontablet/p/DLOWMZrv2VG/'];
function linkRow(slug){const l=LINKS[slug];if(!l||!l.length)return '';return `<div class="links"><span class="links-label">相关链接 / Evidence</span><div class="lcards">${l.map(k=>`<a class="lcard" href="${e(k.url)}" target="_blank" rel="noopener noreferrer"><span class="lthumb" data-src="${e(k.src)}">${k.cover?`<img src="${e(k.cover)}" alt="" loading="lazy" onerror="this.remove()">`:''}</span><span class="lmeta"><b>${e(k.label)}</b><i>${e(k.src)} ↗</i></span></a>`).join('')}</div></div>`;}
/* ================= KOL 案例 Gallery(A1 Launch 页) =================
   每个案例 6 个字段;空字符串 '' 在页面上自动隐藏,后续直接填写即可。
   纪律:不写合作金额、合作方内部争议或私有信息。 */
const KOL_CASES = {
  'a1-launch':[
    {creator:'Alessandro Morolla', platform:'YouTube', url:'https://www.youtube.com/watch?v=INd4_PXxNNc', cover:'assets/a1-launch/covers/yt-morolla.jpg',
     angle:'谈判过程艰难,展示谈判能力',
     fields:{
       背景目标:'',      // 项目背景与目标
       筛选逻辑:'',      // 创作者筛选逻辑
       合作谈判:'谈判过程艰难,最终达成合作。', // 不写金额
       Brief把控:'',     // Brief 与内容把控
       突发问题:'',      // 执行中的突发问题
       数据复盘:''       // 数据表现与复盘
     }},
    {creator:'Los vídeos de Félix', platform:'YouTube', url:'https://www.youtube.com/watch?v=LaG0D3fbl6E&t=1032s', cover:'assets/a1-launch/covers/yt-felix.jpg',
     angle:'说服创作者接受做横评',
     fields:{背景目标:'', 筛选逻辑:'', 合作谈判:'说服创作者接受以横评形式呈现 A1。', Brief把控:'', 突发问题:'', 数据复盘:''}},
    {creator:'Travelsandvibes', platform:'Instagram', url:'https://www.instagram.com/travelsandvibes/reel/DTfnC71jOE_/', cover:'assets/a1-launch/covers/ig-travelsandvibes.jpg',
     angle:'根据冬季 brief 产出,同期 3 个月内互动率最高',
     fields:{背景目标:'', 筛选逻辑:'', 合作谈判:'', Brief把控:'根据冬季 brief 产出内容。', 突发问题:'', 数据复盘:'同期 3 个月内互动率最高。'}}
  ]
};
const KOL_FIELD_LABELS = {背景目标:'项目背景与目标',筛选逻辑:'创作者筛选逻辑',合作谈判:'合作谈判',Brief把控:'Brief 与内容把控',突发问题:'执行中的突发问题',数据复盘:'数据表现与复盘'};
function kolGallery(slug){const l=KOL_CASES[slug];if(!l)return '';return `<div class="kol-grid">${l.map(k=>{const f=Object.entries(k.fields).filter(([,v])=>v&&v.trim());return `<div class="kol-card"><a class="kol-cover" href="${e(k.url)}" target="_blank" rel="noopener noreferrer"><img src="${e(k.cover)}" alt="${e(k.creator)}" loading="lazy" onerror="this.remove()"><span class="kol-plat">${e(k.platform)} ↗</span></a><div class="kol-body"><b>${e(k.creator)}</b><p>${e(k.angle)}</p>${f.length?`<details><summary>展开案例</summary><dl>${f.map(([key,v])=>`<div><dt>${e(KOL_FIELD_LABELS[key])}</dt><dd>${e(v)}</dd></div>`).join('')}</dl></details>`:''}</div></div>`;}).join('')}</div>`;}
/* 结构化内容:brief = 背景/目标/职责;challenge = 核心挑战 → 解法;
   matrix(可复用)= 目标 × 动作矩阵,marks 值 'p' 主要 / 's' 次要。无 matrix 时 strategy 以卡片呈现。 */
const EXTRA = {
  'ifa-2026':{
    brief:{bg:'IFA 2026 柏林,无新品可作传播抓手',goal:'线索收集与现场体验',role:'营销侧负责人:传播框架、四渠道对齐、两个联名'},
    keyMessage:'Beyond Capture: Unlock What a Drone Can Do',
    challenge:['项目缺少历史资料与交接,没有现成 guideline,也没有新品作为传播抓手','我从零制定传播框架(Beyond Capture),主动拉通 Branding、Social、PR、KOL 与外部合作方,推动项目落地'],
    pillars:[
      {en:'More Than A Camera In The Sky',zh:'不止是空中相机',rows:[['目标','展位引流 · 现场促单'],['信息','249g 简单安全的飞行,解锁新的使用场景'],['动作','飞行笼体验(体验次数同比 +146%);Bambu Lab 联名:现场购买即送 3D 打印电池壳配件']]},
      {en:'Experience It Beyond The Booth',zh:'在展位之外体验',rows:[['目标','展位引流 · 线索收集'],['动作','收集全球 10 地实拍 footage 放入 goggles 体验,让观众直观感受 Beyond Capture']]},
      {en:'Learn The Future Of Spatial Creation',zh:'了解空间创作的未来',rows:[['目标','建立品牌专业权威'],['信息','3DGS(3D 高斯溅射)空间创作'],['动作','联系合作方策划 3DGS workshop']]}],
    support:['联合 Insta360 抽奖收集线索','EcoFlow 联名产品互展引流','官方渠道与 KOL 内容:展前预热、展中内容、展后总结'],
    matrix:{goals:['线索','促单','关注','引流','权威'],
      acts:[['飞行笼体验',{3:'p'}],['Bambu Lab 联名',{1:'p',3:'s'}],['goggles 全球实拍',{3:'p',0:'s'}],['3DGS workshop',{4:'p'}],['联合抽奖',{0:'p'}],['EcoFlow 互展',{3:'p'}],['官方渠道 / KOL',{2:'p'}]]},
    /* 假设:Bambu Lab 次要=引流(CV「产品互展」);goggles 次要=线索(用户:P3 目标为引流+线索) */
    noTimeline:true,
    reviewTitle:'可优化方向',
    review:['更多德国本地化内容:原计划把德国知名建筑做进 goggles 体验,因工期与产研人力未落地。','按 user journey 设计展位动线,让体验、讲解、留资与购买首尾相连。','增加 Studio 剪辑 App 体验区,串联「拍摄 → 飞行 → 剪辑」完整链路。']
  },
  'project-eternal':{
    brief:{bg:'Antigravity × Insta360 × CyArk × Splatica 四方联名的全球 UGC 挑战',goal:'全球用户参与与国际媒体声量',role:'参与机制与整体传播方案制定,五渠道统筹'},
    keyMessage:'用 3D 高斯溅射,为文化遗产留下永恒档案',
    challenge:['创作型玩法参与门槛高,技术话题难以破圈','以垂直社区冷启动 + 社区 giveaway 降低门槛,以庞贝古城等文化遗产 3D 档案作为叙事支点拉高传播层级'],
    pillars:[
      {zh:'技术玩法 × 文化叙事',rows:[['目标','媒体声量与话题层级'],['动作','以 8K 360° 实景重建 3D 高斯溅射为核心玩法,以文化遗产 3D 档案作为叙事支点']]},
      {zh:'垂直社区冷启动',rows:[['目标','创作者参与'],['动作','联动 SuperSplat、80LV 及 3DGS 社区冷启动,设计社区 giveaway 降低参与门槛']]},
      {zh:'五渠道协同征集',rows:[['目标','活动报名与平台注册'],['动作','官网、KOL、EDM、APP、私域 DM 协同推进征集']]}],
    noTimeline:true, reviewTitle:'可优化方向',
    review:['在报名后补充创作引导与教程,缩短从报名到完成作品的路径。','把垂直社区冷启动的合作方式沉淀为可复用清单,用于后续创作型活动。']
  },
  'a1-launch':{
    brief:{bg:'Antigravity A1 于 2025.12.04 上市,入职 4 个月 lead 上市传播',goal:'意大利、西班牙市场上市声量',role:'达人矩阵与内容方向制定、主动 PR、KOL 复盘诊断'},
    keyMessage:'把高门槛产品,翻译成创作者语言',
    challenge:['高单价、高教育门槛产品,用户难以快速理解价值','将卖点转译为创作者内容,以头部博主与本地头部媒体建立信任'],
    pillars:[
      {zh:'意西市场达人矩阵',rows:[['目标','上市内容声量'],['动作','制定意大利、西班牙达人矩阵与内容方向,合作百万级头部博主']]},
      {zh:'主动媒体 Pitch',rows:[['目标','本地媒体公信力'],['动作','主动 pitch El País、El Mundo、La Vanguardia 等西班牙头部媒体,上市周期分发新闻稿']]},
      {zh:'漏斗复盘体系',rows:[['目标','定位转化断点'],['动作','按「注意 → 点击 → 购买」漏斗复盘 KOL 表现,分类归纳用户反对意见']]}],
    noTimeline:true, reviewTitle:'可优化方向',
    /* TODO(CV 开放槽位 3):KOL 策略转向边界确认后,可加入一条 */
    review:['为每条达人内容预设可追踪的「注意 → 点击 → 购买」指标,上线即可定位断点。','把归纳出的用户反对意见前置写进 Brief,让内容主动回应购买阻力。']
  },
  'es-roadshow':{
    brief:{bg:'A1 上市后的西班牙城市路演',goal:'PMF 验证与购买意向收集,而非品牌曝光',role:'定位与体验闭环设计、执行统筹、AI 自建报名与订金系统'},
    keyMessage:'路演不是曝光,是一次 PMF 验证',
    challenge:['如何在路演中拿到真实、可衡量的购买意向','定向邀请高潜人群,以可退订金意向登记替代口头意向,并收集反对意见'],
    pillars:[
      {zh:'定向邀请',rows:[['目标','高浓度目标样本'],['动作','邀请 X 系列用户、360 重度用户、户外/旅行创作者及零售 VIP,每场小规模']]},
      {zh:'体验闭环',rows:[['目标','购买意向与反对意见'],['动作','goggles 沉浸试飞 → 场景讲解 → 反对意见收集 → 可退订金意向登记']]},
      {zh:'AI 自建报名与订金系统',rows:[['目标','低成本可靠执行'],['动作','自建报名后台、名单管理、签名表与订金收款;活动前修复支付故障与超卖缺陷']]}],
    noTimeline:true, reviewTitle:'可优化方向',
    /* TODO(CV 开放槽位 1):路演结论一句,确认后加入 */
    review:['报名与收款系统在开放前做支付与名额压力测试,把问题挡在上线前。','把意向登记名单与后续购买数据打通,验证意向到转化的真实比例。']
  },
  'huion-mucha':{
    brief:{bg:'穆夏诞辰 165 周年',goal:'品牌认知、社群参与与新用户触达',role:'创意与规则设计、评委与奖品资源、全程运营'},
    keyMessage:'用你的风格,重新创作穆夏',
    challenge:['让品牌传播自然融入用户创作','以 DTIYS 机制承接艺术主题,组合艺术家评委与软硬件权益吸引创作者'],
    pillars:[
      {zh:'主题与玩法',rows:[['目标','社群参与'],['动作','穆夏艺术主题 + DTIYS 挑战,制定跨绘画媒介的投稿规则、奖项与评选机制']]},
      {zh:'资源组合',rows:[['目标','提升参与吸引力'],['动作','邀请 Hannah Alexander、Lady Moira 担任评委,洽谈 Clip Studio Paint 软件奖品']]},
      {zh:'推广与运营',rows:[['目标','品牌认知与新用户触达'],['动作','统筹推广内容、联合发布与广告投放,主导投稿跟进、评委协调与获奖公布']]}],
    noTimeline:true, reviewTitle:'可优化方向',
    review:['追踪参赛者中的新用户比例,量化共创活动对新用户触达的贡献。']
  },
  'slate-ibis-paint':{
    brief:{bg:'公司首款绘画平板上市',goal:'补充购买权益与传播话题',role:'主动发起合作,内外部协调与上市交付'},
    keyMessage:'用软件权益,为新品补上购买理由',
    challenge:['新品上市缺少购买权益与传播话题','主动引入 ibis Paint 软件合作,以外部品牌资源支持上市'],
    pillars:[
      {zh:'发起合作',rows:[['目标','购买权益与话题'],['动作','主动提出并发起 ibis Paint 软件合作,对接合作方']]},
      {zh:'内部推进',rows:[['目标','上市前按时交付'],['动作','协调产品试用、软件测试、安全合规及内部流程,推进权益方案落地']]},
      {zh:'联合传播',rows:[['目标','扩大上市声量'],['动作','协调合作方社媒宣传、修正品牌露出,收集技术问题推动产品优化']]}],
    noTimeline:true, reviewTitle:'可优化方向',
    review:['提前设计权益码领取与使用的追踪,衡量权益对购买的实际作用。','把软件测试与合规环节前置到合作启动阶段,预留更充足的上市缓冲。']
  }
};
function matrix(m){return `<table class="mx"><thead><tr><th></th>${m.goals.map(g=>`<th scope="col">${e(g)}</th>`).join('')}</tr></thead><tbody>${m.acts.map(([n,mk])=>`<tr><th scope="row">${e(n)}</th>${m.goals.map((_,g)=>`<td><span class="dot ${mk[g]||''}" aria-label="${mk[g]==='p'?'主要':mk[g]==='s'?'次要':'无'}"></span></td>`).join('')}</tr>`).join('')}</tbody><caption><span class="dot p"></span>主要 <span class="dot s"></span>次要</caption></table>`;}
function pillars(x){return `<div class="pillars">${x.pillars.map((p,n)=>`<div class="pillar"><span class="pn">P${n+1}</span>${p.en?`<h3>${e(p.en)}</h3><p class="pzh">${e(p.zh)}</p>`:`<h3 class="pzh-only">${e(p.zh)}</h3>`}<dl>${p.rows.map(([k,v])=>`<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`).join('')}</dl></div>`).join('')}</div>${x.support?`<div class="support"><span>跨支柱支撑</span>${x.support.map(t=>`<b>${e(t)}</b>`).join('')}</div>`:''}`;}
function blk(label,body,cls=''){return `<section class="blk ${cls}"><h2 class="blk-label">${label}</h2><div class="blk-body">${body}</div></section>`;}
function detail(c){const i=cases.indexOf(c),prev=cases[(i+cases.length-1)%cases.length],next=cases[(i+1)%cases.length],m=MEDIA[c.slug],x=EXTRA[c.slug];
const metaLine=[c.brand,c.market,c.period].filter(Boolean).map(e).join('<span class="sep">·</span>');
const gallery=m.gallery.map(g=>fig(g.src,g.cap,g.fit==='contain'?'contain':'')).join('');
const strat=x.pillars?`<div class="strat-grid">${pillars(x)}${x.matrix?`<div class="mx-wrap"><span class="blk-sub">目标 × 动作</span>${matrix(x.matrix)}</div>`:''}</div>`:x.matrix?matrix(x.matrix):`<div class="strat-cards">${c.strategy.map(([t,b])=>`<div><b>${e(t)}</b><p>${e(b)}</p></div>`).join('')}</div>`;
return `<article class="case-page v2 route-enter"><div class="case-topline"><a class="back-link" href="#work/${c.slug}">← 返回项目</a><span>CASE ${c.number} / 06</span></div>
<header class="case-head"><div><h1 class="case-heading">${e(c.title)}</h1><p class="case-deck">${e(c.subtitle)}</p></div><div class="case-side"><p class="case-metaline">${metaLine}</p><p class="case-kind">${e(c.kind)}</p><p class="case-scope">${e(c.scope)}</p></div></header>
${m.hero?`<div class="case-hero">${fig(m.hero.src,m.hero.cap,m.hero.fit==='contain'?'contain':'')}</div>`:''}
${blk('01 概览',`<div class="brief"><div><span>背景</span><p>${e(x.brief.bg)}</p></div><div><span>目标</span><p>${e(x.brief.goal)}</p></div><div><span>本人职责</span><p>${e(x.brief.role)}</p></div></div>`)}
${blk(x.pillars?'02 策略与执行':'02 策略',`${x.keyMessage?`<p class="keymsg"><span>KEY MESSAGE</span>${e(x.keyMessage)}</p>`:''}<p class="challenge"><span>挑战</span>${e(x.challenge[0])}<span class="arrow">→</span>${e(x.challenge[1])}</p>${strat}`)}
${x.noTimeline?'':blk('03 执行',`<ol class="timeline">${c.execution.map(([t,b])=>`<li><b>${e(t)}</b><p>${e(b)}</p></li>`).join('')}</ol>`)}
${blk(x.noTimeline?'03 成果':'04 成果',`${c.note?`<p class="kpi-note">${e(c.note)}</p>`:''}<div class="kpis">${c.results.map(([k,v,n])=>`<div class="kpi"><strong>${e(v)}</strong><span>${e(k)}</span>${n?`<small>${e(n)}</small>`:''}</div>`).join('')}</div>${gallery?`<div class="gallery g${m.gallery.length}">${gallery}</div>`:''}${linkRow(c.slug)}`)}
${KOL_CASES[c.slug]?blk('04 KOL 案例 Gallery',kolGallery(c.slug)):''}${blk((x.noTimeline?(KOL_CASES[c.slug]?'05 ':'04 '):'05 ')+(x.reviewTitle||'复盘'),`<ul class="learn">${(x.review||c.learning).slice(0,3).map(q=>`<li>${e(q)}</li>`).join('')}</ul>`)}
<nav class="case-navigation" aria-label="案例切换"><a href="#project/${prev.slug}"><span class="small-label">PREVIOUS CASE</span>${e(prev.title)}</a><a href="#project/${next.slug}"><span class="small-label">NEXT CASE</span>${e(next.title)}</a></nav></article>`;}
/* TODO: LinkedIn 链接、简历 PDF 待用户提供。提供后填入下方常量即自动显示。 */
const LINKEDIN='', RESUME_PDF='';
function about(){const row=(d,t,sub)=>`<div class="ab-row"><span>${d}</span><div><b>${t}</b><p>${sub}</p></div></div>`;return `<article class="about-page ab route-enter"><h1 class="about-heading">ABOUT</h1><div class="ab-sec ab-caps"><h2>CAPABILITIES 核心能力</h2>${row('洞察与验证','本地市场洞察与验证','以用户画像、反对意见与转化漏斗形成营销判断 · ES Roadshow、A1 Launch')}${row('整合传播','整合传播与资源协调','围绕共同主题组织渠道、品牌联名与执行资源 · IFA 2026、Project Eternal、Slate × ibis Paint')}${row('用户参与','创意机制与用户参与','设计 UGC 挑战与参与机制 · Project Eternal、Huion × Mucha')}${row('媒体资源','西语媒体与达人资源','主动 pitch El País、El Mundo、La Vanguardia 等西班牙头部媒体')}</div><div class="ab-grid"><div class="ab-left"><div class="about-name">黄靖雯 Davina Huang</div><p class="ab-intro">现任 Insta360 Marketing Specialist，负责海外整合营销：从传播策略到 KOL、PR 与品牌合作的全链路落地。主导过 IFA 2026 展会营销、A1 意大利与西班牙上市传播、西班牙四城路演和全球 UGC 挑战 Project Eternal；此前在绘王科技负责西语市场的社媒活动、KOL 与媒体合作。习惯用数据衡量结果，用西语和英语直接对接本地媒体、创作者与合作伙伴。</p><div class="ab-sec" id="contact"><h2>CONTACT 联系</h2><div class="ab-row"><span>EMAIL</span><div><a href="mailto:davina13@163.com">davina13@163.com</a></div></div>${LINKEDIN?`<div class="ab-row"><span>LINKEDIN</span><div><a href="${e(LINKEDIN)}" target="_blank" rel="noopener">${e(LINKEDIN)}</a></div></div>`:''}<div class="ab-row"><span>BASED IN</span><div>深圳</div></div>${RESUME_PDF?`<div class="ab-row" id="resume"><span>RESUME</span><div><a href="${e(RESUME_PDF)}" download>下载 PDF ↓</a></div></div>`:''}</div><div class="ab-sec"><h2>EDUCATION 教育经历</h2>${row('2019.09 — 2023.06','北华大学','西班牙语 本科 · GPA 3.72/5.0')}${row('2021.10 — 2022.07','Universidad Rey Juan Carlos','西班牙语交换项目 · GPA 81/100')}</div></div><div class="ab-right"><div class="ab-sec"><h2>EXPERIENCE 工作经历</h2>${row('2025.08 — 至今','Insta360 · Marketing Specialist','整合营销项目统筹、KOL 内容管理、PR 传播及品牌合作')}${row('2024.07 — 2025.08','绘王科技有限公司 · 品牌营销部 · 海外推广专员','西语市场社媒活动策划与运营、KOL 内容合作、PR 及品牌资源拓展')}${row('2023.03 — 2024.07','深圳市小溪流科技有限公司 · 海外西语运营','海外社媒与社群运营、版本传播及兼职管理员协作')}</div><div class="ab-sec"><h2>LANGUAGES & TOOLS 语言与工具</h2>${row('语言','中文、粤语 · 英语 IELTS 7.0 · 西班牙语 DELE B2','')}${row('工具','Office、Canva、Photoshop、Premiere Pro、AI 辅助工具','')}</div></div></div></article>`;}
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
function showMedia(index,open=true){const c=cases.find(item=>item.slug===selected),it=mediaItems(c);if(!it.length)return;mediaIndex=(index+it.length)%it.length;const g=it[mediaIndex];document.getElementById('media-content').innerHTML=`<div class="viewer-head"><span>${e(c.title)}</span><span>${e(g.cap)} · ${mediaIndex+1} / ${it.length}</span></div><div class="viewer-media">${mediaEl(g.src,g.cap)}</div>`;if(open)mediaPanel.showModal();}
function stepMedia(d){showMedia(mediaIndex+d,false);}
main.addEventListener('click',event=>{const trigger=event.target.closest('[data-open-index],[data-media],[data-section]');if(!trigger)return;if(trigger.hasAttribute('data-open-index'))showIndex();else if(trigger.hasAttribute('data-media'))showMedia(Number(trigger.dataset.media));else document.getElementById(trigger.dataset.section)?.scrollIntoView({behavior:'smooth'});});
document.querySelectorAll('[data-close-panel]').forEach(b=>b.addEventListener('click',closePanels));
indexPanel.addEventListener('click',event=>{if(event.target.closest('a'))closePanels();if(event.target===indexPanel)closePanels();});
mediaPanel.addEventListener('click',event=>{if(event.target===mediaPanel)closePanels();});
document.querySelectorAll('[data-media-step]').forEach(b=>b.addEventListener('click',()=>stepMedia(Number(b.dataset.mediaStep))));
window.addEventListener('keydown',event=>{if(event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||event.target.matches('input,textarea,select,[contenteditable]'))return;if(mediaPanel.open&&['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();stepMedia(event.key==='ArrowLeft'?-1:1);return;}if(indexPanel.open)return;const route=routeFor(location.hash);if(route.mode!=='work'||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();changeProject(['ArrowLeft','ArrowUp'].includes(event.key)?-1:1);});
window.addEventListener('wheel',event=>{if(routeFor(location.hash).mode!=='work'||innerWidth<=620||indexPanel.open||mediaPanel.open||Math.abs(event.deltaY)<18)return;event.preventDefault();if(Date.now()-lastWheel<800)return;lastWheel=Date.now();changeProject(event.deltaY>0?1:-1);},{passive:false});
main.addEventListener('touchstart',event=>{if(routeFor(location.hash).mode==='work'&&!indexPanel.open&&!mediaPanel.open)touchStart=[event.touches[0].clientX,event.touches[0].clientY];},{passive:true});
main.addEventListener('touchend',event=>{if(!touchStart)return;const dx=event.changedTouches[0].clientX-touchStart[0],dy=event.changedTouches[0].clientY-touchStart[1];touchStart=null;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.3)changeProject(dx<0?1:-1);},{passive:true});
render();

})();
