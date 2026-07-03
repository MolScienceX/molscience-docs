---
outline: deep
---

# 平台页面维护说明

本页记录维护 MolScience 文档站点时需要了解的基础信息。

## 本地开发

常用命令：

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## 目录约定

- `docs/`：中文文档。
- `docs/en/`：英文文档。
- `docs/handbook/`：新成员入门手册。
- `docs/.vitepress/config.mts`：站点导航、侧边栏和多语言配置。

## 更新检查

1. 新增页面后，确认中文和英文路径都存在。
2. 更新导航或侧边栏链接。
3. 检查 Markdown 标题层级和相对链接。
4. 运行 `npm run docs:build`，确认站点可以构建。

## 适合放入文档的内容

- 新成员需要反复查阅的流程。
- 数据字段、单位、来源和质量控制要求。
- 可以复现的实验、脚本或模型步骤。
- 已经形成共识的协作规范。
