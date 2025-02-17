<template>
  <div>
    <VContainer>
      <VProgress :percentage="34" />
      <VHeading
        title="Dealing with Debt. FAST."
        section="Build a plan that creates your future"
        subtitle="Step 3 of 3"
        image-src="/calendar.svg"
      ></VHeading>
      <!-- <div class="grid grid-cols-2">
        <VHeadingValues title="Allocated from savings" :primary-value="" />
      </div> -->
    </VContainer>
    <VCard>
      <VCardTitle
        title="How much do you want to allocate every month?"
      ></VCardTitle>
      <div class="flex justify-between mb-4 mt-3">
        <p class="font-bold text-2xl">
          {{ debtIncomeSavingsAllocated | currency }}
        </p>
        <div class="text-right">
          <p>Your debts will be paid by</p>
          <p class="text-lg font-bold">{{ lastDebtToPayOffDate }}</p>
        </div>
      </div>
      <VSlider
        class="mb-6"
        :max="incomeSavingsAvailable"
        :value="debtIncomeSavingsAllocated"
        @input="
          $store.dispatch('setOnboardingValue', {
            key: 'debt_income_savings_allocated',
            value: $event,
          })
        "
      />
      <VDebtCard
        v-for="(debt, index) in debts"
        :key="debt.uuid"
        :index="index"
        :debt="debt"
        :display-allocation="true"
        class="mb-5"
      ></VDebtCard>
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="p-3 bg-gray-2 rounded-md">
          <p class="text-xs text-gray-600">Total Debt Owing</p>
          <p class="text-xl font-bold text-red-600">
            {{ totalDebtAmountOwing | currency }}
          </p>
        </div>
        <div class="p-3 bg-gray-2 rounded-md">
          <p class="text-xs text-gray-600">Min. Monthly Payments</p>
          <p class="text-xl font-bold text-red-600">
            {{ totalDebtMinMonthlyRepayment | currency }}
          </p>
        </div>
      </div>
      <VButtonBox
        :title="lastDebtToPayOffDate"
        :subtitle="`You will be debt free in ${yearsTillPaidOff} years. ${differenceString}`"
      >
        <ButtonContainer>
          <ButtonBack @click="$router.push('/debt/page-02')"></ButtonBack>
          <RewardAssigner
            :reward-id="3"
            v-slot="{ assigningReward, assignReward }"
            @success="$router.push('/section-index?step=4')"
          >
            <ButtonNext
              :show-icon="false"
              :disabled="assigningReward"
              color="orange"
              subtitle="Proceed to Setting Your Goals"
              @click="() => assignReward()"
            >
              SAVE YOUR PAYOUT SCHEDULE</ButtonNext
            >
          </RewardAssigner>
        </ButtonContainer>
      </VButtonBox>
    </VCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  computed: {
    ...mapGetters([
      'debtIncomeSavingsAllocated',
      'debts',
      'incomeSavings',
      'incomeSavingsAllocated',
      'incomeSavingsAvailable',
      'totalDebtAmountOwing',
      'totalDebtMinMonthlyRepayment',
    ]),
    ...mapGetters({
      lastDebtToPayOff: 'debt/lastDebtToPayOff',
      lastDebtToPayOffDate: 'debt/lastDebtToPayOffDate',
      yearsTillPaidOff: 'debt/yearsTillPaidOff',
    }),
    differenceString() {
      const withAdditional = this.lastDebtToPayOff.paymentsWithAdditionalDate
      const withoutAdditional =
        this.lastDebtToPayOff.paymentsWithoutAdditionalDate

      const yearsDiff = moment(withoutAdditional).diff(
        moment(withAdditional),
        'years'
      )
      const monthsDiff =
        moment(withoutAdditional).diff(moment(withAdditional), 'months') -
        yearsDiff * 12

      let theString = ''
      if (yearsDiff || monthsDiff) {
        theString += 'You have saved '
        if (yearsDiff) {
          if (yearsDiff === 1) {
            theString += `${yearsDiff} year`
          } else {
            theString += `${yearsDiff} years`
          }
        }
        if (yearsDiff && monthsDiff) {
          theString += ` and `
        }
        if (monthsDiff) {
          if (monthsDiff === 1) {
            theString += `${monthsDiff} month`
          } else {
            theString += `${monthsDiff} months`
          }
        }
        theString += ' off your debt.'
      }
      return theString
    },
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
