# Diary Monorepo

개인 포트폴리오 사이트와 블로그 서버를 포함한 모노레포입니다.

## 프로젝트 구조

```
diary/
├── apps/
│   ├── client/          # 포트폴리오 사이트 (Remix + Vite)
│   └── server/          # 블로그 서버 (Speed Metal Stack)
└── package.json
```

## 개발 환경 설정

### 전체 설치

```bash
pnpm install
```

### 개발 서버 실행

#### 모든 앱 동시 실행

```bash
pnpm dev
```

#### 개별 실행

```bash
pnpm dev:client

pnpm dev:server
```

## 빌드

### 전체 빌드

```bash
pnpm build
```

### 개별 빌드

```bash
pnpm build:client
pnpm build:server
```

## 배포

- **Client**: `danee.kr`
- **Server**: Fly.io (Speed Metal Stack)

## 기술 스택

### Client

- Remix + Vite
- Vanilla Extract CSS
- Framer Motion
- TypeScript

### Server (블로그)

- Remix + Express
- SQLite + Prisma
- MDX (블로그 포스트)
- Tailwind CSS
- TypeScript
