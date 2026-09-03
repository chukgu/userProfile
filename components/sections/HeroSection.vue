<template>
  <section id="hero" class="bg-paper pt-28 sm:pt-36">
    <div class="section-shell pb-20 sm:pb-28">
      <div class="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.65fr)] lg:items-center lg:gap-20">
        <div>
          <p class="text-sm font-medium text-muted">대표를 위한 월구독 CSO</p>
          <h1 class="mt-6 min-w-0 max-w-[14ch] text-[clamp(2.8rem,6vw,4.25rem)] font-medium leading-[1.14] tracking-[-0.04em] text-ink [overflow-wrap:anywhere]">
            요즘, 무슨 결정이<br />제일 어렵나요?
          </h1>
          <div class="relative mt-8 inline-block">
            <p class="text-xl font-medium leading-relaxed text-ink sm:text-2xl">혼자 결정해야 하는 대표에게<br /><strong class="font-semibold">월구독 CSO가 함께합니다.</strong></p>
            <svg class="absolute -bottom-3 left-0 h-3 w-52 text-gold-500" viewBox="0 0 210 12" fill="none" aria-hidden="true"><path d="M2 8C51 2 132 3 208 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" /></svg>
          </div>
          <div class="mt-11">
            <NuxtLink to="#contact" class="focus-ring group inline-flex min-h-12 items-center whitespace-nowrap rounded-xl bg-navy-950 px-6 text-sm font-bold text-white transition-colors hover:bg-navy-800">
              내 고민부터 이야기하기 <span class="ml-3 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
        <aside class="relative rotate-[1.25deg] rounded-[1.25rem] bg-cream p-7 shadow-[0_18px_50px_color-mix(in_srgb,var(--color-ink)_8%,transparent)] sm:p-9">
          <span class="absolute -top-4 left-8 -rotate-3 bg-gold-500 px-3 py-1 text-xs font-medium text-ink">CSO note</span>
          <p class="text-sm text-muted">오늘 대표님의 머릿속</p>
          <p class="mt-5 text-xl font-medium leading-relaxed text-ink">광고를 더 해야 할지,<br />가격을 바꿔야 할지,<br />지금 하는 일을 계속해야 할지.</p>
          <p class="mt-8 border-t border-ink/15 pt-5 text-sm leading-7 text-muted">답부터 정하지 않습니다.<br />무엇을 판단해야 하는지부터 같이 봅니다.</p>
        </aside>
      </div>
    </div>
  </section>
</template>
