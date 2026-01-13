# Claru Landing Page - Codebase Overview

## Project Summary

Premium landing page for **Claru** - "Expert Human Intelligence for AI Labs". Built with a distinctive ASCII/terminal aesthetic combined with sophisticated modern animations. Targets frontier AI research companies (Reka AI, Moonvalley).

**Live Site:** https://claru-landing-bf1qgmfwz-voxtur.vercel.app

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 16.1.1 (App Router), React 19.2.3, TypeScript 5 |
| **Styling** | Tailwind CSS 4, CSS Custom Properties |
| **Animation** | Framer Motion 12.24, GSAP 3.14 + ScrollTrigger, Lenis (smooth scroll) |
| **Forms** | React Hook Form 7.70, Zod 4.3 |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans, JetBrains Mono |
| **Deployment** | Vercel |

---

## Directory Structure

```
src/app/
├── page.tsx                    # Main landing page (client-side)
├── layout.tsx                  # Root layout with fonts & metadata
├── globals.css                 # Design system & CSS variables
│
├── components/
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx            # Hero with animated logo & CTAs
│   │   ├── Wedge.tsx           # Three offerings cards
│   │   ├── ParadigmShift.tsx   # Black Box vs Glass Box comparison
│   │   ├── Capabilities.tsx    # Text/Code, Vision, Robotics
│   │   ├── Testimonials.tsx    # Customer quotes
│   │   ├── FinalCTA.tsx        # Contact form section
│   │   └── Footer.tsx          # Footer with legal links
│   │
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.tsx          # Primary/secondary/ghost variants
│   │   └── Logo.tsx            # Animated CLARU logo
│   │
│   ├── effects/                # Animation effects
│   │   ├── ASCIIBackground.tsx # Animated ASCII canvas
│   │   ├── ASCIIBrain.tsx      # Neural network ASCII art
│   │   ├── FadeIn.tsx          # Scroll-triggered fade
│   │   ├── MagneticCursor.tsx  # Magnetic pointer effect
│   │   ├── ParticleField.tsx   # Particle system
│   │   ├── ScrollAnimations.tsx# GSAP scroll animations
│   │   ├── StaggerContainer.tsx# Staggered children animation
│   │   ├── TextScramble.tsx    # Character scramble/glitch
│   │   └── TypeWriter.tsx      # Typewriter effect
│   │
│   ├── form/
│   │   └── ContactForm.tsx     # Terminal-style progressive form
│   │
│   ├── layout/
│   │   └── Header.tsx          # Sticky nav with mobile menu
│   │
│   └── providers/
│       └── LenisProvider.tsx   # Smooth scroll + GSAP integration
│
├── lib/
│   └── utils.ts                # Utility functions (cn, formatDate)
│
├── privacy/page.tsx            # Privacy policy
└── terms/page.tsx              # Terms of service

public/images/                  # Hero, offering, capability images
```

---

## Key Architectural Patterns

### 1. Hydration Safety
```typescript
// page.tsx - prevents SSR mismatches
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

### 2. Dynamic Imports
Heavy effects only load on client:
```typescript
const ASCIIBackground = dynamic(
  () => import("./components/effects/ASCIIBackground"),
  { ssr: false }
);
```

### 3. Animation Stack
- **Framer Motion**: Component-level declarative animations
- **GSAP + ScrollTrigger**: Scroll-linked timeline animations
- **Lenis**: Physics-based smooth scrolling

### 4. Form Architecture
- Progressive terminal-style form (6 steps)
- Zod schema validation with React Hook Form
- Real-time validation, typewriter prompts

---

## Design System (globals.css)

### Colors
```css
--bg-primary: #050505;        /* Near-black */
--accent-primary: #00ff88;    /* Electric green */
--text-primary: #e8e8e8;      /* Off-white */
```

### Animation Keyframes
- `fadeUp`, `glitch-1/2`, `scanline`, `chromatic-shift`, `typewriter`, `flicker`

### Semantic Classes
- `.btn-primary`, `.btn-secondary` - Buttons
- `.card` - Dark card with border
- `.input-terminal` - Form inputs
- `.section`, `.container` - Layout

---

## Performance Optimizations

1. **Canvas rendering** for ASCII/particle effects (not DOM)
2. **FPS throttling** - ASCII background limited to 20 FPS
3. **Debounced resize** handlers
4. **CSS-only effects** for noise/vignette overlays
5. **GPU-friendly animations** (transform, opacity)

---

## Commands

```bash
npm run dev     # Development server (port 3000)
npm run build   # Production build
npm run start   # Production server
npm run lint    # ESLint
```

---

## TODOs

- [ ] Form submission backend (`ContactForm.tsx:217` - currently logs to console)
- [ ] Add unit/E2E tests (Jest, Playwright)
- [ ] Visual regression tests for animations

---

## Page Flow

```
LenisProvider (Smooth Scroll Context)
├── ASCIIBackground (Canvas)
├── Header (Sticky Nav)
└── Main
    ├── Hero (Logo, CTAs, ParticleField)
    ├── Wedge (Offering Cards)
    ├── ParadigmShift (Comparison)
    ├── Capabilities (Services)
    ├── Testimonials (Social Proof)
    ├── FinalCTA (Contact Form)
    └── Footer
```
