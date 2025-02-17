<template>
  <div class="grid grid-cols-2 mt-4">
    <VHeadingValues
      title="Available Savings from Income"
      :primary-value="incomeSavingsAvailable"
      primary-filter="currency"
      :secondary-value="savings.percentageOfIncome"
      secondary-filter="percentage"
      mode="yellow"
    ></VHeadingValues>
    <VHeadingValues
      title="Available Cash Savings"
      :primary-value="cashSavingsAvailable"
      primary-filter="currency"
    ></VHeadingValues>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'savings',
      'cashSavingsAvailable',
      'incomeSavingsAvailable',
    ]),
  },
}
</script>
