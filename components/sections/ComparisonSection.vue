<template>
  <section id="comparison" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Comparison"
        title="채용과 대행 사이, monthlycso는 다른 방식으로 작동합니다."
        copy="정규직 C-Level의 비용 부담과 일반 대행사의 실행 편차 사이에서, 월 단위 의사결정 파트너십을 제공합니다."
      />
      <div class="mt-14">
        <ComparisonTable :rows="comparisonRows" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { comparisonRows } from '~/data/comparison';
</script>
