<template>
  <div class="overflow-hidden border border-navy-950/10 bg-white">
    <div class="hidden md:block">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr class="bg-navy-950 text-cream">
            <th class="p-5 text-sm font-black">구분</th>
            <th class="p-5 text-sm font-black">정규직 CSO 채용</th>
            <th class="p-5 text-sm font-black">일반 대행사 계약</th>
            <th class="border-l-4 border-gold-500 bg-navy-800 p-5 text-sm font-black">monthlycso</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.label" class="border-t border-navy-950/10">
            <th class="bg-cream p-5 text-sm font-black text-navy-950">{{ row.label }}</th>
            <td class="p-5 text-sm font-bold text-muted">{{ row.fullTime }}</td>
            <td class="p-5 text-sm font-bold text-muted">{{ row.agency }}</td>
            <td class="border-l-4 border-gold-500 bg-gold-100/40 p-5 text-sm font-black text-navy-950">
              {{ row.monthlycso }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid gap-4 p-4 md:hidden">
      <article v-for="row in rows" :key="row.label" class="border border-navy-950/10 bg-paper p-5">
        <h3 class="text-sm font-black text-gold-500">{{ row.label }}</h3>
        <dl class="mt-4 grid gap-3 text-sm">
          <div>
            <dt class="font-black text-navy-950">정규직 CSO 채용</dt>
            <dd class="mt-1 text-muted">{{ row.fullTime }}</dd>
          </div>
          <div>
            <dt class="font-black text-navy-950">일반 대행사 계약</dt>
            <dd class="mt-1 text-muted">{{ row.agency }}</dd>
          </div>
          <div class="border-l-4 border-gold-500 bg-white p-3">
            <dt class="font-black text-navy-950">monthlycso</dt>
            <dd class="mt-1 font-bold text-navy-800">{{ row.monthlycso }}</dd>
          </div>
        </dl>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComparisonRow } from '~/types/content';

defineProps<{
  rows: ComparisonRow[];
}>();
</script>
