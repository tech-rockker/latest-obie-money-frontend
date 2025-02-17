<template>
  <DashboardContainer :step="4" title="My Savings Goals" to="/goals/page-01">
    <div>
      <div>
        <div v-if="goals.length">
          <VGoalCard
            v-for="(goal, index) in goals"
            :key="goal.uuid"
            :index="index"
            :goal="goal"
            class="mb-4"
            @edit-goal="$router.push(`/goals/page-02?goal=${goal.uuid}`)"
          />
        </div>
        <!-- <div v-if="goals.length" class="orange-currency-table">
        <table>
          <tr>
            <th></th>
            <th>
              <span class="text-xs font-normal">Allocated from</span><br />Cash
              Savings
            </th>
            <th>Income</th>
          </tr>
          <tr v-for="goal in goals" :key="goal.uuid">
            <td>{{ goal.name }}</td>
            <td>{{ goal.allocationSavings | currency }}</td>
            <td>{{ goal.allocationIncome | currency }}</td>
          </tr>
        </table>
      </div> -->
        <div class="text-gray-dark italic" v-else>
          You have not yet added any savings goals.
        </div>
      </div>
    </div>
  </DashboardContainer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters(['goals']),
    ...mapState(['safetyNet']),
  },
}
</script>
