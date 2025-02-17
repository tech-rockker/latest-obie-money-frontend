<template>
  <div>
    <button
      class="flex items-stretch w-full text-left pr-0 border-t border-gray-200"
      @click="handleClick()"
    >
      <div class="w-full px-3 py-2">
        <div class="flex justify-between">
          <div class="flex items-center">
            <div class="flex w-6 h-6 mr-3">
              <img
                class="max-w-full max-h-full m-auto"
                :src="`/icons/${icon}`"
                :alt="label"
              />
            </div>
            <div>
              <h2 class="font-bold text-sm leading-tight">
                {{ label }}
              </h2>
              <template v-if="!showComparison">
                <p v-if="showOptimal" class="text-xs text-gray-500">
                  {{ optimisedTotalPerDay | currency }}/day
                </p>
                <p v-else class="text-xs text-gray-500">
                  {{ totalPerDay | currency }}/day
                </p>
              </template>
            </div>
          </div>
          <div class="text-right">
            <template v-if="!showComparison">
              <p v-if="showOptimal" class="font-bold text-sm leading-tight">
                {{ optimisedTotalPerFrequency | currency }}
              </p>
              <p v-else class="font-bold text-sm leading-tight">
                {{ totalPerFrequency | currency }}
              </p>
            </template>

            <VBadge
              v-if="showOptimal"
              :color="showComparison ? (isOptimal ? 'green' : 'red') : 'green'"
              >{{ percentage | percentage }}</VBadge
            >
            <VBadge
              v-else
              :color="showComparison ? (isOptimal ? 'green' : 'red') : 'green'"
              >{{ percentageOfIncome | percentage }}</VBadge
            >
          </div>
        </div>
        <div v-if="showComparison" class="pl-9 mt-2">
          <div class="w-full h-2 rounded-full bg-gray-100 relative">
            <div
              class="absolute top-0 left-0 h-full bg-gray-200 rounded-full max-w-full"
              :style="{ width: `${percentage}%` }"
            ></div>
            <!-- <div
              class="absolute top-0 left-0 h-full bg-red-3 rounded-full max-w-full"
              :style="{ width: `${percentageOfIncome}%` }"
            ></div> -->
            <div
              :class="[isOptimal ? 'bg-green-3' : 'bg-red-3']"
              class="absolute top-0 left-0 h-full rounded-full max-w-full"
              :style="{ width: `${percentageOfIncome}%` }"
            ></div>

            <div
              v-if="
                !isOptimal && percentage > 0 && percentageOfIncome > percentage
              "
              class="absolute top-0 left-0 h-full bg-green-3 rounded-full max-w-full rounded-r-none border-r border-black"
              :style="{ width: `${percentage}%` }"
            ></div>
          </div>
        </div>
        <div
          v-if="showComparison"
          class="flex justify-between pl-9 text-xs mt-2 mb-1"
        >
          <div>
            <span
              ><span
                :class="[isOptimal ? 'text-green-2' : 'text-red-600']"
                class="font-semibold"
                >{{ totalPerFrequency | currency }}</span
              >
              <span v-if="optimisedTotalPerFrequency">
                of
                <span class="font-semibold">{{
                  optimisedTotalPerFrequency | currency
                }}</span></span
              >
            </span>
            <span
              class="ml-1"
              :class="[isOptimal ? 'text-green-2' : 'text-red-600']"
            >
              {{ isOptimal ? optimalText : unoptimalText }}
            </span>
          </div>
          <span :class="[isOptimal ? 'text-green-2' : 'text-red-600']"
            ><span>{{ isOptimal ? '+' : '' }}</span
            >{{
              (optimisedTotalPerFrequency - totalPerFrequency) | currency
            }}</span
          >
        </div>
      </div>
      <div
        v-if="showComparison"
        class="bg-gray-50 text-gray-300 flex items-center justify-center"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </button>
    <VModal :include-padding="false" :name="`modal-${label}`">
      <VExpense v-if="type === 'expense' || type === 'actual-expense'" :type="type" :expense="typeData" />
      <VSavings v-if="type === 'savings'" />
      <VInvestment v-if="type === 'investment'" />
      <VDebt v-if="type === 'debt' || type === 'actual-debt'" :type="type" />
    </VModal>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: "'",
    },
    totalPerDay: {
      type: Number,
      default: 0,
    },
    totalPerFrequency: {
      type: Number,
      default: 0,
    },
    optimisedTotalPerDay: {
      type: Number,
      default: 0,
    },
    optimisedTotalPerFrequency: {
      type: Number,
      default: 0,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    percentageOfIncome: {
      type: Number,
      default: 0,
    },
    showComparison: {
      type: Boolean,
      default: false,
    },
    showOptimal: {
      type: Boolean,
      default: false,
    },
    isOptimal: {
      type: Boolean,
      default: false,
    },
    type: {
      default: 'expense',
      validator(value) {
        // The value must match one of these strings
        return ['expense', 'debt', 'savings', 'investment', 'actual-expense', 'actual-debt'].includes(value)
      },
    },
    typeData: {
      type: Object,
      default: null,
    },
    optimalText: {
      type: String,
      default: 'underspend',
    },
    unoptimalText: {
      type: String,
      default: 'overspend',
    },
  },
  methods: {
    handleClick() {
      if (this.showComparison) {
        this.$modal.show(`modal-${this.label}`)
      }
    },
  },
  computed: {
    isActual() {
      return this.type === 'actual-expense' || this.type === 'actual-debt' 
    }
  },
}
</script>

<style></style>
