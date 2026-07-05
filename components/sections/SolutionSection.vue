<template>
  <section id="solution" class="bg-cream py-24 sm:py-32">
    <div class="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <SectionHeading
        eyebrow="Solution"
        title="대행이 아닌 의사결정 파트너로 비즈니스 우선순위를 설계합니다."
        copy="세일즈·마케팅·비즈니스 전략을 연결해 대표의 실제 상황에 맞는 가장 현실적인 실행 순서를 정리합니다."
      />

      <div class="grid gap-4">
        <article
          v-for="message in messages"
          :key="message"
          class="border-l-4 border-gold-500 bg-paper p-7"
        >
          <p class="text-xl font-black leading-9 text-navy-950">{{ message }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const messages = [
  '대표의 다음 결정을 함께 설계합니다.',
  '혼자 고민하던 비즈니스 우선순위를 함께 정리합니다.',
  '고객이 기꺼이 선택할 수 있는 메시지와 제안 구조를 설계합니다.',
  '새는 비용과 놓친 기회를 줄이는 전략 파트너가 됩니다.'
];
</script>
