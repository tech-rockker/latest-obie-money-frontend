<template>
  <div>
    <VContainer>
      <VProgress :percentage="6" />
      <VHeading
        title="Optimise your Income"
        subtitle=""
        section="Manage Cashflow and Budgeting"
        image-src="/growth.svg"
      ></VHeading>
      <div class="flex items-center justify-between mt-3">
        <div class="w-24 mr-3">
          <p class="text-xs text-gray-dark">
            Net Income per {{ frequency | frequencyToNoun }}
          </p>
          <p class="gray-dark text-xl font-bold flex items-center space-x-2">
            <span>{{ netIncomePerFrequency | currency }}</span> <VPayModal />
          </p>
        </div>
      </div>
    </VContainer>
    <VCard>
      <VCardTitle
        image-src="/icons/heat.svg"
        title="Compare your current spend"
        text-alignment="center"
      ></VCardTitle>
      <VCardDescription class="text-center text-lg">
        Living Expenses 60% <br />
        Fun and Party Money 10% <br />
        Get out of trouble and Save 20% <br />
        Invest 10% <br />
      </VCardDescription>
      <VSummaryActual :show-comparison="true" class="mb-3" />
      <VAlert
        v-if="transactionsSurplus > 0"
        class="mb-6"
        title="Surplus"
        :description="`You got <span class='font-bold'>${filteredTransactionsSurplus}</span> left over in your pay!`"
      >
      </VAlert>
      <VAlert
        v-if="transactionsSurplus < 0"
        class="mb-6"
        variant="red"
        title="Deficit"
        :description="`You have spent more than your budget by <span class='font-bold'>${filteredTransactionsSurplus}</span>. You need to reduce your spending.`"
      >
      </VAlert>
      <div
        v-if="transactionsWithImages && transactionsWithImages.length"
        class="grid grid-cols-3 gap-0.5 my-6"
      >
        <button
          @click="$modal.show('actual-expense-image-modal', { transaction })"
          :style="{ backgroundImage: `url(${transaction.image_url})` }"
          type="button"
          class="bg-cover bg-center h-32 w-full"
          v-for="transaction in transactionsWithImages"
          :key="transaction.uuid"
        ></button>
      </div>
      <ButtonContainer>
        <ButtonBack @click="$router.push('/dashboard')" />
      </ButtonContainer>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SandboxPage',
  data() {
    return {
      loading: false,
    }
  },
  created() {
    this.$store.dispatch('getTransactions')
    this.$store.dispatch('setValue', {
      key: 'frequency',
      value: this.incomeFrequency,
    })
  },
  watch: {
    incomeFrequency() {
      this.$store.dispatch('setValue', {
        key: 'frequency',
        value: this.incomeFrequency,
      })
    },
  },
  computed: {
    ...mapGetters([
      'expenses',
      'savings',
      'investment',
      'netIncomePerYear',
      'netIncomePerFrequency',
      'surplusPerFrequency',
      'incomeFrequency',
      'transactionsTotal',
      'transactionsWithImages',
    ]),
    ...mapState(['frequency']),
    transactionsSurplus() {
      return this.netIncomePerFrequency - this.transactionsTotal
    },
    filteredTransactionsSurplus() {
      return this.$options.filters.currency(Math.abs(this.transactionsSurplus))
    },
  },
}
</script>
