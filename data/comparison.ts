import type { ComparisonRow } from '~/types/content';

export const comparisonRows: ComparisonRow[] = [
  { label: '비용', fullTime: '높은 고정 인건비', agency: '월 수수료 및 실행비', monthlycso: '월 단위 구독' },
  { label: '리스크', fullTime: '채용 실패 리스크', agency: '실행 품질 편차', monthlycso: '낮은 진입 비용' },
  { label: '역할', fullTime: '내부 C-Level', agency: '실행 대행', monthlycso: '의사결정 파트너' },
  { label: '관점', fullTime: '내부 조직 중심', agency: '매체/업무 중심', monthlycso: '사업·세일즈·마케팅 통합' },
  { label: '유연성', fullTime: '낮음', agency: '중간', monthlycso: '높음' },
  { label: '적합 대상', fullTime: '성장 조직', agency: '실행 리소스 부족', monthlycso: '방향과 우선순위가 필요한 대표' }
];
