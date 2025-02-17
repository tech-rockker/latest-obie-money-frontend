<template>
  <VModal @before-open="handleBeforeOpen" name="actual-expense-modal">
    <VModalTitle>{{
      editing ? 'Edit Transaction' : 'Add New Transaction'
    }}</VModalTitle>
    <div class="mb-3">
      <label class="modal-label" for="name">Name</label>
      <input
        placeholder="Name of the expense"
        v-model="form.name"
        class="w-full modal-input"
        type="text"
      />
    </div>
    <div class="mb-3">
      <label class="modal-label" for="amount">Amount</label>
      <VMoney v-model="form.amount" class="w-full modal-input" />
    </div>
    <VModalInput
      id="date"
      v-model="form.date"
      :min="new Date().toISOString().split('T')[0]"
      label="Date"
      max="9999-12-31"
      type="date"
    />
    <div class="grid grid-cols-2 gap-6">
      <VModalSelect
        id="category"
        :value="selectedCategoryUuid"
        @input="handleCategoryInput($event)"
        :required="true"
        label="Category"
        placeholder="Select a Category"
        :options="categoryOptions"
      />
      <template v-if="selectedCategoryUuid">
        <VModalSelect
          v-if="selectedCategoryUuid === 'debt'"
          id="debt"
          v-model="selectedDebtUuid"
          :required="true"
          label="Debt"
          placeholder=""
          :options="debtOptions"
        />
        <VModalSelect
          v-else
          id="subCategory"
          :value="selectedSubcategoryUuid"
          @input="handleSubCategoryInput($event)"
          :required="true"
          label="Sub Category"
          placeholder="Sub Category"
          :options="subCategoryOptions"
        />
      </template>
    </div>
    <VModalSelect
      v-if="selectedSubcategoryUuid && !debtSelected"
      id="expenseUuid"
      v-model="selectedExpenseUuid"
      :required="true"
      label="Expense"
      placeholder=""
      :options="expenseOptions"
    />
    <VModalImageInput
      v-model="image"
      :image-placeholder="imagePlaceholder"
    ></VModalImageInput>
    <ButtonNext :disabled="loading" color="orange" @click="submit()">{{
      editing ? 'Edit Transaction' : 'Add New Transaction'
    }}</ButtonNext>
  </VModal>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { mapGetters } from 'vuex'
export default {
  props: {
    actualExpense: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters({
      expenses: 'expenses',
      debts: 'debts',
    }),
    categoryOptions() {
      return [
        ...this.expenses.map((expense) => ({
          label: expense.label,
          value: expense.uuid,
        })),
        { label: 'Debt', value: 'debt' },
      ]
    },
    selectedCategory() {
      if (this.selectedCategoryUuid && this.selectedCategoryUuid !== 'debt') {
        return this.expenses.find(
          // eslint-disable-next-line eqeqeq
          (expense) => expense.uuid == this.selectedCategoryUuid
        )
      } else {
        return null
      }
    },
    selectedSubcategory() {
      if (this.selectedSubcategoryUuid && this.selectedCategory) {
        return this.selectedCategory.categories.find(
          // eslint-disable-next-line eqeqeq
          (subCategory) => subCategory.uuid == this.selectedSubcategoryUuid
        )
      } else {
        return null
      }
    },
    selectedExpense() {
      if (this.selectedSubcategory && this.selectedExpenseUuid) {
        return this.selectedSubcategory.subcategories.find(
          // eslint-disable-next-line eqeqeq
          (expense) => expense.uuid == this.selectedExpenseUuid
        )
      } else {
        return null
      }
    },
    subCategoryOptions() {
      if (!this.debtSelected && this.selectedCategoryUuid) {
        const selectedXCategory = this.expenses.find(
          // eslint-disable-next-line eqeqeq
          (expense) => expense.uuid == this.selectedCategoryUuid
        )
        return selectedXCategory.categories.map((subCategory) => ({
          label: subCategory.label,
          value: subCategory.uuid,
        }))
      } else {
        return []
      }
    },
    expenseOptions() {
      if (!this.debtSelected && this.selectedSubcategory) {
        const expenses = this.selectedSubcategory.subcategories.map((e) => ({
          label: e.label,
          value: e.uuid,
        }))
        return [...expenses, { label: 'Other', value: '' }]
      } else {
        return []
      }
    },
    debtOptions() {
      return this.debts.map((debt) => ({
        label: debt.name,
        value: debt.uuid,
      }))
    },
    debtSelected() {
      return this.selectedCategoryUuid === 'debt'
    },
    expenseSelected() {
      return (
        !this.debtSelected &&
        this.selectedSubcategoryUuid &&
        this.selectedExpenseUuid
      )
    },
    subCategorySelected() {
      return (
        !this.debtSelected &&
        this.selectedSubcategoryUuid &&
        !this.selectedExpenseUuid
      )
    },
  },
  data() {
    return {
      loading: false,
      mode: '',
      selectedCategoryUuid: '',
      selectedSubcategoryUuid: '',
      selectedExpenseUuid: '',
      selectedDebtUuid: '',
      image: null,
      imagePlaceholder: '',
      editing: false,
      form: {
        name: '',
        date: moment().format('YYYY-MM-DD'),
        amount: 0,
        id: '',
      },
    }
  },
  methods: {
    handleCategoryInput(value) {
      this.selectedCategoryUuid = value
      if (value !== 'debt' && this.subCategoryOptions.length) {
        this.selectedSubcategoryUuid = this.subCategoryOptions[0].value
        this.handleSubCategoryInput(this.subCategoryOptions[0].value)
      }
      if (value === 'debt' && this.debtOptions.length) {
        this.selectedDebtUuid = this.debtOptions[0].value
      }
    },
    handleSubCategoryInput(value) {
      this.selectedSubcategoryUuid = value
      if (value && this.expenseOptions.length) {
        this.selectedExpenseUuid = this.expenseOptions[0].value
      }
    },
    handleBeforeOpen({ params }) {
      this.resetModal()
      if (params) {
        const { categoryId, subCategoryId, expenseId, debtId, transaction } =
          params
        if (transaction) {
          this.editing = true
          this.form = {
            name: transaction.name,
            date: moment(transaction.date).format('YYYY-MM-DD'),
            amount: transaction.amount,
            id: transaction.id,
          }
        }
        if (categoryId) {
          this.selectedCategoryUuid = categoryId
        } else {
          this.selectedCategoryUuid = ''
        }
        if (subCategoryId) {
          this.selectedSubcategoryUuid = subCategoryId
        } else {
          this.selectedSubcategoryUuid = ''
        }
        if (expenseId) {
          this.selectedExpenseUuid = expenseId
        } else {
          this.selectedExpenseUuid = ''
        }
        if (debtId) {
          this.selectedCategoryUuid = 'debt'
          this.selectedDebtUuid = debtId
        } else {
          this.selectedDebtUuid = ''
        }
      } else {
        this.editing = false
        this.resetModal()
      }
    },
    submit() {
      let type = ''
      let model_id = ''

      if (this.expenseSelected) {
        type = 'expense'
        model_id = this.selectedExpenseUuid
      } else if (this.subCategorySelected) {
        type = 'other'
        model_id = this.selectedSubcategoryUuid
      } else {
        type = 'debt'
        model_id = this.selectedDebtUuid
      }
      this.loading = true

      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('date', this.form.date)
      formData.append('amount', this.form.amount)
      formData.append('type', type)
      formData.append('model_id', model_id)
      if (this.image) {
        formData.append('image', this.image)
      }
      if (this.editing) {
        this.updateTransaction(formData, this.form.id)
      } else {
        this.createTransaction(formData)
      }
    },
    createTransaction(form) {
      this.$axios
        .post('/api/transactions', form)
        .then((response) => {
          this.$store.commit('createTransaction', response.data.data)
          this.$modal.hide('actual-expense-modal')
          this.resetModal()
        })
        .finally(() => {
          this.loading = false
        })
    },
    updateTransaction(form, id) {
      console.log(id)
      form.append('_method', 'PUT')
      this.$axios
        .post(`/api/transactions/${id}`, form)
        .then((response) => {
          this.$store.commit('updateTransaction', response.data.data)
          this.$modal.hide('actual-expense-modal')
          this.resetModal()
        })
        .finally(() => {
          this.loading = false
        })
    },
    resetModal() {
      this.editing = false
      this.selectedCategoryUuid = ''
      this.selectedSubcategoryUuid = ''
      this.selectedExpenseUuid = ''
      this.selectedDebtUuid = ''
      this.image = null
      this.imagePlaceholder = ''
      this.form = {
        name: '',
        date: moment().format('YYYY-MM-DD'),
        amount: 0,
        id: '',
      }
    },
  },
}
</script>

<style></style>
