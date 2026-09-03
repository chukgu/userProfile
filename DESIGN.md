# Design — monthlycso

Locked design system. Future Hallmark runs read this file first; pages defer to it.
Amend intentionally — this file is the rule.

## System

- Genre · warm editorial
- Macrostructure · conversational letter + soft editorial moments
- Theme · custom (insightful, warm, clear, candid, thoughtful)
- Axes · warm ivory / soft black / terracotta accent

## Positioning

- Core statement · 대표의 다음 결정을 함께 설계합니다.
- Audience · 1인 대표, 작은 브랜드, 로컬 비즈니스
- Memory device · The Next Decision
- Narrative · 문제 → 판단 → 우선순위 → 실행 → 회고

## Tokens

```css
:root {
  --color-paper: #f7f5f0;
  --color-paper-2: #eeeae2;
  --color-ink: #20201e;
  --color-ink-2: #393936;
  --color-muted: #6f6c66;
  --color-rule: #d8d2c8;
  --color-accent: #c87355;
  --color-accent-ink: #20201e;
  --color-focus: #8e432e;
  --color-navy: #172a3a;
  --font-display: "Noto Sans KR", "Pretendard", sans-serif;
  --font-body: "Noto Sans KR", "Pretendard", sans-serif;
  --font-wordmark: "Cormorant Garamond", Georgia, serif;
  --space-3xs: 0.25rem;
  --space-2xs: 0.5rem;
  --space-xs: 0.75rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4.5rem;
  --space-3xl: 7rem;
  --space-4xl: 10rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 180ms;
  --dur-base: 240ms;
}
```

## Typography

- Display · Noto Sans KR 500–600, roman, softly tightened
- Body · Noto Sans KR 400, 45–70 characters per line
- Wordmark · Cormorant Garamond 600, used only for the brand mark
- Large Korean statements use deliberate line breaks per breakpoint.
- English labels are rare and identify a framework, never decorate every section.

## Composition

- Prefer conversational statements, soft surfaces, marginal notes, and irregular rhythm.
- Cards are reserved for actual selection or grouped controls.
- Every section must earn a distinct rhythm; do not repeat heading + equal grid.
- The Next Decision is the single signature interaction.

## CTA voice

- Primary · brand navy fill, 12px radius, compact and direct copy
- Secondary · typographic link with a directional arrow
- Hero invites exploration; consultation becomes primary only after the offer is understood.

## Motion stance

- Restrained: line transitions, number/content crossfade, button arrow movement.
- No decorative parallax, blobs, bounce, or universal hover scaling.
- Reduced-motion fallback: no transforms, opacity transition at most 150ms.

## Non-negotiables

- Navy occupies no more than 15% of the page and never fills a major content section.
- No generic SaaS hero, bento grid, glassmorphism, stock imagery, emoji icons, or fabricated metrics.
- No more than two section eyebrows on the page.
- No horizontal overflow at 320 / 375 / 414 / 768px.
- Interactive labels never wrap; focus states remain visible.
