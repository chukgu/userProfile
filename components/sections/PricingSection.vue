<template>
  <section id="pricing" class="bg-paper py-20 sm:py-28">
    <div class="section-shell">
      <h2 class="max-w-3xl text-3xl font-medium leading-snug tracking-[-0.025em] text-ink sm:text-5xl">필요한 것은 플랜보다<br />함께 보는 깊이입니다.</h2>
      <div class="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <article class="rounded-[1.5rem] bg-cream p-7 sm:p-10 lg:p-12">
          <p class="text-sm text-gold-600">STANDARD · 가장 기본적인 CSO 관계</p>
          <h3 class="mt-6 text-4xl font-medium text-ink sm:text-5xl">스탠다드</h3>
          <p class="mt-5 text-2xl font-medium text-ink">1,490,000원 <span class="text-base font-normal text-muted">/ 월</span></p>
          <p class="mt-8 max-w-xl text-lg leading-8 text-muted">매주 대표의 의사결정을 함께 만들고, 판단을 실행 구조와 월간 회고로 연결합니다.</p>
          <ol class="mt-10 grid gap-3 text-sm text-ink/75 sm:grid-cols-2">
            <li>Weekly Strategy Session</li><li>Intent Market Fit</li><li>Decision Priority</li><li>Execution Structure</li><li>Monthly Impact Review</li>
          </ol>
          <button type="button" class="focus-ring mt-10 min-h-12 whitespace-nowrap rounded-xl bg-navy-950 px-6 text-sm font-bold text-white transition-colors hover:bg-navy-800" @click="selectPlan('standard')">스탠다드 상담하기</button>
        </article>
        <div class="divide-y divide-ink/10 rounded-[1.5rem] bg-cream/60 px-7">
          <article v-for="plan in secondaryPlans" :key="plan.value" class="py-7 text-ink">
            <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"><h3 class="font-medium">{{ cleanName(plan.name) }}</h3><p class="text-sm text-muted">{{ plan.price }}</p></div>
            <button type="button" class="focus-ring mt-4 whitespace-nowrap text-sm text-muted hover:text-ink" @click="selectPlan(plan.value)">이 관계 알아보기 →</button>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { pricingPlans } from '~/data/pricing';

const { selectPlan } = useSelectedPlan();
const secondaryPlans = pricingPlans.filter((plan) => plan.value !== 'standard');
const cleanName = (name: string) => name.replace(/^\p{Extended_Pictographic}\uFE0F?\s*/u, '');
</script>
