<template>
  <article class="relative border border-cream/15 bg-white/5 p-7">
    <span class="text-sm font-black text-gold-400">{{ step.week }}</span>
    <h3 class="mt-6 text-2xl font-black text-white">{{ step.title }}</h3>
    <p class="mt-4 text-sm leading-7 text-cream/65">{{ step.body }}</p>
  </article>
</template>

<script setup lang="ts">
import type { ProcessStep } from '~/types/content';

defineProps<{
  step: ProcessStep;
}>();
</script>
