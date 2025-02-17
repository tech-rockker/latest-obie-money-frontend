<script>
export default {
  props: {
    rewardId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      assigningReward: false,
    }
  },
  methods: {
    async assignReward() {
      try {
        this.assigningReward = true
        if (
          !this.$auth.user.rewards.some(
            (reward) => reward.id === this.rewardId && reward.has_reward
          )
        ) {
          await this.$axios.post('/api/assign-reward', {
            reward_id: this.rewardId,
          })
          await this.$auth.fetchUser()
        }

        this.$emit('success')
      } catch (error) {
        console.log(error)
      } finally {
        this.assigningReward = false
      }
    },
  },
  render() {
    return this.$scopedSlots.default({
      assigningReward: this.assigningReward,
      assignReward: this.assignReward,
    })
  },
}
</script>

<style></style>
