<template>
  <div>
    <button
      v-if="isActualDebt"
      @click="show = !show"
      type="button"
      class="flex justify-between items-center text-left w-full border-t border-gray-100 p-3"
    >
      <div class="flex items-center mr-auto">
        <div>
          <h3 class="font-bold">{{ debt.name }}</h3>
          <p v-if="isActualDebt" class="text-xs text-gray-500">
            {{ debt.totalPerFrequency | currency }} /{{ frequency | frequencyToNoun }}
          </p>
          <p v-else class="text-xs text-gray-500">
            {{ debt.amountOwing | currency }} owing
          </p>
        </div>
      </div>
      <div v-if="isActualDebt" class="flex flex-col items-end justify-center mr-1">
        <p class="font-bold">
          <span>{{ debt.transactionsTotal | currency }}</span>
        </p>
        <VBadge :color="debt.transactionsPercentageOfIncome <= 0 ? 'green' : 'red'">{{
          debt.transactionsPercentageOfIncome | percentage
          }}</VBadge>
      </div>
      <div v-else class="flex items-center justify-end mr-1">
        <div class="text-right">
          <p class="font-bold">
            <span>
              {{ debt.totalPerFrequency | currency }}
            </span>
          </p>
          <p class="text-xs text-gray-500">{{ debt.interest }}% interest</p>
        </div>
      </div>
      <div>
        <div type="button" class="p-1">
          <svg v-if="show" class="text-gray-400 w-4 h-4" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
          </svg>
          <svg v-else class="text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </button>
    <div
      v-else
      class="flex justify-between items-center text-left w-full border-t border-gray-100 p-3"
    >
      <div class="flex items-center mr-auto">
        <div>
          <h3 class="font-bold">{{ debt.name }}</h3>
          <p class="text-xs text-gray-500">
            {{ debt.amountOwing | currency }} owing
          </p>
        </div>
      </div>
      <div class="flex items-center justify-end mr-1">
        <div class="text-right">
          <p class="font-bold">
            <span>
              {{ debt.totalPerFrequency | currency }}
            </span>
          </p>
          <p class="text-xs text-gray-500">{{ debt.interest }}% interest</p>
        </div>
      </div>
      <div>
        <VDropdown>
          <VDropdownItem @click="$emit('update', debt)">Edit</VDropdownItem>
          <VDropdownItem
            class="text-red-600"
            @click="$store.commit('deleteDebt', debt.uuid)"
            >Delete</VDropdownItem
          >
        </VDropdown>
      </div>
    </div>
    <div v-if="show" class="bg-gray-50 shadow-inner">
      <VTransaction v-for="transaction in debt.transactions" :key="transaction.id" :transaction="transaction" :debt-id="debt.uuid">
        </VTransaction>
        <button class="text-left text-sm text-gray-400 py-2 px-3 border-t border-gray-100 w-full"
          @click="$modal.show(`actual-expense-modal`, {debtId: debt.uuid})">
          + Create Actual Expense
        </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {    
    type: {
      type: String,
      default: 'debt',
      validator: (value) => {
        return ['debt', 'actual-debt'].includes(value)
      },
    },
    debt: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(['frequency']),
    isActualDebt() {
      return this.type === 'actual-debt'
    },
  },
  methods: {},
}
</script>
