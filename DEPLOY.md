# 배포 가이드

## 방법 1: Netlify (추천 - 가장 쉬움) ⭐

### 단계별 가이드:

1. **GitHub에 코드 업로드**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Netlify 배포**
   - https://www.netlify.com 접속
   - "Sign up" 클릭 (GitHub 계정으로 가입 가능)
   - "Add new site" → "Import an existing project" 클릭
   - GitHub 선택 후 저장소 연결
   - 빌드 설정:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - "Deploy site" 클릭
   - 배포 완료 후 자동으로 URL 생성 (예: `yourname.netlify.app`)

3. **커스텀 도메인 설정 (선택사항)**
   - Site settings → Domain management
   - Custom domain 추가

---

## 방법 2: Vercel (추천 - 빠름) ⚡

### 단계별 가이드:

1. **GitHub에 코드 업로드** (위와 동일)

2. **Vercel 배포**
   - https://vercel.com 접속
   - "Sign up" 클릭 (GitHub 계정으로 가입 가능)
   - "Add New Project" 클릭
   - GitHub 저장소 선택
   - Framework Preset: Vue.js 선택
   - "Deploy" 클릭
   - 배포 완료 후 자동으로 URL 생성 (예: `yourname.vercel.app`)

---

## 방법 3: GitHub Pages

### 단계별 가이드:

1. **vue.config.js 파일 생성 필요**
   ```javascript
   module.exports = {
     publicPath: process.env.NODE_ENV === 'production'
       ? '/profile/'  // GitHub 저장소 이름
       : '/'
   }
   ```

2. **배포 스크립트 추가** (package.json)
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **gh-pages 설치**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **배포 실행**
   ```bash
   npm run deploy
   ```

5. **GitHub Pages 활성화**
   - 저장소 Settings → Pages
   - Source: gh-pages branch 선택
   - URL: `https://username.github.io/profile/`

---

## 방법 4: Firebase Hosting

### 단계별 가이드:

1. **Firebase CLI 설치**
   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase 로그인**
   ```bash
   firebase login
   ```

3. **프로젝트 초기화**
   ```bash
   firebase init hosting
   ```
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub Actions: No

4. **빌드 및 배포**
   ```bash
   npm run build
   firebase deploy
   ```

---

## 배포 전 체크리스트

### 1. 프로덕션 빌드 테스트
   ```bash
   npm run build
   npm install -g serve
   serve -s dist
   ```
   로컬에서 빌드된 파일이 정상 작동하는지 확인

### 2. 환경 변수 설정 (필요시)
   - `.env.production` 파일 생성
   - API 키 등 민감한 정보는 환경 변수로 관리

### 3. URL 업데이트
   - `public/index.html`의 메타 태그 URL 업데이트
   - `public/robots.txt`의 sitemap URL 업데이트
   - `src/App.vue`의 구조화된 데이터 URL 업데이트

### 4. Google Form URL 확인
   - `src/App.vue`의 `googleFormUrl`이 실제 Google Form 링크인지 확인

---

## 추천 순서

1. **Netlify** - 가장 쉬움, 무료, 자동 HTTPS
2. **Vercel** - 빠른 배포, 좋은 성능
3. **GitHub Pages** - 무료, GitHub과 통합
4. **Firebase Hosting** - Google 서비스와 통합

---

## 배포 후 확인사항

- [ ] 사이트가 정상적으로 로드되는지 확인
- [ ] 모든 링크가 작동하는지 확인
- [ ] 모바일 반응형이 정상인지 확인
- [ ] SEO 메타 태그가 올바른지 확인
- [ ] Google Form 링크가 작동하는지 확인
