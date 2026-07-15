<template>
  <section id="hero" class="relative overflow-hidden bg-navy-950 pt-36 text-cream sm:pt-44">
    <div class="section-shell grid min-h-[760px] items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32">
      <div>
        <p class="eyebrow text-gold-400">Your Monthly CSO</p>
        <h1 class="mt-6 max-w-5xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
          대행이 아니라
          <span class="block text-gold-400">의사결정 파트너입니다.</span>
        </h1>
        <p class="mt-8 max-w-3xl text-lg leading-9 text-cream/75 sm:text-xl">
          세일즈, 마케팅, 비즈니스 전략은 따로 움직여선 안 됩니다. Monthly CSO는 대표의 현재 체급과 목표를
          냉정하게 분석하여, 지금 당장 움직일 수 있는 가장 현실적인 성장 로드맵을 설계합니다.
        </p>
        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <BaseButton to="#contact" class="bg-gold-500 text-navy-950 hover:bg-gold-400">
            월구독 상담하기
          </BaseButton>
          <NuxtLink
            to="#process"
            class="focus-ring inline-flex min-h-12 items-center justify-center border border-cream/25 px-6 text-sm font-black text-cream transition hover:border-cream/60"
          >
            운영 방식 보기
          </NuxtLink>
        </div>
      </div>

      <div class="relative">
        <div class="border border-cream/15 bg-white/5 p-5 shadow-soft backdrop-blur">
          <div class="border border-cream/10 bg-navy-900 p-6">
            <p class="text-sm font-black text-gold-400">Monthly Decision Board</p>
            <div class="mt-8 grid gap-4">
              <div
                v-for="item in boardItems"
                :key="item.title"
                class="grid grid-cols-[96px_1fr] gap-4 border-b border-cream/10 pb-4 last:border-b-0 last:pb-0"
              >
                <span class="text-xs font-black uppercase text-cream/45">{{ item.label }}</span>
                <div>
                  <p class="font-black text-white">{{ item.title }}</p>
                  <p class="mt-1 text-sm leading-6 text-cream/60">{{ item.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const boardItems = [
  {
    label: '🎯 Focus',
    title: "대표의 '다음 결정'에만 집중",
    body: '이번 달 사업에서 가장 먼저 쳐내야 할 핵심 선택지만 남기고, 불필요한 고민과 노이즈를 지워드립니다.'
  },
  {
    label: '🔗 Align',
    title: '흩어진 세일즈와 마케팅을 하나로',
    body: '기획 따로, 영업 따로, 광고 따로 노는 실행은 돈만 낭비합니다. 모든 활동이 하나의 성장 방향으로 흐르도록 뼈대를 맞춥니다.'
  },
  {
    label: '📈 Review',
    title: '데이터와 결과를 기준으로 다음 달을 설계',
    body: '이번 달의 실행 결과를 숫자로 점검하고, 다음 달에 반드시 쥐어야 할 우선순위를 다시 도출합니다.'
  }
];
</script>
