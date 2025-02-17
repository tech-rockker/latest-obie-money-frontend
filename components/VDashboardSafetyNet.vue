<template>
  <div>
    <DashboardContainer
      :step="2"
      title="My Safety Net Goals"
      to="/safety-net/page-01"
    >
      <div class="orange-currency-table">
        <table>
          <tr>
            <td>Emergency Fund</td>
            <td>{{ safetyNet.emergencyFund.amount | currencyNoCents }}</td>
          </tr>
          <tr>
            <td>Buffer for Lumpy Expenses</td>
            <td>
              {{ safetyNet.bufferForLumpyExpenses.amount | currencyNoCents }}
            </td>
          </tr>
          <tr>
            <td>3 Months of Expenses</td>
            <td>
              {{ safetyNet.threeMonthsOfExpenses.amount | currencyNoCents }}
            </td>
          </tr>
        </table>
      </div>
    </DashboardContainer>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters([]),
    ...mapState(['safetyNet']),
  },
}
</script>
