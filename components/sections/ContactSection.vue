<template>
  <section id="contact" class="bg-navy-950 py-24 text-cream sm:py-32">
    <div class="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p class="eyebrow text-gold-400">CTA / Contact</p>
        <h2 class="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
          대표의 다음 결정,
          <span class="block text-gold-400">함께 정리해볼까요?</span>
        </h2>
        <p class="mt-6 text-lg leading-9 text-cream/70">
          아래 정보는 상담 전 현재 상황을 이해하기 위한 최소 질문입니다.
          폼 도구는 Tally 또는 Formspree URL을 환경 변수로 연결할 수 있습니다.
        </p>
      </div>

      <div class="border border-cream/15 bg-white/5 p-6 sm:p-8">
        <form
          v-if="!contactFormUrl"
          class="grid gap-5"
          action="https://formspree.io/f/your-form-id"
          method="POST"
        >
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold">
              이름
              <input name="name" required class="min-h-12 bg-white px-4 text-navy-950" />
            </label>
            <label class="grid gap-2 text-sm font-bold">
              연락처
              <input name="phone" required class="min-h-12 bg-white px-4 text-navy-950" />
            </label>
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold">
              이메일
              <input name="email" type="email" required class="min-h-12 bg-white px-4 text-navy-950" />
            </label>
            <label class="grid gap-2 text-sm font-bold">
              브랜드/회사명
              <input name="company" class="min-h-12 bg-white px-4 text-navy-950" />
            </label>
          </div>
          <label class="grid gap-2 text-sm font-bold">
            사업 유형
            <select name="businessType" class="min-h-12 bg-white px-4 text-navy-950">
              <option>1인 기업</option>
              <option>스타트업</option>
              <option>로컬 비즈니스</option>
              <option>소상공인</option>
              <option>B2B 기업</option>
              <option>기타</option>
            </select>
          </label>
          <fieldset class="grid gap-3 text-sm font-bold">
            <legend>현재 가장 고민되는 영역</legend>
            <div class="grid gap-3 sm:grid-cols-2">
              <label v-for="concern in concerns" :key="concern" class="flex items-start gap-2 text-sm font-medium text-cream/80">
                <input type="checkbox" name="concerns" :value="concern" class="mt-1" />
                <span>{{ concern }}</span>
              </label>
            </div>
          </fieldset>
          <label class="grid gap-2 text-sm font-bold">
            희망하는 구독 플랜
            <select v-model="selectedPlan" name="plan" class="min-h-12 bg-white px-4 text-navy-950">
              <option v-for="plan in pricingPlans" :key="plan.value" :value="plan.value">
                {{ plan.name }}
              </option>
            </select>
          </label>
          <!--
          <label class="grid gap-2 text-sm font-bold">
            현재 가장 고민되는 영역
            <input
              name="concerns"
              placeholder="사업 전략, 세일즈, 마케팅, 브랜드 방향성, 상품/가격 구조 등"
              class="min-h-12 bg-white px-4 text-navy-950 placeholder:text-navy-950/35"
            />
          </label>
          -->
          <label class="grid gap-2 text-sm font-bold">
            월구독 CSO에 기대하는 점
            <textarea name="expectation" rows="5" class="bg-white p-4 text-navy-950"></textarea>
          </label>
          <label class="grid gap-2 text-sm font-bold">
            상담 가능 시간대
            <input name="availableTime" class="min-h-12 bg-white px-4 text-navy-950" />
          </label>
          <button type="submit" class="focus-ring min-h-12 bg-gold-500 px-6 text-sm font-black text-navy-950">
            대표의 다음 결정 함께 정리하기
          </button>
        </form>

        <div v-else class="grid gap-6">
          <p class="text-lg font-bold leading-8 text-cream/75">
            상담 신청은 연결된 외부 폼에서 접수합니다.
          </p>
          <NuxtLink
            :to="contactFormUrl"
            target="_blank"
            class="focus-ring inline-flex min-h-12 items-center justify-center bg-gold-500 px-6 text-sm font-black text-navy-950"
          >
            우리 비즈니스 진단받기
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const contactFormUrl = config.public.contactFormUrl;
const { selectedPlan, syncFromRoute } = useSelectedPlan();

const concerns = [
  '데이터 수익화 문제',
  'C-Level 채용 고비용·고리스크',
  '대표 혼자 하는 고립된 의사결정',
  '성장 정체기 돌파',
  '신사업 및 신규 BM 판단',
  '세일즈 전환율 개선',
  '콘텐츠·마케팅 메시지 정리',
  '상품 및 가격 구조 개선',
  '기타'
];

onMounted(syncFromRoute);
watch(() => useRoute().query.plan, syncFromRoute);

import { pricingPlans } from '~/data/pricing';
</script>
