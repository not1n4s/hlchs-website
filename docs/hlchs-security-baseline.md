# HLCHS Website Security Baseline

## Purpose

This document defines the minimum security controls required before and during development of the HLCHS website.

It does not promise that the site can never be breached. No public web system can honestly guarantee that. The goal is to reduce risk, reduce attack surface, and make the website safer to operate and maintain.

## 1. Security Model

The safest MVP for HLCHS is:

- Static-first public pages
- Minimal backend surface area
- No public admin panel unless truly needed
- Secure server-side handling only for required forms
- Minimal personal data collection

## 2. Environment Separation

Create separate environments for:

- Local development
- Staging
- Production

Rules:

- Never reuse production secrets in development
- Never store secrets in source-controlled files
- Restrict production deploy permissions to approved maintainers only

## 3. Secrets Management

- Store secrets in deployment platform environment variables or managed secret storage
- Rotate secrets on team or vendor changes
- Keep API keys scoped to the smallest required permissions
- Review secret usage before every launch

## 4. Form Security

Any contact, volunteer, or partner inquiry form must include:

- Server-side validation
- Input sanitization
- Rate limiting
- Basic anti-spam control such as honeypot field
- Logging for failures and suspicious volume
- Clear retention and inbox handling policy

Avoid collecting:

- Medical details unless absolutely required
- Sensitive identity information
- Large free-form personal disclosures on public forms

## 5. Frontend Security Headers

Production should send secure headers including:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `Referrer-Policy`
- `X-Content-Type-Options`
- `Permissions-Policy`

Use a conservative CSP and add exceptions only when necessary.

## 6. Dependency and Build Security

- Use a lockfile
- Run dependency audit checks
- Keep framework and package versions updated
- Remove unused dependencies
- Minimize third-party scripts and embeds

## 7. Access Control

- Use least privilege for hosting, analytics, and repository access
- Enable MFA for all admin-capable accounts
- Limit who can deploy production
- Keep a short list of who owns domain, hosting, analytics, and form inboxes

## 8. Content and Privacy Safety

- Never publish identifiable sensitive health data
- Use written consent for recognizable photos and testimonials
- Prefer anonymized stories where possible
- Publish a privacy notice for contact forms

## 9. Backup and Recovery

- Ensure deployment platform backups or fast rollback capability
- Keep a copy of approved content assets
- Document how to restore the previous version quickly

## 10. Pre-Launch Security Checklist

- Production secrets configured securely
- HTTPS enabled
- Security headers verified
- No secrets committed to repo
- Forms validated and rate limited
- Dependency audit reviewed
- Third-party scripts reviewed
- Privacy notice added
- Contact inbox handling defined
- Rollback path tested

## 11. Post-Launch Security Operations

- Review dependency alerts regularly
- Remove old access for staff or vendors who leave
- Check form abuse and spam patterns
- Patch framework and hosting integrations promptly
- Re-verify security headers after major changes

## 12. Recommended Build Choice

Use a static-first Next.js deployment with:

- Content stored in files or a tightly controlled CMS
- Server actions or API routes only for contact forms
- No database unless a real product need appears

This is the best balance of usability, security, performance, and maintainability for HLCHS's first official website.
