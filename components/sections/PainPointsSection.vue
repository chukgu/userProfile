<template>
  <section id="problem" class="bg-cream py-20 sm:py-28">
    <div class="section-shell">
      <h2 class="max-w-3xl text-3xl font-medium leading-snug tracking-[-0.025em] text-ink sm:text-5xl">대표에게 필요한 건 더 많은 아이디어가 아니라 <span class="relative whitespace-nowrap">더 좋은 판단<svg class="absolute -bottom-2 left-0 h-2 w-full text-gold-500" viewBox="0 0 240 9" fill="none" aria-hidden="true"><path d="M2 6C65 2 166 2 238 5" stroke="currentColor" stroke-width="3" stroke-linecap="round" /></svg></span>입니다.</h2>
      <p class="mt-8 max-w-xl leading-7 text-muted">대부분의 상담은 거창한 전략이 아니라, 지금 마음에 걸리는 질문 하나에서 시작합니다.</p>
      <div class="mt-12 grid gap-5 lg:grid-cols-3">
        <article v-for="item in questions" :key="item.question" class="group rounded-[1.25rem] bg-paper p-7 transition-transform duration-200 hover:-translate-y-1 sm:p-8">
          <p class="text-xl font-medium leading-relaxed text-ink">“{{ item.question }}”</p>
          <p class="mt-12 text-sm font-medium text-gold-600">CSO는 이렇게 봅니다 →</p>
          <p class="mt-3 leading-7 text-muted">{{ item.view }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const questions = [
  { question: '인스타를 계속 해야 할까요?', view: '채널을 유지할지보다, 지금 콘텐츠가 누구의 어떤 결정을 돕는지부터 확인합니다.' },
  { question: '광고비를 더 쓰면 해결될까요?', view: '노출을 늘리기 전에 고객이 멈추는 전환 지점을 먼저 찾습니다.' },
  { question: '지금 상품을 늘려도 될까요?', view: '새 상품보다 기존 고객이 다시 선택하는 이유가 충분한지 먼저 봅니다.' }
];
</script>
