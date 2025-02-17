<template>
  <div class="pr-3 border-t border-gray-100">
    <div class="flex">
      <div class="w-12 h-12 flex mr-2">
        <button v-if="transaction.image_url" :style="{'background-image': `url(${transaction.image_url})`}" type="button" @click="$modal.show('actual-expense-image-modal', {transaction})" class="w-full bg-white bg-contain bg-center bg-no-repeat">
        </button>
      </div>
      <div class="flex items-center">
        <h4 class="font-medium py-2">
          {{ transaction.name }}
        </h4>
      </div>
      <div class="flex items-center ml-auto py-2">
        <p class="text-xs text-gray-500 mr-1">
          {{ transaction.amount | currency }}
        </p>
        <div class="">
          <VDropdown>
            <VDropdownItem @click="startEditing()">Edit</VDropdownItem>
            <VDropdownItem class="text-red-600" @click="handleDelete()"
              >Delete</VDropdownItem
            >
          </VDropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
    categoryId: {
      type: Number,
      default: null
    },
    subCategoryId: {
      type: Number,
      default: null
    },
    expenseId: {
      type: Number,
      default: null
    },
    debtId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
  },
  methods: {
    handleDelete() {
      this.$axios.delete(`/api/transactions/${this.transaction.id}`).then(() => {
        this.$store.commit('deleteTransaction', this.transaction.id)
      })
    },
    
    startEditing() {
      if (this.transaction.type === 'Expense')  {
        this.$modal.show(`actual-expense-modal`, {categoryId: this.categoryId, subCategoryId:this.subCategoryId, expenseId: this.expenseId, transaction: this.transaction})
      } else if (this.transaction.type === 'SubCategory') {
        this.$modal.show(`actual-expense-modal`, {categoryId: this.categoryId, subCategoryId:this.subCategoryId, transaction: this.transaction})
      } else if (this.transaction.type === 'Debt') {
        this.$modal.show(`actual-expense-modal`, {debtId: this.debtId, transaction: this.transaction})
      }
    },
  },
}
</script>

<style scoped></style>
