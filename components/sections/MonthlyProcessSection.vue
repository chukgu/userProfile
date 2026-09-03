<template>
  <section id="process" class="bg-paper py-20 sm:py-28">
    <div class="section-shell">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-24">
        <h2 class="text-3xl font-medium leading-snug tracking-[-0.025em] sm:text-5xl">그리고 매주,<br />이렇게 정리합니다.</h2>
        <ol class="space-y-8">
          <li v-for="(step, index) in steps" :key="step.title" class="grid gap-3 sm:grid-cols-[2.5rem_10rem_minmax(0,1fr)]">
            <span class="text-sm text-gold-600">{{ index + 1 }}</span>
            <h3 class="text-lg font-medium text-ink">{{ step.title }}</h3>
            <p class="max-w-xl leading-7 text-muted">{{ step.body }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { title: '의도 발굴', body: '표면에 드러난 요청보다 먼저, 지금 풀어야 할 진짜 문제를 찾습니다.' },
  { title: '전략 동기화', body: '무엇을 할지와 하지 않을지를 정하고 판단의 기준을 맞춥니다.' },
  { title: '실행 구조화', body: '결정을 담당자, 기한, 다음 행동이 있는 실행 항목으로 바꿉니다.' },
  { title: '성과 회고', body: '무엇이 바뀌었는지 확인하고 다음 달의 우선순위를 다시 결정합니다.' }
];
</script>
