<template>
  <VOnboardingContainer
    image-src="/onboarding/page-04.png"
    character-src="/onboarding/characters/Characters-4.png"
  >
    <VOnboardingHeading
      class="mb-4"
      image-src="/icons/onboarding/house.svg"
      title="What is the biggest challenge you have with your money today?"
      subtitle="SELF-ASSESSMENT"
      content=""
    ></VOnboardingHeading>
    <VOnboardingCheckboxGroup
      legend="What is the biggest challenge you have with your money today?"
      type="checkbox"
      @input="handleInput($event)"
      :value="onboarding.challenges_examples"
      :options="options"
    />
    <template slot="button">
      <ButtonBack @click="$router.push('/onboarding/page-03')"></ButtonBack>
      <ButtonNext
        :disabled="!onboarding?.challenges_examples?.length"
        color="blue"
        @click="$router.push('/onboarding/page-05')"
        >NEXT</ButtonNext
      >
    </template>
  </VOnboardingContainer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  auth: false,
  layout: 'onboarding',
  computed: {
    ...mapState(['onboarding']),
  },
  data() {
    return {
      options: [
        {
          label: 'Spending more than you earn',
          value: 'spending_more_than_you_earn',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Unexpected Costs',
          value: 'unexpected_costs',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Getting out of debt',
          value: 'getting_out_of_debt',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Dipping into your savings',
          value: 'dipping_into_your_savings',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Not Investing',
          value: 'not_investing',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Other',
          value: 'other',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
      ],
    }
  },
  methods: {
    handleInput(value) {
      this.$store.dispatch('setOnboardingValue', {
        key: 'challenges_examples',
        value,
      })
    },
  },
}
</script>

<style></style>
