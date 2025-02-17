<template>
  <VPageContainer>
    <VContainer>
      <VProgress :percentage="50" />
      <VHeading
        title="Set Your Investment Goals"
        subtitle="Step 1 of 2"
        image-src="/mountain.svg"
        section="INVESTING FOR THE FUTURE"
      ></VHeading>
      <div class="grid grid-cols-2 mt-4">
        <VHeadingValues
          title="Available from Income"
          :primary-value="incomeInvestmentsAvailablePerFrequency"
          primary-filter="currency"
          mode="yellow"
        ></VHeadingValues>
        <div class="flex items-center">
          <VFrequencyToggle />
        </div>
      </div>
    </VContainer>
    <VCard>
      <template slot="top">
        <VCardTitle title="Add your Investment Goals"></VCardTitle>
        <VCardDescription>
          Planning to retire early? Planning to return from retirement? Obie
          uses its smart tools to guide the way.
        </VCardDescription>
        <VInvestmentGoalCard
          v-for="(goal, index) in investmentGoals"
          :key="goal.uuid"
          :index="index"
          :goal="goal"
          class="mb-4"
          @edit-goal="handleEditGoal($event)"
        />

        <ButtonNext
          class="mb-6"
          :show-icon="false"
          color="orange"
          @click="$modal.show('create-goal')"
          >Create a Goal</ButtonNext
        >
      </template>
      <template slot="bottom">
        <VButtonBox
          :title="totalInvestmentGoalAmount | currency"
          subtitle="Total Goal amount"
        >
          <ButtonContainer>
            <ButtonBack></ButtonBack>
            <RewardAssigner
              :reward-id="6"
              v-slot="{ assigningReward, assignReward }"
              @success="$router.push('/section-index?step=7')"
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
        <div class="mt-4">
          <VCardCarouselCard
            :card="{
              title:
                'Powerful portfolio tracking software that lets you check your investments in one place with award-winning performance, dividend tracking and tax reporting.',
              image: '/carousel/sharesight.png',
              imageAlignment: 'bg-center',
              titleClasses: 'font-normal text-xs',
              backgroundSize: 'bg-contain',
              imageHeight: 'h-14',
              padding: 'p-0',
              href: 'https://www.sharesight.com/au/',
            }"
          ></VCardCarouselCard>
        </div>
      </template>
    </VCard>
    <VModal name="create-goal" @before-open="resetForm()">
      <VModalTitle>Create an Investment Goal</VModalTitle>
      <form @submit.prevent="createGoal()">
        <VModalInput
          id="name"
          v-model="form.name"
          label="Name of your Investment Goal"
        />
        <div class="mb-3">
          <label class="modal-label" for="allocationIncomeFrequency"
            >Type of Investment</label
          >
          <select
            id="allocationIncomeFrequency"
            v-model="form.type"
            class="w-full modal-input"
          >
            <option disabled="true" value="">Select a type</option>
            <option
              v-for="option in investmentTypeOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <VModalInput
          id="amount"
          v-model="form.amount"
          label="Amount"
          type="money"
        />
        <div class="grid grid-cols-2 gap-3">
          <VModalInput
            id="allocationIncome"
            v-model="form.allocationIncome"
            label="Allocation of Income"
            type="money"
          />
          <div class="mb-3">
            <label class="modal-label" for="allocationIncomeFrequency"
              >Frequency</label
            >
            <select
              id="allocationIncomeFrequency"
              v-model="form.allocationIncomeFrequency"
              class="w-full modal-input"
            >
              <option disabled="true" value="">Frequency</option>
              <option
                v-for="option in frequencyOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>
        <ButtonNext
          :disabled="
            loading ||
            !form.name ||
            !form.amount ||
            !form.type ||
            !form.allocationIncome ||
            !form.allocationIncomeFrequency
          "
          color="orange"
          type="submit"
          >Create Goal</ButtonNext
        >
      </form>
    </VModal>
    <VModal name="edit-goal">
      <VModalTitle>Update Investment Goal</VModalTitle>
      <form @submit.prevent="editGoal()">
        <VModalInput
          id="editname"
          v-model="editForm.name"
          label="Name of your Investment Goal"
        />
        <VModalSelect
          id="editType"
          v-model="editForm.type"
          label="Type of Investment"
          placeholder="Select a type"
          :options="investmentTypeOptions"
        />
        <VModalInput
          id="editamount"
          v-model="editForm.amount"
          label="Amount"
          type="money"
        />
        <div class="grid grid-cols-2 gap-3">
          <VModalInput
            id="editallocationIncome"
            v-model="editForm.allocationIncome"
            label="Allocation of Income"
            type="money"
          />
          <VModalSelect
            id="editAllocationIncomeFrequency"
            v-model="editForm.allocationIncomeFrequency"
            label="Frequency"
            placeholder="Select a frequency"
            :options="frequencyOptions"
          />
        </div>
        <ButtonNext
          :disabled="
            loading ||
            !editForm.name ||
            !editForm.amount ||
            !editForm.type ||
            !editForm.allocationIncome ||
            !editForm.allocationIncomeFrequency
          "
          color="orange"
          type="submit"
          >Update Goal</ButtonNext
        >
        <VModalDeleteButton @click="deleteGoal(editForm.uuid)">
          Delete Goal
        </VModalDeleteButton>
      </form>
    </VModal>
  </VPageContainer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        type: '',
        amount: 0,
        allocationIncome: 0,
        allocationIncomeFrequency: 'monthly',
      },
      editForm: {
        uuid: '',
        name: '',
        type: '',
        amount: 0,
        allocationIncome: 0,
        allocationIncomeFrequency: 'monthly',
      },
    }
  },
  computed: {
    ...mapState(['investmentTypeOptions', 'frequencyOptions']),
    ...mapGetters([
      'investmentGoals',
      'totalInvestmentGoalAmount',
      'incomeInvestmentsAvailablePerFrequency',
      'savings',
      'incomeSavings',
      'incomeSavingsAllocated',
      'incomeSavingsAvailable',
      'totalDebtAmountOwing',
      'totalDebtMinMonthlyRepayment',
      'safetyNetTotal',
    ]),
  },
  methods: {
    resetForm() {
      this.form = {
        name: '',
        type: '',
        amount: 0,
        allocationIncome: 0,
        allocationIncomeFrequency: 'monthly',
      }
    },
    handleEditGoal(goal) {
      this.editForm.uuid = goal.uuid
      this.editForm.name = goal.name
      this.editForm.type = goal.type
      this.editForm.amount = goal.amount
      this.editForm.allocationIncome = goal.allocationIncome
      this.editForm.allocationIncomeFrequency = goal.allocationIncomeFrequency
      this.$modal.show('edit-goal')
    },
    editGoal() {
      this.loading = true
      this.$axios
        .post(`/api/investments/${this.editForm.uuid}`, {
          name: this.editForm.name,
          type: this.editForm.type,
          allocation_income: this.editForm.allocationIncome,
          allocation_income_frequency: this.editForm.allocationIncomeFrequency,
          amount: this.editForm.amount,
          _method: 'PUT',
        })
        .then((response) => {
          this.editForm.amount = parseFloat(this.editForm.amount)
          this.editForm.allocationIncome = parseFloat(
            this.editForm.allocationIncome
          )
          this.$store.commit('setInvestmentGoal', {
            ...this.editForm,
          })
          this.$modal.hide('edit-goal')
        })
        .finally(() => {
          this.loading = false
        })
    },
    createGoal() {
      this.loading = true
      this.$axios
        .post('/api/investments', {
          name: this.form.name,
          type: this.form.type,
          allocation_income: this.form.allocationIncome,
          allocation_income_frequency: this.form.allocationIncomeFrequency,
          amount: this.form.amount,
        })
        .then((response) => {
          this.form.amount = parseFloat(this.form.amount)
          this.form.allocationIncome = parseFloat(this.form.allocationIncome)
          this.$store.commit('setInvestmentGoal', {
            ...this.form,
            uuid: response.data.data.id,
          })
          this.$modal.hide('create-goal')
        })
        .finally(() => {
          this.loading = false
        })
    },
    deleteGoal(uuid) {
      this.loading = true
      this.$axios
        .delete(`/api/investments/${uuid}`)
        .then((response) => {
          this.$store.commit('deleteInvestmentGoal', uuid)
          this.$modal.hide('edit-goal')
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
