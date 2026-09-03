<template>
  <section id="philosophy" class="bg-paper py-20 sm:py-28 lg:py-36">
    <div class="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-24">
      <p class="text-sm font-medium text-muted">Our philosophy</p>
      <div>
        <h2 class="max-w-4xl text-3xl font-medium leading-snug tracking-[-0.025em] sm:text-5xl">대행이 아니라,<br />의사결정 파트너입니다.</h2>
        <p class="mt-10 max-w-3xl text-lg leading-8 text-muted">작은 조직일수록 대표의 한 번의 결정이 다음 한 달을 바꿉니다. monthlycso는 일을 더 만드는 대신 선택지를 줄이고, 결정이 실제 실행으로 이어지는 구조를 함께 만듭니다.</p>
        <p class="mt-8 max-w-3xl text-lg leading-8 text-muted">세일즈, 전략, 마케팅, 콘텐츠를 따로 떼지 않습니다. 사업 전체를 보되, 매주 가장 중요한 한 가지에 집중합니다.</p>
        <div class="mt-12 border-t border-navy-950/20 pt-6">
          <p class="text-sm text-muted">Professional background</p>
          <ul class="mt-5 grid gap-3 text-sm font-medium text-navy-800 sm:grid-cols-2">
            <li v-for="item in careerHighlights" :key="item.value">{{ item.value }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { careerHighlights } from '~/data/careers';
</script>
