<template>
  <section id="founder" class="bg-paper py-24 sm:py-32">
    <div class="section-shell">
      <SectionHeading
        eyebrow="Founder / Trust"
        title="‘월간 판단력’으로 전환합니다."
        title-break-after="12년의 현업 내공을 대표님의"
      />

      <div class="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div class="space-y-6 text-base leading-8 text-muted sm:text-lg">
          <p>
            수많은 스타트업과 스몰 비즈니스(SMB) 현장에서 치열하게 부딪히며 배운 것은 단 하나입니다. 아무리 작은 조직이라도, 외롭게 홀로 결정을 내리는 대표님 옆에는 반드시 함께 머리를 맞댈 '씽킹 파트너(Thinking Partner)'가 필요하다는 사실입니다.
          </p>
          <p>
            때로는 전략적으로 뼈아픈 체질 개선을 감내하더라도, 조직을 가장 가벼우면서도 단단한 '다이아몬드'로 다듬어내는 것만이 혹독한 시장에서 살아남는 유일한 생존 전략입니다. 제가 직접 현장에서 피 흘리며 문제를 해결했던 그 단단한 판단력의 정수만을 모아 이 월구독 모델을 만들었습니다.
          </p>
          <div class="border-l-4 border-gold-500 bg-cream p-6 text-navy-950">
            <h3 class="text-xl font-black leading-8">💡 제가 정의하는 CSO의 'S'는 단순한 전략(Strategy)이 아닙니다.</h3>
            <p class="mt-4">
              Sales, Strategy, Marketing, Revenue, Content까지. 제가 12년간 온몸으로 겪어온 성장의 핵심 축들을 모두 융합한 단어입니다.
            </p>
          </div>
          <p>
            비즈니스의 궁극적인 목표는 결국 건강한 이익 창출입니다. “고객의 마음이 가는 곳에 돈이 흐릅니다.” 억지로 쥐어짜 내는 매출이 아니라, 소비자가 기꺼이 지갑을 열고 '돈쭐'을 내주는 브랜드를 만드는 일. 대표님이 가장 부담 없이 기댈 수 있는 든든한 씽킹 파트너가 되어 그 길을 함께 달리겠습니다.
          </p>
        </div>

        <div>
          <p class="text-sm font-black text-gold-500">주요 이력 (Professional Background)</p>
          <div class="mt-4 grid gap-4">
            <article v-for="item in careerHighlights" :key="item.value" class="border border-navy-950/10 bg-white p-6">
              <p class="text-sm font-black leading-7 text-navy-950">{{ item.value }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { careerHighlights } from '~/data/careers';
</script>
