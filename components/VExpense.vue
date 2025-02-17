<template>
  <div class="shadow-md rounded-t-lg" :class="roundedBottom ? 'rounded-b-lg' : ''">
    <div class="p-3">
      <div class="flex items-center">
        <div class="flex w-8 h-8 mr-3">
          <img class="object-contain" :src="`/icons/${expense.icon}`" :alt="expense.label" />
        </div>
        <div>
          <h2 class="font-bold text-lg leading-tight">
            {{ expense.label }}
          </h2>
          <p v-if="isActualExpense" class="text-xs text-gray-500">
            {{ expense.transactionTotalPerDay | currency }}/day
          </p>
          <p v-else class="text-xs text-gray-500">
            {{ expense.totalPerDay | currency }}/day
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 mt-3">
        <div>
          <p class="text-xs text-gray-500">Spending plan goal</p>
          <p class="text-lg text-green-500 font-bold flex items-center">
            <span>{{
              budgetAmount | currency
              }}</span>
            <VBadge>{{ budgetPercentage | percentage }}</VBadge>
          </p>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-500">Current Actual Spend</p>
          <p :class="[isOptimal ? 'text-green-2' : 'text-red-600']"
            class="text-lg font-bold flex items-center justify-end">
            <span>{{ actualAmount | currency }}</span>
            <VBadge :color="isOptimal ? 'green' : 'red'">{{
              actualPercentage | percentage
              }}</VBadge>
          </p>
        </div>
      </div>
    </div>
    <div>
      <VCategory v-for="category in expense.categories" :key="category.uuid" :category="category" :expense="expense" :type="type" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    expense: {
      type: Object,
      required: true,
    },
    roundedBottom: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'expense',
      validator: (value) => {
        return ['expense', 'actual-expense'].includes(value)
      },
    },
  },
  computed: {
    ...mapGetters(['netIncomePerFrequency']),
    isActualExpense() {
      return this.type === 'actual-expense'
    },
    budgetAmount() {
      if (this.isActualExpense) {
        return this.expense.totalPerFrequency
      } else {
        return this.expense.optimisedTotalPerFrequency
      }
    },
    budgetPercentage() {
      if (this.isActualExpense) {
        return this.expense.percentageOfIncome
      } else {
        return this.expense.percentage
      }
    },
    actualAmount() {
      if (this.isActualExpense) {
        return this.expense.transactionsTotal
      } else {
        return this.expense.totalPerFrequency
      }
    },
    actualPercentage() {
      if (this.isActualExpense) {
        return this.expense.transactionsPercentageOfIncome
      } else {
        return this.expense.percentageOfIncome
      }
    },
    isOptimal() {
      if (this.isActualExpense) {
        return this.expense.transactionsAreOptimal
      }else {
        return this.expense.isOptimal
      }
    }
  },
}
</script>

<style></style>
