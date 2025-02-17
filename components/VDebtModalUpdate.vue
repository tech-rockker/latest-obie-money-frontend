<template>
  <VModal :name="`update-debt`" @before-open="handleBeforeOpen($event.params)">
    <VModalTitle>Update Debt</VModalTitle>
    <div class="mb-3">
      <label class="modal-label" for="name">Name</label>
      <input v-model="editForm.name" class="w-full modal-input" type="text" />
    </div>
    <div class="mb-3">
      <label class="modal-label" for="amountOwing">Amount Owing</label>
      <VMoney v-model="editForm.amountOwing" class="w-full modal-input" />
    </div>
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div>
        <label class="modal-label" for="Interest">Interest rate (%)</label>
        <input
          v-model="editForm.interest"
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
          v-model="editForm.minMonthlyRepayment"
          class="w-full modal-input"
        />
      </div>
    </div>
    <ButtonNext
      :disabled="loading || !editForm.name"
      color="orange"
      @click="update()"
      >Update Debt</ButtonNext
    >
    <VModalDeleteButton @click="deleteDebt(editForm.uuid)">
      Delete Debt
    </VModalDeleteButton>
  </VModal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: false,
      editForm: {
        uuid: '',
        name: '',
        amountOwing: 0,
        interest: 0,
        minMonthlyRepayment: 0,
      },
    }
  },
  computed: {
    ...mapGetters(['debts', 'debt']),
  },
  methods: {
    deleteDebt(uuid) {
      this.loading = true
      this.$axios
        .delete(`/api/debts/${uuid}`)
        .then((response) => {
          this.$store.commit('deleteDebt', uuid)
          this.$modal.hide('update-debt')
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleBeforeOpen(debt) {
      const { uuid, name, amountOwing, interest, minMonthlyRepayment } = debt
      this.editForm.uuid = uuid
      this.editForm.name = name
      this.editForm.amountOwing = amountOwing
      this.editForm.interest = interest
      this.editForm.minMonthlyRepayment = minMonthlyRepayment
    },
    update() {
      this.loading = true
      this.$axios
        .post(`/api/debts/${this.editForm.uuid}`, {
          name: this.editForm.name,
          amount_owing: this.editForm.amountOwing,
          interest: this.editForm.interest,
          min_payments: this.editForm.minMonthlyRepayment,
          _method: 'PUT',
        })
        .then((response) => {
          this.editForm.amountOwing = parseFloat(this.editForm.amountOwing)
          this.editForm.interest = parseFloat(this.editForm.interest)
          this.editForm.minMonthlyRepayment = parseFloat(
            this.editForm.minMonthlyRepayment
          )
          this.$store.commit('updateDebt', this.editForm)
          this.$modal.hide(`update-debt`)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style></style>
