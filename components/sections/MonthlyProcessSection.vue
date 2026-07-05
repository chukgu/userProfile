<template>
  <section id="monthly-process" class="bg-navy-950 py-24 text-cream sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Monthly Process"
        title="4주 단위의 비즈니스 실행 루프로 매월 방향을 다시 맞춥니다."
        copy="의도 발굴에서 성과 회고까지, 반복 가능한 월간 운영 리듬을 만듭니다."
        dark
      />
      <div class="mt-16 hidden grid-cols-4 gap-5 lg:grid">
        <ProcessStepCard v-for="step in processSteps" :key="step.week" :step="step" />
      </div>
      <div class="mt-12 grid gap-5 border-l-2 border-gold-500 pl-5 lg:hidden">
        <ProcessStepCard v-for="step in processSteps" :key="step.week" :step="step" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { processSteps } from '~/data/process';
</script>
