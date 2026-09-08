<template>
  <section id="pricing" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Our Plans"
        title="지금 내 사업에 필요한 '판단의 깊이'에 맞춰 월 단위로 선택하세요."
        copy="가벼운 진단으로 첫 단추를 채울 수도, 든든한 월간 전략 파트너십으로 깊이 있게 사업을 확장할 수도 있습니다. 대표님의 현재 보폭에 가장 잘 맞는 페이스를 골라보세요."
      />
      <div class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <PricingCard v-for="plan in pricingPlans" :key="plan.value" :plan="plan" @select="selectPlan" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { pricingPlans } from '~/data/pricing';

const { selectPlan } = useSelectedPlan();
</script>
