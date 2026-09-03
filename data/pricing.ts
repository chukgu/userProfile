import type { PricingPlan } from '~/types/pricing';

export const pricingPlans: PricingPlan[] = [
  {
    name: '커피챗 (Demo)',
    value: 'demo',
    price: '99,000원 / 1회',
    description: '“현재 마주한 비즈니스 고민을 가볍고 빠르게 진단합니다.”',
    details: [
      { label: '미팅 주기', value: '단발성 (1회, 50분)' },
      { label: '주요 내용', value: '현재 비즈니스 고민 Q&A + 가벼운 구매 의도(인텐트) 진단' },
      { label: '남는 레거시', value: '미팅 메모 및 핵심 퀵 가이드 제공' }
    ]
  },
  {
    name: '라이트 (인텐트 진단)',
    value: 'lite',
    price: '490,000원 / 월',
    description: '“대표님의 핵심 문제 1가지를 칼같이 해결하는 원포인트 솔루션”',
    details: [
      { label: '미팅 주기', value: '주 1회 집중 커피챗 (60분)' },
      { label: '주요 내용', value: '대표님의 핵심 문제 1가지 해결 + 즉시 실행할 액션 플랜 수립' },
      { label: '남는 레거시', value: '다음 달 원페이지 액션 체크리스트' }
    ]
  },
  {
    name: '스탠다드',
    value: 'standard',
    price: '1,490,000원 / 월',
    description: '“대표의 판단을 실행과 회고로 연결하는 정기 구독”',
    details: [
      { label: '미팅 주기', value: '주 1회 정기 미팅' },
      { label: '주요 내용', value: '세일즈 + 마케팅 + 콘텐츠 전반 점검 및 신규 성장 전략 플래닝' },
      { label: '남는 레거시', value: '의도-시장 적합성(인텐트 마켓 핏) 리포트 제공' }
    ],
    recommended: true
  },
  {
    name: '프로 (밀착 파트너)',
    value: 'pro',
    price: '3,000,000원 / 월',
    description: '“내부 의사결정 과정까지 함께하는 밀착형 플랜”',
    details: [
      { label: '미팅 주기', value: '주 1회 온/오프라인 미팅 (밀착 3시간)' },
      { label: '주요 내용', value: '대표님과 한 팀이 되어 내부 회의 참석 + 신규 비즈니스 모델(BM) 설계' },
      { label: '남는 레거시', value: 'CSO 비즈니스 임팩트 리포트 또는 과업 관련 커스텀 플래닝' }
    ]
  },
  {
    name: '자율 주제 (B2B 전용)',
    value: 'b2b',
    price: 'TBD (프로젝트 범위별 상의)',
    description: '“B2B 세일즈, 신사업 판단 등 특정 과제를 해결하기 위한 맞춤형 프로젝트”',
    details: [
      { label: '미팅 주기', value: '협의 후 결정 (TBD)' },
      { label: '주요 내용', value: '기업 맞춤형 비즈니스 전략 및 프로젝트 제안' },
      { label: '남는 레거시', value: '별도 협의 및 산출물 정의' }
    ]
  }
];
