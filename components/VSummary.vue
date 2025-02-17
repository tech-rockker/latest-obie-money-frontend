<template>
  <div>
    <VSummaryContainer
      class="mb-6"
      title="Living Expenses"
      color="orange"
      :percentage="showOptimal ? 70 : totalPercentExpensesAndDebt"
    >
      <VSummaryContainerItem
        v-for="expense in expenses"
        :key="expense.uuid"
        :icon="expense.icon"
        :label="expense.label"
        :total-per-day="expense.totalPerDay"
        :total-per-frequency="expense.totalPerFrequency"
        :optimised-total-per-day="expense.optimisedTotalPerDay"
        :optimised-total-per-frequency="expense.optimisedTotalPerFrequency"
        :is-optimal="expense.isOptimal"
        :percentage="expense.percentage"
        :percentage-of-income="expense.percentageOfIncome"
        :show-comparison="showComparison"
        :show-optimal="showOptimal"
        type="expense"
        :type-data="expense"
      ></VSummaryContainerItem>
      <VSummaryContainerItem
        icon="debt.svg"
        label="Minimum Debt Repayments"
        :total-per-day="debt.totalPerDay"
        :total-per-frequency="debt.totalPerFrequency"
        :optimised-total-per-day="0"
        :optimised-total-per-frequency="0"
        :is-optimal="debt.isOptimal"
        :percentage="0"
        :percentage-of-income="debt.percentageOfIncome"
        :show-comparison="showComparison"
        :show-optimal="showOptimal"
        type="debt"
      ></VSummaryContainerItem>
    </VSummaryContainer>
    <VSummaryContainer
      class="mb-6"
      title="Savings & Investment"
      color="green"
      :percentage="showOptimal ? 30 : totalPercentSavingsAndInvestment"
    >
      <VSummaryContainerItem
        icon="savings.svg"
        label="Savings"
        :total-per-day="savings.totalPerDay"
        :total-per-frequency="savings.totalPerFrequency"
        :percentage="savings.percentage"
        :percentage-of-income="savings.percentageOfIncome"
        :optimised-total-per-day="savings.optimisedTotalPerDay"
        :optimised-total-per-frequency="savings.optimisedTotalPerFrequency"
        :is-optimal="savings.isOptimal"
        :show-comparison="showComparison"
        :show-optimal="showOptimal"
        optimal-text="overspend"
        unoptimal-text="underspend"
        type="savings"
      ></VSummaryContainerItem>
      <VSummaryContainerItem
        icon="growth.svg"
        label="Investment"
        :total-per-day="investment.totalPerDay"
        :total-per-frequency="investment.totalPerFrequency"
        :optimised-total-per-day="investment.optimisedTotalPerDay"
        :optimised-total-per-frequency="investment.optimisedTotalPerFrequency"
        :is-optimal="investment.isOptimal"
        :percentage="investment.percentage"
        :percentage-of-income="investment.percentageOfIncome"
        :show-comparison="showComparison"
        :show-optimal="showOptimal"
        optimal-text="overspend"
        unoptimal-text="underspend"
        type="investment"
      ></VSummaryContainerItem>
    </VSummaryContainer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    showComparison: {
      type: Boolean,
      default: false,
    },
    showOptimal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(['expenses', 'savings', 'investment', 'debt']),
    totalPercentSavingsAndInvestment() {
      return (
        this.investment.percentageOfIncome + this.savings.percentageOfIncome
      )
    },
    totalPercentExpensesAndDebt() {
      let sum = 0
      this.expenses.forEach((expense) => (sum += expense.percentageOfIncome))
      sum += this.debt.percentageOfIncome
      return sum
    },
  },
}
</script>

<style></style>
