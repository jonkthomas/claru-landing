# Claru Landing Page

Expert Human Intelligence for AI Labs - A premium landing page with ASCII/terminal aesthetic.

## Live Site

**Production URL:** https://claru-landing-bf1qgmfwz-voxtur.vercel.app

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS + CSS Variables
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Typography:** JetBrains Mono + Geist
- **Deployment:** Vercel

## Project Structure

```
src/app/
├── page.tsx                    # Main landing page
├── not-found.tsx               # Custom 404 page
├── privacy/page.tsx            # Privacy Policy
├── terms/page.tsx              # Terms of Service
├── layout.tsx                  # Root layout with fonts & metadata
├── globals.css                 # Global styles & design system
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with animated logo
│   │   ├── Wedge.tsx           # Three offerings section
│   │   ├── ParadigmShift.tsx   # Black Box vs Glass Box
│   │   ├── Capabilities.tsx    # Text/Code, Vision, Robotics
│   │   ├── Testimonials.tsx    # Moonvalley & Reka AI quotes
│   │   ├── FinalCTA.tsx        # Contact form section
│   │   └── Footer.tsx          # Footer with legal links
│   │
│   ├── ui/
│   │   ├── Button.tsx          # Primary/secondary buttons
│   │   └── Logo.tsx            # Animated CLARU logo
│   │
│   ├── effects/
│   │   ├── ASCIIBackground.tsx # Animated ASCII canvas
│   │   ├── ASCIIBrain.tsx      # Neural network ASCII art
│   │   ├── FadeIn.tsx          # Scroll-triggered fade
│   │   ├── StaggerContainer.tsx # Staggered children animation
│   │   └── TypeWriter.tsx      # Typewriter text effect
│   │
│   ├── form/
│   │   └── ContactForm.tsx     # Progressive terminal form
│   │
│   └── layout/
│       └── Header.tsx          # Sticky navigation header
│
└── lib/
    └── utils.ts                # Utility functions
```

## Design System

### Colors

```css
--bg-primary: #050505       /* Near-black background */
--bg-secondary: #0a0a0a     /* Card backgrounds */
--text-primary: #e8e8e8     /* Main text */
--text-secondary: #a0a0a0   /* Secondary text */
--accent-primary: #00ff88   /* Electric green accent */
```

### Typography

- **Headings:** Geist Sans (600-700 weight)
- **Body:** Geist Sans (400 weight)
- **Code/Terminal:** JetBrains Mono

### Animations

- Cubic-bezier easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Intersection Observer for scroll triggers
- Canvas-based ASCII background at 30fps

## Quick Edit Guide

### Update Copy

1. Edit section components in `src/app/components/sections/`
2. Copy is inline in each component
3. Run `npm run build` to verify

### Change Colors

1. Edit `src/app/globals.css`
2. Modify CSS variables in `:root`
3. Accent color is `--accent-primary`

### Add Testimonials

1. Edit `src/app/components/sections/Testimonials.tsx`
2. Add objects to the `testimonials` array
3. Set `featured: true` for primary testimonial

### Form Submissions

The contact form currently logs to console. To add a backend:

1. Create `src/app/api/contact/route.ts`
2. Update form submission in `ContactForm.tsx`
3. Add environment variables in Vercel dashboard

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## Documentation

Full project documentation is in `/docs/`:

- `brief.md` - Project brief and requirements
- `strategy.md` - Positioning and messaging strategy
- `architecture.md` - Page structure and copy
- `copy.md` - All finalized copy
- `design.md` - Technical design document
- `requirements.md` - Functional requirements

## Credits

Built with the Landing Page Builder workflow.

---

(C) 2025 Claru. All rights reserved.
