<template>
  <section id="not-service" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <div class="border border-navy-950/10 bg-white p-8 sm:p-12 lg:p-16">
        <SectionHeading
          eyebrow="Not a Service"
          title="monthlycso가 하지 않는 것도 분명히 말합니다."
          copy="기대치를 맞추는 것은 좋은 협업의 시작입니다. monthlycso는 대표의 판단과 실행 우선순위를 돕는 파트너입니다."
        />

        <ul class="mt-12 grid gap-4 md:grid-cols-2">
          <li
            v-for="item in notServices"
            :key="item"
            class="border-l-4 border-navy-950 bg-cream p-6 font-black leading-8 text-navy-950"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const notServices = [
  '단순 광고 집행 서비스가 아닙니다.',
  '콘텐츠를 납품만 하는 외주형 서비스가 아닙니다.',
  '컨설팅 보고서만 전달하는 서비스가 아닙니다.',
  '성과를 확약하거나 특정 결과를 약속하지 않습니다.'
];
</script>
