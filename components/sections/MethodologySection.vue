<template>
  <section id="methodology" class="bg-cream py-24 sm:py-32">
    <div class="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
      <SectionHeading
        eyebrow="Methodology"
        title="Intent Data로 고객의 선택 이유를 먼저 봅니다."
        copy="monthlycso는 고객이 무엇을 검색하고, 어떤 문제를 말하고, 어디에서 망설이는지 확인한 뒤 Intent-Market Fit을 점검합니다."
      />
      <div class="grid gap-4">
        <article v-for="item in methods" :key="item.title" class="bg-paper p-7">
          <h3 class="text-xl font-black text-navy-950">{{ item.title }}</h3>
          <p class="mt-4 leading-8 text-muted">{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const methods = [
  {
    title: 'Intent Data',
    body: '검색어, 고객 질문, 상담 대화, 콘텐츠 반응을 통해 고객의 실제 의도를 읽습니다.'
  },
  {
    title: 'Intent-Market Fit',
    body: '우리 상품과 시장의 문제 인식이 맞물리는 지점을 찾고 메시지와 제안 구조를 재정렬합니다.'
  },
  {
    title: 'Quick-Win Hypothesis',
    body: '큰 전략보다 이번 달 바로 검증 가능한 가설과 실행 순서를 먼저 만듭니다.'
  }
];
</script>
