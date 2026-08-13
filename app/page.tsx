"use client";

import { useEffect, useRef, useState } from "react";

const featured = [
  {
    platform: "抖音",
    title: "永远的十班！男子4×100决赛",
    meta: "校园体育 / 青春纪实 / 竖屏短视频",
    image: "/images/douyin-dashboard.png",
    href: "https://v.douyin.com/QdKJHnig1QI/",
    metrics: ["43.9万播放", "1.5万点赞", "522评论", "361分享"],
    insight: "运动会集中举办期带来明确的时间窗口；班级接力兼具集体荣誉和胜负悬念，更容易触发学生群体讨论。",
    idea: "选择较少见的无人机俯拍，用完整跑道、交接棒和冲刺关系强化团体项目的规模感与临场感。",
    review: "43.9万播放和高互动说明：校园热点中，时机、群体身份与新颖视角叠加，比单纯记录比赛更有传播力。后续可继续围绕校历节点，提前规划可引发班级认同的团体事件。",
  },
  {
    platform: "B站",
    title: "把我的眼睛放上天",
    meta: "视觉创意 / 影像表达 / 横屏短片",
    image: "/images/bilibili-dashboard.png",
    href: "https://www.bilibili.com/video/BV1cj411A751/",
    metrics: ["15.7万播放", "约1.8万点赞", "2211收藏", "796分享"],
    insight: "游戏角色技能与现实中的穿越机都共享“操控无人机飞行”的视觉概念，天然存在跨媒介连接。",
    idea: "抓住游戏中扔出无人机的动作节点作为转场，把虚拟飞行无缝衔接到真实穿越机画面，制造从游戏世界进入现实的瞬间。",
    review: "15.7万播放和约1.8万点赞说明：转场不是单纯技巧展示，只有同时承接熟悉的文化符号和真实能力，才会形成记忆点。后续可继续寻找虚拟动作与现实镜头语言的同构关系。",
  },
  {
    platform: "B站",
    title: "连拍一时爽，选片火葬场",
    meta: "摄影器材 / 场景观察 / 轻量表达",
    image: "/images/bilibili-dashboard.png",
    href: "https://www.bilibili.com/video/BV1jw4m1D7sb/",
    metrics: ["12万播放", "3324点赞", "149评论", "64分享"],
    insight: "连拍带来大量相似照片、后期选片耗时，是摄影爱好者普遍经历且一眼能懂的痛点。",
    idea: "把“拍摄时的爽感”和“选片时的崩溃”压缩成一句反差标题，以真实器材与拍摄场景快速建立同好语境。",
    review: "12万播放说明：垂类内容不必从参数讲起，共同痛点是更低门槛的传播入口。后续可延展为器材使用尴尬、拍摄流程和后期选择等系列内容。",
  },
  {
    platform: "抖音图文",
    title: "主播同款机位：游戏城市夜景拍摄教程",
    meta: "评论区选题 / 解答教程 / 游戏场景探索",
    image: "/images/douyin-dashboard.png",
    href: "https://v.douyin.com/gOsMNkR9nm0/",
    metrics: ["12.5万播放", "6738点赞", "1676收藏", "154评论"],
    insight: "从评论区对“同款机位”的真实询问出发，用户需求明确，内容不需要额外制造悬念，关键是让观众能够快速复现拍摄位置与视角。",
    idea: "把复杂的游戏内寻路拆解为传送点、朝向、建筑位置、相机角度四个连续步骤，并补充特定角色技能与PC端抓拍模式，覆盖普通玩家和进阶玩家的不同操作条件。",
    review: "12.5万播放与1676次收藏说明：解答型内容的价值不仅在即时观看，更在于信息是否准确、可执行、值得保存。评论区既是互动场，也是选题库；将高频问题结构化回答，可以形成稳定的教程内容系列。",
  },
];

const officialLinks = [
  "https://weixin.qq.com/sph/A14TQuZtMx",
  "https://weixin.qq.com/sph/AdKik8VBBi",
  "https://weixin.qq.com/sph/Au47eJDH1D",
  "https://weixin.qq.com/sph/ACoCfY1BUg",
  "https://weixin.qq.com/sph/AmHcHxtrDV",
];

const officialShots = [
  ["/images/official-forum.png", "水科学高端论坛", "摄影 / 剪辑署名"],
  ["/images/official-food-festival.png", "校园美食嘉年华", "摄影 / 剪辑署名"],
  ["/images/official-asian-games.png", "杭州亚运会影像", "官方渠道采用"],
  ["/images/official-youth.png", "亚运志愿者专题", "官方渠道采用"],
] as const;

const workflowItems = [
  {
    number: "01",
    title: "选题与内容策划",
    summary: "从热点、评论和人群情绪里找到可执行的选题",
    label: "先判断什么值得拍，再决定怎么拍",
    advantage: "擅长把热点时机、目标人群和具体场景放在一起判断，不只追求“有意思”，也会考虑内容是否容易被看懂、讨论和收藏。",
    method: ["观察平台热点与评论区问题", "判断目标人群的共同情绪或痛点", "把大主题压缩成一个具体场景", "发布后根据数据验证选题"],
    cases: [
      { image: "/images/douyin-dashboard.png", title: "《永远的十班》", note: "抓住运动会集中举办期，以班级接力和无人机视角切入，抖音播放43.9万。", href: "#works" },
      { image: "/images/douyin-dashboard.png", title: "游戏机位解答教程", note: "从评论区真实问题出发，把复杂路径拆成可复现步骤，播放12.5万、收藏1676。", href: "#works" },
    ],
  },
  {
    number: "02",
    title: "脚本分镜与现场拍摄",
    summary: "把想法拆成镜头，并在真实现场把画面拍出来",
    label: "从纸面方案到拍摄现场，始终围绕成片推进",
    advantage: "能够把创意拆成可执行的脚本和分镜，并根据人物、场地、设备与光线及时调整拍法；熟悉采访、跟拍、活动记录和航拍等现场。",
    method: ["确定人物目标与结构转折", "用分镜明确景别、机位和转场", "根据设备与场地调整执行方案", "补足采访、跟拍和环境空镜"],
    cases: [
      { image: "/images/cant-think-storyboard-reveal.jpg", title: "《真的想不出来啊》", note: "独立完成导演、编剧、摄像与后期，将真实创作困境拆解为34个镜头。", href: "#early-film" },
      { image: "/images/green-valley-poster.jpg", title: "《绿谷未来》", note: "负责摄影、编导、当地联络与人物采访，完成公益课堂和乡村环境记录。", href: "#documentary" },
    ],
  },
  {
    number: "03",
    title: "剪辑包装与视觉整合",
    summary: "把实拍、UE5 和 AI 素材整理成完整成片",
    label: "不堆效果，让每种素材都为叙事服务",
    advantage: "熟练使用 Premiere Pro 与 DaVinci Resolve，能够处理多轨剪辑、声音编排、字幕包装、节奏控制和基础调色，也能整合UE与AI生成素材。",
    method: ["先搭建叙事主线和段落节奏", "用声音和动作完成镜头衔接", "统一不同素材的色彩与画幅", "完成字幕、包装和多版本输出"],
    cases: [
      { image: "/images/guixi-editing-timeline.png", title: "《归曦计划》", note: "整合UE5与AI视频素材，完成剪辑、声音、调色及中英双语字幕。", href: "#film" },
      { image: "/images/dbappsecurity-annual-mv-edit.png", title: "安恒信息年会MV", note: "通过多轨时间线组织人物、工作纪实、表彰画面和歌词包装。", href: "#corporate" },
    ],
  },
  {
    number: "04",
    title: "发布运营与数据复盘",
    summary: "用播放、互动和收藏判断内容是否真正有效",
    label: "发布不是终点，数据会告诉我下一条怎么做",
    advantage: "持续运营抖音与B站个人账号，关注播放、点赞、评论、收藏和分享之间的差异，能够从真实反馈中总结可复用的选题与表达方法。",
    method: ["根据平台特点调整标题和内容形式", "记录核心传播与互动数据", "结合评论判断观众关注点", "沉淀可继续扩展的内容方向"],
    cases: [
      { image: "/images/douyin-dashboard.png", title: "抖音内容复盘", note: "单条最高43.9万播放，教程图文以12.5万播放和1676收藏验证实用价值。", href: "#works" },
      { image: "/images/bilibili-dashboard.png", title: "B站内容复盘", note: "单条最高15.7万播放，通过虚实转场和摄影痛点验证创意机制。", href: "#works" },
    ],
  },
] as const;

export default function Home() {
  const [activeWorkflow, setActiveWorkflow] = useState<number | null>(null);
  const [workflowExiting, setWorkflowExiting] = useState(false);
  const [workflowPaused, setWorkflowPaused] = useState(false);
  const [workflowAutoPaused, setWorkflowAutoPaused] = useState(false);
  const [workflowRemaining, setWorkflowRemaining] = useState(5000);
  const transitionTimer = useRef<number | null>(null);
  const workflow = activeWorkflow === null ? null : workflowItems[activeWorkflow];

  const switchWorkflow = (nextIndex: number) => {
    if (workflowExiting) return;
    if (activeWorkflow === null) {
      setActiveWorkflow(nextIndex);
      setWorkflowRemaining(5000);
      return;
    }
    if (nextIndex === activeWorkflow) {
      setWorkflowExiting(true);
      transitionTimer.current = window.setTimeout(() => {
        setActiveWorkflow(null);
        setWorkflowRemaining(5000);
        setWorkflowExiting(false);
      }, 220);
      return;
    }
    setWorkflowExiting(true);
    transitionTimer.current = window.setTimeout(() => {
      setActiveWorkflow(nextIndex);
      setWorkflowRemaining(5000);
      setWorkflowExiting(false);
    }, 220);
  };

  useEffect(() => {
    if (activeWorkflow === null || workflowPaused || workflowAutoPaused || workflowExiting) return;
    const timer = window.setInterval(() => {
      setWorkflowRemaining(current => Math.max(0, current - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [activeWorkflow, workflowPaused, workflowAutoPaused, workflowExiting]);

  useEffect(() => {
    if (activeWorkflow !== null && workflowRemaining === 0 && !workflowExiting) {
      switchWorkflow((activeWorkflow + 1) % workflowItems.length);
    }
  }, [workflowRemaining, activeWorkflow, workflowExiting]);

  useEffect(() => () => {
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setWorkflowAutoPaused(true);
  }, []);

  useEffect(() => {
    const openHashSection = () => {
      const section = document.getElementById(window.location.hash.slice(1));
      if (!(section instanceof HTMLElement)) return;
      if (section instanceof HTMLDetailsElement) section.open = true;
      let parent = section.parentElement?.closest("details");
      while (parent) {
        parent.open = true;
        parent = parent.parentElement?.closest("details");
      }
    };
    openHashSection();
    window.addEventListener("hashchange", openHashSection);
    return () => window.removeEventListener("hashchange", openHashSection);
  }, []);

  const handleWorkflowKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + workflowItems.length) % workflowItems.length;
    switchWorkflow(nextIndex);
    document.querySelectorAll<HTMLButtonElement>(".process-row [role='tab']")[nextIndex]?.focus();
  };

  const openPortfolioSection = (id: string) => {
    const section = document.getElementById(id);
    if (!(section instanceof HTMLElement)) return;
    if (section instanceof HTMLDetailsElement) section.open = true;
    let parent = section.parentElement?.closest("details");
    while (parent) {
      parent.open = true;
      parent = parent.parentElement?.closest("details");
    }
  };
  return (
    <main>
      <nav className="nav">
        <div className="nav-inner shell">
        <a className="brand" href="#top">GAO YIJIA <span>PORTFOLIO</span></a>
        <div className="navlinks">
          <a href="#capabilities">能力</a>
          <a href="#works" onClick={() => openPortfolioSection("works")}>平台发布</a>
          <a href="#film-projects" onClick={() => openPortfolioSection("film-projects")}>影视项目</a>
          <a href="#corporate" onClick={() => openPortfolioSection("corporate")}>企业项目</a>
          <a href="#contact">联系我</a>
        </div>
        <details className="mobile-menu">
          <summary>菜单</summary>
          <div>
            <a href="#capabilities">核心能力</a><a href="#works" onClick={() => openPortfolioSection("works")}>视频平台发布</a><a href="#film-projects" onClick={() => openPortfolioSection("film-projects")}>影视创作与获奖</a>
            <a href="#corporate" onClick={() => openPortfolioSection("corporate")}>企业项目</a>
            <a href="#official" onClick={() => openPortfolioSection("official")}>官方采用</a><a href="#contact">联系我</a>
          </div>
        </details>
        </div>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">VIDEO CREATOR · CONTENT OPERATOR</p>
              <h1>视频创作，是我<br />持续投入的方向。</h1>
          <p className="intro">高一嘉，数字媒体技术本科。独立完成短视频选题、脚本、拍摄、剪辑、发布与数据复盘，持续运营抖音与B站个人账号。</p>
          <div className="hero-actions">
            <a className="primary" href="#works" onClick={() => openPortfolioSection("works")}>查看平台作品</a>
            <a className="contact-short" href="#contact">联系我</a>
            <div className="contact-group">
              <span>联系方式</span>
              <a href="mailto:546373816@qq.com">546373816@qq.com</a>
              <i aria-hidden="true">/</i>
              <a href="tel:18358268768">18358268768</a>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <img src="/images/gaoyijia.jpg" alt="高一嘉证件照" fetchPriority="high" />
          <div className="hero-stats">
            <div><strong>43.9万</strong><span>单条最高播放</span></div>
            <div><strong>13条</strong><span>抖音作品破万</span></div>
            <div><strong>5年+</strong><span>持续内容创作</span></div>
          </div>
        </div>
      </header>

      <section className="process shell" id="capabilities">
        <div className="process-heading">
          <div><p className="kicker">CAPABILITIES</p><h2>我的核心能力</h2></div>
          <p>四项能力覆盖从选题到发布。点击标题，查看我的工作方法和对应案例。</p>
        </div>
        <div
          className="process-row"
          role="tablist"
          tabIndex={-1}
          aria-label="内容全流程能力"
          onMouseEnter={() => setWorkflowPaused(true)}
          onMouseLeave={() => setWorkflowPaused(false)}
          onFocusCapture={() => setWorkflowPaused(true)}
          onBlurCapture={() => setWorkflowPaused(false)}
        >
          {workflowItems.map((item, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeWorkflow === index}
              aria-controls="workflow-detail"
              className={activeWorkflow === index ? "active" : ""}
              onClick={() => switchWorkflow(index)}
              onKeyDown={event => handleWorkflowKeyDown(event, index)}
              key={item.number}
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <em>{item.summary}</em>
              <i>{activeWorkflow === index ? "收起内容" : "查看能力"} ↘</i>
            </button>
          ))}
        </div>
        <div className={`workflow-slot${workflow && activeWorkflow !== null ? " is-open" : ""}`}>
          {!workflow && (
            <div className="workflow-overview">
              <div>
                <strong>能独立推进，也知道每一步为什么这样做</strong>
                <p>我的优势不只是会使用软件，而是能把选题、拍摄、制作和发布串成一条完整工作线。</p>
              </div>
              <ol>
                <li><span>工具</span>熟练使用 PR 与 DaVinci Resolve</li>
                <li><span>结果</span>单条内容最高 43.9 万播放</li>
                <li><span>执行</span>可独立完成脚本、拍摄与后期</li>
                <li><span>项目</span>覆盖获奖作品、纪录片与企业项目</li>
              </ol>
            </div>
          )}
          {workflow && activeWorkflow !== null && (
            <>
              <div className="workflow-progress-row">
                <div className="workflow-progress" aria-hidden="true">
                  <span style={{ width: `${((5000 - workflowRemaining) / 5000) * 100}%` }} />
                </div>
                <button type="button" className="workflow-pause" onClick={() => setWorkflowAutoPaused(value => !value)} aria-pressed={workflowAutoPaused}>
                  {workflowAutoPaused ? "继续自动切换" : "暂停自动切换"}
                </button>
              </div>
              <div
                className="workflow-stage"
                onMouseEnter={() => setWorkflowPaused(true)}
                onMouseLeave={() => setWorkflowPaused(false)}
                onFocusCapture={() => setWorkflowPaused(true)}
                onBlurCapture={() => setWorkflowPaused(false)}
              >
                <div key={activeWorkflow} className={`workflow-detail${workflowExiting ? " exiting" : ""}`} id="workflow-detail" role="tabpanel">
                  <div className="workflow-summary">
                    <p className="workflow-index">能力说明</p>
                    <h3>{workflow.label}</h3>
                    <p>{workflow.advantage}</p>
                    <div className="workflow-method">
                      <strong>我的工作方法</strong>
                      <ol>{workflow.method.map(step => <li key={step}>{step}</li>)}</ol>
                    </div>
                  </div>
                  <div className="workflow-cases">
                    {workflow.cases.map(item => (
                      <article className="workflow-case" key={item.title}>
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <div><span>代表案例</span><h4>{item.title}</h4><p>{item.note}</p><a href={item.href}>查看项目 ↘</a></div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <details className="portfolio-fold portfolio-light" id="works">
        <summary className="portfolio-fold-summary shell">
          <div><span>抖音 / B站 / 内容运营与传播结果</span><h2>视频平台发布与运营</h2></div>
          <p>4 个平台案例 · 单条最高 43.9 万播放 · 含选题思路与数据复盘</p>
          <b aria-hidden="true">展开</b>
        </summary>
        <div className="portfolio-fold-content shell">
          <div className="work-grid">
          {featured.map((work, index) => (
            <article className={`work-card work-${index + 1}`} key={work.title}>
              <a className="work-visual" href={work.href} target="_blank" rel="noreferrer" aria-label={`观看${work.title}`}><img src={work.image} alt={`${work.title}数据截图`} loading="lazy" /></a>
              <div className="work-body">
                <p className="work-meta"><b>{work.platform}</b><span>{work.meta}</span></p>
                <h3><a href={work.href} target="_blank" rel="noreferrer">{work.title}</a></h3>
                <p className="work-highlight">{work.idea}</p>
                <div className="metric-row">{work.metrics.map(metric => <span key={metric}>{metric}</span>)}</div>
                <details className="case-details">
                  <summary>查看创作思路与复盘</summary>
                  <div className="case-notes"><p><strong>内容洞察</strong>{work.insight}</p><p><strong>复盘结论</strong>{work.review}</p></div>
                </details>
                <a className="view-link" href={work.href} target="_blank" rel="noreferrer">观看作品 <b>↗</b></a>
              </div>
            </article>
          ))}
          </div>
        </div>
      </details>

      <details className="portfolio-fold portfolio-light portfolio-project-group" id="film-projects">
        <summary className="portfolio-fold-summary shell">
          <div><span>剧情短片 / 广告 / 纪录片 / 虚拟影像</span><h2>影视创作与获奖项目</h2></div>
          <p>4 类项目 · 覆盖导演、编剧、摄影、剪辑与虚拟制作</p>
          <b aria-hidden="true">展开</b>
        </summary>
        <div className="portfolio-project-list">
      <details className="portfolio-fold portfolio-light early-film" id="early-film">
        <summary className="portfolio-fold-summary shell">
          <div><span>导演 / 编剧 / 摄像 / 后期</span><h2>《真的想不出来啊》</h2></div>
          <p>校园微电影 · 独立推进 · 34 镜头分镜 · 3 分 58 秒</p>
          <b aria-hidden="true">展开</b>
        </summary>
        <div className="portfolio-fold-content shell">
        <div className="early-film-grid">
          <div className="early-film-player">
            <img src="/images/cant-think-poster.jpg" alt="《真的想不出来啊》视频封面" />
          </div>
          <div className="early-film-copy">
            <p className="early-label">项目职责</p>
            <p className="early-role">导演 · 编剧 · 摄像 · 后期</p>
            <p>从选题、剧本和分镜开始，到现场调度、镜头拍摄、剪辑与双语字幕，独立推进整部微电影的制作，把一次“想不出拍什么”的真实处境发展为可以完成拍摄的故事。</p>
            <p>创意来自当时团队面对作业却迟迟定不下题材的经历。我将这种创作焦虑直接写进剧情：梦境中，由同一人以三种不同穿着分别代表三种创作意见，围绕校园情感、科幻题材和借鉴往届作品展开争论；现实中，人物突然醒来，才发现讨论尚未真正开始，以“想了很久，仍没想出来”的反差完成收尾。</p>
            <div className="production-notes">
              <p><strong>导演与编剧</strong>将真实的选题困境改写成元叙事校园喜剧，通过一人分饰三种观点，把抽象的创作纠结转化为有冲突的对话，并用梦境与现实的反差完成结构闭环。</p>
              <p><strong>摄像执行</strong>拍摄前拆解34个镜头，明确景别、机位、声音和运镜；在只有相机与三脚架的条件下，组合固定机位、手持跟随、高位俯拍和横摇甩镜，完成多人对话与同人分饰的画面调度。</p>
              <p><strong>后期完成</strong>独立整理素材、搭建叙事节奏并完成剪辑，以快速切换加强争执段落，以梦醒后的节奏停顿突出反转，同时制作中英双语字幕，完成最终成片交付。</p>
            </div>
            <div className="early-tags"><span>校园喜剧</span><span>元叙事</span><span>反转结构</span><span>34镜头分镜</span><span>中英字幕</span></div>
          </div>
        </div>
        <div className="early-film-process">
          <div className="process-copy">
            <p className="early-label">从文字到成片</p>
            <h3>先把真实处境写进剧本，<br />再拆成可执行的34个镜头。</h3>
            <p>剧本先明确场景、镜头、音效和台词；分镜表进一步细化景别、摄影机角度、运镜方式与器材。开场建立独自构思的现实处境，中段用横摇甩镜加快三种观点的争论，最后以第34镜“梦醒”揭示前面的对话均发生在想象中。</p>
          </div>
          <figure className="process-doc process-script">
            <img loading="lazy" src="/images/cant-think-script-excerpt.jpg" alt="《真的想不出来啊》剧本开场片段，标注场景、镜头、音效与台词" />
            <figcaption><strong>剧本开场</strong><span>从独自想剧本、在群里叫人讨论开始建立现实处境。</span></figcaption>
          </figure>
          <figure className="process-doc">
            <img loading="lazy" src="/images/cant-think-storyboard-opening.jpg" alt="《真的想不出来啊》分镜表开场部分，包含前四个镜头" />
            <figcaption><strong>分镜 01-04</strong><span>用全景、俯拍特写与手持横移交代人物和创作压力。</span></figcaption>
          </figure>
          <figure className="process-doc">
            <img loading="lazy" src="/images/cant-think-storyboard-reveal.jpg" alt="《真的想不出来啊》分镜表结尾部分，包含争执与梦醒镜头" />
            <figcaption><strong>分镜 31-34</strong><span>争执达到顶点后切入梦醒，以最后一个镜头完成虚实反转。</span></figcaption>
          </figure>
        </div>
        </div>
      </details>

      <details className="portfolio-fold portfolio-dark award-section" id="award">
        <summary className="portfolio-fold-summary shell">
          <div><span>全国大学生广告艺术大赛全国优秀奖</span><h2>获奖作品 ·《跑慢一点》</h2></div>
          <p>微电影广告 · 分镜优化 / 剧本建议 / 摄影 · 3 分 10 秒</p>
          <b aria-hidden="true">展开</b>
        </summary>
        <div className="portfolio-fold-content shell">
          <p className="award-intro">这是一支以 AD 钙奶为核心意象的微电影广告。影片将童年追逐遥控车、喝着 AD 钙奶的无忧时光，与成年后的求职受挫、职场应酬和临时加班并置；熟悉的 AD 钙奶既是产品，也是连接两段人生的叙事纽带，让主人公在疲惫奔忙中重新想起童年的一句“跑慢一点”。</p>
          <div className="award-role-card">
            <p className="early-label light">个人职责</p>
            <h3>分镜优化 · 剧本建议 · 摄影</h3>
            <p>参与剧本讨论，从广告表达和拍摄可执行性出发提出调整建议；重点优化36镜分镜，将童年、成年与记忆回返三部分的镜头衔接得更清楚，并在拍摄阶段负责画面落实。</p>
            <div className="award-role-points">
              <p><strong>分镜优化</strong>利用4:3与2.35:1画幅区分童年和成年，通过摔倒黑场、背后环绕及相似动作复刻，建立跨时空的视觉呼应。</p>
              <p><strong>剧本建议</strong>强化“跑得太快”这一主题线索，减少产品的生硬露出，让 AD 钙奶自然参与情节转折，并成为唤回童年记忆的关键道具。</p>
              <p><strong>摄影执行</strong>依据分镜规划完成固定、横移、推拉、环绕、俯拍与低机位等镜头，在儿童段落保留轻快感，在成年段落强化压迫与疲惫感。</p>
            </div>
          </div>
          <div className="award-grid">
            <div className="award-player">
              <a href="https://www.bilibili.com/video/BV1txrGBEEpU/" target="_blank" rel="noreferrer"><img src="/images/run-slower-poster.jpg" alt="《跑慢一点》视频封面" /></a>
              <a href="https://www.bilibili.com/video/BV1txrGBEEpU/" target="_blank" rel="noreferrer">前往 B 站观看完整作品 ↗</a>
            </div>
            <figure className="award-proof">
              <img loading="lazy" src="/images/run-slower-award.jpg" alt="《跑慢一点》全国大学生广告艺术大赛全国优秀奖证书" />
              <figcaption>
                <strong>获奖证明</strong>
                <p>作品编号 Bb06-11-056-0002，证书列明作者高一嘉，参赛院校为浙江水利水电学院信息工程学院。</p>
              </figcaption>
            </figure>
          </div>
          <div className="award-storyboard">
            <div className="award-storyboard-head">
              <div><p className="kicker light">STORYBOARD DEVELOPMENT</p><h3>用镜头完成两段人生的切换</h3></div>
              <p>从36镜分镜中选取三组关键段落，分别对应童年与成年切换、现实压力累积，以及产品触发记忆回返。</p>
            </div>
            <div className="award-storyboard-grid">
              <figure>
                <img loading="lazy" src="/images/run-slower-storyboard-contrast.jpg" alt="《跑慢一点》分镜8至11，童年摔倒黑场后切换至成年工作场景" />
                <figcaption><strong>童年 → 成年</strong><span>第8镜摔倒后接黑场，再从键盘特写进入成年工作场景；画幅同步由4:3变为2.35:1。</span></figcaption>
              </figure>
              <figure>
                <img loading="lazy" src="/images/run-slower-storyboard-pressure.jpg" alt="《跑慢一点》分镜12至17，呈现主角求职和递交简历的压力" />
                <figcaption><strong>压力逐步累积</strong><span>眼部特写、越肩推进与重复递交简历，将求职受挫压缩成连续的视觉段落。</span></figcaption>
              </figure>
              <figure>
                <img loading="lazy" src="/images/run-slower-storyboard-product-bridge.jpg" alt="《跑慢一点》分镜30至35，AD钙奶触发童年记忆并完成场景回返" />
                <figcaption><strong>产品成为转折</strong><span>成年主角看到 AD 钙奶后与童年动作形成匹配，喝下产品，再回到第8镜的童年场景。</span></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </details>

      <details className="portfolio-fold portfolio-dark documentary-section" id="documentary">
        <summary className="portfolio-fold-summary shell">
          <div><span>省级三等奖 / 人物与乡村纪实</span><h2>纪录片</h2></div>
          <p>《绿谷未来》《山水好人》 · 编导 / 摄影 / 采访 / 跟拍</p>
          <b aria-hidden="true">展开</b>
        </summary>
        <div className="portfolio-fold-content shell">
          <div className="documentary-head compact-project-head">
            <div><h2>《绿谷未来》</h2><p>乡村公益纪录片 · 团队作品 · 8分</p></div>
            <div className="documentary-award"><strong>省级三等奖</strong><span>2024 第二十三届浙江省大学生多媒体作品设计竞赛</span></div>
          </div>
          <div className="documentary-grid">
            <div className="documentary-player">
              <img src="/images/green-valley-poster.jpg" alt="《绿谷未来》视频封面" />
              <div className="documentary-copy">
                <p className="early-label">个人职责</p>
                <p className="documentary-role">摄影 · 编导 · 当地联络 · 人物采访</p>
                <p>前期联系当地居民及相关采访对象，沟通拍摄安排并了解村庄实际情况；结合纪录片主题梳理采访方向，在现场完成提问与交流，引导受访者从生活经历、乡村变化和现实需求出发进行讲述。</p>
                <div className="production-notes dark-notes documentary-notes">
                  <p><strong>前期联络</strong>对接当地人员、确认采访对象与拍摄场景，为团队进入村庄拍摄建立沟通基础。</p>
                  <p><strong>编导采访</strong>围绕公益课堂、儿童成长、基础设施及乡村生活设计问题，并根据现场回答继续追问，使采访内容更具体。</p>
                  <p><strong>摄影记录</strong>拍摄人物采访、课堂互动与村庄环境，用航拍全景交代地域关系，以近距离观察保留人物的真实状态。</p>
                </div>
                <p className="early-label documentary-summary-label">视频简介</p>
                <p>《绿谷未来》以群山深处的乡村公益课堂为切口，记录志愿者陪伴儿童学习、游戏与表达的过程。影片通过当地居民、教师和参与者的访谈，将课堂现场延伸至交通改善、基础设施、留守老人及儿童成长等乡村议题，在具体人物与真实空间中呈现村庄的变化与仍待回应的需求。</p>
                <p>航拍建立山谷、竹林与村落的地域全貌，观察式镜头保留课堂互动的自然状态，访谈则补足生活经验与社会背景。片名中的“未来”，既指向孩子们的成长，也指向持续进入乡村、建立连接的公益行动。</p>
                <div className="early-tags"><span>纪录片</span><span>乡村观察</span><span>公益课堂</span><span>人物访谈</span><span>航拍影像</span></div>
              </div>
            </div>
            <figure className="documentary-proof">
              <img loading="lazy" src="/images/green-valley-award.jpg" alt="《绿谷未来》浙江省大学生多媒体作品设计竞赛三等奖证书" />
              <figcaption><strong>获奖证明</strong><p>证书列明参赛作品《绿谷未来》，学生成员为葛益豪、高一嘉、刘一凡，参赛学校为浙江水利水电学院。</p><span>证书编号 ZJJS2024260294</span></figcaption>
            </figure>
          </div>
          <article className="alumni-documentary">
            <div className="alumni-documentary-head"><div><p className="kicker light">ALUMNI PORTRAIT</p><h3>《山水好人》</h3><p>校友人物纪录片 · 摄影：高一嘉 · 9分57秒</p></div><span>基层水利校友的半生坚守</span></div>
            <div className="alumni-documentary-grid">
              <div className="alumni-player"><img src="/images/shanshui-good-person-poster.jpg" alt="《山水好人》视频封面" /></div>
              <div className="alumni-copy">
                <p className="early-label">视频简介</p>
                <p>《山水好人》以浙江水利水电学院1989届校友徐忠凯为主人公，回望他毕业后扎根基层水利的职业轨迹。影片从山区水利工作的艰苦环境讲起，串联农村小水电、防汛抢险、基层服务与家庭生活，呈现一名普通水利人在长期实践中形成的责任感。</p>
                <p>纪录片以主人公访谈为叙事主轴，并引入同事、家人与现场历史影像，从职业选择、应急担当和日常为人等侧面交叉补充人物。水库、大坝、山路与工作场景构成环境叙事，将个人经历放回基层水利建设的真实空间。</p>
                <div className="production-notes dark-notes"><p><strong>个人职责</strong>主要负责摄像工作，包括跟拍校友的行走与工作状态、根据采访现场及时调整机位，以及补充水库、大坝、山路和办公环境等空镜素材。</p><p><strong>拍摄方法</strong>采访时根据人物朝向、背景层次与现场光线调整构图，保证人物表达清晰稳定；跟拍与环境空镜则用于连接采访内容，让校友经历与基层水利的真实工作空间形成对应。</p></div>
                <div className="early-tags"><span>校友纪录片</span><span>人物访谈</span><span>基层水利</span><span>现场摄影</span><span>航拍环境</span></div>
              </div>
            </div>
          </article>
        </div>
      </details>

      <details className="portfolio-fold portfolio-dark film-section" id="film">
        <summary className="portfolio-fold-summary shell">
          <div><span>毕业设计 / 独立制作 / UE5 + AIGC</span><h2>独立短片 ·《归曦计划》</h2></div>
          <p>脚本、虚拟场景、AI 视频生成、剪辑、声音与调色全流程</p>
          <b aria-hidden="true">展开</b>
        </summary>
        <div className="portfolio-fold-content">
          <div className="shell film-grid">
          <div className="film-copy">
            <p className="kicker light">ORIGINAL FILM</p>
            <h2>《归曦计划》</h2>
            <p className="film-lead">独立制作 · 毕业设计 · 1分26秒</p>
            <div className="film-description">
              <strong>视频简介</strong>
              <p>战争令城市化为废墟，文明的秩序也濒临崩塌。为寻找属于人类的下一束曙光，一名宇航员穿过冰冷而庞大的发射基地，登上承载希望的飞船，驶向寂静未知的深空。《归曦计划》以末日废土与工业科幻场景构建危机感，并以火箭升空完成从毁灭到希望的情绪转折。</p>
            </div>
            <p><strong className="film-note-label">创作说明</strong>从内容构思到最终成片，独立完成脚本与视觉规划、UE5场景搭建及虚拟镜头设计、AI视频素材生成、剪辑、声音编排、调色与中英双语字幕。</p>
            <ul>
              <li>虚拟摄像机设计构图与运动路径</li>
              <li>多轮画面复盘与版本调整</li>
              <li>Premiere Pro / DaVinci Resolve / UE5 / AIGC</li>
            </ul>
          </div>
          <div className="film-player">
            <img src="/images/guixi-plan.jpg" alt="《归曦计划》视频封面" />
          </div>
        </div>
        <div className="shell guixi-process">
          <div className="guixi-process-head">
            <div><p className="kicker light">PRODUCTION BREAKDOWN</p><h3>虚拟场景、AI镜头与后期整合</h3></div>
            <p>根据镜头需求选择不同制作方式：需要稳定空间关系和可控运镜的段落在虚幻引擎中完成；角色、火箭和废土等镜头通过AI视频多轮生成，再统一进入达芬奇完成节奏、声音、色彩与字幕整合。</p>
          </div>
          <div className="guixi-process-grid">
            <figure className="guixi-process-card guixi-wide">
              <img loading="lazy" src="/images/guixi-editing-timeline.png" alt="《归曦计划》在 DaVinci Resolve 中的完整剪辑时间线" />
              <figcaption><strong>01 · 剪辑与声音整合</strong><span>在 DaVinci Resolve 中组织虚幻引擎镜头、AI生成片段、旁白、环境声、音乐和中英双语字幕，统一整部短片的节奏与视觉风格。</span></figcaption>
            </figure>
            <figure className="guixi-process-card">
              <img loading="lazy" src="/images/guixi-unreal-scene.png" alt="《归曦计划》在虚幻引擎中搭建的工业科幻场景与灯光" />
              <figcaption><strong>02 · UE5场景搭建</strong><span>搭建工业科幻发射基地，调整资产、灯光和空间氛围，并使用虚拟摄像机设计构图与运动路径。</span></figcaption>
            </figure>
            <figure className="guixi-process-card">
              <img loading="lazy" src="/images/guixi-ai-generation-library.png" alt="《归曦计划》AI视频生成素材库，包含火箭、宇航员和废土场景" />
              <figcaption><strong>03 · AI视频生成</strong><span>围绕火箭升空、宇航员行动、基地内部和末日废土等叙事节点生成视频素材，再按镜头功能筛选可用版本。</span></figcaption>
            </figure>
            <figure className="guixi-process-card guixi-wide">
              <img loading="lazy" src="/images/guixi-ai-iterations.png" alt="《归曦计划》AI视频同类镜头的多日期迭代记录" />
              <figcaption><strong>04 · 多轮迭代筛选</strong><span>针对座舱、走廊、宇航员和发射镜头持续调整并保留多个版本，从运动稳定性、主体一致性和画面衔接三个方面选择最终素材。</span></figcaption>
            </figure>
          </div>
          </div>
        </div>
      </details>

        </div>
      </details>

      <details className="portfolio-fold portfolio-light corporate-section" id="corporate">
        <summary className="portfolio-fold-summary shell">
          <div><span>商业交付 / 活动记录 / 课程影像</span><h2>企业项目</h2></div>
          <p>安恒信息年会 MV、国贸数字线下课程快闪与完整录播</p>
          <b aria-hidden="true">展开</b>
        </summary>
        <div className="portfolio-fold-content shell">
          <div className="corporate-projects">
            <article className="corporate-grid">
              <div className="corporate-visual">
                <img loading="lazy" src="/images/dbappsecurity-annual-mv-edit.png" alt="安恒信息年会《孤勇者》优秀员工献唱版MV剪辑工程截图" />
                <span>DAVINCI RESOLVE EDITING TIMELINE</span>
              </div>
              <div className="corporate-copy">
                <p className="project-number">PROJECT 01</p>
                <h3>安恒信息年会<br />《孤勇者》MV</h3>
                <p className="corporate-lead">优秀员工献唱版本 · 年会人物影像 · 后期制作</p>
                <p>围绕优秀员工献唱《孤勇者》的年会主题，将演唱素材、员工工作影像、年度表彰画面与歌词字幕统一编排，形成兼具人物荣誉感和现场感染力的企业MV。</p>
                <div className="corporate-points">
                  <p><strong>剪辑结构</strong>依据歌曲段落与情绪推进组织人物出场、工作纪实和荣誉画面。</p>
                  <p><strong>视觉包装</strong>完成多层素材合成、歌词字幕、姓名信息与年会主视觉的统一呈现。</p>
                  <p><strong>节奏控制</strong>通过密集多轨时间线协调画面切换、文字动画和音乐节拍。</p>
                </div>
                <div className="early-tags"><span>企业年会</span><span>人物MV</span><span>多轨剪辑</span><span>字幕包装</span><span>DaVinci Resolve</span></div>
              </div>
            </article>
            <article className="corporate-grid corporate-reverse">
              <div className="corporate-visual corporate-video">
                <img src="/images/guomao-course-poster.jpg" alt="国贸数字线下课程快闪视频封面" />
                <span>OFFLINE COURSE FLASH RECAP · 1:04</span>
              </div>
              <div className="corporate-copy">
                <p className="project-number">PROJECT 02</p>
                <h3>国贸数字<br />线下课程影像</h3>
                <p className="corporate-lead">课程快闪 · 全程录播 · 线下培训记录</p>
                <p>为国贸数字线下课程同时制作传播型快闪与资料型整课录播：快闪以讲师、课堂内容、学员学习和互动辅导为主要节点，快速呈现课程氛围；录播则完整保存授课过程，满足后续回看与内部复用。</p>
                <div className="corporate-points">
                  <p><strong>双重交付</strong>一条约1分钟课程快闪负责对外展示，一套完整录播负责内容留存。</p>
                  <p><strong>现场覆盖</strong>记录讲师授课、投屏内容、学员听课实操与助教答疑，形成完整课堂流程。</p>
                  <p><strong>品牌收束</strong>通过课程名称、讲师信息与GM·DIGITAL品牌画面建立项目识别。</p>
                </div>
                <div className="early-tags"><span>课程快闪</span><span>整课录播</span><span>线下活动</span><span>课堂纪实</span><span>品牌露出</span></div>
              </div>
            </article>
          </div>
        </div>
      </details>

      <details className="portfolio-fold portfolio-light" id="official">
        <summary className="portfolio-fold-summary shell">
          <div><span>公开发布与署名证据</span><h2>官方渠道采用</h2></div>
          <p>4 组官方采用案例 · 摄影 / 剪辑署名可核验</p>
          <b aria-hidden="true">展开</b>
        </summary>
        <div className="portfolio-fold-content shell">
          <div className="official-grid">
          {officialShots.map(([image, title, role], index) => (
            <a href={officialLinks[index]} target="_blank" rel="noreferrer" className="official-card" key={title}>
              <img loading="lazy" src={image} alt={`${title}官方视频截图`} />
              <div><h3>{title}</h3><p>{role}</p><span>查看官方视频 ↗</span></div>
            </a>
          ))}
        </div>
        <div className="proof-strip">
          <img loading="lazy" src="/images/official-credit-1.png" alt="官方视频摄影剪辑署名截图一" />
          <img loading="lazy" src="/images/official-credit-2.png" alt="官方视频摄影剪辑署名截图二" />
          <div><strong>署名证据</strong><p>官方成片片尾明确标注“摄影 高一嘉 / 剪辑 高一嘉”。</p></div>
          </div>
        </div>
      </details>

      <section className="home-contact" id="contact">
        <div className="contact-hero shell">
          <div className="contact-heading">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>一起让创意落地。</h2>
            <p>如果你正在寻找能够独立完成策划、拍摄、剪辑和复盘的视频创作者，欢迎通过以下方式联系我。</p>
          </div>
          <div className="contact-panel">
            <p className="panel-label">联系方式</p>
            <a href="mailto:546373816@qq.com" className="contact-row">
              <span>邮箱</span><strong>546373816@qq.com</strong><b>写邮件 ↗</b>
            </a>
            <a href="tel:18358268768" className="contact-row">
              <span>电话</span><strong>18358268768</strong><b>拨打 ↗</b>
            </a>
            <div className="contact-note"><span>求职方向</span><p>创意与设计专员（视频方向）<br />短视频内容策划与制作 / 新媒体视频运营</p></div>
            <div className="contact-note"><span>意向城市</span><p>杭州 / 宁波</p></div>
          </div>
        </div>
      </section>

      <footer className="simple-footer"><div className="shell">高一嘉 · 视频内容策划 / 拍摄 / 剪辑 / 运营</div></footer>
    </main>
  );
}


