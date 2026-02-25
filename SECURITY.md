# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| latest  | Yes       |

We only apply security fixes to the latest release on the `main` branch.

## Reporting a Vulnerability

If you discover a security vulnerability in Sniprl, **please do not open a public issue**. Instead:

1. Email **[security@nexisltd.com](mailto:security@nexisltd.com)** with:
   - A description of the vulnerability.
   - Steps to reproduce it.
   - Any potential impact or severity assessment.
2. You will receive an acknowledgement within **48 hours**.
3. We will work with you to understand and resolve the issue before any public disclosure.

## Scope

The following are in scope:

- The Sniprl web application and its API routes.
- Authentication & session handling.
- URL redirect logic and input validation.
- Database access and data exposure risks.

The following are **out of scope**:

- Denial-of-service attacks against the production deployment.
- Social engineering of Nexis LTD staff.
- Vulnerabilities in third-party services (Vercel, GitHub OAuth, Google OAuth) — report those to the respective vendors.

## Disclosure Policy

- We follow **coordinated disclosure**: we will credit reporters (unless they prefer anonymity) once a fix is released.
- We aim to release patches within **7 days** of confirming a vulnerability.

## Contact

- Email: [security@nexisltd.com](mailto:security@nexisltd.com)
- PGP: Available on request.

Thank you for helping keep Sniprl and its users safe.
