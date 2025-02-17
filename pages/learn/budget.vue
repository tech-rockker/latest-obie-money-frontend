<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Review & Optimise Your Budget"
        section="Manage Cashflow and Budgeting"
        subtitle="Overview"
        image-src="/growth.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle title="Do More with your Money"></VCardTitle>
      <VSteps
        :steps="[
          {
            title: 'OPTIMISE YOUR INCOME',
            content:
              'This is the strategic split of the money you earn into 3 key areas. Before you spend it.   Obie shows you how that would look for you based on your or your household income.',
          },
          {
            title: 'COMPARE YOUR CURRENT SPEND',
            content:
              'Obie shows your current spend with your Optimised Strategy. You will quickly see if its just a tweak you need or major overhaul.',
          },
          {
            title: 'SET YOUR NEW SPENDING PLAN',
            content:
              'Setting up your strategic spening plan.  Make the big decisons upfront before you spend it.  Feel safe, secure and ready to take on your world. Lock it in',
          },
        ]"
      />

      <VCardTitle title="Explore More about Safety Net"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: 'How to use money to have a rich life.',
            image: '/carousel/expenses_01.jpg',
            href: 'https://www.cashflowco.com.au/',
          },
          {
            title: 'Its time to uncomplicate your financial life',
            image: '/carousel/expenses_02.png',
            href: 'https://open.spotify.com/episode/6NLoOXSyVLtwgew2AEZYeJ',
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
