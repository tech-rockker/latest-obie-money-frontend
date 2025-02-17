<template>
  <VPageContainer>
    <VContainer>
      <VProgress :percentage="38" />
      <VHeading
        title="Setting and Saving Goals"
        section="Build a plan that creates your future"
        subtitle="Step 1 of 1"
        image-src="/energy-saving.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <template slot="top">
        <VCardTitle title="Add your Savings Goals"></VCardTitle>
        <VCardDescription>
          A Ferrari? A family? Both? Enter your financial goals, and we'll plot
          a way for you and (future you) to reach them. With your tailored
          spending plan and money automation, your financial structure will
          mirror what you have and want in life - not what everyone else is
          having.
        </VCardDescription>
        <VGoalCard
          v-for="(goal, index) in goals"
          :key="goal.uuid"
          :index="index"
          :goal="goal"
          class="mb-4"
          @edit-goal="handleEditGoal($event)"
        />
        <VModal name="create-goal">
          <VModalTitle>Create a goal</VModalTitle>
          <form @submit.prevent="createGoal()">
            <VModalInput
              id="name"
              v-model="form.name"
              label="Name of your goal"
            />
            <VModalInput
              id="amount"
              v-model="form.amount"
              label="Amount needed"
              type="money"
            />
            <div class="mb-3 flex items-center">
              <input
                id="hasDeadline"
                v-model="form.hasDeadline"
                type="checkbox"
                class="mr-3"
              />
              <label class="modal-label" for="hasDeadline"
                >This goal has a deadline</label
              >
            </div>
            <VModalInput
              v-if="form.hasDeadline"
              id="achieveBy"
              v-model="form.achieveBy"
              label="By when"
              max="9999-12-31"
              type="date"
            />
            <VModalImageInput
              v-model="form.image"
              :image-placeholder="form.imagePlaceholder"
            ></VModalImageInput>
            <ButtonNext
              :disabled="
                loading ||
                !form.name ||
                !form.amount ||
                (form.hasDeadline && !form.achieveBy)
              "
              color="orange"
              type="submit"
              >Create Goal</ButtonNext
            >
          </form>
        </VModal>
        <VModal name="edit-goal">
          <VModalTitle>Update a goal</VModalTitle>
          <form @submit.prevent="editGoal()">
            <VModalInput
              id="name"
              v-model="editForm.name"
              label="Name of your goal"
            />
            <VModalInput
              id="amount"
              v-model="editForm.amount"
              label="Amount needed"
              type="money"
            />
            <div class="mb-3 flex items-center">
              <input
                id="hasDeadline"
                v-model="editForm.hasDeadline"
                type="checkbox"
                class="mr-3"
              />
              <label class="modal-label" for="hasDeadline"
                >This goal has a deadline</label
              >
            </div>
            <VModalInput
              v-if="editForm.hasDeadline"
              id="achieveBy"
              v-model="editForm.achieveBy"
              label="By when"
              type="date"
              max="9999-12-31"
            />
            <VModalImageInput
              v-model="editForm.image"
              :image-placeholder="editForm.imagePlaceholder"
            ></VModalImageInput>
            <ButtonNext
              :disabled="
                loading ||
                !editForm.name ||
                !editForm.amount ||
                (editForm.hasDeadline && !editForm.achieveBy)
              "
              color="orange"
              type="submit"
              >Update Goal</ButtonNext
            >
            <VModalDeleteButton @click="deleteGoal(editForm.uuid)"
              >Remove Goal</VModalDeleteButton
            >
          </form>
        </VModal>
        <ButtonNext
          class="mb-6"
          :show-icon="false"
          color="orange"
          @click="openCreateGoalModal()"
          >Create a Goal</ButtonNext
        >
      </template>
      <template slot="bottom">
        <VButtonBox
          :title="totalGoalAmount | currency"
          subtitle="Total Goal amount"
        >
          <ButtonContainer>
            <ButtonBack></ButtonBack>
            <RewardAssigner
              :reward-id="4"
              v-slot="{ assigningReward, assignReward }"
              @success="handleNextRoute()"
            >
              <ButtonNext
                :show-icon="false"
                :disabled="assigningReward"
                color="blue-dark"
                @click="() => assignReward()"
              >
                NEXT</ButtonNext
              >
            </RewardAssigner>
          </ButtonContainer>
        </VButtonBox>
      </template>
    </VCard>
  </VPageContainer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        amount: '',
        hasDeadline: true,
        achieveBy: '',
        allocationSavings: 0,
        allocationIncome: 0,
        image: null,
        imagePlaceholder: '',
      },
      editForm: {
        uuid: '',
        name: '',
        amount: '',
        hasDeadline: true,
        achieveBy: '',
        allocationSavings: 0,
        allocationIncome: 0,
        image: null,
        imagePlaceholder: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      goals: 'goals',
      totalGoalAmount: 'totalGoalAmount',
    }),
    nextRoute() {
      if (this.goals.length) {
        return `/goals/${this.goals[0].uuid}`
      } else {
        return '/dashboard'
      }
    },
  },
  mounted() {
    const query = this.$route.query
    if (query.goal && this.goals.length) {
      const goal = this.goals.find((g) => g.uuid === parseInt(query.goal))
      this.handleEditGoal(goal)
    }
  },
  methods: {
    handleNextRoute() {
      if (this.nextRoute === '/dashboard') {
        this.$store.dispatch('setValue', {
          key: 'completedGoals',
          value: true,
        })
      }
      this.$router.push(this.nextRoute)
    },
    openCreateGoalModal() {
      this.form.name = ''
      this.form.amount = ''
      this.form.hasDeadline = true
      this.form.achieveBy = ''
      this.form.allocationSavings = 0
      this.form.allocationIncome = 0
      this.$modal.show('create-goal')
    },
    deleteGoal(uuid) {
      this.loading = true
      this.$axios
        .delete(`/api/goals/${uuid}`)
        .then(() => {
          this.$store.commit('deleteGoal', uuid)
          this.$modal.hide('edit-goal')
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleEditGoal(goal) {
      this.editForm.uuid = goal.uuid
      this.editForm.name = goal.name
      this.editForm.amount = goal.amount
      this.editForm.hasDeadline = goal.hasDeadline
      this.editForm.achieveBy = goal.achieveBy
      this.editForm.allocationSavings = goal.allocationSavings || 0
      this.editForm.allocationIncome = goal.allocationIncome || 0
      this.editForm.imagePlaceholder = goal.imageUrl || ''
      this.$modal.show('edit-goal')
    },
    editGoal() {
      this.loading = true
      const formData = new FormData()
      formData.append('name', this.editForm.name)
      formData.append('amount', this.editForm.amount)
      formData.append('has_deadline', this.editForm.hasDeadline ? 1 : 0)
      formData.append('achieved_by', this.editForm.achieveBy)
      formData.append('allocation_savings', this.editForm.allocationSavings)
      formData.append('allocation_income', this.editForm.allocationIncome)
      if (this.editForm.image) {
        formData.append('image', this.editForm.image)
      }
      formData.append('_method', 'PUT')

      this.$axios
        .post(`/api/goals/${this.editForm.uuid}`, formData)
        .then((response) => {
          const updatedGoal = { ...this.editForm }
          updatedGoal.amount = parseFloat(updatedGoal.amount)
          updatedGoal.imageUrl = response.data.data.image_url
          this.$store.commit('updateGoal', updatedGoal)
          this.$modal.hide('edit-goal')
        })
        .finally(() => {
          this.loading = false
        })
    },
    createGoal() {
      this.loading = true
      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('amount', this.form.amount)
      formData.append('has_deadline', this.form.hasDeadline ? 1 : 0)
      formData.append('achieved_by', this.form.achieveBy)
      formData.append('allocation_savings', this.form.allocationSavings)
      formData.append('allocation_income', this.form.allocationIncome)
      if (this.form.image) {
        formData.append('image', this.form.image)
      }

      this.$axios
        .post('/api/goals', formData)
        .then((response) => {
          this.form.amount = parseFloat(this.form.amount)

          this.$store.commit('createGoal', {
            ...this.form,
            imageUrl: response.data.data.image_url,
            uuid: response.data.data.id,
          })
          this.$modal.hide('create-goal')
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
