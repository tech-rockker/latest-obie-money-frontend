<template>
  <div class="bg-white">
    <button class="flex justify-between items-center text-left w-full border-t border-gray-100 p-3"
      @click="showSubcategories = !showSubcategories">
      <div class="flex items-center">
        <div class="flex w-8 h-8 mr-3">
          <img class="max-w-full max-h-full m-auto" :src="`/icons/${category.icon}`" :alt="category.label" />
        </div>
        <div>
          <h3 class="font-bold">{{ category.label }}</h3>
          <p v-if="isActualExpense" class="text-xs text-gray-500">
            
            Goal: {{ category.totalPerFrequency | currency }}
          </p>
          <p v-else class="text-xs text-gray-500">
            {{ category.totalPerDay | currency }}/day
          </p>
        </div>
      </div>
      <div class="flex items-center justify-end">
        <div class="flex flex-col items-end justify-center mr-1">
          <p class="font-bold">
            <span v-if="isActualExpense">{{ category.transactionsTotal | currency }}</span>
            <span v-else>{{ category.totalPerFrequency | currency }}</span>
          </p>
          <VBadge v-if="isActualExpense" :color="category.transactionsAreOptimal ? 'green' : 'red'">{{
            category.transactionsPercentageOfIncome | percentage
            }}</VBadge>
          <VBadge v-else :color="category.isOptimal ? 'green' : 'red'">{{
            category.percentageOfIncome | percentage
            }}</VBadge>
        </div>
        <div class="p-1">
          <svg v-if="showSubcategories" class="text-gray-400 w-4 h-4" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
          </svg>
          <svg v-else class="text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </button>
    <div v-if="showSubcategories" class="bg-gray-50 shadow-inner">
      <template v-if="isActualExpense">
        <div class="">
          <div v-for="subcategory in category.subcategories" :key="subcategory.uuid">
            <div class="bg-gray-100 flex items-center justify-between">
              <div class="py-1 pl-14">
                <p class="font-medium">{{ subcategory.label }}<span class="font-normal text-xs text-gray-600">&nbsp;&#x2022;&nbsp;Goal: {{ subcategory.totalPerFrequency | currency }}</span></p>
                
              </div>
              <div class="flex items-center space-x-2 mr-10">
                <p  :class="subcategory.transactionsAreOptimal ? 'text-green-500' : 'text-red-600'"><span class="font-medium">{{ subcategory.transactionsTotal | currency }}</span></p>
              </div>
            </div>
            <VTransaction v-for="transaction in subcategory.transactions" :key="transaction.id" :transaction="transaction" :category-id="expense.uuid" :sub-category-id="category.uuid" :expense-id="subcategory.uuid"></VTransaction>
            </VTransaction>
            <button class="text-left text-sm text-gray-400 py-2 px-3 pl-14 border-t border-gray-100 w-full"
              @click="$modal.show(`actual-expense-modal`, {categoryId: expense.uuid, subCategoryId:category.uuid, expenseId: subcategory.uuid})">
              + Record {{ subcategory.label }} Transaction
            </button>
          </div>
          <!-- <VSubcategory class="bg-gray-50" v-for="subcategory in category.subcategories" :key="subcategory.uuid" :subcategory="subcategory"
          :category="category"></VSubcategory>-->
        </div>
        <div class="bg-gray-100 flex items-center justify-between">
          <div class="py-1 pl-14">
            <p class="font-medium">Other<span class="font-normal text-xs text-gray-600">&nbsp;&#x2022;&nbsp;Goal: {{ 0 | currency }}</span></p>
          </div>
          <div class="flex items-center space-x-2 mr-10">
            <p class="font-medium" :class="category.transactionsTotalWithoutExpenses ? 'text-red-600' : 'text-green-500'">{{ category.transactionsTotalWithoutExpenses | currency }}</p>
          </div>
        </div>
        <VTransaction v-for="transaction in category.transactions" :key="transaction.id" :transaction="transaction" :category-id="expense.uuid" :sub-category-id="category.uuid"></VTransaction>
        </VTransaction>
        <button class="text-left text-sm text-gray-400 py-2 px-3 pl-14 border-t border-gray-100 w-full"
          @click="$modal.show(`actual-expense-modal`, {categoryId: expense.uuid, subCategoryId:category.uuid})">
          + Record Other Transaction
        </button>
      </template>
      <template v-else>
        <VSubcategory v-for="subcategory in category.subcategories" :key="subcategory.uuid" :subcategory="subcategory"
        :category="category"></VSubcategory>
        <button class="text-left text-sm text-gray-400 py-2 px-3 border-t border-gray-100 w-full"
          @click="$modal.show(`${category.uuid}_create_subcategory`)">
          + Create New Expense
        </button>
      </template>    
    </div>
    <VModal @before-open="resetForm()" :name="`${category.uuid}_create_subcategory`">
      <VModalTitle>Create Expense</VModalTitle>
      <VSelectExpense @input="focusLabel()" :bucket="category.label" v-model="form.option"></VSelectExpense>
      <div v-if="form.option === 'Other'" class="mb-3">
        <label class="modal-label" for="create-subcat-label">Expense</label>
        <input id="create-subcat-label" v-model="form.label" placeholder="Expense" class="w-full modal-input"
          type="text" ref="label" />
      </div>
      <div class="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label class="modal-label" for="create-subcat-amount">Amount</label>
          <VMoney id="create-subcat-amount" v-model="form.amount" placeholder="Amount" class="w-full modal-input" />
        </div>
        <div>
          <label class="modal-label" for="create-subcat-frequency">Frequency</label>
          <select id="create-subcat-frequency" v-model="form.frequency" class="w-full modal-input">
            <option disabled="true" value="">Frequency</option>
            <option v-for="option in frequencyOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
      <ButtonNext :disabled="loading ||
        (!form.label && !form.option) ||
        (form.option === 'Other' && !form.label) ||
        !form.amount ||
        !form.frequency
        " color="orange" @click="submit()">Create Expense</ButtonNext>
    </VModal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { v4 as uuidv4 } from 'uuid'
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
    expense: {
      type: Object,
      required:true
    },
    type: {
      type: String,
      default: 'expense',
      validator: (value) => {
        return ['expense', 'actual-expense'].includes(value)
      },
    },
  },
  data() {
    return {
      loading: false,
      form: {
        option: '',
        label: '',
        amount: '',
        frequency: '',
      },
      showSubcategories: false,
    }
  },
  computed: {
    ...mapState(['frequencyOptions', 'frequency']),
    isActualExpense() {
      return this.type === 'actual-expense'
    }
  },
  methods: {
    focusLabel() {
      this.$nextTick(() => {
        if (this.$refs.label) {
          this.$refs.label.focus()
        }
      })
    },
    resetForm() {
      this.form = {
        option: '',
        label: '',
        amount: '',
        frequency: '',
      }
    },
    submit() {
      this.loading = true
      const name =
        this.form.option === 'Other' ? this.form.label : this.form.option
      this.$axios
        .post('/api/expenses', {
          name,
          amount: this.form.amount,
          frequency: this.form.frequency,
          sub_category_id: this.category.uuid,
        })
        .then((response) => {
          const expense = response.data.data
          this.$store.commit('createSubcategory', {
            label: name,
            amount: expense.amount,
            frequency: expense.frequency,
            uuid: expense.id,
          })
          this.$store.commit('addSubcategoryToCategory', {
            categoryUuid: expense.sub_category_id,
            subcategoryUuid: expense.id,
          })
          this.form.label = ''
          this.form.amount = ''
          this.form.frequency = ''
          this.$modal.hide(`${this.category.uuid}_create_subcategory`)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style></style>
