<template>
  <article class="border border-navy-950/10 bg-white p-7">
    <p class="text-xs font-black uppercase text-gold-500">{{ item.plan }}</p>
    <h3 class="mt-3 text-xl font-black text-navy-950">{{ item.title }}</h3>
    <p class="mt-4 text-sm leading-7 text-muted">{{ item.body }}</p>
  </article>
</template>

<script setup lang="ts">
import type { OutputItem } from '~/types/content';

defineProps<{
  item: OutputItem;
}>();
</script>
