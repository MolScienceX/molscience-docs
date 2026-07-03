# Documentation Style

This page describes the basic writing rules for MolScience documentation. The goal is to keep Chinese and English pages structurally consistent, accurate, and easy to maintain.

## Page structure

- Use only one first-level heading per page.
- Start with the page purpose, then provide workflows, checklists, or examples.
- Write actionable onboarding content as steps or checklists when possible.
- When a page includes data, conclusions, or external resources, provide a source or mark the content as to be confirmed.

## Bilingual consistency

- Chinese pages live in `docs/`, and English pages live in `docs/en/`.
- When core content is added or changed, check the corresponding language version.
- Headings, workflows, links, data requirements, and warnings should stay consistent.
- Wording can follow each language's style; literal translation is not required.

## Terminology

| 中文 | English |
| --- | --- |
| 新人手册 | Handbook |
| 数据来源 | Data source |
| 字段 | Field |
| 单位 | Unit |
| 待确认 | To be confirmed |
| 拉取请求 | Pull request |

## Callouts

VitePress supports callout blocks for important notes.

::: tip
Use a callout when the content affects data quality, reproducibility, or collaboration decisions.
:::

::: warning
Do not write uncertain experimental conditions, data sources, or model conclusions as confirmed facts.
:::
