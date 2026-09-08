<template>
  <div>
    <HeroSection />
    <PainPointsSection />
    <SolutionSection />
    <MonthlyProcessSection />
    <WhyCsoSection />
    <ComparisonSection />
    <MethodologySection />
    <ServiceAreasSection />
    <PricingSection />
    <OutputsSection />
    <FounderSection />
    <FaqSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

onMounted(() => {
  window.history.scrollRestoration = 'manual';
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
});

useSeoMeta({
  title: '월구독 CSO',
  description:
    'monthlycso는 1인 대표, 작은 브랜드, 로컬 비즈니스를 위한 월구독형 의사결정 파트너입니다.',
  ogTitle: '월구독 CSO | monthlycso',
  ogDescription:
    '대행이 아니라, 의사결정 파트너입니다. 대표의 다음 결정을 함께 설계합니다.',
  ogType: 'website',
  ogUrl: config.public.siteUrl,
  ogImage: `${config.public.siteUrl}/og-image.png`,
  ogSiteName: 'monthlycso',
  twitterCard: 'summary_large_image',
  twitterTitle: '월구독 CSO | monthlycso',
  twitterDescription:
    '대행이 아니라, 의사결정 파트너입니다. 대표의 다음 결정을 함께 설계합니다.',
  twitterImage: `${config.public.siteUrl}/og-image.png`
});

useHead({
  script: [
    ...(config.public.ga4Id
      ? [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${config.public.ga4Id}`,
            async: true
          },
          {
            innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.public.ga4Id}');
            `
          }
        ]
      : []),
    ...(config.public.clarityId
      ? [
          {
            innerHTML: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${config.public.clarityId}");
            `
          }
        ]
      : [])
  ]
});
</script>
