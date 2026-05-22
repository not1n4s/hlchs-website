# HLCHS Website Plan of Action

## Objective

Build a bilingual, mobile-first, secure, dignity-led website for Hyderabad Leprosy Control & Health Society that serves community users, donors, and institutional partners without overwhelming low-confidence users.

## Delivery Strategy

We should move in five controlled tracks at the same time:

1. Content verification
2. UX and visual system
3. Technical architecture
4. Security baseline
5. Build and launch readiness

## Phase 0: Reality Check

Before building, we need one important alignment point: no public website can honestly be made so that "nothing could be breached." What we can do is build with a strong defense-in-depth baseline, reduce attack surface, avoid risky architecture, and launch with good operational controls. That is the right standard to hold.

## Phase 1: Discovery and Fact Verification

### Goals

- Confirm HLCHS's exact positioning
- Verify all legal, operational, and contact details
- Gather real content and media

### Tasks

- Verify organization name formatting and abbreviation
- Confirm address, phone, email, and office timings
- Confirm registration and compliance details
- Confirm active program areas and current service scope
- Confirm which impact statistics are publishable
- Gather available reports, brochures, and photos
- Confirm whether donation collection is direct or inquiry-based
- Identify final English copy owners and Hindi translation reviewers

### Output

- Approved content inventory
- Verified fact sheet
- Approved list of publishable claims

## Phase 2: UX Strategy

### Goals

- Make the site easy for low-confidence users
- Keep the experience polished and respectful
- Support bilingual navigation without confusion

### UX rules

- Keep primary navigation short
- Put language switch in a fixed, obvious location
- Use short, plain-text labels
- Minimize typing requirements in forms
- Keep the number of actions per page focused
- Use strong contrast and large touch areas
- Pair icons with labels for key actions

### Special UX requirements for this audience

- A phone-first design with clear contact actions above the fold
- Predictable layout from page to page
- No hidden critical actions behind unfamiliar UI patterns
- No overloaded mega menus
- No jargon-heavy content blocks

### Output

- Sitemap
- User flows
- Low-fidelity wireframes
- Language-switch behavior spec

## Phase 3: Visual System

### Goals

- Create a warm, trustworthy look
- Avoid sterile corporate design and avoid low-trust clutter
- Balance accessibility with beauty

### Proposed visual direction

- Main colors: deep teal, warm saffron, soft clay/off-white, charcoal
- Rounded but restrained components
- Rich typography with high readability
- Real human photography with consent
- Strong spacing and clean card design

### Output

- Color palette with accessibility checks
- Typography system
- Button/input/card styles
- Homepage art direction

## Phase 4: Technical Architecture

### Recommendation

Build the MVP as a mostly static site with secure server-side handling for forms.

### Stack proposal

- Framework: Next.js
- Rendering: Static-first with selective server functionality
- Styling: Tailwind CSS with design tokens
- Internationalization: route-based or dictionary-based English/Hindi support
- Forms: server-side validated contact endpoints
- Hosting: managed deployment with HTTPS and secure headers

### Why this direction

- Fast on slow networks
- Lower attack surface than a database-heavy dynamic site
- Easier maintenance
- Strong SEO
- Easier bilingual content handling

### Output

- Final architecture decision
- Repo setup
- Content model
- Deployment strategy

## Phase 5: Security Baseline Before Build

### Security controls to set up first

- Private repository practices and environment separation
- `.env` strategy with no secrets committed
- Dependency auditing in CI
- Branch protection if using Git hosting
- Secure deployment target selection
- Form abuse mitigation plan
- Access control plan for who can edit content or deploy

### Build-time security requirements

- Input validation for all public inputs
- Rate limiting for all public form endpoints
- Spam protection such as honeypot and server-side filtering
- Security headers in the framework config
- No inline unsafe scripts where avoidable
- Minimal third-party scripts
- No unnecessary trackers

### Launch-time security checks

- HTTPS enforcement
- Header validation
- Secrets review
- Dependency audit clean enough for production
- Admin account hardening
- Backup and rollback ready

### Output

- Security checklist
- Secure environment template
- Launch hardening checklist

## Phase 6: Content Production

### Tasks

- Write final English copy
- Translate and review Hindi copy
- Create impact/statistics section from verified data only
- Prepare privacy-safe story cards
- Write metadata and SEO descriptions
- Draft privacy note and consent-aware form copy

### Output

- Approved bilingual content package

## Phase 7: UI Design

### Priority screens

- Homepage
- About
- Work overview
- Program detail
- Impact
- Contact

### Design focus

- Fast recognition of key actions
- Trust-building without clutter
- Visual warmth without over-decoration
- High readability on modest mobile screens

### Output

- High-fidelity screens
- Mobile and desktop variants

## Phase 8: Development

### Build order

1. Repo and framework setup
2. Design tokens and layout shell
3. Bilingual content system
4. Homepage and navigation
5. Core pages
6. Forms and contact actions
7. Security headers and validation
8. SEO and analytics
9. QA refinements

### Done criteria

- All core pages available in English and Hindi
- Language switch works consistently
- Mobile navigation is easy to understand
- Contact form is secure and functional
- Accessibility basics pass review
- Performance is good on mobile

## Phase 9: QA and Validation

### UX QA

- Test with first-time users if possible
- Check that core actions are obvious on mobile
- Verify text size and contrast in both languages

### Functional QA

- Language persistence works
- Forms submit correctly
- Call, map, and email links work
- All internal navigation is stable

### Security QA

- Run dependency audit
- Verify headers
- Test spam and rate limiting behavior
- Verify no secret leaks in repo or build logs

## Phase 10: Launch

### Launch tasks

- Connect domain
- Enable HTTPS
- Set production environment variables
- Submit sitemap
- Configure analytics
- Test all forms and contact paths
- Verify page metadata

## Phase 11: Post-Launch

### First month improvements

- Add reports/resources section depth
- Publish more impact stories
- Improve based on analytics
- Consider future Telugu support if audience needs it

## Immediate Next Steps

1. Finalize PRD and this plan with your additional preferences
2. Choose the stack and hosting model
3. Set up the repository scaffold with bilingual and security-ready architecture
4. Begin wireframe and homepage implementation

## Recommendation

The best next move is to start implementation with a secure static-first Next.js foundation, bilingual content architecture, accessible mobile UI, and security hardening from day one. That gives us something real to build on while keeping risk and complexity under control.
