<template>
  <section id="why-cso" class="bg-cream py-24 sm:py-32">
    <div class="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <SectionHeading
        eyebrow="Why Monthly CSO"
        title="작은 조직일수록 의사결정의 질이 곧 성장의 속도입니다."
        :title-lines="['작은 조직일수록', '의사결정의 질이', '곧 성장의 속도입니다.']"
        copy="정규직 C-Level을 채용하는 비용과 리스크 없이, 12년의 현업 시행착오로 축적된 단단한 판단력을 필요한 만큼만 효율적으로 구독하세요."
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
    title: "1. 대표의 '비전'과 팀의 '실행' 사이를 단단하게 연결합니다.",
    body: '대표가 보는 거시적인 숲과 실무자가 보는 미시적인 나무, 그 사이의 간극을 메웁니다. 시장의 방향을 함께 읽어내고 대표님이 외롭지 않게 다음 결정을 내릴 수 있도록 페이스메이커가 되어 드립니다.'
  },
  {
    title: '2. 밑 빠진 독에 광고비를 들이붓기 전에, 새는 구멍부터 막습니다.',
    body: '“마케팅 예산을 더 써야 할까요?” 아니요, 예산을 늘리기 전에 지금 당장 낭비되고 있는 비용과 꼬여있는 우선순위부터 칼같이 점검합니다. 돈을 쓰는 전략이 아니라, 돈이 벌리는 구조를 먼저 만듭니다.'
  },
  {
    title: "3. 세상에 없는 정답 대신, '내 사업에 바로 굴릴 수 있는 가설'을 드립니다.",
    body: '실현 불가능한 이론이나 정답을 과장하지 않습니다. 대표님이 오늘 바로 실행에 옮길 수 있는 가장 날카로운 가설과 명확한 우선순위를 함께 도출하여 빠르게 시장의 반응을 확인합니다.'
  }
];
</script>
