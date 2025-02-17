<template>
  <div class="mb-6">
    <VDashboardTitle>My Rewards</VDashboardTitle>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 mt-2">
      <VReward
        v-for="reward in $auth.user.rewards"
        :key="reward.id"
        :reward="reward"
      ></VReward>
      <VReward :reward="finalReward"></VReward>
    </div>
    <div class="mt-10">
      <ButtonNext
        :show-icon="false"
        color="orange"
        subtitle=""
        @click="$router.push('/dashboard')"
        >Back to Dashboard</ButtonNext
      >
    </div>
    <!-- <button @click="$modal.show('rewards')">OPEN REWARDS</button>
    <VModal name="rewards">
      <VModalTitle>Rewards</VModalTitle>
      
    </VModal> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {},
  computed: {
    ...mapGetters({
      allRewardsCompleted: 'allRewardsCompleted',
      finalReward: 'finalReward',
    }),
  },
}
</script>

<style></style>
