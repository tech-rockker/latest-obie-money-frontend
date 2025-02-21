<template>
  <VOnboardingContainer
    image-src="/onboarding/page-05.png"
    character-src="/onboarding/characters/Characters-1.png"
  >
    <VOnboardingHeading
      title="A financially fit you"
      content="Your life your way, financially secure independent and free."
    ></VOnboardingHeading>
    <p class="font-bold text-gray-dark text-base my-3 mt-6">I want to:</p>
    <VOnboardingRadioGroup
      legend="Which Statement describes you best?"
      :options="[
        {
          label: 'Get More from my Money',
          value: '1',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'Build my Financial Security',
          value: '2',
          imageSrc: '/icons/onboarding/security.svg',
          imageAlt: 'security',
        },
        {
          label: 'Improve my financial knowledge and confidence',
          value: '3',
          imageSrc: '/icons/onboarding/speed.svg',
          imageAlt: 'speed',
        },
      ]"
      :value="onboarding.goal"
      @input="
        $store.dispatch('setOnboardingValue', {
          key: 'goal',
          value: $event,
        })
      "
    />

    <template slot="button">
      <ButtonBack
        color="blue"
        @click="$router.push('/onboarding/welcome')"
      ></ButtonBack>
      <ButtonNext
        color="blue"
        @click="$router.push('/onboarding/page-02')"
        :disabled="!onboarding.goal"
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
  created() {
    this.$store.dispatch('resetDemo')
  },
}
</script>

<style></style>
