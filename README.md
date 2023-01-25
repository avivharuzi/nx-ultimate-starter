# Nx Ultimate Starter

Nx starter for complete full stack development including NestJS and Angular with extra features.

## Nx Version

15.6.0

## Nest Version

9.0.0

## Angular Version

15.1.0

## ✨ Features

✅ Nx

✅ SCSS Support

✅ PWA (progressive web app)

✅ Jest (unit testing)

✅ ESLint

✅ Prettier (format code style)

✅ Husky (git hooks)

✅ Commitizen

## 🎯 Prerequisites

- Node.js (>= 18 required)
- npm package manager (>= 8 required)

## 🎢 Getting Started

- Replace all `nx-ultimate-starter` keyword from this project with your new project name, for example: `my-website`
- Replace `apps/web/src/favicon.ico` with your website favicon
- Replace `apps/web/src/assets/icons` with your website icons
- Update `apps/web/src/manifest.webmanifest` according to your website
- Update `apps/web/src/index.html` according to your website
- Create `.env` file from `.env.example` file content and change values to your needs
- Update this `README.md` file according to your project changes
- If you are using monorepo multi-package repository consider removing `husky` (git hooks) npm package to prevent conflicts between repos, I recommended deleting `.husky` directory, remove npm `prepare` script and run: `npm uninstall husky` and then maybe to add `husky` in the root of the project

## 🕹 Commands

Serve apps in development mode.

```bash
npm start
```

Build apps for production.

```bash
npm run build
```

Test all.

```bash
npm test
```

Lint all.

```bash
npm run lint
```

Run commitizen.

```bash
npm run cz
```
