import type { PricingPlan } from '~/types/pricing';

export const pricingPlans: PricingPlan[] = [
  {
    name: '커피챗 Demo',
    value: 'demo',
    price: '99,000원',
    period: '1회 50분',
    description: '맛보기 1:1 진단',
    features: ['현재 고민 퀵 진단', '우선순위 1개 정리', '후속 구독 적합도 판단']
  },
  {
    name: '라이트',
    value: 'lite',
    price: '490,000원',
    period: '월',
    description: '월간 원포인트 진단',
    features: ['월 1회 전략 미팅', '액션 체크리스트', '핵심 병목 1개 집중 점검'],
    recommended: true
  },
  {
    name: '스탠다드',
    value: 'standard',
    price: '1,490,000원',
    period: '월',
    description: '월간 정기 구독형 성장 전략',
    features: ['주 1회 정기 미팅', 'Intent-Market Fit 리포트', '콘텐츠 & 세일즈 플레이북']
  },
  {
    name: '프로',
    value: 'pro',
    price: '3,000,000원',
    period: '월',
    description: '파트타임 CSO형 밀착 파트너',
    features: ['주 1회 온/오프라인 3시간 미팅', 'CSO 임팩트 리포트', '팀 실행 피드백']
  },
  {
    name: 'B2B 자율 주제',
    value: 'b2b',
    price: 'TBD',
    period: '프로젝트',
    description: '프로젝트형 제안',
    features: ['주제별 맞춤 범위', 'B2B 세일즈/신사업 판단', '별도 제안서 협의']
  }
];
