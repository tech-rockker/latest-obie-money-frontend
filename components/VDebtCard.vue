<template>
  <div>
    <div class="border border-gray-100 bg-white rounded-md flex shadow-lg">
      <div
        class="w-6 bg-gray-50 rounded-l-md font-medium flex items-center justify-center"
      >
        {{ index + 1 }}
      </div>
      <div class="p-3">
        <div class="flex items-start justify-between mb-2">
          <h2 class="font-bold text-base">{{ debt.name }}</h2>
          <button v-if="showUpdate" @click="$emit('update-debt', debt)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                fill="#DADADA"
                d="M17.544 8.204a.937.937 0 0 0-.937.937v5.796a1.628 1.628 0 0 1-1.625 1.625h-9.92a1.629 1.629 0 0 1-1.625-1.625V5.02a1.628 1.628 0 0 1 1.626-1.625h5.793a.938.938 0 0 0 0-1.875H5.063a3.506 3.506 0 0 0-3.5 3.5v9.918a3.506 3.506 0 0 0 3.5 3.5h9.918a3.506 3.506 0 0 0 3.5-3.5V9.143a.937.937 0 0 0-.937-.939ZM18.567 4.045l-2.612-2.612a.643.643 0 0 0-.884 0l-1.19 1.192 3.494 3.494 1.19-1.188a.625.625 0 0 0 0-.884l.002-.002Z"
              />
              <path
                fill="#DADADA"
                d="M7.054 9.71v2.611a.625.625 0 0 0 .625.625h2.611a.625.625 0 0 0 .442-.183L16.492 7 13 3.508l-5.76 5.76a.625.625 0 0 0-.186.442Z"
              />
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-4">
          <div>
            <VPercentageCircle
              class="w-full"
              :percentage="percentageOfTotalDebtAmountOwing"
            />
          </div>
          <div class="debt-line">
            <p>Amount Owing</p>
            <p>{{ debt.amountOwing | currency }}</p>
          </div>
          <div class="debt-line">
            <p>Interest</p>
            <p>{{ debt.interest | percentage }}</p>
          </div>
          <div class="debt-line">
            <p>Monthly Min. Payment</p>
            <p>{{ debt.minMonthlyRepayment | currency }}</p>
          </div>
        </div>
        <div
          v-if="displayAllocation"
          class="grid grid-cols-4 bg-green-lighter rounded-md py-2 mt-2"
        >
          <div><p class="font-bold ml-2">Paid</p></div>
          <div class="col-span-3 flex">
            <div class="flex-1">
              <p>before allocation</p>
              <p class="text-lg font-bold">
                {{ debt.paymentsWithoutAdditionalDate | date }}
              </p>
            </div>
            <div class="flex-1">
              <p>after allocation</p>
              <p class="text-lg font-bold text-green-2">
                {{ debt.paymentsWithAdditionalDate | date }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="grid grid-cols-4 bg-gray-2 rounded-md py-2 mt-2">
          <div><p class="font-bold ml-2">Paid</p></div>
          <div class="col-span-3">
            <p>Estimated time to pay</p>
            <!-- <p class="text-lg font-bold">{{ debt.nperDate | date }}</p> -->
            <p class="text-lg font-bold">
              {{ debt.paymentsWithoutAdditionalDate | date }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    showUpdate: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      required: true,
    },
    debt: {
      type: Object,
      required: true,
    },
    displayAllocation: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(['totalDebtAmountOwing']),
    percentageOfTotalDebtAmountOwing() {
      return Math.round(
        (this.debt.amountOwing / this.totalDebtAmountOwing) * 100
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.debt-line {
  @apply flex flex-col justify-end;
  p:first-child {
    @apply text-xs text-gray-500;
  }
  p:last-child {
    @apply font-bold text-lg;
  }
}

.circle {
  position: relative;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  border-radius: 100%;
  background-color: #ffffff;
}

.circle-border {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  background: linear-gradient(270deg, black 50%, transparent 50%),
    linear-gradient(0deg, black 50%, lightgray 50%);
}
</style>
