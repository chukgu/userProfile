<template>
  <section id="contact" class="bg-navy-950 py-24 text-cream sm:py-32">
    <div class="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p class="eyebrow text-gold-400">Contact</p>
        <h2 class="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
          대표의 다음 결정,
          <span class="block text-gold-400">함께 정리해볼까요?</span>
        </h2>
      </div>

      <div class="border border-cream/15 bg-white/5 p-6 sm:p-8">
        <form class="grid gap-5" @submit.prevent="submitContact">
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold">
              이름
              <input v-model="form.name" name="name" required class="min-h-12 bg-white px-4 text-navy-950" />
            </label>
            <label class="grid gap-2 text-sm font-bold">
              연락처
              <input v-model="form.phone" name="phone" required class="min-h-12 bg-white px-4 text-navy-950" />
            </label>
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold">
              이메일
              <input v-model="form.email" name="email" type="email" required class="min-h-12 bg-white px-4 text-navy-950" />
            </label>
            <label class="grid gap-2 text-sm font-bold">
              브랜드/회사명
              <input v-model="form.company" name="company" class="min-h-12 bg-white px-4 text-navy-950" />
            </label>
          </div>
          <label class="grid gap-2 text-sm font-bold">
            사업 유형
            <select v-model="form.businessType" name="businessType" class="min-h-12 bg-white px-4 text-navy-950">
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
                <input v-model="form.concerns" type="checkbox" name="concerns" :value="concern" class="mt-1" />
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
          <label class="grid gap-2 text-sm font-bold">
            남기고 싶은 말
            <textarea v-model="form.message" name="message" rows="3" class="bg-white p-4 text-navy-950"></textarea>
          </label>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="focus-ring min-h-12 bg-gold-500 px-6 text-sm font-black text-navy-950 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {{ isSubmitting ? '제출 중...' : '제출하기' }}
          </button>
          <p v-if="submitMessage" aria-live="polite" class="text-sm font-bold" :class="submitSucceeded ? 'text-gold-400' : 'text-red-300'">
            {{ submitMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { selectedPlan, syncFromRoute } = useSelectedPlan();
const config = useRuntimeConfig();
const isSubmitting = ref(false);
const submitSucceeded = ref(false);
const submitMessage = ref('');

const form = reactive({
  name: '',
  phone: '',
  email: '',
  company: '',
  businessType: '1인 기업',
  concerns: [] as string[],
  message: ''
});

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

async function submitContact() {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  submitSucceeded.value = false;
  submitMessage.value = '';

  const body = new URLSearchParams({
    name: form.name,
    phone: form.phone,
    email: form.email,
    company: form.company,
    businessType: form.businessType,
    concerns: form.concerns.join(', '),
    plan: selectedPlan.value,
    message: form.message
  });

  try {
    const response = await fetch(config.public.contactFormUrl, {
      method: 'POST',
      body
    });
    const result = (await response.json()) as { success: boolean; message?: string };

    if (!response.ok || !result.success) {
      throw new Error(result.message || '상담 신청을 처리하지 못했습니다.');
    }

    submitSucceeded.value = true;
    submitMessage.value = result.message || '상담 신청이 접수되었습니다.';
    form.name = '';
    form.phone = '';
    form.email = '';
    form.company = '';
    form.businessType = '1인 기업';
    form.concerns = [];
    form.message = '';
  } catch {
    submitMessage.value = '제출하지 못했습니다. 잠시 후 다시 시도해 주세요.';
  } finally {
    isSubmitting.value = false;
  }
}

import { pricingPlans } from '~/data/pricing';
</script>
