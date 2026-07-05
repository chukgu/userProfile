<template>
  <section id="pain-points" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Pain Points"
        title="대표들이 혼자 감당하는 고민은 대부분 비슷합니다."
        copy="문제는 실행력이 부족해서가 아니라, 무엇을 먼저 판단해야 하는지 정리되지 않는 데서 시작됩니다."
      />
      <div class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="item in painPoints" :key="item.title" class="border border-navy-950/10 bg-white p-7">
          <h3 class="text-lg font-black leading-8 text-navy-950">{{ item.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-muted">{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { painPoints } from '~/data/painPoints';
</script>
