import type { ServiceArea } from '~/types/content';

export const serviceAreas: ServiceArea[] = [
  {
    key: 'strategy',
    title: '⚡ Strategy',
    summary: '돈이 흘러 들어오는 구조와 우선순위를 설계합니다.',
    items: ['비즈니스 체급 점검', '상품·가격 구조 최적화', '월간 의사결정 아젠다 도출']
  },
  {
    key: 'marketing',
    title: '⚡ Marketing',
    summary: '고객이 지갑을 열 수밖에 없는 명확한 트리거를 만듭니다.',
    items: ['초정밀 고객 의도 분석', '콘텐츠/메시지 정렬', '채널 가성비 점검']
  },
  {
    key: 'sales',
    title: '⚡ Sales',
    summary: '문의와 제안이 이탈 없이 즉시 결제로 이어지게 만듭니다.',
    items: ['세일즈 퍼널 올인원 진단', '반박 불가능한 제안 구조 개선', '즉시 먹히는 클로징 스크립트']
  }
];
