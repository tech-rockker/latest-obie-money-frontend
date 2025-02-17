<template>
  <VOnboardingContainer
    image-src="/onboarding/page-04.png"
    character-src="/onboarding/characters/Characters-4.png"
  >
    <VOnboardingHeading
      class="mb-4"
      image-src="/icons/onboarding/house.svg"
      title="What would you most like to master?"
      subtitle="SELF-ASSESSMENT"
      content=""
    ></VOnboardingHeading>
    <VOnboardingCheckboxGroup
      legend="What would you most like to master?"
      type="checkbox"
      :value="onboarding.confidence_examples"
      @input="
        $store.dispatch('setOnboardingValue', {
          key: 'confidence_examples',
          value: $event,
        })
      "
      :options="[
        {
          label: 'Managing your pay easily to spend less',
          value: 'managing_your_pay_easily_to_spend_less',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Having an emergency fund',
          value: 'having_an_emergency_fund',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Getting out of debt fast',
          value: 'getting_out_of_debt_fast',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Saving more each pay',
          value: 'saving_more_each_pay',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Start or improve your investing',
          value: 'start_or_improve_your_investing',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Other',
          value: 'other',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
      ]"
    />
    <template slot="button">
      <ButtonBack @click="$router.push('/onboarding/page-04')"></ButtonBack>
      <ButtonNext
        :disabled="!onboarding?.confidence_examples?.length"
        color="blue"
        @click="$router.push('/onboarding/page-06')"
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
}
</script>

<style></style>
