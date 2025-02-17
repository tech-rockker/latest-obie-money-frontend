<template>
  <div class="inline-flex items-center font-normal text-base">
    <button
      class="text-gray-300 hover:text-gray-400 focus:text-gray-400"
      @click="$modal.show('manage-pay')"
    >
      <span class="sr-only">OPEN MANAGE PAY MODAL</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M17.544 8.204a.937.937 0 0 0-.937.937v5.796a1.628 1.628 0 0 1-1.625 1.625h-9.92a1.629 1.629 0 0 1-1.625-1.625V5.02a1.628 1.628 0 0 1 1.626-1.625h5.793a.938.938 0 0 0 0-1.875H5.063a3.506 3.506 0 0 0-3.5 3.5v9.918a3.506 3.506 0 0 0 3.5 3.5h9.918a3.506 3.506 0 0 0 3.5-3.5V9.143a.937.937 0 0 0-.937-.939ZM18.567 4.045l-2.612-2.612a.643.643 0 0 0-.884 0l-1.19 1.192 3.494 3.494 1.19-1.188a.625.625 0 0 0 0-.884l.002-.002Z"
        />
        <path
          fill="currentColor"
          d="M7.054 9.71v2.611a.625.625 0 0 0 .625.625h2.611a.625.625 0 0 0 .442-.183L16.492 7 13 3.508l-5.76 5.76a.625.625 0 0 0-.186.442Z"
        />
      </svg>
    </button>
    <VModal @before-open="setFormData()" name="manage-pay">
      <form @submit.prevent="submit()">
        <VModalTitle>Make the most of your pay!</VModalTitle>
        <VModalSelect
          :required="true"
          id="income_frequency"
          v-model="form.income_frequency"
          label="How often do you get paid?"
          placeholder="Frequency"
          :options="frequencyOptions"
        />
        <VModalInput
          id="net_income"
          v-model="form.net_income"
          label="How much is your regular pay?"
          type="money"
        />
        <VModalInput
          id="next_payday_date"
          v-model="form.next_payday_date"
          :min="new Date().toISOString().split('T')[0]"
          label="What is the next date of your pay?"
          max="9999-12-31"
          type="date"
        />
        <VModalInput
          id="net_income"
          v-model="form.cash_savings"
          label="How much do you have in savings right now?"
          type="money"
        />
        <ButtonNext
          :disabled="!form.next_payday_date || !form.income_frequency"
          color="orange"
          type="submit"
          >Update Pay</ButtonNext
        >
      </form>
    </VModal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      form: {
        income_frequency: '',
        net_income: '',
        next_payday_date: '',
        cash_savings: '',
      },
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
  methods: {
    setFormData() {
      this.form.income_frequency = this.onboarding.income_frequency
      this.form.net_income = this.onboarding.net_income
      this.form.next_payday_date = this.onboarding.next_payday_date
      this.form.cash_savings = this.onboarding.cash_savings
    },
    submit() {
      this.$store.dispatch('setOnboardingValue', {
        key: 'income_frequency',
        value: this.form.income_frequency,
      })
      this.$store.dispatch('setOnboardingValue', {
        key: 'net_income',
        value: this.form.net_income,
      })
      this.$store.dispatch('setOnboardingValue', {
        key: 'next_payday_date',
        value: this.form.next_payday_date,
      })
      this.$store.dispatch('setOnboardingValue', {
        key: 'cash_savings',
        value: this.form.cash_savings,
      })
      this.$modal.hide('manage-pay')
    },
  },
  computed: {
    ...mapState(['onboarding']),
  },
}
</script>

<style></style>
