<template>
  <section id="comparison" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Comparison"
        title="대표님의 의사결정 속도에 딱 맞춘 '월구독 전략실'을 시작하세요."
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
