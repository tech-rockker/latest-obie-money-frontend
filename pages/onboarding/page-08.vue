<template>
  <form @submit.prevent="goNext()">
    <VOnboardingContainer
      image-src="/onboarding/page-05.png"
      character-src="/onboarding/characters/Characters-5.png"
    >
      <!-- <VOnboardingHeading
        class="mb-4"
        image-src="/icons/onboarding/growth.svg"
        title="Make the most of your pay!"
        subtitle="STEP ONE"
      ></VOnboardingHeading> -->
      <div>
        <p class="font-normal text-gray-dark text-2xl mb-7 mt-3">Let’s start making the most of your pay!</p>
      </div>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="frequency"
          >How often do you get paid?</label
        >
        <select
          id="frequency"
          class="onboarding-input"
          :value="onboarding.income_frequency"
          @input="
            $store.dispatch('setOnboardingValue', {
              key: 'income_frequency',
              value: $event.target.value,
            })
          "
        >
          <option disabled="true" value="">Select a frequency</option>
          <option
            v-for="option in frequencyOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="net"
          >How much is your regular pay?</label
        >
        <VMoney
          id="net"
          class="onboarding-input"
          :value="onboarding.net_income"
          @input="
            $store.dispatch('setOnboardingValue', {
              key: 'net_income',
              value: $event,
            })
          "
        />
      </div>
      <!-- <div class="onboarding-input-container">
      <label class="onboarding-label" for="gross"
        >Gross Household Income (optional)</label
      >
      <VMoney
        id="gross"
        class="onboarding-input"
        :value="grossIncome"
        @input="
          $store.dispatch('setValue', {
            key: 'grossIncome',
            value: $event,
          })
        "
      />
    </div> -->
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="dob"
          >What is the next date of your pay?</label
        >
        <input
          id="dob"
          class="onboarding-input"
          type="date"
          required
          :value="onboarding.next_payday_date"
          max="9999-12-31"
          :min="new Date().toISOString().split('T')[0]"
          @input="
            $store.dispatch('setOnboardingValue', {
              key: 'next_payday_date',
              value: $event.target.value,
            })
          "
        />
        <p v-if="paydayInPast" class="red onboarding-input-description">
          Date must be in the future
        </p>
      </div>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="gross"
          >How much do you have in savings right now?</label
        >
        <VMoney
          id="gross"
          class="onboarding-input"
          :value="onboarding.cash_savings"
          @input="
            $store.dispatch('setOnboardingValue', {
              key: 'cash_savings',
              value: $event,
            })
          "
        />
      </div>
      <template slot="button">
        <ButtonBack @click="$router.push('/onboarding/page-05')" />
        <ButtonNext
          color="blue"
          @click="handleSubmit"
          :disabled="
            !onboarding.next_payday_date ||
            !onboarding.net_income ||
            paydayInPast
          "
          >Submit</ButtonNext
        >
      </template>
    </VOnboardingContainer>
  </form>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  auth: false,
  layout: 'onboarding',

  data() {
    return {
      frequencyOptions: [
        {
          label: 'Weekly',
          value: 'weekly',
        },
        {
          label: 'Fortnightly',
          value: 'fortnightly',
        },
        {
          label: 'Monthly',
          value: 'monthly',
        },
        {
          label: 'Yearly',
          value: 'yearly',
        },
      ],
    }
  },
  computed: {
    ...mapState(['onboarding']),
    paydayInPast() {
      return moment(this.onboarding.next_payday_date).isBefore(
        moment().subtract(1, 'days')
      )
    },
  },
  methods: {
    async handleSubmit() {
            try {
                this.loading = true
                await this.$axios.post('/api/profile/onboarding/income-stats/store', {
                    income_frequency: this.onboarding.income_frequency,
                    net_income: this.onboarding.net_income,
                    next_payday_date: this.onboarding.next_payday_date,
                    cash_savings: this.onboarding.cash_savings,
                })

                // Fetch user details again
                await this.$auth.fetchUser(); // This will refresh the user data

                this.$router.push('/dashboard')
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
