<template>
  <div class="shadow-md rounded-lg border border-gray-2">
    <div>
      <div class="p-3">
        <p class="font-bold text-base mb-2">
          <span v-if="isCashSavings"
            >Decide how much to allocate from your current savings</span
          >
          <span v-else-if="isIncomeSavings"
            >How much do you wish to allocate per month from your income?</span
          >
        </p>
        <div class="w-36 mx-auto">
          <VModalInput
            id="emergency-fund"
            label="Emergency Fund"
            type="money"
            class="modal-input-underlined text-center mb-6"
            :show-label="false"
            :value="safetyNet[category][categoryKey]"
            @input="
              $store.dispatch('setSafetyNetValue', {
                category,
                key: categoryKey,
                value: $event,
              })
            "
          ></VModalInput>
        </div>
        <VSlider
          class="mb-2"
          :max="isCashSavings ? safetyNet[category].amount : incomeSavings"
          :value="safetyNet[category][categoryKey]"
          @input="
            $store.dispatch('setSafetyNetValue', {
              category,
              key: categoryKey,
              value: $event,
            })
          "
        />
      </div>
    </div>
    <template v-if="isCashSavings">
      <div class="arrow-up"></div>
      <div class="p-3 grid grid-cols-3 bg-gray-2">
        <span class="font-bold text-2xl">
          {{
            (safetyNet[category].amount - safetyNet[category][categoryKey])
              | currency
          }}
        </span>
        <span class="col-span-2 text-xs"
          >needed to top up your emergency fund to the
          {{ safetyNet[category].amount | currency }} needed</span
        >
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    categoryKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['safetyNet']),
    ...mapGetters(['incomeSavings']),
    isCashSavings() {
      return this.categoryKey === 'allocationSavings'
    },
    isIncomeSavings() {
      return this.categoryKey === 'allocationIncome'
    },
  },
  methods: {},
}
</script>

<style scoped>
.arrow-up {
  margin: 0 auto;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 15px solid #f4f4f4;
}
</style>
