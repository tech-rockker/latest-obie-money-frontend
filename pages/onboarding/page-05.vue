<template>
  <VOnboardingContainer
    image-src="/onboarding/page-04.png"
    character-src="/onboarding/characters/Characters-4.png"
  >
    <!-- <VOnboardingHeading
      class="mb-4"
      image-src="/icons/onboarding/house.svg"
      title="What would you most like to master?"
      subtitle="SELF-ASSESSMENT"
      content=""
    ></VOnboardingHeading> -->
    <div>
        <p class="font-semibold text-[#EEA15A] text-lg my-3"> 5/5</p>
        <p class="font-normal text-gray-dark text-2xl my-4 mt-3">What do you want to master?</p>
    </div>
    <VOnboardingCheckboxGroup
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
      ]"
    />
    <template slot="button">
      <ButtonBack @click="$router.push('/onboarding/page-04')"></ButtonBack>
      <ButtonNext
        :disabled="!onboarding?.confidence_examples?.length"
        color="blue"
        @click="handleSubmit"
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
  methods: {
    async handleSubmit() {
            try {
                this.loading = true
                await this.$axios.post('/api/profile/onboarding/questions/store', {
                    goal: this.onboarding.goal,
                    statement: this.onboarding.statement,
                    household: this.onboarding.household,
                    challenges_examples: this.onboarding.challenges_examples,
                    confidence_examples: this.onboarding.confidence_examples,
                })

                // Fetch user details again
                await this.$auth.fetchUser(); // This will refresh the user data

                this.$router.push('/onboarding/page-06')
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        },

  },
}
</script>

<style></style>
