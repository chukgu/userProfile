<template>
  <section id="solution" class="bg-cream py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Solution"
        title="비즈니스 우선순위를 설계합니다."
        title-break-after="대행이 아닌 의사결정 파트너로"
        copy="세일즈·마케팅·비즈니스 전략을 연결해 대표의 실제 상황에 맞는 가장 현실적인 실행 순서를 정리합니다."
      />

      <div class="mt-14 grid gap-5 md:grid-cols-2">
        <article
          v-for="message in messages"
          :key="message.title"
          class="border border-navy-950/10 bg-white p-7"
        >
          <h3 class="text-xl font-black leading-9 text-navy-950">{{ message.title }}</h3>
          <p class="mt-3 leading-8 text-muted">{{ message.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const messages = [
  {
    title: "🤝 1. 외로운 결정을 끝내는 '의사결정 파트너'",
    body: '수많은 선택지 앞에서 홀로 밤새 고민하던 날은 끝납니다. 12년 현업 내공을 바탕으로 비즈니스의 진짜 우선순위를 함께 설계하고, 대표님이 확신을 가지고 다음 발걸음을 내딛도록 든든한 기준점이 되어 드립니다.'
  },
  {
    title: "🔗 2. 흐트러진 실행을 정렬하는 '올인원 로드맵'",
    body: "제각각 따로 놀던 세일즈, 마케팅, 비즈니스 전략을 하나의 성장 흐름으로 연결합니다. 리소스를 낭비하는 무의미한 액션은 걷어내고, 매출로 직결되는 '가장 현실적인 실행 순서'를 짜 드립니다."
  },
  {
    title: "🎯 3. 지갑을 열게 만드는 '타겟팅 제안 구조'",
    body: '고객이 검색하고 반응하는 본질적인 구매 의도(Intent)를 파고듭니다. 우리 상품의 가치를 극대화하여 고객이 고민 없이 기꺼이 결제하게 만드는 날카로운 메시지와 반박 불가능한 제안 구조를 설계합니다.'
  },
  {
    title: "🛡️ 4. 새는 비용을 막고 숨은 기회를 잡는 '방패와 창'",
    body: '무작정 예산을 늘려 광고비를 들이붓기 전에, 지금 사업 내부에서 새고 있는 비용과 놓치고 있던 세일즈 기회부터 칼같이 잡아냅니다. 돈을 쓰는 마케팅이 아닌, 진짜 돈이 벌리는 단단한 비즈니스 체질을 만듭니다.'
  }
];
</script>
