# Grow-Kit 项目需求文档

## 📋 项目概述

| 项目 | 描述 |
|------|------|
| **项目名称** | Grow-Kit |
| **项目类型** | 大麻种植设备与包装产品电商展示平台 |
| **商业模式** | B2B 询盘型（企业级批发业务） |
| **目标市场** | 英文市场（特定行业用户） |
| **产品规模** | 10-50 个产品 |
| **设计风格** | 极简现代 |

---

## 🎯 核心目标

打造一个专业、简洁、高效的大麻种植设备与包装产品 B2B 展示与询盘平台，为企业客户提供优质的产品浏览和询价服务。

---

## 🎨 设计需求

### 视觉风格
- **风格定位**：极简现代
- **核心元素**：
  - 大量留白，突出产品
  - 清晰的视觉层次
  - 自然、生态的配色方案
  - 高质量产品图片展示

### 交互体验
- ✅ 响应式设计（网页端优先）
- ✅ 暗色模式支持
- ✅ 流畅的动画效果
- ✅ 直观的导航结构

---

## ⚙️ 功能需求

### 核心功能模块

#### 1. 产品展示系统
- [ ] 产品列表页（网格/列表切换）
- [ ] 产品详情页
- [ ] 产品分类筛选
- [ ] 产品搜索功能
- [ ] 产品图片轮播
- [ ] 相关产品推荐

##### 产品分类体系

**一、大麻植物种植（Cannabis Plant Cultivation）**
- **光照与控制（Lighting & Control）**
  - 生长灯（Grow Lights）
  - 灯光控制器（Light Controllers）
  - 定时器（Timers）
  - 反光材料（Reflective Materials）

- **通风、环境控制与气候（Ventilation, Environment Control & Climate）**
  - 排风扇（Exhaust Fans）
  - 碳滤器（Carbon Filters）
  - 管道与配件（Ducting & Accessories）
  - 气候控制器（Climate Controllers）
  - 温湿度计（Thermo-Hygrometers）

- **栽培介质与容器（Growing Media & Containers）**
  - 种植盆（Grow Pots）
  - 种植袋（Grow Bags）
  - 培养土（Soil & Soilless Mix）
  - 水培系统（Hydroponic Systems）

- **营养与水质管理（Nutrients & Water Management）**
  - 营养液（Nutrients）
  - 添加剂（Additives）
  - pH 测试与调节（pH Testing & Adjustment）
  - 灌溉系统（Irrigation Systems）
  - 水泵与过滤器（Water Pumps & Filters）

- **育苗与繁殖（Propagation & Breeding）**
  - 育苗盘（Propagation Trays）
  - 克隆设备（Cloning Equipment）
  - 种子发芽用品（Seed Germination Supplies）
  - 繁殖帐篷（Propagation Tents）

- **植株支撑与训练（Plant Support & Training）**
  - 植物支架（Plant Stakes）
  - 剪枝工具（Pruning Tools）
  - 训练夹与绑带（Training Clips & Ties）
  - 整枝网（Trellis Netting）

- **植株后期处理（Post-Harvest Processing）**
  - 干燥架（Drying Racks）
  - 修剪剪刀（Trimming Scissors）
  - 修剪机（Trimming Machines）
  - 固化罐（Curing Jars）
  - 存储容器（Storage Containers）

**二、大麻成品包装（Cannabis Product Packaging）**
- **包装容器（Packaging Containers）**
  - 玻璃罐（Glass Jars）
  - 塑料容器（Plastic Containers）
  - 密封袋（Sealable Bags）
  - 儿童安全包装（Child-Resistant Packaging）

- **标签与标识（Labels & Branding）**
  - 产品标签（Product Labels）
  - 定制贴纸（Custom Stickers）
  - 品牌包装（Branded Packaging）

- **辅助配件（Accessory Packaging）**
  - 烟具包装（Smoke Accessories Packaging）
  - 零食包装（Edibles Packaging）
  - 浓缩物容器（Concentrates Containers）

#### 2. 询盘系统
- [ ] 产品询价表单
- [ ] 批量询价功能
- [ ] 询价单管理
- [ ] 邮件通知系统
- [ ] 客户信息收集
- [ ] 需求沟通记录

#### 3. 内容管理
- [ ] 博客/资讯板块
- [ ] 文章列表与详情
- [ ] 内容分类

#### 3. 用户交互
- [ ] 联系表单
- [ ] 消息通知

### 技术需求

- ✅ **多语言支持**：英文（主）
- ✅ **SEO 优化**：
  - 语义化 HTML
  - Meta 标签优化
  - 结构化数据
  - Sitemap 生成
- ✅ **性能优化**：
  - 图片懒加载
  - 代码分割
  - 静态生成（SSG）

---

## 🛠️ 技术栈建议

### 前端框架
- **Astro** (已配置) - 静态站点生成
- **React/Vue** - 交互组件（按需引入）

### UI/样式
- **Tailwind CSS** - 原子化 CSS
- 或 **Nuxt UI / DaisyUI** - UI 组件库

### 功能扩展
- **astro-i18n** - 国际化
- **@astrojs/sitemap** - SEO 站点地图
- **astro-icon** - 图标系统

### 数据管理
- **Markdown/MDX** - 内容管理（博客）
- **JSON/YAML** - 产品数据
- 或集成 Headless CMS（如 Sanity、Contentful）

### 询盘功能
- **Formspree / Formspark** - 表单处理
- **EmailJS** - 邮件发送
- 或集成 CRM 系统（如 HubSpot、Salesforce）

---

## 📅 开发优先级

### 阶段一：基础框架（Week 1）
1. 项目架构搭建
2. 全局样式系统（暗色模式）
3. 响应式布局组件
4. 基础页面结构

### 阶段二：核心功能（Week 2-3）
1. 产品展示系统
2. 分类与搜索
3. 产品详情页

### 阶段三：交互功能（Week 3-4）
1. 询盘表单集成
2. 联系表单
3. 博客系统

### 阶段四：优化上线
1. SEO 优化
2. 性能优化
3. 多语言支持
4. 测试与部署

---

## 📂 建议目录结构

```
grow-kit/
├── src/
│   ├── components/
│   │   ├── common/          # 通用组件
│   │   ├── product/         # 产品相关组件
│   │   │   ├── ProductCard.astro
│   │   │   ├── ProductGrid.astro
│   │   │   ├── ProductFilter.astro
│   │   │   └── CategoryNav.astro
│   │   ├── blog/            # 博客组件
│   │   └── ui/              # UI 基础组件
│   ├── layouts/
│   │   ├── Layout.astro     # 主布局
│   │   └── ProductLayout.astro
│   ├── pages/
│   │   ├── index.astro                # 首页
│   │   ├── products/
│   │   │   ├── index.astro            # 产品总览
│   │   │   ├── cultivation/           # 大麻植物种植
│   │   │   │   ├── index.astro
│   │   │   │   ├── lighting/          # 光照与控制
│   │   │   │   ├── ventilation/       # 通风与环境控制
│   │   │   │   ├── growing-media/     # 栽培介质与容器
│   │   │   │   ├── nutrients/         # 营养与水质管理
│   │   │   │   ├── propagation/       # 育苗与繁殖
│   │   │   │   ├── plant-support/     # 植株支撑与训练
│   │   │   │   └── post-harvest/      # 植株后期处理
│   │   │   ├── packaging/             # 大麻成品包装
│   │   │   │   ├── index.astro
│   │   │   │   ├── containers/        # 包装容器
│   │   │   │   ├── labels/            # 标签与标识
│   │   │   │   └── accessories/       # 辅助配件
│   │   │   └── [slug].astro           # 产品详情页
│   │   ├── blog/                      # 博客页
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── contact.astro              # 联系页
│   ├── data/
│   │   ├── products/                  # 产品数据（按分类）
│   │   │   ├── cultivation/
│   │   │   │   ├── lighting.json
│   │   │   │   ├── ventilation.json
│   │   │   │   ├── growing-media.json
│   │   │   │   ├── nutrients.json
│   │   │   │   ├── propagation.json
│   │   │   │   ├── plant-support.json
│   │   │   │   └── post-harvest.json
│   │   │   └── packaging/
│   │   │       ├── containers.json
│   │   │       ├── labels.json
│   │   │       └── accessories.json
│   │   └── categories.json            # 分类元数据
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── helpers.ts
└── public/
    └── images/
        ├── products/                  # 产品图片（按分类）
        └── blog/                      # 博客图片
```

---

## 📝 备注

- **开发策略**：使用模板主题快速上线，后续迭代优化
- **时间规划**：无明确时间表，按阶段推进
- **设计资源**：需要从零设计（可参考行业优秀案例）

---

*文档创建时间：2026-04-05*
*最后更新：2026-04-05*
