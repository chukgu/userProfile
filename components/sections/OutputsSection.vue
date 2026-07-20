<template>
  <section id="outputs" class="bg-cream py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Outputs"
        title="우리만의 성장 레거시(Legacy)를 남깁니다."
        title-break-after="미팅이 끝나도 사라지지 않는,"
        copy="미팅이 끝나면 사라지는 조언이 아니라, 다음 실행을 정리할 수 있는 문서와 플레이북을 남깁니다."
      />
      <div class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <OutputCard v-for="item in outputs" :key="item.title" :item="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { outputs } from '~/data/outputs';
</script>
