<template>
  <VModal name="create-debt">
    <VModalTitle>Add Debt</VModalTitle>
    <div class="mb-3">
      <label class="modal-label" for="name">Name</label>
      <input v-model="form.name" class="w-full modal-input" type="text" />
    </div>
    <div class="mb-3">
      <label class="modal-label" for="amountOwing">Amount Owing</label>
      <VMoney v-model="form.amountOwing" class="w-full modal-input" />
    </div>
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div>
        <label class="modal-label" for="Interest">Interest rate (%)</label>
        <input
          v-model="form.interest"
          class="w-full modal-input"
          type="number"
        />
      </div>
      <div>
        <label class="modal-label" for="minMonthlyRepayment"
          >Monthly Min Repayments</label
        >
        <VMoney
          id="minMonthlyRepayment"
          v-model="form.minMonthlyRepayment"
          class="w-full modal-input"
        />
      </div>
    </div>
    <ButtonNext
      :disabled="loading || !form.name"
      color="orange"
      @click="submit()"
      >Add Debt</ButtonNext
    >
  </VModal>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        amountOwing: 0,
        interest: 0,
        minMonthlyRepayment: 0,
      },
    }
  },
  methods: {
    submit() {
      this.$axios
        .post('/api/debts', {
          name: this.form.name,
          amount_owing: this.form.amountOwing,
          interest: this.form.interest,
          min_payments: this.form.minMonthlyRepayment,
        })
        .then((response) => {
          const uuid = response.data.data.id

          this.form.amountOwing = parseFloat(this.form.amountOwing)
          this.form.interest = parseFloat(this.form.interest)
          this.form.minMonthlyRepayment = parseFloat(
            this.form.minMonthlyRepayment
          )

          this.$store.commit('createDebt', {
            ...this.form,
            uuid,
          })
          this.form.name = ''
          this.form.amountOwing = 0
          this.form.interest = 0
          this.form.minMonthlyRepayment = 0
          this.$modal.hide(`create-debt`)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style></style>
