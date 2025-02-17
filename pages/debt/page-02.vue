<template>
  <div>
    <VContainer>
      <VProgress :percentage="30" />
      <VHeading
        title="Dealing with Debt"
        section="Build a plan that creates your future"
        subtitle="Step 1 of 3"
        image-src="/calendar.svg"
      ></VHeading>
      <VHeadingAvailableIncome />
    </VContainer>
    <VCard>
      <VCardTitle
        title="Choose priority of how you want to pay it off."
      ></VCardTitle>
      <div>
        <label
          class="flex border-b-2 py-2 border-gray-100 focus-within:border-gray-300 mb-4 w-64 mx-auto"
          for="priority"
        >
          <img class="mr-2 w-5" src="/sort.svg" aria-hidden="true" />
          <select
            id="priority"
            class="text-lg font-bold w-full focus:outline-none"
            aria-label="Choose priority of how you want to pay it off"
            name="priority"
            :value="debtsOrderBy"
            @change="
              $store.commit('setValue', {
                key: 'debtsOrderBy',
                value: $event.target.value,
              })
            "
          >
            <option value="amount">by Snowball Method</option>
            <option value="interest">by Interest Rate</option>
          </select>
        </label>
      </div>
      <VDebtCard
        v-for="(debt, index) in debts"
        :key="debt.uuid"
        :index="index"
        :debt="debt"
        class="mb-5"
        :show-update="true"
        @update-debt="$modal.show('update-debt', $event)"
      ></VDebtCard>
      <ButtonNext
        class="mb-5"
        color="orange"
        @click="$modal.show('create-debt')"
        >Add Debt</ButtonNext
      >
      <VDebtModalCreate />
      <VDebtModalUpdate />
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
        v-if="withoutAdditionalLastDebtToPayOffDate"
        :title="withoutAdditionalLastDebtToPayOffDate"
        :subtitle="`You will be debt free in ${withoutAdditionalYearsTillPaidOff} years`"
      >
        <ButtonContainer>
          <ButtonBack @click="$router.push('/debt/page-01')"></ButtonBack>
          <ButtonNext
            :show-icon="false"
            color="blue-dark"
            @click="$router.push('/debt/page-03')"
            >NEXT</ButtonNext
          >
        </ButtonContainer>
      </VButtonBox>
      <ButtonContainer v-else>
        <ButtonBack @click="$router.push('/debt/page-01')"></ButtonBack>
        <ButtonNext
          :show-icon="false"
          color="blue-dark"
          subtitle="Proceed to Setting Your Goals"
          @click="
            $store.dispatch('setValue', {
              key: 'completedDebt',
              value: true,
            })
            $router.push('/goals/page-01')
          "
          >NEXT</ButtonNext
        >
      </ButtonContainer>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['debtsOrderBy']),
    ...mapGetters([
      'debts',
      'incomeSavings',
      'incomeSavingsAllocated',
      'incomeSavingsAvailable',
      'totalDebtAmountOwing',
      'totalDebtMinMonthlyRepayment',
    ]),
    ...mapGetters({
      withoutAdditionalLastDebtToPayOff:
        'debt/withoutAdditionalLastDebtToPayOff',
      withoutAdditionalLastDebtToPayOffDate:
        'debt/withoutAdditionalLastDebtToPayOffDate',
      withoutAdditionalYearsTillPaidOff:
        'debt/withoutAdditionalYearsTillPaidOff',
    }),
  },
}
</script>
