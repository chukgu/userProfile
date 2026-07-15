<template>
  <section id="not-service" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <div class="border border-navy-950/10 bg-white p-8 sm:p-12 lg:p-16">
        <SectionHeading
          eyebrow="Not a Service"
          title="서로의 기대치를 맞추는 것이 '진짜 성장의 시작'입니다."
          copy="Monthly CSO는 대표님의 곁에서 가장 실질적이고 단단한 이정표를 세우는 파트너입니다. 건강하고 폭발적인 시너지를 내기 위해, 저희가 제공하지 않는 네 가지 영역을 투명하게 말씀드립니다."
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
  "🙅‍♂️ 1. 광고를 대신 세팅하고 운영하는 '실행 대행 서비스'가 아닙니다.",
  "🙅‍♂️ 2. 공장에서 찍어내듯 기계적으로 납품하는 '콘텐츠 외주'는 지양합니다.",
  "🙅‍♂️ 3. 읽고 덮어버리는 수십 장짜리 '두꺼운 컨설팅 보고서'를 드리지 않습니다.",
  '🙅‍♂️ 4. 달콤한 말로 성과를 무조건 확약하거나 결과를 포장하지 않습니다.'
];
</script>
