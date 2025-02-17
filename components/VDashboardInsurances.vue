<template>
  <DashboardContainer
    id="insurances"
    :step="7"
    title="My Insurance"
    to="/insurance/page-01"
  >
    <div>
      <div>
        <div class="flex justify-between items-center">
          <VHeadingValues
            title="Total Premiums"
            :primary-value="insurancesTotalPerFrequency"
            primary-filter="currencyNoCents"
            :secondary-value="frequency"
            secondary-filter="capitalize"
          ></VHeadingValues>
          <VHeadingValues
            v-if="insuranceClosestRenewalDate"
            text-alignment="right"
            title="Next Premium Review Due:"
            :primary-value="`${insuranceClosestRenewalDate.item_insured}`"
            primary-filter=""
            :secondary-value="insuranceClosestRenewalDate.annual_review_date"
            secondary-filter="date"
          ></VHeadingValues>
        </div>
        <table
          v-if="insurances.length"
          class="border-separate border-spacing-y-2 w-full mt-2"
        >
          <tr
            class="shadow-lg mb-2 rounded-md cursor-pointer group"
            @click="$router.push(`/insurance/page-02?id=${insurance.id}`)"
            v-for="(insurance, index) in insurances"
            :key="insurance.id"
            :style="{ 'z-index': index }"
          >
            <td
              class="bg-orange flex items-center justify-center text-center rounded-l-md flex-none py-1.5 px-1"
            >
              {{ index + 1 }}
            </td>
            <td
              class="font-semibold text-xs py-2 px-1 text-left bg-white group-hover:bg-gray-50 group-focus:bg-gray-50"
            >
              {{
                insurance.type === 'Other'
                  ? insurance.type_other
                  : insuranceTypeMap[insurance.type]
              }}
            </td>
            <td
              class="font-semibold text-xs py-2 px-1 ml-auto whitespace-nowrap text-left bg-white group-hover:bg-gray-50 group-focus:bg-gray-50"
            >
              Premium: {{ insurance.premium | currency }}
            </td>
            <td
              class="font-semibold text-xs py-2 px-1 pr-2 text-right whitespace-nowrap rounded-r-md bg-white group-hover:bg-gray-50 group-focus:bg-gray-50"
            >
              Review: {{ insurance.annual_review_date | date }}
            </td>
          </tr>
        </table>
        <!-- <div class="mt-2" v-if="insurances.length">
        <div class="">
          <button class="w-full" type="button" @click="$router.push(`/insurance/page-02?id=${insurance.id}`)"
            v-for="(insurance, index) in insurances" :key="insurance.id">
            <div class="w-full bg-white hover:bg-gray-50 focus:bg-gray-50 shadow-lg rounded-md flex mb-2">
              <p class="bg-orange w-5 flex items-center justify-center text-center rounded-l-md flex-none">
                {{ index + 1 }}
              </p>
              <p class="font-semibold text-xs py-2 px-1 text-left">
                {{
                  insurance.type === 'Other'
                    ? insurance.type_other
                    : insuranceTypeMap[insurance.type]
                }}
              </p>
              <p class="font-semibold text-xs py-2 px-1 ml-auto whitespace-nowrap text-left">
                Prem: {{ insurance.premium | currency }}
              </p>
              <p class="font-semibold text-xs py-2 px-1 pr-2 text-right rounded-r-md whitespace-nowrap min-w-[135px]">
                Review: {{ insurance.annual_review_date | date }}
              </p>
            </div>
          </button>
        </div>
      </div> -->
        <div class="text-gray-dark italic" v-else>
          You have not yet added any insurance policies.
        </div>
      </div>
    </div>
  </DashboardContainer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['frequency', 'insuranceTypeMap']),
    ...mapGetters({
      insurances: 'insurances',
      insurancesTotalPerFrequency: 'insurancesTotalPerFrequency',
      insuranceClosestRenewalDate: 'insuranceClosestRenewalDate',
    }),
  },
  created() {
    this.$store.dispatch('getInsurances')
  },
}
</script>
