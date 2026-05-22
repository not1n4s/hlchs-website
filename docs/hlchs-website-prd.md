# HLCHS Website Product Requirements Document

## Document Status
- Version: 1.0
- Date: 2026-05-22
- Project: Official website for Hyderabad Leprosy Control & Health Society (HLCHS)
- Prepared for: Discovery, design, build, and launch planning

## 1. Product Summary

HLCHS needs an official website that presents the organization with dignity, clarity, and trust. The site should help visitors quickly understand what HLCHS does, whom it serves, and how to contact, support, or partner with the organization.

The website must work well for people with low digital confidence without feeling simplistic or patronizing. It should be bilingual from day one, with English and Hindi available through an easy language switch. The interface should feel warm, reassuring, and easy to navigate on mobile devices, which are likely to be the primary access point for many visitors.

## 2. Research Summary

Public references indicate that HLCHS is known as Hyderabad Leprosy Control & Health Society and has worked in public health, community care, and outreach. Public directory and research references associate HLCHS with:

- Leprosy detection, treatment, and disability-related support
- HIV/AIDS prevention and targeted intervention
- TB and allied disease support
- Work with women, children, and vulnerable communities
- Community outreach in and around Hyderabad
- Stigma reduction and health access support

Publicly visible directories also list the organization as a long-standing registered society and indicate that no official website is currently available.

Important note: all legal identifiers, program numbers, addresses, phone numbers, staff names, and impact figures must be verified directly with HLCHS before launch.

## 3. Product Vision

Create a website that feels:

- Trustworthy enough for partners, donors, and institutions
- Simple enough for first-time or low-confidence users
- Respectful toward the dignity of vulnerable communities
- Useful enough to serve as HLCHS's primary digital presence

## 4. Primary Goals

- Establish an official, trustworthy online presence
- Explain HLCHS's mission, services, and program areas clearly
- Help community members find contact, address, and support information fast
- Enable donors, CSR teams, and institutional partners to evaluate and contact HLCHS
- Present impact and program work in a credible, privacy-safe format
- Support bilingual communication in English and Hindi

## 5. Non-Goals for MVP

- Complex beneficiary portals or patient dashboards
- Online medical diagnosis or treatment workflows
- Large donation platform development from scratch
- Community forums or user-generated public content
- Overly animated or high-cognitive-load interactions

## 6. Target Audiences

### Primary

- Community members seeking guidance, support, or contact details
- NGOs, foundations, and CSR decision-makers
- Public-health collaborators and institutional partners
- Volunteers and socially engaged students

### Secondary

- Media and researchers
- Government stakeholders
- Current supporters seeking updates and reports

## 7. Key User Needs

### Community visitors

- "What help does HLCHS provide?"
- "Where is the office?"
- "How do I call or message them?"
- "Is this organization genuine and trustworthy?"

### Donors and CSR teams

- "What does HLCHS do?"
- "What is the impact?"
- "Are they compliant and legitimate?"
- "Who can I contact for partnership or funding?"

### Partners and volunteers

- "What programs are active?"
- "What kind of collaboration is useful?"
- "How do I reach the right person?"

## 8. Core Experience Principles

### 8.1 Bilingual by default

English and Hindi must both be first-class languages. The language switch should be obvious, persistent, and available on every page without forcing the user to dig into menus.

### 8.2 Easy without feeling cheap

The UI should reduce friction through clear labels, familiar patterns, large touch targets, clean page structure, and calm pacing. It must not look childish, cluttered, or "budget" in a way that undermines trust.

### 8.3 Mobile-first usability

Most core actions should be reachable in one or two taps on mobile. Contact, call, map, and WhatsApp should be especially easy to find.

### 8.4 Dignity-first storytelling

The site must avoid pity-driven imagery or language. Use respectful photos, careful terminology, and privacy-safe stories.

### 8.5 Trust at a glance

Visitors should quickly see that HLCHS is established, active, and real. Verification elements should appear early and clearly.

## 9. Visual and UX Direction

### Desired feeling

- Calm
- Human
- Welcoming
- Serious
- Trustworthy
- Non-elite but polished

### UI approach

- Clean layout with strong visual hierarchy
- High contrast, readable text, and clear spacing
- Large tappable buttons and obvious calls to action
- Familiar icon-supported actions for call, location, message, language, and donate
- Minimal form complexity
- Limited number of choices per screen

### Color strategy

The visual palette should feel warm and reassuring while remaining accessible and professional. Instead of elite corporate blues or flashy charity colors, use grounded tones such as:

- Deep teal or peacock green for trust
- Warm saffron or muted marigold for action emphasis
- Soft clay, sand, or warm off-white for background support
- Charcoal or deep slate for text

These colors can resonate well across diverse audiences because they feel culturally familiar, optimistic, and readable. Contrast ratios must still meet accessibility standards.

Avoid:

- Harsh neon colors
- Overly dark themes
- Purple-heavy generic startup palettes
- Visual clutter or too many competing colors

## 10. Information Architecture

- Home
- About HLCHS
- Our Work
- Impact
- Stories
- Get Involved
- Resources
- Contact

### Proposed "Our Work" subpages

- Leprosy Care & Rehabilitation Support
- HIV/AIDS Outreach & Prevention
- TB & Allied Health Support
- Women, Children & Community Wellbeing
- Counselling, Referral & Stigma Reduction

## 11. MVP Page Requirements

### Home

- Mission-led hero section
- English/Hindi language switch
- Quick action buttons: Get Help, Contact Us, Support HLCHS
- Short explanation of HLCHS
- Program overview cards
- Trust and verification strip
- Impact summary
- Contact and location preview

### About

- Organizational history
- Mission and values
- Leadership or organizational structure if approved
- Registration/compliance details

### Our Work

- Simple overview of all program areas
- Each program explained in plain language
- Clear statement of who the support is for

### Impact

- Verified numbers only
- Program outcomes
- Reports or annual summaries if available

### Stories

- Privacy-safe stories
- Staff voices, community narratives, field snapshots

### Get Involved

- Donate or support information
- Volunteer/partner form
- CSR and institutional inquiry path

### Resources

- Fact sheet
- Annual report PDFs
- Downloadable partner deck if available

### Contact

- Address
- Phone
- Email
- Map
- Office timings
- Contact form
- Optional WhatsApp button

## 12. Functional Requirements

- Responsive website for mobile, tablet, and desktop
- Full bilingual support for English and Hindi
- Persistent language switch across the site
- Contact form with validation and spam protection
- Click-to-call phone links on mobile
- WhatsApp deep link if HLCHS approves
- Search-engine-friendly page structure and metadata
- CMS-ready content model or simple maintainable content system
- Analytics for page visits, form submissions, and CTA clicks
- Fast page load on slower mobile networks

## 13. Language and Content Requirements

### Language support

- All public-facing core content must be available in English and Hindi
- Language toggle should remember the user's last choice
- No machine-only translations in final production content
- Hindi typography must remain highly readable on low-resolution mobile screens

### Content style

- Plain language
- Short paragraphs
- Clear headings
- Limited jargon
- Respectful health terminology
- Avoid bureaucratic wording

## 14. Accessibility Requirements

- WCAG-oriented color contrast
- Keyboard-accessible navigation
- Focus states for interactive elements
- Clear labels on buttons and forms
- Minimum comfortable tap target sizes on mobile
- Legible font sizes and line spacing
- Icons paired with text for important actions
- Pages understandable even for users with low website fluency

## 15. Security Requirements

Absolute security cannot be guaranteed for any public website, so the goal is to reduce risk through layered controls and secure operating practices. The HLCHS website should launch only with a strong baseline security posture.

### Hosting and infrastructure

- Use a reputable managed host with HTTPS, patching, backups, and DDoS protections
- Enforce HTTPS everywhere
- Use HSTS after initial validation
- Keep production, staging, and local environments separated
- Restrict admin access with least privilege

### Application security

- Sanitize and validate all form inputs
- Avoid storing unnecessary personal data
- Use CSRF protections on forms
- Use secure headers:
  - Content-Security-Policy
  - X-Frame-Options or equivalent frame-ancestors policy
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy
- Prevent open redirects and unsafe file uploads
- Use rate limiting on contact and inquiry endpoints
- Log suspicious activity without storing sensitive personal content unnecessarily

### Secrets and environment handling

- Store secrets only in environment variables or managed secret storage
- Never hardcode credentials in the repository
- Use separate credentials for each environment
- Rotate secrets during handoff or after vendor/staff changes

### Data protection

- Collect the minimum possible personal information
- Encrypt data in transit
- Limit data retained from forms and inquiries
- Define who can access inbound inquiries
- Set up secure email handling for form submissions

### Operational security

- Enable dependency updates and patch monitoring
- Use dependency scanning and audit checks in CI
- Document backup and restore procedures
- Create an incident response checklist
- Use strong admin passwords and MFA where available

### Privacy and sensitive populations

- Avoid publishing identifiable medical or stigmatized-condition information
- Require explicit consent for photos and testimonials
- Prefer anonymized stories where appropriate
- Add a privacy notice for contact forms

## 16. Content and Data Needed from HLCHS

- Official logo and brand approval
- Verified full name and preferred abbreviation
- Approved mission statement
- Current program details
- Verified address and contact details
- Legal registrations and compliance details
- Impact data that can be published
- Photos with consent
- Reports, brochures, or fact sheets
- Donation process details

## 17. Suggested Technology Direction

For this project, the safest and most maintainable option is a small, modern, content-first stack with strong defaults.

Recommended direction:

- Frontend: Next.js or Astro with strong static rendering
- Styling: Tailwind CSS or a small custom design system
- Content: Markdown/MDX or headless CMS if HLCHS needs non-technical updates
- Forms: Secure server action or serverless endpoint with validation and rate limiting
- Hosting: Vercel, Netlify, or Cloudflare-based deployment with HTTPS

For MVP, a mostly static architecture is preferable because it reduces attack surface, improves speed, and keeps maintenance easier.

## 18. Success Metrics

- Users can reach contact details within 10 seconds on mobile
- Bounce rate on homepage reduced through clearer trust and navigation
- Increase in inbound contact or partnership inquiries
- Strong discoverability for branded searches related to HLCHS
- Low form-abandonment rate
- No critical accessibility or security issues at launch

## 19. Risks and Constraints

- Incomplete or inconsistent source information about HLCHS
- Need for accurate Hindi translation and review
- Potential sensitivity of health-related content and imagery
- Limited internal content owners for regular updates
- Dependence on verified legal/compliance materials

## 20. Open Decisions Before Build

- Does HLCHS want a donation gateway on day one or a contact-led donation flow?
- Will stories include names/faces or use anonymized narratives only?
- Does the team want a simple editable CMS or a developer-managed content workflow?
- Should the website launch with English and Hindi only, or prepare for future Telugu support?
