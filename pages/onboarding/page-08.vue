<template>
  <VOnboardingContainer image-src="/onboarding/page-06.png" character-src="">
    <VOnboardingHeading
      title="A financially fit you"
      content="Your life your way, financially secure independent and free."
    ></VOnboardingHeading>
    <!-- <div
      class="p-4 font-semibold border-l-4 border-[#E5E4F5] bg-[#EBEAFF] text-gray-dark rounded-md"
    >
      <p>
        Obie will help you put your new effective spending plans and goals in
        place and work with you to keep you on track.
      </p>
    </div> -->
    <div class="py-6 text-gray-dark">
      <p class="italic text-xl mb-3">
        “I am earning comfortably, but I have no clue what to do to create that
        passive income or how I could set myself up to buy property years later”
        <br />
        <br />
        “I feel like the future is hinged on the decisions I make today. <br />
        <br />
        What are some money habits I should try to build now?”<br />
      </p>
      <p class="text-right text-lg">-Ange</p>
    </div>
    <img src="/onboarding2.png" alt="Ange" />
    <template slot="button">
      <ButtonNext color="blue" @click="$router.push('/onboarding/page-09')"
        >LET'S PROCEED</ButtonNext
      >
    </template>
  </VOnboardingContainer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'onboarding',
  auth: false,
  computed: {
    ...mapState(['onboarding']),
  },
}
</script>

<style></style>
