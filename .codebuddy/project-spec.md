# Grow-Kit 项目需求文档

## 📋 项目概述

| 项目 | 描述 |
|------|------|
| **项目名称** | Grow-Kit |
| **项目类型** | 专业植物生长灯 B2B 批发平台 |
| **商业模式** | B2B 询盘型（企业级批发业务） |
| **目标市场** | 全球市场（英文为主） |
| **初期产品** | 植物生长灯（LED、HPS、CMH 等全品类） |
| **设计风格** | 极简现代、专业商务 |

---

## 🎯 核心目标

初期专注于植物生长灯领域，打造专业的 B2B 批发平台，为企业客户提供高质量的植物照明解决方案。系统架构设计需考虑后期扩展性，便于引入更多品类（如通风设备、种植容器、营养液等）。

---

## 🎨 设计需求

### 视觉风格
- **风格定位**：极简现代、专业商务
- **核心元素**：
  - 大量留白，突出产品专业性
  - 清晰的视觉层次
  - 绿色生态 + 专业科技的配色方案
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
- [x] 产品列表页（网格展示）
- [x] 产品详情页
- [x] 产品分类筛选
- [ ] 产品搜索功能
- [ ] 产品图片轮播
- [ ] 相关产品推荐

##### 产品分类体系（初期）

**植物生长灯（Grow Lights）**
- **LED 生长灯（LED Grow Lights）**
  - 全光谱 LED 灯（Full Spectrum LED）
  - 大功率 LED 灯（High Power LED）
  - LED 灯条（LED Strip Lights）
  - LED 灯板（LED Panel Lights）

- **HPS/MH 生长灯（High Pressure Sodium / Metal Halide）**
  - HPS 灯泡（HPS Bulbs）
  - MH 灯泡（MH Bulbs）
  - HPS/MH 套装（HPS/MH Kits）

- **CMH/LEC 生长灯（Ceramic Metal Halide）**
  - CMH 灯泡（CMH Bulbs）
  - CMH 套装（CMH Kits）

- **荧光生长灯（Fluorescent Grow Lights）**
  - T5 生长灯（T5 Grow Lights）
  - T8 生长灯（T8 Grow Lights）
  - CFL 生长灯（CFL Grow Lights）

- **生长灯配件（Grow Light Accessories）**
  - 灯具控制器（Light Controllers）
  - 定时器（Timers）
  - 悬挂套件（Hanging Kits）
  - 反光罩（Reflectors）

##### 未来扩展品类（预留架构）

**通风与环境控制（Ventilation & Climate Control）**
- 待后期扩展

**种植容器与介质（Growing Media & Containers）**
- 待后期扩展

**营养与水质管理（Nutrients & Water Management）**
- 待后期扩展

**育苗与繁殖（Propagation & Breeding）**
- 待后期扩展

**植物支撑与训练（Plant Support & Training）**
- 待后期扩展

**后期处理设备（Post-Harvest Processing）**
- 待后期扩展

**包装解决方案（Packaging Solutions）**
- 待后期扩展

#### 2. 询盘系统
- [x] 产品询价表单
- [ ] 批量询价功能
- [ ] 询价单管理
- [ ] 邮件通知系统
- [ ] 客户信息收集
- [ ] 需求沟通记录

#### 3. 内容管理
- [ ] 博客/资讯板块
- [ ] 文章列表与详情
- [ ] 内容分类

#### 4. 用户交互
- [x] 联系表单
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

## 🛠️ 技术栈

### 前端框架
- **Astro 6** - 静态站点生成
- **React** - 交互组件（按需引入）

### UI/样式
- **Tailwind CSS** - 原子化 CSS

### 功能扩展
- **astro-i18n** - 国际化（预留）
- **@astrojs/sitemap** - SEO 站点地图

### 数据管理
- **JSON** - 产品数据（可扩展结构）
- **TypeScript** - 类型定义

### 询盘功能
- **Formspree / Formspark** - 表单处理（待集成）

---

## 📊 数据结构设计（可扩展）

### 产品分类结构（categories.json）

```json
{
  "categories": {
    "grow-lights": {
      "id": "grow-lights",
      "name": "Grow Lights",
      "slug": "grow-lights",
      "description": "Professional grow lighting solutions",
      "status": "active",
      "icon": "light",
      "subcategories": {
        "led-grow-lights": {
          "id": "led-grow-lights",
          "name": "LED Grow Lights",
          "slug": "led",
          "description": "Energy-efficient LED lighting solutions"
        },
        "hps-mh-lights": {
          "id": "hps-mh-lights",
          "name": "HPS/MH Grow Lights",
          "slug": "hps-mh",
          "description": "Traditional high-intensity discharge lights"
        }
      }
    },
    "ventilation": {
      "id": "ventilation",
      "name": "Ventilation & Climate Control",
      "slug": "ventilation",
      "status": "coming-soon",
      "icon": "fan",
      "description": "Coming soon"
    }
  }
}
```

### 产品数据结构（products/*.json）

```json
{
  "id": "led-1000w-full-spectrum",
  "name": "LED Grow Light 1000W Full Spectrum",
  "slug": "led-grow-light-1000w",
  "category": "grow-lights",
  "subcategory": "led-grow-lights",
  "status": "active",
  "images": {
    "main": "/images/products/led-1000w-main.jpg",
    "gallery": []
  },
  "specifications": {
    "wattage": "1000W",
    "spectrum": "Full Spectrum",
    "coverage": "4x4 ft",
    "voltage": "AC 100-240V"
  },
  "features": [],
  "description": "Professional-grade LED grow light...",
  "isFeatured": true,
  "metaTitle": "",
  "metaDescription": ""
}
```

---

## 📅 开发优先级

### 阶段一：重构核心（当前）
1. ✅ 简化产品分类，聚焦植物生长灯
2. ✅ 重构数据结构，确保可扩展性
3. ✅ 更新导航和路由结构
4. ✅ 优化首页内容

### 阶段二：产品完善
1. [ ] 完善产品详情页
2. [ ] 添加产品规格展示
3. [ ] 实现产品搜索功能
4. [ ] 添加产品对比功能

### 阶段三：询盘优化
1. [ ] 集成询盘表单服务
2. [ ] 优化询盘流程
3. [ ] 添加批量询价功能

### 阶段四：内容与扩展
1. [ ] 博客系统
2. [ ] 产品知识库
3. [ ] 准备引入新品类

---

## 📂 目录结构

```
grow-kit/
├── src/
│   ├── components/
│   │   ├── common/              # 通用组件
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── ThemeToggle.astro
│   │   ├── product/             # 产品相关组件
│   │   │   ├── ProductCard.astro
│   │   │   ├── ProductGrid.astro
│   │   │   ├── ProductFilter.astro
│   │   │   └── CategoryNav.astro
│   │   └── ui/                  # UI 基础组件
│   ├── layouts/
│   │   ├── Layout.astro         # 主布局
│   │   └── ProductLayout.astro
│   ├── pages/
│   │   ├── index.astro          # 首页
│   │   ├── products/            # 产品页面
│   │   │   ├── index.astro      # 产品总览
│   │   │   ├── grow-lights/     # 植物生长灯
│   │   │   │   ├── index.astro
│   │   │   │   ├── led/         # LED 生长灯
│   │   │   │   ├── hps-mh/      # HPS/MH 生长灯
│   │   │   │   ├── cmh/         # CMH 生长灯
│   │   │   │   ├── fluorescent/ # 荧光生长灯
│   │   │   │   └── accessories/ # 配件
│   │   │   └── [slug].astro     # 产品详情页
│   │   ├── contact.astro        # 联系页
│   │   ├── custom.astro         # 定制服务
│   │   └── faq.astro            # 常见问题
│   ├── data/
│   │   ├── products/            # 产品数据
│   │   │   └── grow-lights/     # 生长灯产品
│   │   │       ├── led.json
│   │   │       ├── hps-mh.json
│   │   │       ├── cmh.json
│   │   │       ├── fluorescent.json
│   │   │       └── accessories.json
│   │   └── categories.json      # 分类元数据
│   ├── assets/                  # 静态资源
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── helpers.ts
└── public/
    └── images/
        └── products/            # 产品图片
```

---

## 🔄 后期扩展策略

### 引入新品类的步骤

1. **更新分类数据**
   - 在 `categories.json` 中添加新分类
   - 将 `status` 从 `"coming-soon"` 改为 `"active"`

2. **创建产品数据**
   - 在 `src/data/products/` 下创建新分类文件夹
   - 添加产品 JSON 文件

3. **创建页面路由**
   - 在 `src/pages/products/` 下创建对应路由

4. **更新导航**
   - Header 组件会自动读取 `categories.json`
   - 显示新增分类（状态为 active）

5. **无需修改其他代码**
   - 系统架构支持自动扩展

---

## 📝 备注

- **开发策略**：聚焦单一品类，快速上线，后期迭代扩展
- **时间规划**：按阶段推进
- **设计资源**：极简现代风格，专业商务定位

---

*文档创建时间：2026-04-05*
*最后更新：2026-04-07*
*版本：2.0 - 重构版（聚焦植物生长灯）*
