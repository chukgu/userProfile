# monthlycso

월구독 CSO 브랜드 웹사이트입니다. Nuxt 3, TypeScript, Tailwind CSS 기반의 One Page Landing Page로 구성되어 있습니다.

## Stack

- Nuxt 3
- Vue 3
- TypeScript
- Tailwind CSS
- Static generation for Vercel or Cloudflare Pages

## Local Development

```bash
npm install
npm run dev
```

Nuxt dev server 기본 URL은 보통 `http://localhost:3000`입니다. 포트를 고정하려면 아래처럼 실행합니다.

```bash
npm run dev -- --host 127.0.0.1 --port 3000
```

## Build

```bash
npm run generate
```

정적 산출물은 `.output/public`에 생성됩니다.

## Preview Static Build

정적 빌드 결과를 로컬에서 확인하려면 먼저 generate를 실행한 뒤 정적 서버를 띄웁니다.

```bash
npm run generate
python3 -m http.server 4174 --bind 127.0.0.1 --directory .output/public
```

브라우저에서 아래 URL로 확인합니다.

```text
http://127.0.0.1:4174
```

다른 프로세스가 `4174` 포트를 쓰고 있다면 포트 번호만 바꿔 실행합니다.

```bash
python3 -m http.server 4175 --bind 127.0.0.1 --directory .output/public
```

## Open With Localtunnel

로컬 정적 서버가 `4174`에서 실행 중일 때 Localtunnel로 외부 접근 URL을 열 수 있습니다.

```bash
npx localtunnel --port 4174 --subdomain monthlycso-dev
```

정상 실행되면 아래와 같은 URL이 출력됩니다.

```text
your url is: https://monthlycso-dev.loca.lt
```

외부에서 접속할 URL:

```text
https://monthlycso-dev.loca.lt
```

Localtunnel은 세션이 살아있는 동안만 URL이 유지됩니다. 터널을 종료하려면 Localtunnel을 실행한 터미널에서 `Ctrl+C`를 누릅니다.

응답 확인:

```bash
curl -I https://monthlycso-dev.loca.lt
```

## Environment

Copy `.env.example` to `.env` and set values.

```bash
NUXT_PUBLIC_SITE_URL=https://monthlycso.com
NUXT_PUBLIC_CONTACT_FORM_URL=
NUXT_PUBLIC_GA4_ID=
NUXT_PUBLIC_CLARITY_ID=
```

If `NUXT_PUBLIC_CONTACT_FORM_URL` is empty, the contact section renders an inline Formspree-compatible form placeholder. Replace `https://formspree.io/f/your-form-id` in `components/sections/ContactSection.vue` or set the environment variable to a Tally/Formspree URL.
