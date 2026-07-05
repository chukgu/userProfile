<template>
  <NuxtLink
    :to="to"
    :target="target"
    class="focus-ring inline-flex min-h-12 items-center justify-center bg-navy-950 px-6 text-sm font-black text-white transition hover:bg-navy-700"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
  target?: string;
}>();
</script>
