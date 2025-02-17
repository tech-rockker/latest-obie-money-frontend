<template>
  <table class="w-full text-gray-dark mt-4">
    <tr>
      <td class="border-b border-gray-dark"></td>
      <td class="text-orange-2 font-semibold border-b border-outline">
        Allocated
      </td>
      <td class="text-orange-2 font-semibold border-b border-outline">
        Available
      </td>
    </tr>
    <tr>
      <td>Available Cash Savings</td>
      <td class="font-bold text-base">
        {{ cashSavingsAllocated | currency }}
      </td>
      <td class="font-bold text-base">
        {{ cashSavingsAvailable | currency }}
      </td>
    </tr>
    <tr>
      <td>Available Income</td>
      <td class="font-bold text-base">
        {{ incomeSavingsAllocated | currency }}
      </td>
      <td class="font-bold text-base">
        {{ incomeSavingsAvailable | currency }}
      </td>
    </tr>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'debts',
      'cashSavingsAllocated',
      'cashSavingsAvailable',
      'incomeSavings',
      'incomeSavingsAllocated',
      'incomeSavingsAvailable',
      'totalDebtAmountOwing',
      'totalDebtMinMonthlyRepayment',
    ]),
  },
}
</script>

<style lang="scss" scoped>
table {
  td {
    @apply py-1;
  }
}
</style>
