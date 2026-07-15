<template>
  <article class="border-b border-navy-950/10">
    <button
      type="button"
      class="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left"
      :aria-expanded="open"
      @click="open = !open"
    >
      <span class="text-lg font-black text-navy-950">{{ item.question }}</span>
      <span class="text-2xl font-black text-gold-500">{{ open ? '-' : '+' }}</span>
    </button>
    <div v-if="open" class="pb-6 text-base leading-8 text-muted" v-html="item.answer" />
  </article>
</template>

<script setup lang="ts">
import type { FaqItem } from '~/types/content';

defineProps<{
  item: FaqItem;
}>();

const open = ref(false);
</script>
