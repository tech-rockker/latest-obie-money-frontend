<template>
  <VPageContainer>
    <VContainer>
      <VProgress :percentage="92" />
      <VHeading
        title="Super"
        section="INVESTING FOR THE FUTURE"
        subtitle=""
        image-src="/super.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <template slot="top">
        <!-- <VCardTitle title="Edit your super-fund here"></VCardTitle>
        <VCardDescription>
          All your policies in one place, easy to access on the go!
        </VCardDescription> -->
        <div class="mb-4">
          <VSuperCards>
            <VSuperCard
              v-for="superFund in superFunds"
              :key="superFund.id"
              :super-fund="superFund"
              @edit="handleEditSuperFund(superFund)"
              @delete="handleDeleteSuperFund(superFund.id)"
            ></VSuperCard>
          </VSuperCards>
        </div>
        <VModal :click-to-close="false" name="manage-super">
          <VModalTitle>{{
            form.id ? 'Update Super' : 'Add Super'
          }}</VModalTitle>
          <form @submit.prevent="handleSubmit()">
            <VModalInput
              id="name"
              :required="false"
              v-model="form.name"
              label="Superfund Name"
            />
            <VModalInput
              id="current_balance"
              :required="false"
              v-model="form.current_balance"
              label="Current Balance"
              type="money"
            />
            <VModalInput
              id="additional_contributions"
              :required="false"
              v-model="form.additional_contributions"
              label="Extra Contributions?"
              type="money"
            />
            <VModalSelect
              :required="true"
              id="contribution_frequency"
              v-model="form.contribution_frequency"
              label="Frequency"
              placeholder="Frequency"
              :options="frequencyOptions"
            />
            <ButtonContainer class="mt-4">
              <ButtonNext
                :show-icon="false"
                :disabled="
                  loading || !form.name || !form.contribution_frequency
                "
                color="orange"
                type="submit"
                >{{ form.id ? 'Update Super' : 'Add Super' }}</ButtonNext
              >
            </ButtonContainer>
          </form>
        </VModal>
        <ButtonNext
          class="mb-6"
          :show-icon="false"
          color="orange"
          @click="openModal()"
          >Add Super</ButtonNext
        >
      </template>
      <template slot="bottom">
        <ButtonContainer>
          <ButtonBack></ButtonBack>
          <RewardAssigner
            :reward-id="5"
            v-slot="{ assigningReward, assignReward }"
            @success="$router.push('/section-index?step=6')"
          >
            <ButtonNext
              :show-icon="false"
              :disabled="assigningReward"
              color="blue-dark"
              @click="() => assignReward()"
            >
              SAVE</ButtonNext
            >
          </RewardAssigner>
        </ButtonContainer>
      </template>
    </VCard>
  </VPageContainer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
const defaultForm = {
  id: '',
  name: '',
  current_balance: 0,
  additional_contributions: 0,
  contribution_frequency: 'monthly',
}
export default {
  data() {
    return {
      loading: false,
      form: defaultForm,
    }
  },
  computed: {
    ...mapState(['frequencyOptions']),
    ...mapGetters({
      superFund: 'super-fund',
      goals: 'goals',
      totalGoalAmount: 'totalGoalAmount',
      superFunds: 'superFunds',
      superFundsTotalCurrentBalance: 'superFundsTotalCurrentBalance',
    }),
  },
  created() {
    this.$store.dispatch('getSuperFunds')
  },
  methods: {
    handleEditSuperFund(superFund) {
      this.form = { ...defaultForm }
      this.form = { ...superFund }

      this.$modal.show('manage-super')
    },
    handleNextRoute() {
      if (this.nextRoute === '/dashboard') {
        this.$store.dispatch('setValue', {
          key: 'completedGoals',
          value: true,
        })
      }
      this.$router.push(this.nextRoute)
    },
    openModal() {
      this.form = { ...defaultForm }
      this.$modal.show('manage-super')
    },
    handleDeleteSuperFund(id) {
      if (!confirm('Are you sure you want to delete this super fund?')) {
        return
      }
      this.loading = true
      this.$axios
        .delete(`/api/super-funds/${id}`)
        .then(() => {
          this.$store.commit('deleteSuperFund', id)
        })
        .finally(() => {
          this.loading = false
        })
    },

    editInsurance() {
      this.loading = true
      this.$axios
        .put(`/api/super-funds/${this.form.id}`, this.form)
        .then((response) => {
          console.log(response.data.data)
          this.$store.commit('updateSuperFund', response.data.data)
          this.$modal.hide('manage-super')
        })
        .finally(() => {
          this.loading = false
        })
    },
    createSuperFund() {
      this.loading = true
      this.$axios
        .post('/api/super-funds', this.form)
        .then((response) => {
          this.$store.commit('createSuperFund', response.data.data)
          this.$modal.hide('manage-super')
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleSubmit() {
      if (this.form.id) {
        this.editInsurance()
      } else {
        this.createSuperFund()
      }
    },
  },
}
</script>
