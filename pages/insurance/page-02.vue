<template>
  <VPageContainer>
    <VContainer>
      <VProgress :percentage="92" />
      <VHeading
        title="Insurance"
        section="PROTECT"
        subtitle="Add Insurance"
        image-src="/energy-saving.svg"
      ></VHeading>
      <div class="flex items-center justify-end mt-3">
        <VFrequencyToggle />
      </div>
    </VContainer>
    <VCard>
      <template slot="top">
        <VCardTitle title="Edit your Insurances here"></VCardTitle>
        <VCardDescription>
          All your policies in one place, easy to access on the go!
        </VCardDescription>
        <div class="mb-4">
          <VInsuranceCards>
            <VInsuranceCard
              v-for="insurancePolicy in insurances"
              :key="insurancePolicy.id"
              :insurance-policy="insurancePolicy"
              :initial-show="
                selectedInsuranceId === insurancePolicy.id || false
              "
              @edit="handleEditInsurancePolicy(insurancePolicy)"
              @delete="handleDeleteInsurancePolicy(insurancePolicy.id)"
            ></VInsuranceCard>
          </VInsuranceCards>
        </div>
        <VModal :click-to-close="false" name="manage-insurance">
          <VModalTitle>{{
            form.id ? 'Update Insurance' : 'Add Insurance'
          }}</VModalTitle>
          <form @submit.prevent="handleSubmit()">
            <div :class="[form.type === 'Other' && 'grid grid-cols-2 gap-4']">
              <VModalSelect
                id="type"
                v-model="form.type"
                :required="true"
                label="Type"
                placeholder="Select a type"
                :options="insuranceTypeOptions"
              />

              <VModalInput
                v-if="form.type === 'Other'"
                id="type_other"
                required="true"
                v-model="form.type_other"
                label="Other Type"
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <VModalInput
                id="policy_number"
                :required="false"
                v-model="form.policy_number"
                label="Policy #"
              />
              <VModalInput
                id="company"
                v-model="form.company"
                label="Insurance Company"
              />
            </div>
            <VModalInput
              id="item_insured"
              v-model="form.item_insured"
              label="Member / Item Insured"
            />

            <div class="grid grid-cols-2 gap-4">
              <VModalInput
                id="amount"
                :required="false"
                v-model="form.amount"
                label="Amount Insured"
                type="money"
              />
              <VModalSelect
                id="insurance_held"
                v-model="form.insurance_held"
                label="Is it inside or outside your super?"
                :required="false"
                placeholder="Select a type"
                :options="[
                  {
                    label: 'Inside Super',
                    value: 'Inside Super',
                  },
                  {
                    label: 'Outside Super',
                    value: 'Outside Super',
                  },
                ]"
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <VModalInput
                id="premium"
                v-model="form.premium"
                label="Premium Amount"
                type="money"
              />
              <VModalSelect
                :required="true"
                id="frequency"
                v-model="form.frequency"
                label="Frequency"
                placeholder="Frequency"
                :options="frequencyOptions"
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <VModalInput
                id="annual_review_date"
                v-model="form.annual_review_date"
                :required="false"
                label="Annual Renewal Date"
                max="9999-12-31"
                type="date"
              />
              <VModalInput
                id="contact_number"
                v-model="form.contact_number"
                :required="false"
                label="Contact Number"
              />
            </div>
            <VModalInput
              id="link"
              v-model="form.link"
              :required="false"
              label="Link to Claim Form"
            />
            <ButtonContainer class="mt-4">
              <ButtonNext
                :show-icon="false"
                :disabled="
                  loading ||
                  !form.type ||
                  !form.company ||
                  !form.premium ||
                  !form.frequency
                "
                color="orange"
                type="submit"
                >{{
                  form.id ? 'Update Insurance' : 'Add Insurance'
                }}</ButtonNext
              >
            </ButtonContainer>
          </form>
        </VModal>
        <ButtonNext
          class="mb-6"
          :show-icon="false"
          color="orange"
          @click="openInsuranceModal()"
          >Add Insurance</ButtonNext
        >
      </template>
      <template slot="bottom">
        <ButtonContainer>
          <ButtonBack></ButtonBack>
          <RewardAssigner
            :reward-id="7"
            v-slot="{ assigningReward, assignReward }"
            @success="$router.push('/section-index?step=8')"
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
  type: '',
  type_other: '',
  policy_number: '',
  company: '',
  item_insured: '',
  amount: 0,
  insurance_held: 'Inside Super',
  premium: 0,
  frequency: 'yearly',
  annual_review_date: '',
  contact_number: '',
  link: '',
}
export default {
  data() {
    return {
      loading: false,
      form: defaultForm,
      selectedInsuranceId: null,
    }
  },
  computed: {
    ...mapState([
      'frequencyOptions',
      'insuranceTypeOptions',
      'insuranceTypeMap',
    ]),
    ...mapGetters({
      insurances: 'insurances',
      goals: 'goals',
      totalGoalAmount: 'totalGoalAmount',
    }),
  },
  created() {
    const { id } = this.$route.query
    if (id) {
      this.selectedInsuranceId = parseInt(id)
    }

    this.$store.dispatch('getInsurances')
  },
  methods: {
    handleEditInsurancePolicy(insurancePolicy) {
      this.form = { ...defaultForm }
      this.form = { ...insurancePolicy }

      this.$modal.show('manage-insurance')
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
    openInsuranceModal() {
      this.form = { ...defaultForm }
      this.$modal.show('manage-insurance')
    },
    handleDeleteInsurancePolicy(id) {
      if (!confirm('Are you sure you want to delete this insurance policy?')) {
        return
      }
      this.loading = true
      this.$axios
        .delete(`/api/insurances/${id}`)
        .then(() => {
          this.$store.commit('deleteInsurance', id)
        })
        .finally(() => {
          this.loading = false
        })
    },

    editInsurance() {
      this.loading = true
      this.$axios
        .put(`/api/insurances/${this.form.id}`, this.form)
        .then((response) => {
          this.$store.commit('updateInsurance', response.data.data)
          this.$modal.hide('manage-insurance')
        })
        .finally(() => {
          this.loading = false
        })
    },
    createInsurance() {
      this.loading = true
      this.$axios
        .post('/api/insurances', this.form)
        .then((response) => {
          this.$store.commit('createInsurance', response.data.data)
          this.$modal.hide('manage-insurance')
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleSubmit() {
      if (this.form.id) {
        this.editInsurance()
      } else {
        this.createInsurance()
      }
    },
  },
}
</script>
