<template>
  <VOnboardingContainer
    image-src="/onboarding/page-05.png"
    character-src="/onboarding/characters/Characters-1.png"
  >
    <!-- <VOnboardingHeading
      title="A financially fit you"
      content="Your life your way, financially secure independent and free."
    ></VOnboardingHeading> -->
    <div>
        <p class="font-semibold text-[#EEA15A] text-lg my-3"> 1/5</p>
        <p class="font-normal text-gray-dark text-2xl my-4 mt-3">What brings you here?</p>
    </div>
    <VOnboardingRadioGroup
      :options="[
        {
          label: 'I want to get more from my money',
          value: '1',
          imageSrc: '/icons/onboarding/pie-chart.svg',
          imageAlt: 'pie-chart',
        },
        {
          label: 'I want to build my financial security',
          value: '2',
          imageSrc: '/icons/onboarding/security.svg',
          imageAlt: 'security',
        },
        {
          label: 'I want to improve my financial knowledge and confidence',
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
