# Kaja Technical Institute — Website with Animated Backgrounds & Scroll Effects

![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)

A modern, high-performance website for **Kaja Technical Institute** — Sri Lanka's leading mobile phone hardware and software technical training academy (empowering technicians since 2006).

Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS v4**, featuring dynamic hero slideshows with animated backgrounds, interactive scroll-triggered entrance animations, animated stat counters, and multi-page routing.

---

## ✨ Features

- 🎬 **Animated Backgrounds & Slideshows**: Multi-slide hero section with high-resolution imagery, subtle Ken Burns zoom effects, gradient overlays, and auto-play controls.
- 💫 **Interactive Scroll Animations**: Hardware-accelerated entrance effects (`fade-up`, `fade-left`, `fade-right`, `zoom-in`, and staggered reveals) as sections, headings, cards, and details enter the viewport.
- 🔢 **Animated Number Counters**: Key statistics (5,000+ Students, 18+ Years, 12 Courses, 96% Placement Rate) count up dynamically when scrolled into view.
- 📄 **6 Complete Interactive Pages**:
  - **Home**: Hero slider, animated statistics, company intro, popular courses, key advantages, student testimonials, and CTA banners.
  - **About**: Institute mission & vision, 18-year milestones interactive timeline, core values, and executive leadership.
  - **Courses**: Category filtering (All, Hardware, Software, Networking, Advanced), detailed course cards with duration, sessions, syllabus highlights, and pricing.
  - **Repair & Tools**: Comprehensive showcase of laboratory diagnostic tools, micro-soldering equipment, and commercial repair services.
  - **Team & Partners**: Profiles of certified instructors and network of telecom/industry partners.
  - **Contact & Enroll**: Interactive enrollment form with validation, campus location details, direct hotline, and collapsible FAQ.
- 💬 **WhatsApp Direct Integration**: Floating WhatsApp chat button + direct consultation links on every course and service.
- ♿ **Accessibility & Performance**: Smooth 60fps transitions with GPU acceleration (`transform: translate3d`) and `prefers-reduced-motion` safety checks.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS animations
- **Typography**: Google Fonts (*Barlow Condensed* & *Inter*)
- **Icons**: SVG vector graphics + emoji accents

---

## 📁 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive top navigation with blur background
│   │   ├── Footer.tsx         # Site footer with quick links & contact details
│   │   └── ScrollReveal.tsx   # Reusable scroll animation & animated counter components
│   ├── pages/
│   │   ├── Home.tsx           # Landing page with hero slider & animated sections
│   │   ├── About.tsx          # Institute history, 18-year timeline & values
│   │   ├── Courses.tsx        # Course catalog with category filter & syllabus
│   │   ├── RepairTools.tsx    # Lab equipment & commercial repair services
│   │   ├── Team.tsx           # Faculty profiles & industry partners
│   │   └── Contact.tsx        # Enrollment application form & FAQs
│   ├── App.tsx                # Main app component & page transition manager
│   ├── index.css              # Global styles, Tailwind v4 imports & keyframe animations
│   ├── main.tsx               # React application entry point
│   └── vite-env.d.ts          # Vite TypeScript environment declarations
├── index.html                 # HTML shell with meta tags & SEO structure
├── package.json               # Project dependencies and npm scripts
├── tsconfig.json              # TypeScript compiler configuration
└── vite.config.ts             # Vite configuration with React & Tailwind plugins
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or later) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/website-with-animated-backgrounds.git
   cd website-with-animated-backgrounds
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or if using pnpm:
   pnpm install
   ```

### Running Locally

Start the local development server:
```bash
npm run dev
# or:
pnpm dev
```

Open your browser and navigate to `http://localhost:8443` (or the port shown in your terminal).

### Building for Production

Compile the production-ready bundle into the `dist/` directory:
```bash
npm run build
# or:
pnpm build
```

To preview the production build locally:
```bash
npm run preview
# or:
pnpm preview
```

---

## 🌐 Deploying to GitHub / Vercel / Netlify

### Deploy to Vercel
1. Push this repository to your GitHub account.
2. Go to [Vercel](https://vercel.com/) and click **"New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Deploy to Netlify
1. Connect your GitHub repository on [Netlify](https://www.netlify.com/).
2. Set Build command to: `npm run build`
3. Set Publish directory to: `dist`
4. Click **"Deploy site"**.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
