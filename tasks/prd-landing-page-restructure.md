# PRD: Claru Landing Page Restructure

## Introduction

Restructure the Claru landing page to position the company as **the premium full-stack data partner for visual AI labs**—specifically those building frontier video, vision, and robotics/embodied AI models.

The current messaging is generic ("Human Cortex for Your Digital Brain"). The new structure will clearly communicate:
1. **Who we serve**: Frontier labs building visual AI (not LLM-focused shops)
2. **What we do**: Complete data lifecycle (Acquire → Prepare → Enrich → Validate)
3. **Why us**: Expert-grade quality, not commodity crowdsourcing

This differentiates from Scale AI (enterprise/government focus, LLM-heavy) and positions Claru as the boutique choice for researchers who need quality over scale.

---

## Goals

- Reposition Claru from generic "AI data company" to "visual AI data specialists"
- Communicate the complete data lifecycle (4 pillars) clearly
- Target ML researchers at frontier visual labs (Reka AI, Moonvalley, Runway, robotics startups)
- Increase qualified consultation bookings from target persona
- Establish credibility through specific, technical messaging

---

## Research Insights (Informing Copy)

### Market Context
- **Visual AI is the next frontier**: World models need 1B+ multimodal data pairs; video models need 10-100x more data than LLMs
- **Robotics has a data bottleneck**: Only 5,000 hours of robot interaction data exists vs. trillions of tokens for LLMs
- **Quality > Quantity**: Labs increasingly cite data quality as the bottleneck, not data volume
- **Scale AI pivot**: Meta's $14.8B acquisition signals consolidation; competitors are seeking alternatives

### What Labs Need
| Service | Lab Need | Claru Opportunity |
|---------|----------|-------------------|
| **Sourcing** | Egocentric video, licensed data, synthetic generation | Human collectors, Unreal Engine pipelines, licensing deals |
| **Curation** | Deduplication, multimodal alignment, quality filtering | ML pipelines for billion-scale curation |
| **Labeling** | RLHF, frame-level video annotation, expert annotators | Domain experts (STEM, creative), preference ranking |
| **Validation** | Red teaming, benchmarking, golden datasets | Safety testing, eval curation, bias detection |

### Competitor Positioning
- **Scale AI**: "Reliable AI for the World's Most Important Decisions" - enterprise/government, premium pricing
- **Surge AI**: "The expert-driven AI training data platform" - LLM focus, Anthropic customer
- **Labelbox**: Platform/tooling focus, self-serve, less services

### Key Buyer Concerns (ML Researchers)
1. Data quality and annotation accuracy (>95% expected)
2. Domain expertise of annotators
3. Turnaround time and reliability
4. Security/confidentiality (SOC2, NDAs)
5. Ability to handle multimodal complexity

---

## User Stories

### US-001: Restructure Hero Section
**Description:** As a visiting ML researcher, I want to immediately understand that Claru specializes in visual AI data so I know I'm in the right place.

**Acceptance Criteria:**
- [ ] New headline clearly mentions visual AI/video/vision (not generic "AI")
- [ ] Subheadline communicates the data lifecycle concept
- [ ] Social proof mentions visual AI labs specifically
- [ ] Hero visual reinforces visual/video theme (keep ASCII aesthetic)
- [ ] Primary CTA: "Book a Consultation"
- [ ] Typecheck passes
- [ ] Verify in browser

**Copy Direction:**
```
Headline Options:
- "The Data Engine for Visual AI"
- "From Raw Footage to Trained Model"
- "Expert Data for Frontier Vision Labs"

Subheadline:
"We acquire, prepare, enrich, and validate the multimodal data
that powers the world's most advanced video and vision models."
```

---

### US-002: Create Four-Pillar Service Section
**Description:** As a visiting researcher, I want to see the complete data lifecycle so I understand Claru can handle my end-to-end needs.

**Acceptance Criteria:**
- [ ] Four distinct service cards: ACQUIRE → PREPARE → ENRICH → VALIDATE
- [ ] Each card has icon, title, 2-3 bullet capabilities
- [ ] Visual flow/arrow connecting the pillars (lifecycle concept)
- [ ] Each pillar expandable or links to detail
- [ ] Typecheck passes
- [ ] Verify in browser

**Copy Direction:**

**ACQUIRE (Sourcing)**
- Human data collection (egocentric video, physical world)
- Web-scale data harvesting & licensing
- Synthetic data generation (Unreal Engine, AI models)

**PREPARE (Curation)**
- Billion-scale deduplication & filtering
- Multimodal alignment (video-text, image-audio)
- Quality scoring & dataset optimization

**ENRICH (Labeling)**
- RLHF & preference ranking
- Frame-level video annotation
- Expert annotation (STEM, creative, domain specialists)

**VALIDATE (Evaluation)**
- Red teaming & safety testing
- Benchmark curation & golden datasets
- Post-training evaluation & bias detection

---

### US-003: Add Visual AI Focus Section
**Description:** As a researcher at a video/vision lab, I want to see that Claru understands my specific domain so I trust their expertise.

**Acceptance Criteria:**
- [ ] Section highlighting visual AI specialization
- [ ] Three capability areas: Video, Vision, Robotics/Embodied AI
- [ ] Each area has specific data types and use cases
- [ ] Technical credibility (mention specific challenges)
- [ ] Typecheck passes
- [ ] Verify in browser

**Copy Direction:**

**Video AI**
"Frame-level annotation, temporal consistency labeling, and action recognition data for video generation and understanding models."
- Motion & action sequences
- Scene transitions & continuity
- Audio-visual alignment

**Vision AI**
"High-precision image annotation, segmentation masks, and visual reasoning data for next-generation vision models."
- Object detection & segmentation
- Visual question answering pairs
- Spatial relationship labeling

**Robotics & Embodied AI**
"Real-world interaction data, simulation-to-reality bridging, and physical manipulation annotations for embodied intelligence."
- Egocentric manipulation data
- Sim-to-real validation sets
- Physical reasoning & affordances

---

### US-004: Restructure Social Proof Section
**Description:** As a researcher, I want to see that credible labs trust Claru so I feel confident reaching out.

**Acceptance Criteria:**
- [ ] Feature Reka AI and Moonvalley prominently (existing clients)
- [ ] Add testimonial quotes if available
- [ ] Include metrics if possible (data points delivered, annotation accuracy)
- [ ] Trust badges: SOC2, security certifications if applicable
- [ ] Typecheck passes
- [ ] Verify in browser

**Copy Direction:**
```
"Trusted by frontier visual AI labs"
[Reka AI logo] [Moonvalley logo] [+ others]

Optional metrics:
- "X million annotations delivered"
- ">98% annotation accuracy"
- "Y+ visual AI projects completed"
```

---

### US-005: Update Problem/Agitation Section
**Description:** As a researcher, I want the pain points to resonate with my actual challenges so I feel understood.

**Acceptance Criteria:**
- [ ] Pain points specific to visual AI (not generic "data problems")
- [ ] Quantified where possible (hours wasted, data volumes)
- [ ] Contrast with commodity crowdsourcing
- [ ] Typecheck passes
- [ ] Verify in browser

**Copy Direction:**
```
Current pain points for visual AI researchers:

"Training video models requires 100x more data than LLMs—
and most of it doesn't exist yet."

"Crowdsourced annotators can't handle frame-level temporal
consistency. Your model quality ceiling is your data quality ceiling."

"Robotics datasets are measured in hours, not terabytes.
The real world is hard to scale."

The visual AI data problem is different.
We built Claru specifically to solve it.
```

---

### US-006: Simplify CTA and Contact Flow
**Description:** As an interested researcher, I want a clear path to start a conversation so I can evaluate working with Claru.

**Acceptance Criteria:**
- [ ] Primary CTA throughout: "Book a Consultation" (not "Get Started")
- [ ] Secondary CTA: "See Case Studies" or "Learn More"
- [ ] Contact form simplified: Name, Email, Company, Brief project description
- [ ] Remove or simplify the progressive terminal-style form
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-007: Update Navigation and Site Structure
**Description:** As a visitor, I want clear navigation that matches the new service structure.

**Acceptance Criteria:**
- [ ] Nav items: Services (dropdown with 4 pillars), Use Cases, About, Contact
- [ ] Services dropdown shows: Acquire, Prepare, Enrich, Validate
- [ ] Mobile nav works correctly
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-008: Refine Footer with New Structure
**Description:** As a visitor, I want the footer to reflect the updated site architecture.

**Acceptance Criteria:**
- [ ] Footer columns match new nav structure
- [ ] Add links to individual service pages (future)
- [ ] Keep legal links (Privacy, Terms)
- [ ] Typecheck passes
- [ ] Verify in browser

---

## Functional Requirements

- FR-1: Hero section must communicate visual AI focus within first 5 seconds
- FR-2: Four-pillar service section must show clear progression (lifecycle)
- FR-3: Each pillar must have consistent card format (icon, title, bullets)
- FR-4: Visual AI specialization section must cover Video, Vision, Robotics
- FR-5: All CTAs must link to consultation booking (Calendly or form)
- FR-6: Social proof must feature at least 2 named clients
- FR-7: Contact form must collect: Name, Email, Company, Project Description
- FR-8: Site must maintain current ASCII aesthetic and animation quality
- FR-9: All sections must be responsive (mobile-first)
- FR-10: Page must pass Lighthouse performance audit (>80 score)

---

## Non-Goals (Out of Scope)

- Individual service pages (this PRD covers homepage only)
- Blog or content marketing pages
- Pricing page or self-serve pricing calculator
- Customer portal or dashboard
- Case study detail pages (just link placeholders)
- Careers page updates
- Integration with CRM (manual lead handling OK for now)

---

## Design Considerations

### Visual Direction
- Maintain ASCII/terminal aesthetic (brand differentiator)
- Update ASCII characters to be more "visual AI" themed (camera, eye, robot)
- Color scheme: Keep silverish sage green (#92B090)
- Typography: Keep JetBrains Mono for code/technical feel

### Layout Updates
- Hero: Full-width, centered content, animated ASCII background
- Four Pillars: Horizontal flow on desktop, vertical stack on mobile
- Visual AI Section: Three-column grid with icons
- Social Proof: Logo bar + optional testimonial carousel
- CTA: Sticky or repeated at section breaks

### Components to Reuse
- Button.tsx (update copy)
- TextScramble.tsx (great for headlines)
- FadeIn.tsx (scroll animations)
- Card patterns from Wedge.tsx

### Components to Modify
- Hero.tsx (major copy and structure changes)
- Wedge.tsx (restructure for 4 pillars)
- Capabilities.tsx (update for Visual AI focus)
- FinalCTA.tsx (simplify form)

---

## Technical Considerations

- All changes are frontend-only (Next.js, React, Tailwind)
- No backend changes required
- Form submission can remain console.log for now (TODO noted in codebase)
- Maintain current animation performance optimizations
- Ensure new sections work with existing Lenis smooth scroll
- Test with current GSAP ScrollTrigger animations

---

## Success Metrics

- **Primary**: Increase in consultation bookings from visual AI labs
- **Secondary**: Reduced bounce rate on homepage (<50%)
- **Tertiary**: Increased time on page (>2 minutes average)
- **Qualitative**: Positive feedback from target persona (ML researchers)

Measurement approach:
- Track CTA clicks via analytics
- Monitor form submissions
- Gather qualitative feedback from sales conversations

---

## Open Questions

1. **Client approval for logos**: Can we display Reka AI and Moonvalley logos publicly?
2. **Testimonials**: Do we have approved quotes from clients to feature?
3. **Metrics**: What specific numbers can we share (annotations delivered, accuracy)?
4. **Calendly vs Form**: Should consultation CTA go to Calendly or a form?
5. **Case studies**: Are there case studies ready to link to?
6. **Certifications**: Do we have SOC2 or other security certifications to display?

---

## Proposed Headline Options

Based on direct response copy principles (specificity, transformation, contrast):

### Primary Headline Candidates

**Option A (Transformation):**
> "From Raw Footage to Trained Model"
>
> *The complete data engine for frontier visual AI.*

**Option B (Specificity):**
> "The Data Team Behind the World's Best Video Models"
>
> *Acquire. Prepare. Enrich. Validate.*

**Option C (Problem-Solution):**
> "Visual AI Has a Data Problem. We Solve It."
>
> *Expert-grade data services for video, vision, and robotics labs.*

**Option D (Category Creation):**
> "The Visual AI Data Company"
>
> *Everything between your idea and your trained model.*

### SELECTED: Option A
> **"From Raw Footage to Trained Model"**
> *The complete data engine for frontier visual AI.*

This emphasizes the full-stack lifecycle (matches 4 pillars) and communicates end-to-end transformation.

---

## Page Flow (Recommended Structure)

```
1. HERO
   - Headline + Subheadline
   - Dual CTA: "Book Consultation" | "See Our Work"
   - Trust line: "Trusted by Reka AI, Moonvalley, and leading visual AI labs"

2. PROBLEM/AGITATION
   - Visual AI data challenges (quantified)
   - Why commodity solutions fail
   - Bridge to solution

3. FOUR PILLARS (Solution)
   - ACQUIRE → PREPARE → ENRICH → VALIDATE
   - Lifecycle visual
   - Brief capability bullets

4. VISUAL AI SPECIALIZATION
   - Video AI | Vision AI | Robotics
   - Specific data types and use cases
   - Technical credibility

5. SOCIAL PROOF
   - Client logos
   - Testimonial (if available)
   - Metrics (if available)

6. HOW WE WORK (Optional)
   - Simple 3-step process
   - Emphasize speed and quality

7. FINAL CTA
   - Simplified form
   - Clear value prop
   - Trust reinforcement

8. FOOTER
   - Navigation links
   - Legal
   - Contact info
```

---

## Implementation Priority

**Phase 1 (Critical Path):**
1. US-001: Hero restructure
2. US-002: Four-pillar service section
3. US-006: CTA simplification

**Phase 2 (Enhancement):**
4. US-003: Visual AI focus section
5. US-005: Problem/agitation section

**Phase 3 (Polish):**
6. US-004: Social proof update
7. US-007: Navigation update
8. US-008: Footer refinement

---

## Appendix: Research Sources

- [Scale AI Pricing & Positioning](https://scale.com/pricing)
- [Multimodal AI Training Data Guide](https://www.shaip.com/blog/multimodal-ai-the-complete-guide-to-training-data/)
- [World Models Data Needs](https://www.axios.com/2025/11/17/ai-world-models-digital-twins)
- [RLHF Service Providers](https://research.aimultiple.com/rlhf-platform/)
- [Robotics AI Data Challenges](https://scale.com/blog/physical-ai)
- [AI Red Teaming Services](https://www.mend.io/blog/best-ai-red-teaming-companies/)
- [DataComp Multimodal Curation](https://machinelearning.apple.com/research/datacomp)
- [Synthetic Data with Unreal Engine](https://walkingtree.tech/unreal-engine-advancing-ai-with-synthetic-data-and-computer-vision-integration/)
