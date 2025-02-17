<template>
  <div v-if="insuranceExpense" class="rounded-lg shadow-md">
    <div class="p-3">
      <VBudgetCardTitle
        :show-controls="false"
        title="Super Summary"
        image-src=""
      />
      <div class="flex justify-between mt-3">
        <div>
          <p class="text-xs text-gray-500">Total Balance</p>
          <p class="flex items-center text-lg font-bold text-green-2">
            <span>{{ superFundsTotalCurrentBalance | currency }}</span>
          </p>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-500">Projected Income at Retirement</p>
          <div class="flex items-center justify-end space-x-3">
            <button
              class="text-gray-300 hover:text-gray-400 focus:text-gray-400"
              @click="$modal.show('manage-projected-income')"
            >
              <span class="sr-only"
                >OPEN Projected Income at Retirement MODAL</span
              >
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

            <p
              class="flex items-center justify-end text-lg font-bold text-green-2"
            >
              <span>{{ incomeProjectedAtRetirement | currency }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
    <VModal @before-open="setFormData()" name="manage-projected-income">
      <form @submit.prevent="submit()">
        <VModalTitle>Projected Income at Retirement</VModalTitle>
        <VModalInput
          id="income_projected_at_retirement"
          v-model="form.income_projected_at_retirement"
          label="Projected Income"
          type="money"
        />
        <ButtonNext
          :disabled="!form.income_projected_at_retirement"
          color="orange"
          type="submit"
          >Update Projected Income</ButtonNext
        >
      </form>
    </VModal>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  props: {
    showControls: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      form: {
        income_projected_at_retirement: 0,
      },
    }
  },
  methods: {
    setFormData() {
      this.form.income_projected_at_retirement =
        this.incomeProjectedAtRetirement
    },
    submit() {
      this.$store.dispatch('setOnboardingValue', {
        key: 'income_projected_at_retirement',
        value: this.form.income_projected_at_retirement,
      })
      this.$modal.hide('manage-projected-income')
    },
  },
  computed: {
    ...mapState(['frequency']),
    ...mapGetters({
      incomeProjectedAtRetirement: 'incomeProjectedAtRetirement',
      expenses: 'expenses',
      insurancesTotalPerFrequency: 'insurancesTotalPerFrequency',
      insurancesPercentageOfIncome: 'insurancesPercentageOfIncome',
      superFundsTotalCurrentBalance: 'superFundsTotalCurrentBalance',
    }),
    insuranceExpense() {
      return this.expenses.find((expense) => expense.uuid === 2)
    },
  },
}
</script>
