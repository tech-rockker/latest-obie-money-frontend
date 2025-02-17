<template>
  <div>
    <VContainer>
      <VProgress :percentage="29" />
      <VHeading
        title="Dealing with Debt"
        section="Build a plan that creates your future"
        subtitle="Overview"
        image-src="/calendar.svg"
      ></VHeading>
      <VAvailableSavings />
    </VContainer>
    <VCard>
      <VCardTitle title="Why is it important to clear your debt?"></VCardTitle>
      <VCardDescription>
        Living within your means or spending less than you earn may sound old
        school, but it's a fundamental financial principle in flipping your
        financial script. Owing money, becoming over extended and falling behind
        is not where you need to be.
      </VCardDescription>
      <VCardDescription
        >Obie has you covered to get you out of debt fast. Being debt free will
        take away the financial burden and free you to use your money to achieve
        your goals. Obie makes it fun, achieveable and doable. If you have debt
        this will be a game changer.
      </VCardDescription>
      <VCardDescription
        >No financial shaming, just an another effective healthy strategy to
        improve the health of your wealth.
      </VCardDescription>
      <VCardTitle title="Explore More about clearing debt"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: 'Snowball your debt.',
            image: '/carousel/debt_01.jpeg',
            imageAlignment: 'bg-center',
            imageHeight: 'h-72',
            href: 'https://www.obiemoney.com/obieapp/#debtfreesection',
          },
          {
            title: 'Get debt under control',
            image: '/carousel/debt_02.png',
            imageAlignment: 'bg-center',
            imageHeight: 'h-72',
            href: 'https://moneysmart.gov.au/managing-debt/get-debt-under-control',
          },
        ]"
      />
      <ButtonContainer>
        <ButtonBack @click="$router.push('/dashboard')"></ButtonBack>
        <ButtonNext
          :show-icon="false"
          color="blue-dark"
          @click="$router.push('/debt/page-02')"
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
