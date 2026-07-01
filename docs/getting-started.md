# Getting Started

## Requirements

Use a current Node.js version supported by Next.js 16. The project is tested with npm and the committed lockfile.

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`. The dashboard uses mock data and does not require a GitHub token.

## Tests

```bash
npm run test
```

Use watch mode while developing:

```bash
npm run test:watch
```

## Lint, Typecheck, and Build

```bash
npm run lint
npm run typecheck
npm run build
```

Run all checks before opening a pull request. CI runs the same core commands with `npm ci`.
