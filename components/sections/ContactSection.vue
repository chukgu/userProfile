<template>
  <section id="contact" class="bg-cream py-20 sm:py-28 lg:py-36">
    <div class="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
      <div>
        <p class="text-sm font-medium text-muted">Start a conversation</p>
        <h2 class="mt-5 text-4xl font-bold leading-tight tracking-[-0.045em] text-navy-950 sm:text-6xl">다음 결정을<br />같이 정합니다.</h2>
        <p class="mt-8 max-w-md leading-7 text-muted">완성된 계획이 없어도 괜찮습니다. 지금 가장 오래 붙잡고 있는 문제부터 적어주세요.</p>
      </div>

      <div class="border-t border-navy-950/25 pt-8">
        <form class="grid gap-5" @submit.prevent="submitContact">
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-medium text-navy-950">
              이름
              <input v-model="form.name" name="name" required class="form-control" />
            </label>
            <label class="grid gap-2 text-sm font-medium text-navy-950">
              연락처
              <input v-model="form.phone" name="phone" required class="form-control" />
            </label>
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-medium text-navy-950">
              이메일
              <input v-model="form.email" name="email" type="email" required class="form-control" />
            </label>
            <label class="grid gap-2 text-sm font-medium text-navy-950">
              브랜드/회사명
              <input v-model="form.company" name="company" class="form-control" />
            </label>
          </div>
          <label class="grid gap-2 text-sm font-medium text-navy-950">
            사업 유형
            <select v-model="form.businessType" name="businessType" class="form-control">
              <option>1인 기업</option>
              <option>스타트업</option>
              <option>로컬 비즈니스</option>
              <option>소상공인</option>
              <option>B2B 기업</option>
              <option>기타</option>
            </select>
          </label>
          <fieldset class="grid gap-3 text-sm font-medium text-navy-950">
            <legend>현재 가장 고민되는 영역</legend>
            <div class="grid gap-3 sm:grid-cols-2">
              <label v-for="concern in concerns" :key="concern" class="flex items-start gap-2 text-sm text-muted">
                <input v-model="form.concerns" type="checkbox" name="concerns" :value="concern" class="mt-1" />
                <span>{{ concern }}</span>
              </label>
            </div>
          </fieldset>
          <label class="grid gap-2 text-sm font-medium text-navy-950">
            희망하는 구독 플랜
            <select v-model="selectedPlan" name="plan" class="form-control">
              <option v-for="plan in pricingPlans" :key="plan.value" :value="plan.value">
                {{ plan.name }}
              </option>
            </select>
          </label>
          <label class="grid gap-2 text-sm font-medium text-navy-950">
            남기고 싶은 말
            <textarea v-model="form.message" name="message" rows="4" class="form-control py-3"></textarea>
          </label>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="focus-ring min-h-12 whitespace-nowrap bg-navy-950 px-6 text-sm font-bold text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {{ isSubmitting ? '제출 중...' : '제출하기' }}
          </button>
          <p v-if="submitMessage" aria-live="polite" class="text-sm font-bold text-navy-950">
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
