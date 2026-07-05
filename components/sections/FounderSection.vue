<template>
  <section id="founder" class="bg-paper py-24 sm:py-32">
    <div class="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <SectionHeading
        eyebrow="Founder / Trust"
        title="12년의 실무 경험을 월 단위 판단력으로 전환합니다."
        copy="monthlycso는 보고서가 아니라 대표가 다음 결정을 내리는 데 필요한 실무형 판단 기준을 제공합니다."
      />
      <div class="grid gap-4 sm:grid-cols-2">
        <article v-for="item in careerHighlights" :key="item.label" class="border border-navy-950/10 bg-white p-7">
          <p class="text-sm font-black text-gold-500">{{ item.label }}</p>
          <p class="mt-3 text-2xl font-black text-navy-950">{{ item.value }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { careerHighlights } from '~/data/careers';
</script>
