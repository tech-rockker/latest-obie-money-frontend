<template>
  <div>
    <VContainer>
      <VProgress :percentage="37" />
      <VHeading
        title="Setting and Saving Goals"
        section="Build a plan that creates your future"
        subtitle="Overview"
        image-src="/energy-saving.svg"
      ></VHeading>
      <VAvailableSavings />
    </VContainer>
    <VCard>
      <VCardTitle title="Money Milestones that Meet Your Goals"></VCardTitle>
      <VCardDescription>
        Obie is both a plan and a portfolio at your fingertips, allowing you to
        play with the amount you save and how often you contribute. Increase or
        decrease at anytime. Obie puts you in control of the timeline between
        you and that new car, house or holiday.
      </VCardDescription>
      <VCardTitle title="Explore More about Short Term Goals"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title:
              'Learn about Smart Short Term Financial Goals to Set for Yourself',
            image: '/carousel/goals_01.jpg',
            href: 'https://www.cnet.com/personal-finance/banking/advice/gen-z-soft-saving/#is-this-a-bad-financial-move',
          },
          {
            title: 'How to Set Financial Goals for Your Future - Investopedia',
            image: '/carousel/goals_02.jpg',
            href: 'https://www.cnbc.com/2024/01/01/top-money-goals-for-gen-z-and-millennials-in-2024.html',
          },
        ]"
      />
      <ButtonContainer>
        <ButtonBack></ButtonBack>
        <ButtonNext
          :show-icon="false"
          color="blue-dark"
          @click="$router.push('/goals/page-02')"
          >LETS GET STARTED!</ButtonNext
        >
      </ButtonContainer>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SandboxPage',
  computed: {
    ...mapState(['safetyNet']),
    ...mapGetters([
      'debts',
      'savings',
      'cashSavings',
      'cashSavingsAvailable',
      'incomeSavings',
      'incomeSavingsAllocated',
      'incomeSavingsAvailable',
      'totalDebtAmountOwing',
      'totalDebtMinMonthlyRepayment',
      'safetyNetTotal',
    ]),
  },
}
</script>
