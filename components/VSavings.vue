<template>
  <div class="shadow-md rounded-lg">
    <div class="p-3">
      <VBudgetCardTitle
        v-model="show"
        title="Savings"
        image-src="/icons/savings.svg"
      />
      <div class="grid grid-cols-2 mt-3">
        <div>
          <p class="text-xs text-gray-500">Spending plan goal</p>
          <p class="text-lg text-green-500 font-bold flex items-center">
            <span>{{ savings.optimisedTotalPerFrequency | currency }}</span>
            <VBadge>{{ savings.percentage | percentage }}</VBadge>
          </p>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-500">Current Actual Spend</p>
          <p
            :class="[savings.isOptimal ? 'text-green-2' : 'text-red-600']"
            class="text-lg font-bold flex items-center justify-end"
          >
            <span>{{ savings.totalPerFrequency | currency }}</span>
            <VBadge :color="savings.isOptimal ? 'green' : 'red'">{{
              savings.percentageOfIncome | percentage
            }}</VBadge>
          </p>
        </div>
      </div>
    </div>
    <div v-if="show">
      <div class="bg-gray-50">
        <button
          class="text-left text-sm text-gray-400 py-2 px-3 border-t border-gray-100 w-full"
          @click="openEditModal()"
        >
          + Update
        </button>
      </div>
    </div>
    <VModal name="update-savings">
      <VModalTitle>Update Savings</VModalTitle>
      <div class="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label class="modal-label" for="savings-amount">Amount</label>
          <VMoney
            id="savings-amount"
            v-model="form.amount"
            placeholder="Amount"
            class="w-full modal-input"
          />
        </div>
        <div>
          <label class="modal-label" for="savings-frequency">Frequency</label>
          <select
            id="savings-frequency"
            v-model="form.frequency"
            class="w-full modal-input"
          >
            <option disabled="true" value="">Frequency</option>
            <option
              v-for="option in frequencyOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
      <ButtonNext :disabled="!form.frequency" color="orange" @click="submit()"
        >Update Savings</ButtonNext
      >
    </VModal>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      show: false,
      form: {
        amount: 0,
        frequency: '',
      },
    }
  },
  computed: {
    ...mapGetters(['savings']),
    ...mapState(['frequencyOptions', 'onboarding']),
  },
  methods: {
    openEditModal() {
      this.form.amount = this.onboarding.income_to_savings_amount
      this.form.frequency = this.onboarding.income_to_savings_frequency
      this.$modal.show(`update-savings`)
    },
    submit() {
      this.$store.dispatch('setOnboardingValue', {
        key: 'income_to_savings_amount',
        value: this.form.amount,
      })
      this.$store.dispatch('setOnboardingValue', {
        key: 'income_to_savings_frequency',
        value: this.form.frequency,
      })

      this.$modal.hide(`update-savings`)
    },
  },
}
</script>

<style></style>
