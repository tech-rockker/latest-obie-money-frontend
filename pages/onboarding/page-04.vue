<template>
  <VOnboardingContainer
    image-src="/onboarding/page-04.png"
    character-src="/onboarding/characters/Characters-4.png"
  >
    <!-- <VOnboardingHeading
      class="mb-4"
      image-src="/icons/onboarding/house.svg"
      title="What is the biggest challenge you have with your money today?"
      subtitle="SELF-ASSESSMENT"
      content=""
    ></VOnboardingHeading> -->
    <div>
        <p class="font-semibold text-[#EEA15A] text-lg my-3"> 4/5</p>
        <p class="font-normal text-gray-dark text-2xl my-4 mt-3">What is your biggest financial challenge right now?
        </p>
    </div>
    <VOnboardingCheckboxGroup
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
                label: 'Unexpected costs',
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
                label: 'Something else',
                value: 'something_else',
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
