<template>
  <div :class="center ? 'mx-auto text-center' : ''">
    <p class="eyebrow" :class="dark ? 'text-gold-400' : ''">{{ eyebrow }}</p>
    <h2 class="section-title" :class="[center ? 'mx-auto' : '', dark ? 'text-white' : '']">
      <template v-if="titleLines?.length">
        <template v-for="(line, index) in titleLines" :key="line">
          {{ line }}<br v-if="index < titleLines.length - 1" />
        </template>
      </template>
      <template v-else-if="titleBreakAfter">{{ titleBreakAfter }}<br />{{ title }}</template>
      <template v-else>{{ title }}</template>
    </h2>
    <p v-if="copy" class="section-copy" :class="[center ? 'mx-auto' : '', dark ? 'text-cream/70' : '']">{{ copy }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  titleBreakAfter?: string;
  titleLines?: string[];
  copy?: string;
  center?: boolean;
  dark?: boolean;
}>();
</script>
