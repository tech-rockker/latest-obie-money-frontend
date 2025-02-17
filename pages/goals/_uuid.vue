<template>
  <div v-if="activeGoal">
    <VContainer>
      <VProgress :percentage="40" />
      <VHeading
        :title="activeGoal.name"
        section="Build a plan that creates your future"
        :subtitle="`Step ${activeGoalIndex + 2} of ${goals.length + 1}`"
        image-src="/energy-saving.svg"
      ></VHeading>
      <VHeadingAvailableIncome />
    </VContainer>
    <VCard>
      <VAllocationSliderCard
        class="mb-6"
        title="Decide how much to allocate from your current savings"
        :max="Math.min(activeGoal.amount, cashSavings)"
        :value="activeGoal.allocationSavings"
        @input="
          $store.commit('setEntityValue', {
            entity: 'goals',
            uuid: activeGoal.uuid,
            key: 'allocationSavings',
            value: $event,
          })
        "
      />
      <VAllocationSliderCard
        class="mb-6"
        title="How much do you wish to allocate per month from your income?"
        :max="incomeSavings"
        :value="activeGoal.allocationIncome"
        @input="
          $store.commit('setEntityValue', {
            entity: 'goals',
            uuid: activeGoal.uuid,
            key: 'allocationIncome',
            value: $event,
          })
        "
      />
      <VButtonBox
        :title="totalGoalAmount | currency"
        subtitle="Total Goal amount"
      >
        <template slot="content">
          <div
            v-if="activeGoal.completeAt"
            class="text-center mb-4 pb-4"
            style="border-bottom: 1px solid rgba(0, 0, 0, 0.07)"
          >
            <p class="text-dark-purple font-semibold">
              This goal will be complete by
            </p>
            <p class="text-dark-purple text-2xl font-bold">
              {{ completeAt }}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="text-left">
              <p class="text-dark-purple text-2xl font-bold">
                {{
                  (activeGoal.amount - activeGoal.allocationSavings) | currency
                }}
              </p>
              <p class="text-dark-purple font-semibold">
                You’ll need to save to achieve this goal
              </p>
            </div>
            <div class="text-left">
              <p class="text-dark-purple text-2xl font-bold">
                {{ activeGoal.allocationIncome | currency }}
              </p>
              <p class="text-dark-purple font-semibold">
                Will be allocated monthly from your income
              </p>
            </div>
          </div>
        </template>
        <ButtonContainer>
          <ButtonBack></ButtonBack>
          <ButtonNext
            :show-icon="false"
            color="blue-dark"
            @click="handleNextRoute()"
            >NEXT</ButtonNext
          >
        </ButtonContainer>
      </VButtonBox>
    </VCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import _ from 'lodash'

export default {
  data() {
    return {
      form: {
        name: '',
        amount: '',
        hasDeadline: true,
        achieveBy: '',
      },
      editForm: {
        uuid: '',
        name: '',
        amount: '',
        hasDeadline: true,
        achieveBy: '',
      },
    }
  },
  computed: {
    ...mapGetters(['incomeSavings', 'cashSavings', 'goals', 'totalGoalAmount']),
    activeGoal() {
      return this.goals.find(
        (goal) => goal.uuid === parseInt(this.$route.params.uuid)
      )
    },
    activeGoalIndex() {
      return this.goals.findIndex(
        (goal) => goal.uuid === parseInt(this.$route.params.uuid)
      )
    },
    completeAt() {
      return moment(this.activeGoal.completeAt).format('D MMM YYYY')
    },
    nextRoute() {
      if (this.goals[this.activeGoalIndex + 1]) {
        return `/goals/${this.goals[this.activeGoalIndex + 1].uuid}`
      } else {
        return '/section-index?step=5'
      }
    },
  },
  watch: {
    activeGoal: {
      handler() {
        this.syncGoal()
        // if (!this.activeGoal) {
        //   this.$router.push('/section-index?step=5')
        // }
      },
    },
  },
  methods: {
    syncGoal: _.debounce(function () {
      this.$axios.post(`/api/goals/${this.activeGoal.uuid}`, {
        name: this.activeGoal.name,
        amount: this.activeGoal.amount,
        has_deadline: this.activeGoal.hasDeadline,
        achieved_by: this.activeGoal.achieveBy,
        allocation_savings: this.activeGoal.allocationSavings,
        allocation_income: this.activeGoal.allocationIncome,
        _method: 'PUT',
      })
    }, 200),
    handleNextRoute() {
      if (this.nextRoute === '/section-index?step=5') {
        this.$store.dispatch('setValue', {
          key: 'completedGoals',
          value: true,
        })
      }
      this.$router.push(this.nextRoute)
    },
  },
}
</script>
