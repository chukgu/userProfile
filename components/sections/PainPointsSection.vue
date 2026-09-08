<template>
  <section id="pain-points" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Pain Points"
        title="대표님, 혹시 매일 밤 이런 고민에 갇혀 계시진 않나요?"
        copy="문제는 실행력이 부족해서가 아니라 ‘무엇을 먼저 판단해야 하는지’ 기준이 정리되지 않았기 때문입니다."
      />
      <div class="mt-14 grid gap-5 md:grid-cols-2">
        <article v-for="item in painPoints" :key="item.title" class="border border-navy-950/10 bg-white p-7">
          <h3 class="text-lg font-black leading-8 text-navy-950">{{ item.title }}</h3>
          <p class="mt-5 text-sm leading-7 text-muted">
            <span class="font-black text-navy-950">현실: </span>{{ item.reality }}
          </p>
          <p class="mt-5 text-sm leading-7 text-navy-800">
            <span class="font-black text-gold-600">Monthly CSO 구독 후: </span>{{ item.result
            }}<strong v-if="item.resultHighlight" class="font-black">{{ item.resultHighlight }}</strong>{{ item.resultSuffix }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { painPoints } from '~/data/painPoints';
</script>
