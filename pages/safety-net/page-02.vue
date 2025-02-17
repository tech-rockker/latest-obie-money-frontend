<template>
  <div>
    <VContainer>
      <VProgress :percentage="1" />
      <VHeading
        title="Creating Your Safety Net"
        section="Build a plan that creates your future"
        subtitle="Overview"
        image-src="/protection2.svg"
      ></VHeading>
      <VAvailableSavings />
    </VContainer>
    <VCard>
      <VCardTitle title="The Purpose of Your Safety Net"></VCardTitle>
      <VSteps
        :steps="[
          {
            title: 'Emergency Fund',
            content:
              'Money to cover urgent or unexpected costs or expenses to provide a financial safety net if something were to happen to you or your family. Grow your emergency fund with cash savings to get started and or allocate from your income savings bucket to reach your goal. Remember to top it back up when you use it.',
          },
          {
            title: 'Buffer for Lumpy Expenses',
            content:
              'This is money put aside for bigger lumpy expenses like annual bills, car rego, insurances etc.  ',
          },
          {
            title: '3 Months of Expenses',
            content:
              'Financial security has never been more top of mind. Only one in five Australian  households can survive up to one month, if they were to loose their job.  To build in your financial security, three months expenses to get back on your feet.',
          },
        ]"
      />

      <VCardTitle title="Explore More about Safety Net"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: 'How to Build a Healthy Financial Safety Net - The Balance',
            image: '/carousel/safetynet_01.jpg',
            href: 'https://moneysmart.gov.au/saving/save-for-an-emergency-fund#:~:text=An%20emergency%20fund%20is%20money,to%20you%20or%20your%20family',
          },
          {
            title: 'What is a safety net? and why you need it?',
            image: '/carousel/safetynet_02.jpg',
            href: 'https://www.pidm.gov.my/en/info-centre/articles/spk/2022/first-jobbers-here-s-how-to-build-your-financial-safety-net',
          },
        ]"
      />
      <ButtonContainer>
        <ButtonBack @click="$router.push('/safety-net/page-01')" />
        <ButtonNext
          :show-icon="false"
          color="blue-dark"
          @click="$router.push('/safety-net/page-03')"
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
