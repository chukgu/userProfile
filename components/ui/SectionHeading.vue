<template>
  <div :class="center ? 'mx-auto text-center' : ''">
    <p class="eyebrow" :class="dark ? 'text-gold-400' : ''">{{ eyebrow }}</p>
    <h2 class="section-title" :class="[center ? 'mx-auto' : '', dark ? 'text-white' : '']">{{ title }}</h2>
    <p v-if="copy" class="section-copy" :class="[center ? 'mx-auto' : '', dark ? 'text-cream/70' : '']">{{ copy }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
  dark?: boolean;
}>();
</script>
