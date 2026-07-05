<template>
  <section id="outputs" class="bg-cream py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Outputs"
        title="결제가 끝난 뒤에도 남는 판단 기준을 제공합니다."
        copy="미팅이 끝나면 사라지는 조언이 아니라, 다음 실행을 정리할 수 있는 문서와 플레이북을 남깁니다."
      />
      <div class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        <OutputCard v-for="item in outputs" :key="item.title" :item="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { outputs } from '~/data/outputs';
</script>
