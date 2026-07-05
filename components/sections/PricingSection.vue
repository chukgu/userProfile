<template>
  <section id="pricing" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Pricing"
        title="필요한 판단의 깊이에 맞춰 월 단위로 선택합니다."
        copy="작게 진단하고 시작할 수도, 월간 CSO 파트너십으로 깊게 운영할 수도 있습니다."
      />
      <div class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        <PricingCard v-for="plan in pricingPlans" :key="plan.value" :plan="plan" @select="selectPlan" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { pricingPlans } from '~/data/pricing';

const { selectPlan } = useSelectedPlan();
</script>
