<template>
  <section id="monthly-process" class="bg-navy-950 py-24 text-cream sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Monthly Process"
        title="매월 굴러가는 '4주 단위 전략 시스템'"
        copy="시장 데이터를 뜯어보는 것부터 매출 성과를 쥐는 순간까지, 멈추지 않는 지속 가능한 운영 리듬을 만듭니다. Monthly CSO와 함께하는 4주는 대표님의 사업 체질을 완전히 바꿔놓습니다."
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
