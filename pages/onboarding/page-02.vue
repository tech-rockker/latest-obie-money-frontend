<template>
  <VOnboardingContainer
    image-src="/onboarding/page-02.png"
    character-src="/onboarding/characters/Characters-2.png"
  >
    <VOnboardingHeading
      class="mb-4"
      image-src="/icons/onboarding/speech-bubble.svg"
      title="Which Statement describes you best?"
      subtitle="SELF-ASSESSMENT"
    ></VOnboardingHeading>
    <VOnboardingRadioGroup
      legend="Which Statement describes you best?"
      :options="[
        {
          label:
            'I’m already managing my money but I want to optimise what I am doing',
          value: 1,
        },
        {
          label:
            'I’m not doing anything but would if I could set it up once and see a real benefit.',
          value: 2,
        },
        {
          label: 'I’m not doing much and I dont know where to start.',
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
