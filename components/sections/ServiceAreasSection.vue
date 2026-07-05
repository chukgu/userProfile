<template>
  <section id="service-areas" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Service Areas"
        title="Strategy, Marketing, Sales를 하나의 성장 판단으로 연결합니다."
        copy="각 영역을 따로 운영하면 실행은 늘어나지만 방향은 흐려집니다. monthlycso는 세 영역을 매월 같은 기준으로 정렬합니다."
      />

      <div class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="area in serviceAreas"
          :key="area.title"
          class="flex min-h-[320px] flex-col border border-navy-950/10 bg-white p-7"
        >
          <h3 class="text-2xl font-black text-navy-950">{{ area.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-muted">{{ area.summary }}</p>
          <ul class="mt-auto grid gap-2 pt-8">
            <li v-for="item in area.items" :key="item" class="text-sm font-bold text-navy-800">
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { serviceAreas } from '~/data/serviceAreas';
</script>
