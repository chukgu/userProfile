<template>
  <section id="why-cso" class="bg-cream py-24 sm:py-32">
    <div class="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <SectionHeading
        eyebrow="Why CSO"
        title="작은 조직일수록 의사결정의 질이 곧 성장의 속도입니다."
        copy="정규직 C-Level 채용의 부담 없이, 12년의 시행착오로 축적한 판단력을 필요한 만큼 구독합니다."
      />
      <div class="grid gap-4">
        <article v-for="item in reasons" :key="item.title" class="border-l-4 border-gold-500 bg-paper p-7">
          <h3 class="text-xl font-black text-navy-950">{{ item.title }}</h3>
          <p class="mt-3 leading-8 text-muted">{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reasons = [
  {
    title: '대표의 비전과 팀의 실행 사이를 연결합니다.',
    body: '대표가 보는 숲과 실무자가 보는 나무 사이에서 시장의 방향을 함께 읽고 다음 결정을 설계합니다.'
  },
  {
    title: '광고비를 늘리기 전에 새는 비용부터 봅니다.',
    body: '예산을 더 쓰기 전에 지금 새고 있는 비용과 우선순위부터 점검합니다.'
  },
  {
    title: '정답보다 실행 가능한 가설을 만듭니다.',
    body: '정답을 약속하기보다 실행 가능한 가설과 우선순위를 함께 정리합니다.'
  }
];
</script>
