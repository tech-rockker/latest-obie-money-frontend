<template>
  <div v-if="insuranceExpense" class="shadow-md rounded-lg">
    <div class="p-3">
      <VBudgetCardTitle
        :show-controls="false"
        title="Insurance Summary"
        image-src="/icons/care.svg"
      />
      <div class="grid grid-cols-2 mt-3">
        <div>
          <p class="text-xs text-gray-500">Spending plan goal</p>
          <p class="text-lg text-green-500 font-bold flex items-center">
            <span>{{ insuranceExpense.totalPerFrequency | currency }}</span>
            <VBadge>{{
              insuranceExpense.percentageOfIncome | percentage
            }}</VBadge>
          </p>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-500">
            Premium Outside Super per {{ frequency | frequencyToNoun }}
          </p>
          <p
            :class="[isOptimal ? 'text-green-2' : 'text-red-600']"
            class="text-lg font-bold flex items-center justify-end"
          >
            <span>{{
              insurancesOutsideSuperTotalPerFrequency | currency
            }}</span>
            <VBadge :color="isOptimal ? 'green' : 'red'">{{
              insurancesOutsideSuperPercentageOfIncome | percentage
            }}</VBadge>
          </p>
        </div>
      </div>
      <div class="mt-2">
        <div class="text-right">
          <p class="text-xs text-gray-500">
            Premium Inside Super per {{ frequency | frequencyToNoun }}
          </p>
          <p class="text-lg font-bold flex items-center justify-end">
            <span>{{ insurancesInsideSuperTotalPerFrequency | currency }}</span>
          </p>
        </div>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
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
  computed: {
    ...mapState(['frequency']),
    ...mapGetters({
      expenses: 'expenses',
      insurancesTotalPerFrequency: 'insurancesTotalPerFrequency',
      insurancesPercentageOfIncome: 'insurancesPercentageOfIncome',
      insurancesOutsideSuperTotalPerFrequency:
        'insurancesOutsideSuperTotalPerFrequency',
      insurancesInsideSuperTotalPerFrequency:
        'insurancesInsideSuperTotalPerFrequency',
      insurancesOutsideSuperPercentageOfIncome:
        'insurancesOutsideSuperPercentageOfIncome',
    }),
    insuranceExpense() {
      return this.expenses.find((expense) => expense.uuid === 2)
    },
    isOptimal() {
      return (
        this.insurancesOutsideSuperPercentageOfIncome <=
        this.insuranceExpense.percentageOfIncome
      )
    },
  },
}
</script>
