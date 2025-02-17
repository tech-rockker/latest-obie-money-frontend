<template>
  <div class="border-t">
    <div class="flex">
      <div class="w-full">
        <div class="flex justify-between">
          <div class="w-full">
            <button
              type="button"
              @click="show = !show"
              class="p-3 flex items-center w-full"
            >
              <div class="w-full">
                <div class="flex justify-between">
                  <h3 class="font-bold text-lg">
                    {{ insurancePolicy.company }}
                  </h3>
                  <p class="font-bold text-lg">
                    {{ insurancePolicy.premium | currency }}
                    <span class="text-sm font-normal text-gray-500"
                      >/{{ insurancePolicy.frequency | frequencyToNoun }}</span
                    >
                  </p>
                </div>
                <div class="flex justify-between text-gray-500">
                  <p>
                    {{
                      insurancePolicy.type === 'Other'
                        ? insurancePolicy.type_other
                        : insuranceTypeMap[insurancePolicy.type]
                    }}
                  </p>
                  <p v-if="insurancePolicy.annual_review_date">
                    <span>
                      {{ insurancePolicy.annual_review_date | date }}
                    </span>
                  </p>
                </div>
              </div>
              <div class="ml-auto p-1 pl-4">
                <svg
                  v-if="show"
                  class="text-gray-400 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
                <svg
                  v-else
                  class="text-gray-400 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              v-if="show"
              class="bg-gray-100 p-3 border-t flex justify-between"
            >
              <div class="w-full">
                <div class="grid grid-cols-2 gap-1">
                  <div class="even:text-right">
                    <p class="text-xs font-light">Member / Item Insured</p>
                    <p class="font-medium">
                      {{ insurancePolicy.item_insured }}
                    </p>
                  </div>
                  <div class="even:text-right">
                    <p class="text-xs font-light">Contact Number</p>
                    <p class="font-medium">
                      {{ insurancePolicy.contact_number || '-' }}
                    </p>
                  </div>
                  <div class="even:text-right">
                    <p class="text-xs font-light">Amount Insured</p>
                    <p class="font-medium">
                      {{ insurancePolicy.amount | currency }}
                    </p>
                  </div>
                  <div class="even:text-right">
                    <p class="text-xs font-light">Link to Claim form</p>
                    <p class="font-medium">
                      <a
                        v-if="insurancePolicy.link"
                        target="_blank"
                        class="underline"
                        :href="insurancePolicy.link"
                        >Online Claim Form</a
                      >
                      <span v-else>-</span>
                    </p>
                  </div>
                  <div class="even:text-right">
                    <p class="text-xs font-light">Annual Renewal Date</p>
                    <p class="font-medium">
                      <span v-if="insurancePolicy.annual_review_date">
                        {{ insurancePolicy.annual_review_date | date }}
                      </span>
                      <span v-else>-</span>
                    </p>
                  </div>
                  <div class="even:text-right">
                    <p class="text-xs font-light">Policy Number</p>
                    <p class="font-medium">
                      <span v-if="insurancePolicy.policy_number">
                        #{{ insurancePolicy.policy_number }}
                      </span>
                      <span v-else> - </span>
                    </p>
                  </div>
                </div>
              </div>
              <div v-if="showControls" class="pl-3">
                <VDropdown>
                  <VDropdownItem @click="$emit('edit', insurancePolicy)"
                    >Edit</VDropdownItem
                  >
                  <VDropdownItem
                    class="text-red-600"
                    @click="$emit('delete', insurancePolicy)"
                    >Delete</VDropdownItem
                  >
                </VDropdown>
              </div>
            </div>
          </div>
          <!-- <div v-if="showControls">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    initialShow: {
      type: Boolean,
      default: false,
    },
    insurancePolicy: {
      type: Object,
      required: true,
    },
    showControls: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState(['insuranceTypeMap']),
  },
  data() {
    return {
      show: true,
    }
  },
  created() {
    this.show = this.initialShow
  },
}
</script>
