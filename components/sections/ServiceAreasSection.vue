<template>
  <section id="framework" class="bg-paper py-20 sm:py-28">
    <div class="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-24">
      <div>
        <p class="text-sm font-medium text-gold-600">monthlycso가 하는 일</p>
        <h2 class="mt-5 max-w-lg text-3xl font-medium leading-snug tracking-[-0.025em] text-ink sm:text-5xl">복잡한 문제를<br />한 번에 풀려고<br />하지 않습니다.</h2>
        <p class="mt-7 max-w-md leading-7 text-muted">대화를 나누며 문제의 순서를 찾고, 이번 주에 움직일 수 있는 크기로 바꿉니다.</p>
      </div>
      <div class="space-y-3 lg:pt-12">
        <div v-for="(step, index) in steps" :key="step.title" class="flex gap-5 rounded-2xl px-5 py-5" :class="index % 2 ? 'bg-cream sm:ml-10' : 'bg-cream/60 sm:mr-10'">
          <span class="mt-1 text-gold-600" aria-hidden="true">→</span>
          <div><h3 class="text-xl font-medium text-ink">{{ step.title }}</h3><p class="mt-2 leading-7 text-muted">{{ step.body }}</p></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { title: '문제를 같이 보고', body: '말씀하신 고민 뒤에 숨어 있는 진짜 질문을 찾습니다.' },
  { title: '무엇을 할지 정하고', body: '지금 필요한 선택과 당분간 하지 않을 일을 함께 구분합니다.' },
  { title: '실행 가능한 단위로 바꾸고', body: '결정을 이번 주에 움직일 수 있는 행동으로 작게 나눕니다.' },
  { title: '실제로 뭐가 달라졌는지 봅니다', body: '결과를 솔직하게 돌아보고 다음 판단의 근거로 남깁니다.' }
];
</script>
