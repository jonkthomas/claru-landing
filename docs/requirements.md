# Landing Page Requirements: Claru

## Functional Requirements

### Page Sections
- FR1: Hero section with ASCII/dither background effect, headline, subheadline, primary CTA, and customer logos
- FR2: Wedge section - 3-column layout presenting Golden Set, Embedded Squad, Frontier Standard offerings
- FR3: Paradigm Shift section - Split-screen comparison (Black Box vs Glass Box)
- FR4: Capabilities section - Grid layout showing Text/Code, Vision/Video, Robotics/World capabilities
- FR5: Testimonials section - Primary whale testimonial (Moonvalley CEO) + supporting testimonials
- FR6: Final CTA section with contact form
- FR7: Footer with legal links and brand

### Supporting Pages
- FR8: Privacy Policy page at /privacy
- FR9: Terms of Service page at /terms
- FR10: Custom 404 page with ASCII aesthetic
- FR11: Responsive design (mobile-first)

### Interactive Elements
- FR12: Terminal-style contact form with progressive disclosure
- FR13: Scroll-triggered animations throughout
- FR14: ASCII/dither visual effects (WebGL or Canvas-based)
- FR15: Smooth scroll navigation

## Non-Functional Requirements

### Technology
- NFR1: Next.js 14+ with App Router
- NFR2: Tailwind CSS + custom CSS for ASCII effects
- NFR3: GSAP + Framer Motion for animations
- NFR4: Canvas/WebGL for ASCII rendering
- NFR5: TypeScript throughout

### Performance
- NFR6: Lighthouse performance score 90+
- NFR7: Core Web Vitals passing
- NFR8: ASCII effects must not block main thread
- NFR9: Graceful degradation for browsers without WebGL

### SEO & Accessibility
- NFR10: Complete SEO metadata (title, description, OG tags)
- NFR11: Semantic HTML structure
- NFR12: ARIA labels for interactive elements
- NFR13: Keyboard navigation support
- NFR14: Sufficient color contrast (WCAG AA)

### Deployment
- NFR15: Vercel deployment ready
- NFR16: Preview URL deployment (no custom domain)

## Content Requirements

### Copy
- CR1: User-provided copy structure (Hero, Wedge, Shift, Capabilities, CTA)
- CR2: Testimonials to be created featuring Moonvalley CEO and Reka AI

### Visual
- CR3: ASCII/dither visual effects as primary imagery
- CR4: Custom logo design in ASCII/terminal style
- CR5: Monochromatic color palette with strategic accents
- CR6: Monospace + modern sans typography pairing

## Acceptance Criteria

### Visual
- [ ] ASCII/dither effects render smoothly at 60fps
- [ ] Design achieves top 0.001% quality standard
- [ ] Consistent terminal aesthetic throughout
- [ ] Responsive across all breakpoints

### Functional
- [ ] All sections implemented per copy structure
- [ ] Contact form captures and validates data
- [ ] All navigation links functional
- [ ] Legal pages complete and linked

### Technical
- [ ] No console errors
- [ ] Lighthouse scores 90+ on all metrics
- [ ] Mobile experience smooth
- [ ] Deployed to Vercel preview
