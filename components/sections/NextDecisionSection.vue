<template>
  <section id="next-decision" class="bg-cream py-20 sm:py-28">
    <div class="section-shell">
      <div class="rounded-[1.5rem] bg-paper p-6 sm:p-10 lg:p-14">
        <p class="text-sm font-medium text-gold-600">The Next Decision</p>
        <div class="mt-5 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <h2 class="max-w-xl text-3xl font-medium leading-snug tracking-[-0.025em] text-ink sm:text-5xl">지금 마음에 가장 오래 걸리는 건 무엇인가요?</h2>
            <p class="mt-6 max-w-md leading-7 text-muted">하나를 골라보세요. 답을 드리기보다, 같이 살펴볼 첫 질문을 건넵니다.</p>
          </div>
          <div>
            <div class="flex flex-wrap gap-2">
              <button v-for="(item, index) in decisions" :key="item.name" type="button" class="focus-ring min-h-11 whitespace-nowrap rounded-xl border px-4 text-sm font-medium transition-colors" :class="activeIndex === index ? 'border-gold-500 bg-gold-500 text-ink' : 'border-ink/15 text-muted hover:border-ink/35 hover:text-ink'" :aria-pressed="activeIndex === index" @click="activeIndex = index">{{ item.name }}</button>
            </div>
            <div class="relative mt-8 min-h-40 rounded-2xl bg-cream p-6 sm:p-8" aria-live="polite">
              <span class="absolute -top-3 right-5 rotate-2 bg-navy-950 px-3 py-1 text-xs text-white">CSO note</span>
              <p class="text-sm text-muted">{{ decisions[activeIndex].name }}에 관해</p>
              <p class="mt-4 max-w-xl text-2xl font-medium leading-relaxed text-ink">{{ decisions[activeIndex].question }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeIndex = ref(0);
const decisions = [
  { name: '고객', question: '지금 더 선명하게 이해해야 할 고객은 누구인가요?' },
  { name: '상품', question: '고객이 실제로 선택하는 가치는 무엇인가요?' },
  { name: '가격', question: '가격의 문제가 아니라 제안 구조의 문제는 아닐까요?' },
  { name: '마케팅', question: '지금 필요한 것이 노출일까요, 아니면 전환일까요?' },
  { name: '채널', question: '더 많은 채널보다 집중할 한 곳이 필요하지 않을까요?' },
  { name: '조직', question: '채용보다 먼저 역할과 책임을 정리해야 하지 않을까요?' },
  { name: '실행', question: '이번 주 반드시 끝낼 단 하나의 일은 무엇인가요?' }
];
</script>
