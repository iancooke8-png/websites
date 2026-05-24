# Perpetual Wealth Group websites

Monorepo for the group's marketing websites.

## Sites
- `family-capital/` — familycapital.co.uk (live)

## Workflow
Three machines, identical setup. GitHub is source of truth.

```
git pull → edit → git push → bash deploy-fc.sh "msg" (when ready to publish)
```

## Family Capital

**Source of truth**: `family-capital/` in this repo.

**Local preview**: `npx http-server family-capital -p 8080 -c-1` (VS Code launch config in `.claude/launch.json`).

**Deploy**: `bash deploy-fc.sh "commit message"` — rsyncs source to `../familycapital-deploy/`, writes CNAME, commits, pushes. GitHub Pages on `iancooke8-png/familycapital` serves familycapital.co.uk.

**Never** edit the deploy repo (`iancooke8-png/familycapital`) directly — it gets clobbered on next deploy.

## Stack
Plain static HTML/CSS/JS. No build step. No framework.