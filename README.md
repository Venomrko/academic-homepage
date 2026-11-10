# Fumadocs 学术个人主页

本地原型，采用 Next.js、Fumadocs UI、Fumadocs MDX 和 Tailwind CSS。
About、Publications 和 Projects 已根据共享 CV、论文原文及面试材料更新为 Ren Zhuang 的个人信息，包含研究方向、动态、荣誉、七篇论文和三个真实项目。Blog 已加入五篇英文参会旅行随笔，以及按作者指定分组拆开的三篇英文学术文章：ICML + IJCAI + NeurIPS、SMC + CogSci、IJCNN + ICONIP；三篇学术文章各有独立卡片和文章页，按卡片中最后一场会议的日期倒序排列。文风参考用户提供的《The Economist Style Guide》，冲绳篇已纳入《巡礼冲绳》的行程记录。原有三篇演示文章保留为未发布草稿。CV 导航直接打开用户提供的 PDF。内容依据见 `docs/about-content.md`、`docs/publications-content.md`、`docs/projects-content.md` 和 `docs/blog-content.md`；旅行写作的依据与行程版本说明见 `docs/blog-travel-sources.md`。

## 本地运行

需要 Node.js 22 或更高版本。在本目录运行：

```powershell
npm install
npm run dev
```

浏览器打开 [http://127.0.0.1:3000](http://127.0.0.1:3000)。如果已有预览占用 3000，可以使用：

```powershell
npm run dev -- --port 3001
```

生产版本检查与预览：

```powershell
npm run build
npm start
```

启动脚本在当前进程关闭 Next.js 遥测，避免 Windows 重定向用户目录中的配置写入问题。

## 页面结构

| 地址 | 内容 |
| --- | --- |
| `/` | About 首页，含个人介绍、Research 和 News & Updates |
| `/publications` | 左侧年份／venue 筛选，标题右侧搜索，右栏 Services & Travel；按年份排列论文，筛选、摘要与引用带动画 |
| `/projects` | 三列等宽真实项目卡片，每项含年份、介绍、主题插画及标签 |
| `/projects/[slug]` | 项目时间、角色、机构、地点与贡献；按资料提供奖项及相关论文 |
| `/blog` | 三列卡片；个人随笔入口跨两列，其他卡片为学术和工作文章 |
| `/blog/life` | 生活、阅读和日常想法等个人随笔卡片 |
| `/blog/[slug]` | MDX 文章，含目录、代码高亮和表格 |
| `/cv` | 网页版 CV，含教育、研究经历、论文、项目、荣誉及技能，支持查看更新日期和下载 PDF |
| `/api/search` | 博客全文搜索 |

默认跟随系统浅色／深色主题。导航中的主题按钮从左到右是太阳、月亮和系统图标，分别选择浅色、深色和跟随系统，并保存选择。手机上在右上角菜单中显示。两种主题均有桌面和手机布局。

首页浅色和深色主题均显示颗粒太阳，颜色随主题变化。太阳本体使用从原有着色器无损导出的 2.1KB 透明纹理，并在服务端页面中预加载；它从首次显示开始就是同一颗太阳，不再先展示形状不同的占位图再替换。颗粒光晕单独延迟加载并淡入，浏览器不支持 WebGL 时使用静态光晕。顶部姓名为 18px 粗体，旁边及标签页图标均为 `#FF5522` 星星，点击导航星星可触发短暂的星光和页面动效，其余导航文字为 16px 常规字重；浅色主题中导航文字为黑色，深色主题中为浅色，悬停和选中时显示细下划线。通过顶部导航切换页面时，内容淡入并轻微上移，导航和页脚保持稳定。系统启用“减少动态效果”时，切页动画关闭，太阳保留静态外观，光晕着色器不加载。

全站字体由 Next.js `next/font/local` 直接加载 `public/fonts/` 下的 Anthropic Sans 和 Serif WOFF2 本地可变字体，实现零外链依赖与离线容灾；启用自动光学尺寸调整，斜体由浏览器合成。

生产构建会提前生成首页、论文列表、项目和博客页面，让浏览器先收到可显示的 HTML。站内链接使用 Next.js Link，在生产模式中支持预加载与局部切页；共享的导航不需要每次重新加载。字体采用 `font-display: swap`，下载过程中先显示备用字体；论文配图接入 Next.js Image，支持懒加载和明确尺寸。太阳光晕独立加载，离开视口后暂停动画，并限制绘制像素数。`3001` 为开发服务，包含编译和调试开销；`3000` 的生产预览更接近上线后的表现。上线后的 CDN、缓存策略和字体进一步压缩仍需按实际部署配置。

Fumadocs 实际提供了 HomeLayout 导航及手机菜单、RootProvider 主题和搜索上下文、主题切换组件、MDX 内容编译、文章元信息与地址加载、自动提取目录、Markdown 内容组件及全文搜索 API。博客内容来自 `content/blog/*.mdx`，Ctrl+K 可打开全文搜索。首页 News 搜索、Research、荣誉、论文列表和个人随笔分区为本站定制功能。

首页采用宽版布局：无边框的太阳背景、姓名下方的 Bio、右下角的标语。Publications、Projects、Blog 及个人随笔列表与首页共用 1400px 最大内容宽度，桌面两侧总留白为 96px，中等屏幕为 64px，手机为 40px；页脚也使用同一宽度。博客详情页保留 800px 阅读宽度，项目详情正文为 760px。Research 和 News & Updates 的标题统一使用 Anthropic Serif Display 和同一字号，末尾保留异色圆点，两区块之间有细分隔线。Research 参考 Anthropic 研究方向的文字排版：左对齐、无图标；按官网实测尺寸，方向名称为 19px 无衬线体、600 字重，正文为 15px Anthropic Serif Display、21px 行高，两者间距 8px。桌面平铺四个研究方向，中等屏幕两列，手机上纵向排列。第四项 Learning & generalization 为新增示例，可与其他个人资料统一替换。

Publications、Projects、Blog 和详情页的主标题沿用首页字体：38px Anthropic Serif Display（手机为 32px）。论文标题及文章小标题为 18px 无衬线体，文章正文为 16px Anthropic Serif Display。Projects 与 Blog 的卡片参考 [Claude 资源页](https://claude.com/resources/articles)：16px 圆角、细边框、淡底色、带分隔线的顶部信息栏、常规字重的衬线标题和底部分类信息。普通卡片标题为 24px，跨列卡片为 36px（手机为 30px），摘要为 15px 无衬线体。桌面三列，项目卡片各占一列，个人随笔入口跨两列；三个项目均在介绍下方展示对应主题的 SVG 插画，标题与正文保持完整卡片宽度，简介完整显示。中等屏幕两列，手机单列，整张卡片均可点击并支持键盘聚焦。字号在 `app/global.css` 中统一设置。Publications 标题下不显示介绍文字，条目分隔线两侧采用更紧凑的间距。

Publications 桌面采用左侧筛选、中间论文列表、右侧 Services & Travel 的布局。左侧使用 By year / By venue 分段切换；切换块在桌面宽 180px，手机宽 220px；筛选项为 14px Anthropic Serif Display，小于 16px 正文字号，避免侧栏显得过重。切换时底色滑动、选项下划线展开，筛选结果淡入并轻微上移；系统开启减少动态效果时直接切换。年份和 venue 选项从论文数据自动生成，venue 优先显示缩写，未提供缩写时使用完整名称。两个条件可叠加，并在左侧显示已选条件和 Clear filters。搜索框位于 Publications 标题右侧、Services & Travel 及竖向分隔线左边，右边缘与论文列表对齐；与首页 News & Updates 共用 294px 宽、44px 高、12px 圆角的样式。搜索匹配标题、作者、年份、完整 venue、缩写、摘要及附加标签，忽略大小写，多个关键词需同时匹配，并与年份／venue 筛选联动。清除按钮和 Escape 仅清空搜索；Clear filters 仅清除筛选；无匹配结果时提供 Reset search and filters，一次恢复全部条目。搜索全部在本地执行，不发出额外网络请求。结果数量仅通过屏幕阅读器提示，不显示条目计数。Services & Travel 沿用首页荣誉栏的 20px 常规衬线标题、15px 无衬线条目标题及 11px 衬线年份与补充信息。右栏将五项审稿服务及六次参会合并为时间倒序列表，每项先显示 venue 与年份，再显示 Reviewer／Attend 及已知日期，地点另起一行；只有年份的审稿记录置于同年有具体日期的记录之后。来源说明不出现在条目中，NeurIPS 2026 悉尼站的 Upcoming 使用 #FF3377 背景，沿用 venue 标签的白色文字与尺寸。数据在 `lib/site-data.ts` 的 `servicesAndTravel` 中维护。屏幕宽度不超过 1200px 时该栏移至论文列表下方，不超过 1000px 时筛选器也移至列表上方；手机搜索框移至标题下方并占满宽度，其余内容上下排列。交互在 `components/publication-explorer.tsx` 中实现，默认完整论文内容仍由服务器输出。

论文完整会议名按官网核对届数，序数后缀使用上标，例如 40th、43rd；SMC 和 IJCNN 沿用官网未编号的名称。会议名末尾不再重复年份，年份由左侧年度标记显示。名称与核对来源见 `docs/publications-content.md`，显示格式不改动 BibTeX 元数据。

Services & Travel 与 Publications 标题位于同一行，沿用首页 Honors & Awards 的 20px 常规衬线标题、10px 顶部间距、35px 标题下方间距与异色圆点，随页面一起滚动，不采用独立吸顶。资源按钮为 22px 最小高度、10px 字号，小于上方 venue 标签的 24px 高度与 11px 字号；取消固定最小宽度，左右内边距收至 7px。右栏按左侧论文列表的实际高度决定是否折叠，默认仅显示能完整放下的条目，并为 See more 按钮预留空间；内容未超出时不显示按钮。点击 See more 展开全部内容，Show less 收起，带高度过渡动画。筛选论文、展开或收起摘要及引用、字体加载和窗口大小变化后自动重新计算；右栏展开不会改变计算依据中的论文高度。移到列表下方的平板与手机布局默认最多显示 6 条，仅在超过 6 条时提供展开按钮。折叠条目对键盘与屏幕阅读器隐藏；开启减少动态效果时关闭展开动画。

Publications 的年度分隔线横跨年份与文章区域，左端与年份对齐；同一年内的文章分隔线仅在文章区域显示。分隔线止于中间论文列表，不延伸到右侧栏。每篇文章可配置右侧配图，桌面右边缘与文章列表对齐；手机上配图移到文字下方并保持右对齐。当前七张配图均来自论文原图，保存在 `public/images/publications/`。展示框统一为 3:2，桌面及手机宽 260px、平板宽 240px，图像保持原比例；较宽的 TGR、GoGI-Skip、Twin Prompt 图选取完整方法面板，LSPO 使用结果图。在 `lib/site-data.ts` 的论文条目中填写可选的 `image: { src, alt, width, height }`，其中尺寸对应原始图片、`alt` 描述图像内容；省略 `image` 时条目不留空的图片栏。

Publications 不再显示三个分类筛选标签。原来的 Sample entry 改为可选的 `venueShort`（如 ICML、NeurIPS 或期刊缩写），`venue` 填完整会议或期刊名称。会议或期刊缩写使用 `#827DBD` 实底标签，其后可追加多个 `distinctions`，例如 `[{ label: 'Oral', kind: 'oral' }, { label: 'Outstanding Paper', kind: 'award' }]`；附加标签统一使用 `#D97757`。文字可自由填写（如 Spotlight、Best Paper、Honorable Mention），省略数组时不显示；窄屏自动换行，深浅主题均保留指定底色并使用白色文字。资源按钮按 ABS、ARXIV、PDF、CODE、WEBSITE、CITATION 的顺序横向排列，窄屏自动换行。`abstract` 和 `bibtex` 均为可选：提供内容时显示对应按钮，点击可分别展开和收起，带高度及淡入淡出动画；系统开启减少动态效果时直接切换。ABS 正文为 14px 衬线体，使用与引用相同的细边框及浅底色；Copy 按钮与引用首行对齐，长代码在框内横向滚动。引用仍支持复制 BibTeX，收起后面板内容不可被键盘聚焦。外部资源在 `links: { arxiv, pdf, code, website }` 中按需填写完整地址，省略或留空时隐藏对应按钮，点击在新标签页打开。当前展示七篇真实论文，按 CV 的会议年份分组，作者列表突出 Ren Zhuang，并按 `correspondingAuthors` 字段为通讯作者添加右上角 † 符号；仅 IJCAI 2026 与 SMC 2025 标注 Oral。七张配图均来自本地论文原图。NeurIPS、ICML 保留 arXiv 与 PDF 入口及预印本引用，其余论文提供 DOI 或 eScholarship 正式出版入口；只有论文中确认的资源才显示按钮。摘要和 BibTeX 已填入真实内容，示例免责声明已移除。

News & Updates 采用 Anthropic Publications 的简洁列表样式，按日期、类别和标题显示。每行可点击，悬停或键盘聚焦时，整行文字加深并显示细下划线。桌面上搜索框、列表分隔线与 See more 的右边缘对齐，右侧以细竖线分隔 Honors & Awards 栏。荣誉标题采用 20px 常规字重的 Anthropic Serif Display 并保留异色圆点，条目标题为 15px 无衬线体、1.3 倍行高；年份与授予机构为 11px 衬线体、1.4 倍行高，条目之间的间距已收紧。较窄屏幕上荣誉栏移至动态下方，分隔线改为横线。动态默认展示 10 行，点击 See more 展开余下动态；搜索框按日期、类别或标题即时筛选。荣誉按年份倒序，默认最多显示 6 条；只有实际总数超过 6 条且还有未显示的条目时才出现 See more，每次增加 6 条，并可用 Show less 收起。当左右两侧都有 See more 时，两个按钮高度均为 42px，底边对齐。荣誉栏已按 CV 填入五项真实记录，可在 `lib/site-data.ts` 的 `honors` 数组维护。

页面入口集中在顶部导航；首页没有重复的 Publications、CV 按钮。Email、GitHub、Google Scholar、ORCID 和 dblp 移至 Bio 下方、机构信息上方，以图标和短标签排列；顶部仅保留主题切换，页脚不显示邮箱。联系资料已按 CV 和用户提供的地址更新，ORCID 使用公开主页地址。导航搜索入口已移除；博客全文搜索仍可用 Ctrl+K（macOS 为 Command+K）打开。

Blog 标题下不显示介绍文字。“A space for life” 卡片在桌面三列网格中占两列，只保留分区名称，不显示首篇文章的标题或预览，点击进入 `/blog/life` 个人随笔卡片列表；其他单列卡片显示学术和工作文章，并在顶部显示发布日期、底部显示阅读时长。入口采用左侧标题、右侧原创“日常书桌”插画，手机上改为标题在上、插画在下。标题保持桌面 36px、手机 30px；图文组成最大 692px 的居中区域，间距缩至 28px，主体最小高度与普通卡片统一为 280px，箭头固定于卡片右下角。SVG 裁去外围空白，桌面最大宽度为 320px、手机为 240px，手机标题与插画之间不再保留固定高度的空区。插画以手绘线条描绘翻开的本子、咖啡杯与植物，使用淡紫、陶土色及橄榄绿；由 `components/life-journal-illustration.tsx` 内联绘制 SVG，颜色通过 CSS 跟随系统或手动主题，无图片请求和客户端主题判断。海浪与富士山图片已移除。学术文章优先按 `latestConferenceDate` 记录的最后一场会议日期倒序排列，未填写时使用写作日期；个人随笔优先按旅行月份倒序排列。所有文章仍使用独立的 MDX 文件和地址，增加文章后自动进入对应分区。

三篇学术文章面向非专业读者，采用适合口播的科普叙事。每篇以具体问题切入，围绕至多三个核心想法展开，解释方法直觉、实验依据与局限，并链接到对应论文。卡片简介完整显示。正文约 950–980 个英文词，阅读时长为 5 分钟；完整论文核对依据见 `docs/blog-research-sources.md`。

## 替换为个人资料

- `lib/site-data.ts`：姓名、身份、机构、邮箱、GitHub、Google Scholar、ORCID、dblp、CV PDF 地址、简介、研究方向、动态、荣誉、学术服务与出行、论文和项目。动态、荣誉和论文已对齐真实资料；Services & Travel 已按作者确认的会议审稿、参会经历及 ORCID 期刊审稿记录填写；会期和举办地已核对会议官网。
- `content/blog/*.mdx`：博客文章，文件名对应文章地址。
- `lib/layout.shared.tsx`：导航链接、主题按钮。
- `app/global.css`：主题色、排版、间距、手机布局和打印样式。
- `components/solar-artwork.tsx`：首页太阳的服务端结构和纹理预加载。
- `components/solar-glow.tsx`：单独加载的 Paper Shaders 颗粒光晕，主题切换和离屏暂停。
- `public/images/solar/`：太阳的透明纹理及来源记录。
- `app/(home)/template.tsx`：顶部导航切页时的内容入场动画。
- `components/research-showcase.tsx`：首页 Research 的方向名称和介绍。
- `components/news-updates.tsx`：首页动态的列表、搜索和展开功能。
- `components/honors-awards.tsx`：首页荣誉栏。
- `components/services-travel.tsx`：论文页的学术服务与出行侧栏。
- `components/profile-links.tsx`：Bio 下方的联系及学术档案链接。
- `public/fonts/`：官方资源中的 Anthropic Sans Display、Anthropic Serif Display 正体、斜体及不同字重，用于本地原型。
- `components/project-visual.tsx`：项目示意图。

增加一篇文章时，可复制 `content/templates/life-post.mdx.example` 或 `content/templates/work-post.mdx.example` 到 `content/blog`，将文件名后缀改为 `.mdx`，然后填写：

```yaml
---
title: 文章标题
description: 一句话摘要
date: '2026-10-05'
category: Life
section: life
readingTime: 3 min
draft: true
---
```

其后直接写 Markdown。日期请填写实际发布日期，使用 `YYYY-MM-DD`；未设置独立的会议或旅行日期时，列表按发布日期倒序排列。`section: life` 将文章放入 `/blog/life` 个人随笔列表，可通过 Blog 顶部盒子进入；`section: work` 将文章放入学术和工作列表，省略 `section` 时也默认归入 `work`。`category` 是显示的分类名称，不受限制，例如 `Life`、`Reading`、`Travel`、`Research` 或中文分类均可。文件名不要使用 `life.mdx`，该地址已用于个人随笔列表。

学术分组文章可填写可选的 `latestConferenceDate: '2026-12-06'`，用组内最后一场会议的开幕日期作为排序依据；`date` 仍记录文章发布日期。

写作时保留 `draft: true`；改为 `draft: false` 后才会进入页面、文章地址和全文搜索。省略 `draft` 时默认发布。原有三篇示例已标为草稿，不在正式页面和搜索中显示。发布与分类说明见 `docs/blog-content.md`。

回顾过去的旅行时，可以添加可选的 `journeyDate: '2024-06'`，与实际成文日期 `date` 分开。个人随笔列表优先按旅行日期排序并显示，文章页标明成文日期。当前五篇旅行初稿按 IJCAI 2026、ICML 2026、ICONIP 2025、SMC 2025、IJCNN 2024 倒序排列；正文中的行程安排与已经确认的经历分开表述。

本地写作时运行 `npm run dev`，保存文章后预览会自动更新。当前内容保存在项目文件中；部署静态／生产版本时，需要重新构建以发布新增或修改的文章。

## 本地开发提示

保留 Next.js 的默认开发提示，便于发现真实错误。开发模式左下角的 Next.js 图标是开发工具入口；生产模式不显示它。

若 hydration 警告仅显示链接多出了 `data-sg-checked="1"`，来源已通过停用 Tampermonkey（油猴）后刷新得到确认：它运行的用户脚本提前修改了链接。项目代码及服务端 HTML 均未生成该属性；测试中，提前注入该属性会复现警告，移除注入后刷新正常。

在油猴中给相关脚本添加本地地址的用户排除规则，或在该脚本的 `==UserScript==` 元数据区加入下面一行，然后保存并刷新。该规则仅排除 `localhost` 和 `127.0.0.1`，包含任意端口的 HTTP / HTTPS 地址；其他网站仍可运行该脚本。

```js
// @exclude /^https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?(?:\/|$)/
```

保留正常的错误提示，不通过隐藏提示或对所有链接抑制 hydration 警告来处理注入。`app/layout.tsx` 的 `data-scroll-behavior="smooth"` 与全局 CSS 的平滑滚动设置对应，避免 Next.js 在切页时报告缺少滚动配置。

## 参考

- [Fumadocs](https://www.fumadocs.dev/)
- [HomeLayout](https://www.fumadocs.dev/docs/ui/layouts/home-layout)
- [Fumadocs MDX](https://www.fumadocs.dev/docs/mdx)
- [官网太阳实现](https://github.com/fuma-nama/fumadocs/blob/dev/apps/docs/app/(home)/page.client.tsx)
- [Paper Shaders](https://github.com/paper-design/shaders)
- [Anthropic 字体来源](https://www.anthropic.com/)
