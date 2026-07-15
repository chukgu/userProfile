<template>
  <section id="faq" class="bg-cream py-24 sm:py-32">
    <div class="section-shell max-w-5xl">
      <SectionHeading
        eyebrow="FAQ"
        title="상담 전에 가장 많이 나누는 질문들을 모았습니다."
        copy="서로의 기대치를 명확히 맞추는 것부터가 건강한 성장의 첫걸음입니다."
        center
      />
      <div class="mt-12 border-t border-navy-950/10">
        <FaqItem v-for="item in faqItems" :key="item.question" :item="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqItems } from '~/data/faq';
</script>
