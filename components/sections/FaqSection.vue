<template>
  <section id="faq" class="bg-cream py-24 sm:py-32">
    <div class="section-shell max-w-5xl">
      <SectionHeading
        eyebrow="FAQ"
        title="상담 전에 자주 묻는 질문을 정리했습니다."
        copy="서비스 범위와 기대치를 분명히 맞춘 뒤 시작합니다."
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
