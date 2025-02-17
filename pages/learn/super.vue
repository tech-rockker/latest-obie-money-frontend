<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Prioritise Retirement"
        section="INVESTING FOR THE FUTURE"
        subtitle="Overview"
        image-src="/aim.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle title="Maximise Your Future Finances"></VCardTitle>
      <VSteps
        :steps="[
          {
            title: 'Choose your Retirement Lifestyle',
            content:
              'How much do will you need PA to live on?  This determines how much you need in your super when you retire.',
          },
          {
            title: 'Set your Retirement Goals',
            content:
              'Once you know the lifestyle you want, you can see if you are on track with your projected super balance or if you need to top up your contributions. Like salary scarificing.',
          },
          {
            title: 'Super Health Check',
            content: 'Check the health of your wealth',
          },
        ]"
      />

      <VCardTitle
        title="Explore. Make the most of your Super Power"
      ></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title:
              'Australia’s Retirement System: Strengths, Weaknesses, and Reforms',
            image: '/carousel/super_01.png',
            href: 'https://www.superguru.com.au/retiring/how-much-super-will-i-need',
          },
          {
            title: 'Do You Really Need $1 Million To Retire?',
            image: '/carousel/super_02.png',
            href: 'https://thedailyaus.com.au/stories/young-australians-missing-out-on-superannuation/',
          },
        ]"
      />
      <ButtonBack></ButtonBack>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SandboxPage',
  computed: {
    ...mapGetters(['netIncomePerFrequency']),
    ...mapState(['frequency']),
  },
}
</script>
