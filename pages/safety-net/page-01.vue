<template>
  <VPageContainer>
    <VContainer>
      <VProgress :percentage="10" />
      <VHeading title="Build a plan that creates your future"></VHeading>
      <p class="text-light-purple mt-2 mb-4">
        You have seen all your money upfront. You’ve learnt how to make informed
        decisions. Now its time to focus your financial energy on the things
        that matter most to you.
      </p>
      <VHeading title="Allocate"></VHeading>
      <VAvailableSavings />
    </VContainer>
    <VCard>
      <template slot="top">
        <VCardTitle
          title="Allocate your Save and Invest money considering these 3 steps"
        ></VCardTitle>
        <div class="mb-6 mt-2">
          <div
            v-for="(item, index) in [
              'Creating Your Safety Net',
              'Clear your Debts',
              'Set and Save Your Goals',
            ]"
            :key="item"
            class="shadow-lg border border-gray-50 flex rounded-md bg-white mb-4"
          >
            <div
              class="flex items-center justify-center w-12 bg-orange-2 text-dark-purple rounded-l-md text-lg font-bold"
            >
              {{ index + 1 }}
            </div>
            <div class="w-full p-3 font-bold">
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </template>
      <template slot="bottom">
        <ButtonContainer>
          <ButtonBack @click="$router.push('/dashboard')" />
          <ButtonNext
            :show-icon="false"
            color="blue-dark"
            subtitle="Creating Your Safety Net"
            @click="$router.push('/safety-net/page-02')"
            >GET STARTED</ButtonNext
          >
        </ButtonContainer>
      </template>
    </VCard>
  </VPageContainer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'debts',
      'savings',
      'cashSavings',
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
