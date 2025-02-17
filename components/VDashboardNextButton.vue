<template>
  <div class="mb-5">
    <ButtonNext
      v-if="!completedBudget"
      :show-icon="false"
      color="orange"
      subtitle="Setup Your Budget"
      @click="$router.push('/expenses/page-01')"
      >NEXT STEP</ButtonNext
    >
    <ButtonNext
      v-else-if="!completedSafetyNet"
      :show-icon="false"
      color="orange"
      subtitle="Setup Your Safety Net"
      @click="$router.push('/safety-net/page-01')"
      >NEXT STEP</ButtonNext
    >
    <ButtonNext
      v-else-if="!completedDebt"
      :show-icon="false"
      color="orange"
      subtitle="Proceed to Debt"
      @click="$router.push('/debt/page-01')"
      >NEXT STEP</ButtonNext
    >
    <ButtonNext
      v-else-if="!completedGoals"
      :show-icon="false"
      color="orange"
      subtitle="Proceed to Goals"
      @click="$router.push('/goals/page-01')"
      >NEXT STEP</ButtonNext
    >
    <ButtonNext
      v-else-if="!completedInvest"
      :show-icon="false"
      color="orange"
      subtitle="Proceed to Invest"
      @click="$router.push('/invest/page-01')"
      >NEXT STEP</ButtonNext
    >
    <ButtonNext
      v-else
      :show-icon="false"
      color="orange"
      subtitle="Click here to tell us what you think"
      @click="handleSurveyLink()"
      >Thanks for testing out Obie</ButtonNext
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'completedBudget',
      'completedSafetyNet',
      'completedDebt',
      'completedGoals',
      'completedInvest',
    ]),
    completedAll() {
      return (
        this.completedBudget &&
        this.completedSafetyNet &&
        this.completedDebt &&
        this.completedGoals &&
        this.completedInvest
      )
    },
  },
  methods: {
    handleSurveyLink() {
      window.location.href = 'https://kua27hyqf3v.typeform.com/to/SI527FLJ'
    },
  },
}
</script>
