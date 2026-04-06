# 容器宽度统一说明

## ✅ 已完成的调整

### 1. 全局容器宽度更新

**更新前：**
```css
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```
- 最大宽度：1280px
- 左右内边距：16px / 24px / 32px

**更新后：**
```css
.container-custom {
  @apply max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12;
}
```
- 最大宽度：**1440px** ✨
- 左右内边距：**24px / 32px / 48px** ✨

---

## 📋 所有页面容器检查

### ✅ 已统一使用 `container-custom` 的页面

1. **首页** - `src/pages/index.astro`
   - ✅ Hero Section
   - ✅ Categories Section
   - ✅ Featured Products Section
   - ✅ Why Choose Us Section
   - ✅ CTA Section

2. **Cultivation 页面** - `src/pages/cultivation/`
   - ✅ `/cultivation/index.astro`
   - ✅ `/cultivation/[slug].astro`

3. **Packaging 页面** - `src/pages/packaging/`
   - ✅ `/packaging/index.astro`
   - ✅ `/packaging/[slug].astro`

4. **其他页面**
   - ✅ `/contact.astro`
   - ✅ `/custom.astro`
   - ⚠️ `/faq.astro` (使用 `max-w-4xl` 适合内容阅读)

### ✅ 已统一使用 `container-custom` 的组件

1. **Header** - `src/components/common/Header.astro`
   - ✅ Top Bar
   - ✅ Main Navigation
   - ✅ Mobile Menu

2. **Footer** - `src/components/common/Footer.astro`
   - ✅ Footer 内容区
   - ✅ 更新了链接为 `/cultivation` 和 `/packaging`

---

## 🎯 设计规范

### 容器宽度规范

| 类型 | 宽度 | 使用场景 |
|------|------|---------|
| **主容器** | `max-w-[1440px]` | 全站主要页面 |
| **内容阅读** | `max-w-4xl` (896px) | FAQ、博客文章等 |
| **宽容器** | `max-w-full` | 全宽 Hero、CTA 区域 |

### 内边距规范

| 屏幕尺寸 | 容器内边距 | 使用场景 |
|---------|-----------|---------|
| Mobile (<640px) | `px-6` (24px) | 移动设备 |
| Tablet (≥640px) | `px-8` (32px) | 平板设备 |
| Desktop (≥1024px) | `px-12` (48px) | 桌面设备 |

---

## 📐 视觉效果

### Header 布局

```
┌────────────────────────────────────────────────────────────┐ ← 全宽背景
│  [Logo] Home Cultivation▼ Packaging▼ Custom Blog  [Social][Dark]│
│  └─────────────────────────────────────────────────┘        │
│         ↑ 内容区宽度: 1440px                                 │
└────────────────────────────────────────────────────────────┘
```

### 内容页布局

```
┌────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────┐ │
│  │  内容区域                                             │ │
│  │  最大宽度: 1440px                                    │ │
│  │  左右内边距: 48px (桌面端)                            │ │
│  └──────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────┘
```

---

## ✨ 优势

1. **更大的内容展示区域** - 从 1280px 增加到 1440px
2. **更好的空间利用率** - 现代显示器普遍更宽
3. **更舒适的阅读体验** - 增加的左右内边距
4. **视觉一致性** - 全站统一使用 `container-custom`

---

## 🔧 维护建议

1. **新建页面**：使用 `container-custom` 类
2. **特殊页面**：如博客文章，可使用 `max-w-4xl` 等较小容器
3. **全宽区域**：如 Hero 背景，使用全宽容器

---

*更新时间：2026-04-05*
