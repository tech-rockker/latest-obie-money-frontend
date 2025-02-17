<template>
  <VOnboardingContainer
    image-src="/onboarding/page-04.png"
    character-src="/onboarding/characters/Characters-4.png"
  >
    <VOnboardingHeading
      class="mb-4"
      image-src="/icons/onboarding/house.svg"
      title="Whats driving you financially? A family? A Ferrari? Maybe both?"
      subtitle="SELF-ASSESSMENT"
      content="Whether its a second home or a second honeymoon, work with Obie to put your money where your life is."
    ></VOnboardingHeading>
    <VOnboardingRadioGroup
      legend="Which Statement describes you best?"
      :options="[
        {
          label: 'Financially Secure',
          value: 1,
        },
        {
          label: 'Dream Lifestyle - Living where you want',
          value: 2,
        },
        {
          label: 'Travel and holidays',
          value: 3,
        },
        {
          label: 'Your dream home',
          value: 4,
        },
        {
          label: 'Good Work life Balance - Choosing where and when you work',
          value: 5,
        },
      ]"
      :value="onboarding.household"
      @input="
        $store.dispatch('setOnboardingValue', {
          key: 'household',
          value: $event,
        })
      "
    />
    <template slot="button">
      <ButtonBack @click="$router.push('/onboarding/page-02')" />
      <ButtonNext
        color="blue"
        @click="$router.push('/onboarding/page-04')"
        :disabled="!onboarding.household"
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
