<template>
  <article
    class="relative flex min-h-[420px] flex-col border bg-white p-6"
    :class="plan.recommended ? 'border-gold-500 shadow-soft' : 'border-navy-950/10'"
  >
    <span
      v-if="plan.recommended"
      class="absolute right-4 top-4 bg-gold-500 px-3 py-1 text-xs font-black text-navy-950"
    >
      Recommended
    </span>
    <h3 class="pr-24 text-xl font-black text-navy-950">{{ plan.name }}</h3>
    <p class="mt-3 text-sm font-bold text-muted">{{ plan.description }}</p>
    <div class="mt-8">
      <strong class="font-display text-3xl font-black text-navy-950">{{ plan.price }}</strong>
      <span class="ml-2 text-sm font-bold text-muted">{{ plan.period }}</span>
    </div>
    <ul class="mt-8 grid gap-3">
      <li v-for="feature in plan.features" :key="feature" class="text-sm font-bold leading-6 text-navy-800">
        {{ feature }}
      </li>
    </ul>
    <button
      type="button"
      class="focus-ring mt-auto min-h-12 bg-navy-950 px-5 text-sm font-black text-white transition hover:bg-navy-700"
      @click="$emit('select', plan.value)"
    >
      이 플랜으로 상담하기
    </button>
  </article>
</template>

<script setup lang="ts">
import type { PricingPlan, PlanValue } from '~/types/pricing';

defineEmits<{
  select: [plan: PlanValue];
}>();

defineProps<{
  plan: PricingPlan;
}>();
</script>
