# Blog Project Agent Rules

## 블로그 글 작성 규칙

블로그 글 작성 시 `content/blog-schema.yaml` 스키마를 참조하여 작업을 수행합니다.

### 새 블로그 글 작성 시
1. `content/blog/`에 `.md` 파일 생성
2. frontmatter 필수 필드: `title`, `date`, `tagName`
3. 날짜 형식: `YYYY-MM-DD`
4. 파일명 = URL slug (영문 소문자, 하이픈 사용)

### 썸네일 이미지 추가 시
1. 이미지를 `public/assets/image/blog/`에 저장
2. frontmatter `image` 필드에 `/assets/image/blog/파일명` 설정
3. 파일명은 slug와 동일하게 권장

### 스키마 참조
상세 스키마는 `content/blog-schema.yaml` 파일 참조
