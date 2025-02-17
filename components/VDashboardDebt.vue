<template>
  <DashboardContainer :step="3" title="My Debt Free Plan" to="/debt/page-01">
    <div>
      <div>
        <div v-if="debts.length" class="mb-4">
          <VCard class="rounded-bottom">
            <div
              class="flex justify-between items-center font-bold text-xl text-gray-dark mb-2"
            >
              <p>Total Debt Owing</p>
              <p>{{ totalDebtAmountOwing | currencyNoCents }}</p>
            </div>
            <div>
              <div class="flex justify-between">
                <div>
                  <div class="mb-2">
                    <p class="text-gray-dark mb-0 text-sm">
                      Minimum Monthly Repayment
                    </p>
                    <p class="font-bold text-xl text-gray-dark">
                      {{ totalDebtMinMonthlyRepayment | currencyNoCents }}
                    </p>
                  </div>
                </div>
                <div class="flex justify-end">
                  <VPercentageCircle
                    class="w-28 -mr-5"
                    :percentage="100"
                    :text-inner-html="`
                  <tspan x='18' dy='-0.5em' style='text-anchor: middle;font-size: 0.8em;'>${withoutAdditionalYearsAndMonthsTillPaidOff[0]}yrs</tspan>
                  <tspan x='18' dy='1em' style='text-anchor: middle;font-size: 0.8em;'>${withoutAdditionalYearsAndMonthsTillPaidOff[1]}mths</tspan>
                `"
                  />
                </div>
              </div>
              <div class="flex items-end justify-between mt-2">
                <p class="text-gray-dark mb-0 text-sm">Date Paid In Full</p>
                <p class="font-bold text-xl text-gray-dark">
                  {{ withoutAdditionalLastDebtToPayOffDate }}
                </p>
              </div>
            </div>
            <div class="border-b my-4 -mx-4"></div>
            <div>
              <div class="flex justify-between">
                <div>
                  <div
                    class="flex justify-between items-center font-bold text-xl text-gray-dark mb-2"
                  >
                    <p>Debt Free Plan</p>
                  </div>
                  <div class="mb-2">
                    <p class="text-gray-dark mb-0 text-sm">
                      Extra Monthly Payment
                    </p>
                    <p class="font-bold text-xl text-gray-dark">
                      {{ debtIncomeSavingsAllocated | currencyNoCents }}
                    </p>
                  </div>
                </div>
                <div class="flex justify-end">
                  <VPercentageCircle
                    class="w-28 -mr-5"
                    :percentage="adjustedPercentage"
                    :text-inner-html="`
                  <tspan x='18' dy='-0.5em' style='text-anchor: middle;font-size: 0.8em;'>${yearsAndMonthsTillPaidOff[0]}yrs</tspan>
                  <tspan x='18' dy='1em' style='text-anchor: middle;font-size: 0.8em;'>${yearsAndMonthsTillPaidOff[1]}mths</tspan>
                `"
                  />
                </div>
              </div>
              <p class="flex items-end justify-between mt-2">
                <span class="text-gray-dark mb-0 text-sm"
                  >Date Paid In Full</span
                >
                <span class="font-bold text-xl text-gray-dark">
                  {{ lastDebtToPayOffDate }}
                </span>
              </p>
            </div>
          </VCard>
        </div>
        <div class="text-gray-dark italic" v-else>
          You have not yet added any debt.
        </div>
      </div>
    </div>
  </DashboardContainer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'totalDebtAmountOwing',
      'debtIncomeSavingsAllocated',
      'debts',
      'totalDebtMinMonthlyRepayment',
    ]),
    ...mapGetters({
      withoutAdditionalLastDebtToPayOffDate:
        'debt/withoutAdditionalLastDebtToPayOffDate',
      withoutAdditionalYearsTillPaidOff:
        'debt/withoutAdditionalYearsTillPaidOff',
      lastDebtToPayOffDate: 'debt/lastDebtToPayOffDate',
      yearsTillPaidOff: 'debt/yearsTillPaidOff',
      yearsAndMonthsTillPaidOff: 'debt/yearsAndMonthsTillPaidOff',
      withoutAdditionalYearsAndMonthsTillPaidOff:
        'debt/withoutAdditionalYearsAndMonthsTillPaidOff',
    }),
    adjustedPercentage() {
      const totalMonths =
        this.yearsAndMonthsTillPaidOff[0] * 12 +
        this.yearsAndMonthsTillPaidOff[1]
      const withoutAdditionalTotalMonths =
        this.withoutAdditionalYearsAndMonthsTillPaidOff[0] * 12 +
        this.withoutAdditionalYearsAndMonthsTillPaidOff[1]
      return (totalMonths / withoutAdditionalTotalMonths) * 100
    },
  },
}
</script>
