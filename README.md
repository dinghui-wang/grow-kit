# Grow-Kit 🌱

Professional cannabis cultivation equipment and packaging solutions for B2B clients.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 22.12.0
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
grow-kit/
├── src/
│   ├── components/
│   │   ├── common/          # Header, Footer, ThemeToggle
│   │   └── product/         # ProductCard, CategoryCard
│   ├── data/
│   │   └── categories.json  # Product categories data
│   ├── layouts/
│   │   ├── BaseLayout.astro # Base HTML layout
│   │   └── Layout.astro     # Main layout with Header/Footer
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── products/        # Product pages
│   │   │   ├── index.astro
│   │   │   ├── cultivation/
│   │   │   ├── packaging/
│   │   │   └── [id].astro   # Product detail page
│   │   └── contact.astro    # Contact page
│   └── styles/
│       └── global.css       # Global styles + Tailwind
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Features

- ✅ **Responsive Design** (Desktop-first)
- ✅ **Dark Mode** support
- ✅ **B2B Inquiry System**
- ✅ **Product Categories**
  - Cannabis Plant Cultivation
    - Lighting & Control
    - Ventilation, Environment Control & Climate
    - Growing Media & Containers
    - Nutrients & Water Management
    - Propagation & Breeding
    - Plant Support & Training
    - Post-Harvest Processing
  - Cannabis Product Packaging
    - Packaging Containers
    - Labels & Branding
    - Accessory Packaging
- ✅ **SEO Optimized**
- ✅ **Modern Design** (Minimalist)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v6
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: astro-icon (Material Design Icons)
- **Content**: MDX support
- **SEO**: @astrojs/sitemap

## 📝 Development

### Adding Products

1. Create product data in `src/data/products/[category]/`
2. Add product images to `public/images/products/`
3. Update product routes in `src/pages/products/`

### Customizing Styles

Global styles are in `src/styles/global.css` using Tailwind CSS utilities.

### Theme Configuration

Edit `tailwind.config.mjs` to customize colors, fonts, and animations.

## 🌐 Deployment

Build the project and deploy the `dist/` folder:

```bash
pnpm build
```

## 📧 Contact

For inquiries: info@grow-kit.com

---

**Note**: This is a B2B platform focused on wholesale inquiries. No shopping cart functionality.
