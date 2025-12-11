# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **barber shop landing page** built with Nuxt.js 4.1.2 and Vue 3. The site features a modern, elegant design with a black and gold color scheme, showcasing services for a classic barbershop. The project is deployed on Vercel and uses static generation.

## Technology Stack

- **Framework**: Nuxt.js 4.1.2 (Vue 3)
- **Styling**: Tailwind CSS 6.14.0
- **Language**: TypeScript
- **Deployment**: Vercel (auto-deploy from GitHub)
- **Development**: VSCode with "Vibe Coding" methodology

## Common Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run generate     # Generate static site
npm run preview      # Preview production build locally
npm run postinstall  # Prepare Nuxt project (auto-runs after npm install)
```

### Project Structure

```
├── app/
│   ├── app.vue              # Root application component
│   ├── pages/
│   │   └── index.vue        # Main landing page
│   └── components/
│       ├── Hero.vue         # Hero section component
│       ├── AboutUs.vue      # About us section
│       ├── Services.vue     # Services showcase
│       ├── Contact.vue      # Contact information
│       └── ui/
│           ├── ButtonPrimary.vue    # Primary gold button
│           └── ButtonOutline.vue    # Outline button variant
├── public/
│   ├── images/              # Static image assets
│   │   ├── image-hero.jpg
│   │   ├── corte01.jpg
│   │   └── ...
│   └── favicon.ico
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

## Architecture

### Application Structure

The app uses a **component-based architecture** with clear separation of concerns:

1. **Root Component** (`app/app.vue`): Contains `NuxtPage` wrapper and imports all main section components
2. **Main Page** (`app/pages/index.vue`): Orchestrates the landing page by importing and arranging:
   - Hero section with CTA buttons
   - AboutUs section
   - Services section with service cards
   - Contact section

3. **Component Organization**:
   - **Hero**: Full-screen hero section with gradient background, headline, and call-to-action buttons
   - **AboutUs**: Company information and values
   - **Services**: Grid of service offerings with images
   - **Contact**: Contact information and possibly a form
   - **UI Components**: Reusable button variants (primary gold, outline)

### Design System

The project uses a **semantic color system** defined in `tailwind.config.js`:

- **Primary Color**: Gold (`#e6a826`) - used for CTAs, highlights, and accents
- **Background**: Black (`#0b0b0b`) for main sections, White for surfaces
- **Text**: High contrast black/white with muted variants
- **Semantic tokens**: `primary`, `background`, `surface`, `text`, `text-muted`, `border`, `muted`

**Important**: Use the semantic color tokens (primary, background, surface, text, etc.) throughout the UI rather than raw colors. The Tailwind config maps these to the actual color values.

### Key Implementation Details

- **Images**: Stored in `public/images/` and referenced with `/images/filename.jpg`
- **Styling**: Inline Tailwind classes with occasional custom styles (e.g., radial gradients in Hero)
- **Component Props**: Button components accept `@click` handlers for interactivity
- **Responsive Design**: Mobile-first approach with breakpoints (sm, md, lg, xl)

## Development Notes

- The project uses Nuxt 4's app directory structure (not pages/)
- Static site generation is configured - no server-side rendering required
- All components are **client-side rendered** Vue components
- The design emphasizes visual hierarchy with large typography and generous whitespace
- Decorative gradients and subtle textures create depth and sophistication

## Image Assets

All images are located in `public/images/`:
- `image-hero.jpg` - Hero section main image
- `corte01.jpg` - Service/cut example images
- Additional service images following the `corteXX.jpg` naming pattern

## Deployment

- **Platform**: Vercel
- **Auto-deploy**: Enabled from GitHub main branch
- **Build Command**: `nuxt generate`
- **Output**: Static files in `.output/public/`

## Configuration Files

- **nuxt.config.ts**: Nuxt configuration with Tailwind module and devtools settings
- **tailwind.config.js**: Custom color system and semantic tokens
- **tsconfig.json**: TypeScript configuration
- **.gitignore**: Excludes build outputs, node_modules, and local env files
