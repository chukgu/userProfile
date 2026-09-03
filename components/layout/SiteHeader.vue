<template>
  <header class="fixed left-0 top-0 z-50 w-full bg-paper">
    <nav class="section-shell flex h-16 items-center justify-between border-b border-navy-950/15 lg:h-20" aria-label="Primary">
      <NuxtLink to="#hero" class="focus-ring font-wordmark text-2xl font-semibold tracking-[-0.02em] text-navy-950" @click="isOpen = false">
        monthlycso
      </NuxtLink>

      <div class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="whitespace-nowrap text-sm font-medium text-muted transition-colors hover:text-navy-950"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <NuxtLink to="#contact" class="focus-ring hidden whitespace-nowrap text-sm font-bold text-navy-950 lg:inline-flex">
        상담하기 <span aria-hidden="true" class="ml-2">↗</span>
      </NuxtLink>

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
        <BaseButton to="#contact" @click="isOpen = false">상담하기</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navItems } from '~/data/navigation';

const isOpen = ref(false);
</script>
