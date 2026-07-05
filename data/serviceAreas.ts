import type { ServiceArea } from '~/types/content';

export const serviceAreas: ServiceArea[] = [
  {
    key: 'strategy',
    title: 'Strategy',
    summary: '사업 방향과 우선순위를 정리합니다.',
    items: ['비즈니스 모델 점검', '상품·가격 구조 분석', '월간 의사결정 아젠다 설계']
  },
  {
    key: 'marketing',
    title: 'Marketing',
    summary: '고객이 선택할 수 있는 메시지와 채널 기준을 만듭니다.',
    items: ['고객 의도 분석', '콘텐츠 메시지 정렬', '캠페인 우선순위 점검']
  },
  {
    key: 'sales',
    title: 'Sales',
    summary: '상담과 제안이 매출로 이어지는 흐름을 개선합니다.',
    items: ['세일즈 퍼널 진단', '제안 구조 개선', '클로징 스크립트 점검']
  }
];
