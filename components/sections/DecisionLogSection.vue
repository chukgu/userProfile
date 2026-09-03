<template>
  <section id="decision-log" class="bg-cream py-20 sm:py-28">
    <div class="section-shell">
      <div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div><p class="text-sm font-medium text-gold-600">책상 위에 남는 것</p><h2 class="mt-4 text-3xl font-medium tracking-[-0.025em] text-ink sm:text-5xl">이번 주의 Decision Log</h2></div>
        <p class="max-w-xs text-sm leading-6 text-muted">실제 사례 수치를 꾸며내지 않은 의사결정 기록 형식 예시입니다.</p>
      </div>
      <div class="relative mt-12 rotate-[-0.35deg] rounded-[1.5rem] bg-paper p-6 shadow-[0_20px_60px_color-mix(in_srgb,var(--color-ink)_7%,transparent)] sm:p-10 lg:p-14">
        <span class="absolute -top-3 left-8 -rotate-2 bg-gold-500 px-3 py-1 text-xs font-medium text-ink">decision note</span>
        <p class="text-sm text-muted">이번 주 고민</p>
        <p class="mt-4 max-w-3xl text-2xl font-medium leading-relaxed text-ink sm:text-4xl">“콘텐츠를 더 많이 올려야 할 것 같아요.”</p>
        <dl class="mt-10 grid gap-7 lg:grid-cols-3">
          <div v-for="row in rows" :key="row.label">
            <dt class="text-xs font-medium uppercase tracking-[0.12em] text-gold-600">{{ row.label }}</dt>
            <dd class="mt-3 leading-7 text-muted">{{ row.body }}</dd>
          </div>
        </dl>
        <p class="mt-10 inline-block border-b-2 border-gold-500 pb-1 text-lg font-medium text-ink">결정: 새 콘텐츠보다 메시지를 먼저 봅니다.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const rows = [
  { label: '왜?', body: '양보다 브랜드 메시지가 고객의 문제와 맞닿아 있는지 먼저 확인해야 합니다.' },
  { label: '그래서', body: '신규 제작량은 늘리지 않고 고객 인터뷰와 기존 반응부터 살펴봅니다.' },
  { label: '다음 주', body: '메시지를 다시 정리한 뒤 문의의 질과 전환 흐름을 확인합니다.' }
];
</script>
