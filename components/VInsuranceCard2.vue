<template>
  <div class="mb-2">
    <div class="border bg-white border-gray-100 rounded-md flex shadow-lg">
      <div class="w-full p-3">
        <div class="flex justify-between mb-4">
          <div class="w-full">
            <h3 class="font-bold">
              {{ insurancePolicy.item_insured }} &#x2022;
              {{ insurancePolicy.type }}
            </h3>
            <p class="font-medium text-sm">
              {{ insurancePolicy.company }}
              <span class="text-xs font-light"
                >&nbsp;#{{ insurancePolicy.policy_number }}</span
              >
            </p>
            <div class="grid grid-cols-2 gap-4 mt-2">
              <VHeadingValues
                title="Premium"
                :primary-value="insurancePolicy.premium"
                primary-filter="currency"
                :secondary-value="insurancePolicy.frequency"
                secondary-filter=""
              ></VHeadingValues>
              <VHeadingValues
                title="Amount Insured"
                :primary-value="insurancePolicy.amount"
                primary-filter="currency"
              ></VHeadingValues>
            </div>
          </div>
          <div v-if="showControls">
            <button @click="$emit('edit', insurancePolicy)">
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
        </div>
        <table class="">
          <tr class="text-xs">
            <td class="font-light pr-4">Annual Review Date:</td>
            <td class="font-medium text-right">
              {{ insurancePolicy.annual_review_date | date }}
            </td>
          </tr>
          <tr class="text-xs">
            <td class="font-light pr-4">Insurance Contact Number:</td>
            <td class="font-medium text-right">
              {{ insurancePolicy.contact_number }}
            </td>
          </tr>
          <tr class="text-xs">
            <td>
              <a target="_blank" class="underline" :href="insurancePolicy.link"
                >Online Claim Form</a
              >
            </td>
          </tr>
          <!-- <p class="text-xs">{{ 11000 | currency }}/month</p> -->
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    insurancePolicy: {
      type: Object,
      required: true,
    },
    showControls: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
