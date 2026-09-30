# Future CloudPanel deployment (approval required)

This repository is prepared for the same static-export model as the other
restaurant sites, but no deployment workflow or credential is active.

## Build artifact

Run `npm ci`, `npm run typecheck`, `npm run build`, then
`node scripts/verify-export.mjs out`. Upload the **contents of `out/`** to the
confirmed CloudPanel document root. Do not upload the `out` directory as an
extra nested folder.

The intended production domain is `catalinapizzaandchicken.com`. The exact
CloudPanel site user, document root, SSH host/port, and GitHub deployment key
must be confirmed before any deployment automation is created.

## Approval-gated launch checklist

- Confirm the CloudPanel site user, production document root, host, and SSH port.
- Back up the current WordPress files and database and document rollback steps.
- Confirm whether legacy WordPress URLs need redirects.
- Connect and test a Catalina-owned static form endpoint.
- Verify every GloriaFood button and the direct fallback on the production origin.
- Verify phone, directions, Facebook, map, analytics, and review widget.
- Build and validate `out/`; sync its contents without nesting `out/`.
- Confirm SSL, apex/`www` behavior, and DNS only with separate approval.
- Keep a rollback copy until ordering and contact paths pass live-domain checks.
- Enable deployment automation only after explicit launch approval.

Nothing in this document is an authorization to deploy or change DNS,
Cloudflare, SSL, Nginx, WordPress, or CloudPanel.
