<template>
  <DashboardContainer :step="6" title="My Super Investment" to="/super/page-02">
    <div>
      <div>
        <div class="orange-currency-table">
          <table>
            <tr>
              <td>My Total Super Balance</td>
              <td>{{ superFundsTotalCurrentBalance | currencyNoCents }}</td>
            </tr>
            <tr>
              <td>Projected Income at Retirement</td>
              <td>{{ incomeProjectedAtRetirement | currencyNoCents }}</td>
            </tr>
            <!-- <tr>
            <td>Buffer for Lumpy Expenses</td>
            <td>{{ safetyNet.bufferForLumpyExpenses.amount | currency }}</td>
          </tr>
          <tr>
            <td>3 Months of Expenses</td>
            <td>{{ safetyNet.threeMonthsOfExpenses.amount | currency }}</td>
          </tr> -->
          </table>
        </div>
      </div>
    </div>
  </DashboardContainer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      superFundsTotalCurrentBalance: 'superFundsTotalCurrentBalance',
      incomeProjectedAtRetirement: 'incomeProjectedAtRetirement',
    }),
    ...mapState(['safetyNet']),
  },
}
</script>
