<template>
  <VOnboardingContainer
    image-src="/onboarding/page-04.png"
    character-src="/onboarding/characters/Characters-4.png"
  >
    <!-- <VOnboardingHeading
      class="mb-4"
      image-src="/icons/onboarding/house.svg"
      title="Whats driving you financially? A family? A Ferrari? Maybe both?"
      subtitle="SELF-ASSESSMENT"
      content="Whether its a second home or a second honeymoon, work with Obie to put your money where your life is."
    ></VOnboardingHeading> -->
    <div>
        <p class="font-semibold text-[#EEA15A] text-lg my-3"> 3/5</p>
        <p class="font-normal text-gray-dark text-2xl my-4 mt-3">What’s driving you financially? Maybe a family, a
            Ferrari or both?</p>
    </div>
    <VOnboardingRadioGroup
      :options="[
        {
            label: 'Feeling financially secure',
            value: 1,
        },
        {
            label: 'Dream Lifestyle',
            value: 2,
        },
        {
            label: 'Work life balance',
            value: 3,
        },
        {
            label: 'Buying a dream home',
            value: 4,
        },
        {
            label: 'Paying down debt',
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
