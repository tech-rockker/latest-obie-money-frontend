<template>
  <div class="shadow-md rounded-lg">
    <div class="p-3">
      <VBudgetCardTitle
        v-model="show"
        title="Investment"
        image-src="/icons/growth.svg"
      />
      <div class="grid grid-cols-2 mt-3">
        <div>
          <p class="text-xs text-gray-500">Spending plan goal</p>
          <p class="text-lg text-green-500 font-bold flex items-center">
            <span>{{ investment.optimisedTotalPerFrequency | currency }}</span>
            <VBadge>{{ investment.percentage | percentage }}</VBadge>
          </p>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-500">Current Actual Spend</p>
          <p
            :class="[investment.isOptimal ? 'text-green-2' : 'text-red-600']"
            class="text-lg font-bold flex items-center justify-end"
          >
            <span>{{ investment.totalPerFrequency | currency }}</span>
            <VBadge :color="investment.isOptimal ? 'green' : 'red'">{{
              investment.percentageOfIncome | percentage
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
    <VModal :name="`update-investment`">
      <VModalTitle>Update Investment</VModalTitle>
      <div class="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label class="modal-label" for="investment-amount">Amount</label>
          <VMoney
            id="investment-amount"
            v-model="form.amount"
            placeholder="Amount"
            class="w-full modal-input"
          />
        </div>
        <div>
          <label class="modal-label" for="investment-frequency"
            >Frequency</label
          >
          <select
            id="investment-frequency"
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
        >Update Investment</ButtonNext
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
    ...mapGetters(['investment']),
    ...mapState(['frequencyOptions', 'onboarding']),
  },
  methods: {
    openEditModal() {
      this.form.amount = this.onboarding.income_to_investments_amount
      this.form.frequency = this.onboarding.income_to_investments_frequency
      this.$modal.show(`update-investment`)
    },
    submit() {
      // this.$store.commit('updateInvestment', {
      //   key: 'amount',
      //   value: this.form.amount,
      // })
      // this.$store.commit('updateInvestment', {
      //   key: 'frequency',
      //   value: this.form.frequency,
      // })
      this.$store.dispatch('setOnboardingValue', {
        key: 'income_to_investments_amount',
        value: this.form.amount,
      })
      this.$store.dispatch('setOnboardingValue', {
        key: 'income_to_investments_frequency',
        value: this.form.frequency,
      })
      this.$modal.hide(`update-investment`)
    },
  },
}
</script>

<style></style>
