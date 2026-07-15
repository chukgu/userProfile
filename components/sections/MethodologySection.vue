<template>
  <section id="methodology" class="bg-cream py-24 sm:py-32">
    <div class="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
      <SectionHeading
        eyebrow="Methodology"
        title="의도 데이터로 고객이 선택한 이유를 가장 먼저 봅니다."
        copy="월구독 cso는 고객이 무엇을 검색하고, 어떤 문제를 말하고, 어디에서 망설이는지 확인한 뒤 Intent-Market Fit을 점검합니다."
      />
      <div class="grid gap-4">
        <article v-for="item in methods" :key="item.title" class="bg-paper p-7">
          <h3 class="text-xl font-black text-navy-950">{{ item.title }}</h3>
          <p class="mt-4 leading-8 text-muted">&quot;{{ item.body }}&quot;</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const methods = [
  {
    title: '🔍 1단계 : 구매 의도 분석 (Intent Data)',
    body: '고객이 지갑을 열기 직전, 시장에 남긴 흔적을 역추적합니다.'
  },
  {
    title: '🎯 2단계 : 의도-시장 적합성 검증 (Intent-Market Fit)',
    body: '고객의 갈증과 우리 상품의 제안을 정확히 맞물리게 합니다.'
  },
  {
    title: '⚡ 3단계 : 즉각 성과 가설 (Quick-Win)',
    body: "기다리다 지치는 거창한 전략 대신, '이번 주에 바로 돈이 되는 실행'부터 만듭니다."
  }
];
</script>
