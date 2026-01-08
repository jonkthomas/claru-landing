# Technical Design: Claru Landing Page

## Design System

### Color Palette

**Primary Background:**
- `--bg-primary: #050505` - Near-black base
- `--bg-secondary: #0a0a0a` - Slightly lighter for cards
- `--bg-tertiary: #111111` - Section backgrounds

**Primary Text:**
- `--text-primary: #e8e8e8` - Main text (off-white, 91% luminance)
- `--text-secondary: #a0a0a0` - Secondary text (63% luminance)
- `--text-tertiary: #666666` - Muted text (40% luminance)

**Accent Colors:**
- `--accent-primary: #00ff88` - Electric green (CTAs, highlights)
- `--accent-secondary: #00cc6a` - Darker green (hover states)
- `--accent-glow: rgba(0, 255, 136, 0.15)` - Glow effect

**Semantic Colors:**
- `--success: #00ff88` - Same as accent (confirmation)
- `--error: #ff4444` - Error states
- `--warning: #ffaa00` - Warning states

**Borders & Lines:**
- `--border-subtle: #1a1a1a` - Subtle divisions
- `--border-medium: #2a2a2a` - Medium emphasis
- `--border-strong: #3a3a3a` - Strong divisions

**ASCII Effect Colors:**
- `--ascii-dark: #050505`
- `--ascii-mid: #1a1a1a`
- `--ascii-light: #333333`
- `--ascii-highlight: #00ff88`

---

### Typography

**Font Stack:**
```css
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace;
--font-sans: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Type Scale:**
```css
--text-xs: 0.75rem;      /* 12px - Labels, captions */
--text-sm: 0.875rem;     /* 14px - Body small */
--text-base: 1rem;       /* 16px - Body */
--text-lg: 1.125rem;     /* 18px - Body large */
--text-xl: 1.25rem;      /* 20px - Subheadings */
--text-2xl: 1.5rem;      /* 24px - Section titles */
--text-3xl: 2rem;        /* 32px - Section headlines */
--text-4xl: 2.5rem;      /* 40px - Page headlines */
--text-5xl: 3.5rem;      /* 56px - Hero headline */
--text-6xl: 4.5rem;      /* 72px - Hero desktop */
```

**Font Weights:**
- 400: Regular (body)
- 500: Medium (emphasis)
- 600: Semibold (subheadings)
- 700: Bold (headlines)

**Line Heights:**
- Tight: 1.1 (headlines)
- Normal: 1.5 (body)
- Relaxed: 1.75 (long-form)

---

### Spacing System

**Base Unit: 4px**
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

**Section Padding:**
- Mobile: `--space-16` (64px) vertical
- Tablet: `--space-20` (80px) vertical
- Desktop: `--space-24` (96px) vertical

**Container:**
- Max width: 1200px
- Padding: 24px (mobile), 32px (tablet), 48px (desktop)

---

### Animation System

**Easing Functions:**
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

**Durations:**
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
```

**Stagger Delays:**
- Children: 50-100ms increments
- Cards: 100-150ms increments
- Sections: 200ms increments

---

## Component Architecture

### File Structure
```
app/
├── page.tsx                    # Main landing page
├── not-found.tsx              # Custom 404
├── privacy/page.tsx           # Privacy Policy
├── terms/page.tsx             # Terms of Service
├── layout.tsx                 # Root layout
├── globals.css                # Global styles + CSS variables
├── fonts.ts                   # Font configuration
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Wedge.tsx
│   │   ├── ParadigmShift.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   └── Logo.tsx
│   │
│   ├── form/
│   │   └── ContactForm.tsx
│   │
│   ├── effects/
│   │   ├── ASCIIBackground.tsx
│   │   ├── GlitchText.tsx
│   │   └── TypeWriter.tsx
│   │
│   └── layout/
│       ├── Header.tsx
│       ├── Navigation.tsx
│       └── Container.tsx
│
└── lib/
    ├── ascii-renderer.ts      # ASCII effect logic
    └── utils.ts               # Utility functions
```

---

## ASCII Effect Implementation

### Approach: Canvas-Based ASCII Renderer

**Why Canvas over WebGL:**
- Simpler implementation
- Better browser support
- Sufficient for stylized background effect
- Easier to control and debug

**Implementation:**
```typescript
// ASCII character set ordered by density
const ASCII_CHARS = ' .:-=+*#%@';

// Render logic
1. Create offscreen canvas
2. Draw gradient/noise pattern
3. Sample pixels in grid cells (8x12 px)
4. Calculate luminance per cell
5. Map luminance to ASCII character
6. Render characters to main canvas
7. Animate with requestAnimationFrame
```

**Performance Optimizations:**
- Use `requestAnimationFrame` with delta time
- Limit updates to 30fps for effect (saves CPU)
- Use `OffscreenCanvas` when available
- Debounce resize handlers
- Use `will-change: transform` for GPU acceleration

**Fallback:**
- CSS gradient background for browsers without Canvas support
- Detect via `!!document.createElement('canvas').getContext`

---

## Section Specifications

### Hero Section
- Full viewport height (100vh)
- ASCII background with subtle animation
- Centered content with max-width constraint
- Logo types in with typewriter effect
- Staggered fade-in for text elements
- CTA with glow effect on hover

### Wedge Section
- 3-column grid (stacks on mobile)
- Numbered cards with border treatment
- Hover state: subtle lift + border glow
- Sequential reveal on scroll

### Paradigm Shift Section
- Split layout (side by side)
- Left side: muted/darker styling
- Right side: highlighted with accent color
- Icons: X (red tint) vs Check (green accent)
- Animated reveal from sides

### Capabilities Section
- 3-column grid
- Each column is a card with icon header
- Items are list with custom bullet styling
- Icons designed in ASCII art style
- Staggered card reveal

### Testimonials Section
- Primary testimonial: large quote with attribution
- Quotation marks as decorative ASCII element
- Subtle background pattern
- Fade-in on scroll

### Final CTA + Form
- Section background slightly elevated
- Progressive form (one field visible at a time)
- Terminal-style input fields
- Animated cursor in inputs
- Success state with ASCII art
- Submit button with loading state

### Footer
- Simple layout: logo, links, copyright
- ASCII border or pattern at top
- Subtle color treatment

---

## Responsive Breakpoints

```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

**Layout Changes:**
- **Mobile (<768px):**
  - Single column layouts
  - Hamburger menu
  - Reduced padding
  - Smaller type scale
  - Simplified ASCII effects

- **Tablet (768-1024px):**
  - 2-column grids
  - Expanded navigation
  - Medium padding

- **Desktop (>1024px):**
  - Full 3-column grids
  - Full navigation
  - Full padding
  - Rich ASCII effects

---

## Performance Targets

- Lighthouse Performance: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3s
- Cumulative Layout Shift: <0.1
- Total Blocking Time: <200ms

**Strategies:**
- Lazy load ASCII effect (not critical for LCP)
- Use `next/font` for font optimization
- Minimize JavaScript bundle
- Use CSS for simple animations
- Defer non-critical JavaScript
