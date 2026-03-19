---
name: write-blog
description: This skill should be used when creating a new blog post for this diary project. Handles file creation in content/blog/ with correct frontmatter fields (title, date, tagName), slug-based naming, and thumbnail image setup following the project's blog-schema.yaml.
---

# 블로그 글 작성 스킬

## 스키마 참조

상세 스키마는 `blog-schema.yaml` 파일을 참조합니다.

## 새 블로그 글 작성

1. `content/blog/`에 `.md` 파일 생성
2. frontmatter 필수 필드 포함:
   - `title`: 블로그 글 제목
   - `date`: 작성일 (YYYY-MM-DD 형식)
   - `tagName`: 태그 (쉼표로 구분)
3. 파일명은 URL slug로 사용 (영문 소문자, 하이픈 사용)

### frontmatter 예시

```yaml
---
title: "SSR 환경에서 OS 테마 대응하기"
date: 2026-03-19
tagName: "Remix, SSR, Theme"
description: "웹 페이지와 기기 테마 통일을 통해 UX 향상시키기"
---
```

## 썸네일 이미지 추가

1. 이미지를 `public/assets/image/blog/`에 저장
2. frontmatter `image` 필드에 `/assets/image/blog/파일명` 형식으로 설정
3. 파일명은 slug와 동일하게 권장

### 예시

```yaml
image: /assets/image/blog/ssr.jpg
```

## 태그 규칙

기존 태그 목록 (`blog-schema.yaml`의 `tags` 참조):
- Remix, SSR, Theme, Context API, Design Pattern, Timeline

새 태그 추가 시:
- PascalCase 또는 단어 조합 사용
- `blog-schema.yaml`의 `tags` 목록에도 추가
