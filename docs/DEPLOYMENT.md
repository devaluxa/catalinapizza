# CloudPanel deployment

Production is deployed automatically from the GitHub `main` branch by
`.github/workflows/deploy.yml`.

## Production target

- Domain: `https://catalinapizzaandchicken.com/`
- CloudPanel host: `148.116.84.122`
- SSH port: `22`
- Site user: `catalinapizzaandchicken`
- Document root: `/home/catalinapizzaandchicken/htdocs/catalinapizzaandchicken.com/`

The workflow builds the Next.js static export and synchronizes the **contents of
`out/`** to the document root. It preserves `.well-known/` and `.user.ini` while
removing obsolete site files.

## Required repository secret

- `CLOUDPANEL_SSH_PRIVATE_KEY`: the Catalina-specific deployment key whose
  public key is authorized for the CloudPanel site user.

## Release process

1. Commit the approved change.
2. Push to `main`.
3. Confirm the `Build and deploy Catalina Pizza` workflow succeeds.
4. Verify the live domain, ordering widget, and key contact links.

Use the workflow's manual dispatch button when the current `main` commit needs
to be redeployed without a source change.
