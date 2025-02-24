<template>
  <VOnboardingContainer
    image-src="/onboarding/page-02.png"
    character-src="/onboarding/characters/Characters-2.png"
  >
    <!-- <VOnboardingHeading
      class="mb-4"
      image-src="/icons/onboarding/speech-bubble.svg"
      title="Which Statement describes you best?"
      subtitle="SELF-ASSESSMENT"
    ></VOnboardingHeading> -->
    <div>
        <p class="font-semibold text-[#EEA15A] text-lg my-3"> 2/5</p>
        <p class="font-normal text-gray-dark text-2xl my-4 mt-3">What statement describes you best?</p>
    </div>
    <VOnboardingRadioGroup
      :options="[
        {
            label:
                'I’m already on top of my money management but want to start optimising it',
            value: 1,
        },
        {
            label:
                'I’m just starting out and could use some help in all areas',
            value: 2,
        },
        {
            label: 'I don’t know where to start!',
            value: 3,
        },
      ]"
      :value="onboarding.statement"
      @input="
        $store.dispatch('setOnboardingValue', {
          key: 'statement',
          value: $event,
        })
      "
    />
    <template slot="button">
      <ButtonBack
        color="blue"
        @click="$router.push('/onboarding/page-01')"
      ></ButtonBack>
      <ButtonNext
        color="blue"
        @click="$router.push('/onboarding/page-03')"
        :disabled="!onboarding.statement"
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
