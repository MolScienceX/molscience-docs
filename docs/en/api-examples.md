---
outline: deep
---

# Site Maintenance

This page records basic information for maintaining the MolScience documentation site.

## Local development

Common commands:

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## Directory conventions

- `docs/`: Chinese documentation.
- `docs/en/`: English documentation.
- `docs/handbook/`: onboarding handbook for new members.
- `docs/.vitepress/config.mts`: site navigation, sidebar, and locale configuration.

## Update checklist

1. After adding a page, confirm that both Chinese and English paths exist.
2. Update navigation or sidebar links.
3. Check Markdown heading levels and relative links.
4. Run `npm run docs:build` to confirm the site builds successfully.

## Content that belongs in the docs

- Workflows that new members need to revisit.
- Data field, unit, source, and quality-control requirements.
- Reproducible experiment, script, or model steps.
- Collaboration rules that have reached team agreement.
