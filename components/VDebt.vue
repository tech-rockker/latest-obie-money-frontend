<template>
  <div class="shadow-md rounded-lg">
    <div class="p-3">
      <VBudgetCardTitle
        v-model="show"
        title="Minimum Debt Repayments"
        image-src="/icons/debt.svg"
      />
      <div class="grid grid-cols-2 mt-3">
        <div>
          <p class="text-xs text-gray-500">Spending plan goal</p>
          <p class="text-lg text-green-500 font-bold flex items-center">
            <span>$0</span>
            <VBadge>0%</VBadge>
          </p>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-500">Current Actual Spend</p>
          <p
            :class="[
              debt.percentageOfIncome > 0 ? 'text-red-600' : 'text-green-2',
            ]"
            class="text-lg font-bold flex items-center justify-end"
          >
            <template v-if="isActualDebt">
              <span>{{ debt.transactionsTotal | currency }}</span>
              <VBadge :color="debt.transactionsPercentageOfIncome > 0 ? 'red' : 'green'">{{
                debt.transactionsPercentageOfIncome | percentage
              }}</VBadge>
            </template>
            <template v-else>
              <span>{{ debt.totalPerFrequency | currency }}</span>
              <VBadge :color="debt.percentageOfIncome > 0 ? 'red' : 'green'">{{
                debt.percentageOfIncome | percentage
              }}</VBadge>
            </template>
          </p>
        </div>
      </div>
    </div>
    <div v-if="show">
      <VDebtItem
        v-for="debt in debts"
        :type="type"
        :key="debt.uuid"
        :debt="debt"
        @update="$modal.show('update-debt', debt)"
      />
      <div v-if="!isActualDebt" class="bg-gray-50">
        <button
          class="text-left text-sm text-gray-400 py-2 px-3 border-t border-gray-100 w-full"
          @click="$modal.show(`create-debt`)"
        >
          + Add Debt
        </button>
      </div>
    </div>
    <VDebtModalCreate />
    <VDebtModalUpdate />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    type: {
      type: String,
      default: 'debt',
      validator: (value) => {
        return ['debt', 'actual-debt'].includes(value)
      },
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapGetters(['debts', 'debt']),
    isActualDebt() {
      return this.type === 'actual-debt'
    },
  },
}
</script>

<style></style>
