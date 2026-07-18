<template>
  <section id="service-areas" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Service Areas"
        title="‘하나의 성장 동력’으로 연결합니다."
        title-break-after="전략, 마케팅, 세일즈를"
        copy="각 영역을 따로 떼어놓고 돈을 쓰면, 실행은 배로 늘어나지만 매출은 제자리걸음을 반복합니다. 월구독 CSO는 비즈니스의 시작부터 클로징까지, 매월 단 하나의 유기적인 기준으로 정렬합니다."
      />

      <div class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="area in serviceAreas"
          :key="area.title"
          class="flex min-h-[320px] flex-col border border-navy-950/10 bg-white p-7"
        >
          <h3 class="text-2xl font-black text-navy-950">{{ area.title }}</h3>
          <p class="mt-4 text-sm font-bold leading-7 text-gold-600">&quot;{{ area.summary }}&quot;</p>
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
