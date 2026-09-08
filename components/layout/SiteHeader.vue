<template>
  <header class="fixed left-0 top-0 z-50 w-full border-b border-navy-950/10 bg-paper/90 backdrop-blur-xl">
    <nav class="section-shell flex h-20 items-center justify-between gap-6" aria-label="Primary">
      <NuxtLink to="#hero" class="focus-ring flex items-center gap-3" @click="isOpen = false">
        <span class="grid h-10 w-10 place-items-center bg-navy-950 font-display text-xs font-black text-cream">
          CSO
        </span>
        <span class="font-display text-sm font-black text-navy-950">monthlycso</span>
      </NuxtLink>

      <div class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="text-sm font-bold text-muted transition hover:text-navy-950"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <BaseButton to="#contact" class="hidden lg:inline-flex">월구독 상담하기</BaseButton>

      <button
        type="button"
        class="focus-ring grid h-11 w-11 place-items-center lg:hidden"
        :aria-expanded="isOpen"
        aria-label="메뉴 열기"
        @click="isOpen = !isOpen"
      >
        <span class="grid gap-1.5">
          <span class="block h-0.5 w-6 bg-navy-950"></span>
          <span class="block h-0.5 w-6 bg-navy-950"></span>
          <span class="block h-0.5 w-6 bg-navy-950"></span>
        </span>
      </button>
    </nav>

    <div v-if="isOpen" class="border-t border-navy-950/10 bg-paper px-5 py-6 lg:hidden">
      <div class="grid gap-5">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="text-2xl font-black text-navy-950"
          @click="isOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <BaseButton to="#contact" @click="isOpen = false">월구독 상담하기</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navItems } from '~/data/navigation';

const isOpen = ref(false);
</script>
