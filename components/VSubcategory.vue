<template>
  <div class="px-3 py-2 border-t border-gray-100">
    <div class="flex justify-between items-center">
      <h4 class="font-medium">
        {{ subcategory.label }}
      </h4>

      <div class="flex items-center">
        <p class="text-xs text-gray-500 mr-1">
          {{ subcategory.amount | currency }} {{ subcategory.frequency }}
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
    <VModal :name="`${subcategory.uuid}_edit_subcategory`">
      <VModalTitle>Edit Expense</VModalTitle>
      <VSelectExpense
        @input="focusLabel()"
        :bucket="category.label"
        v-model="form.option"
      ></VSelectExpense>
      <div v-if="form.option === 'Other'" class="mb-3">
        <label class="modal-label" for="edit-subcat-label">Expense</label>
        <input
          ref="label"
          id="edit-subcat-label"
          v-model="form.label"
          placeholder="Expense"
          class="w-full modal-input"
          type="text"
        />
      </div>
      <div class="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label class="modal-label" for="edit-subcat-amount">Amount</label>
          <VMoney
            id="edit-subcat-amount"
            v-model="form.amount"
            placeholder="Amount"
            class="w-full modal-input"
          />
        </div>
        <div>
          <label class="modal-label" for="edit-subcat-frequency"
            >Frequency</label
          >
          <select
            id="edit-subcat-frequency"
            v-model="form.frequency"
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
          (!form.label && !form.option) ||
          (form.option === 'Other' && !form.label) ||
          !form.amount ||
          !form.frequency
        "
        color="orange"
        @click="submit()"
        >Edit Expense</ButtonNext
      >
    </VModal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    subcategory: {
      type: Object,
      required: true,
    },
    category: {
      type: Object,
      required: true,
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
    }
  },
  computed: {
    ...mapState(['frequencyOptions', 'expenseOptions']),
  },
  methods: {
    focusLabel() {
      this.$nextTick(() => {
        if (this.$refs.label) {
          this.$refs.label.focus()
        }
      })
    },
    handleDelete() {
      this.$axios.delete(`/api/expenses/${this.subcategory.uuid}`).then(() => {
        this.$store.commit('deleteSubcategory', this.subcategory.uuid)
      })
    },
    submit() {
      this.loading = true
      const name =
        this.form.option === 'Other' ? this.form.label : this.form.option
      this.$axios
        .post(`/api/expenses/${this.subcategory.uuid}`, {
          name,
          amount: this.form.amount,
          frequency: this.form.frequency,
          sub_category_id: this.category.uuid,
          _method: 'PUT',
        })
        .then(() => {
          this.$store.dispatch('setEntityValue', {
            entity: 'subcategories',
            uuid: this.subcategory.uuid,
            key: 'label',
            value: name,
          })
          this.$store.dispatch('setEntityValue', {
            entity: 'subcategories',
            uuid: this.subcategory.uuid,
            key: 'amount',
            value: this.form.amount,
          })
          this.$store.dispatch('setEntityValue', {
            entity: 'subcategories',
            uuid: this.subcategory.uuid,
            key: 'frequency',
            value: this.form.frequency,
          })

          this.$modal.hide(`${this.subcategory.uuid}_edit_subcategory`)
        })
        .finally(() => {
          this.loading = false
        })
    },
    startEditing() {
      const { label, amount, frequency } = this.subcategory
      if (this.expenseOptions.find((option) => option.label === label)) {
        this.form.option = label
      } else {
        this.form.option = 'Other'
      }
      this.form.label = label
      this.form.amount = amount
      this.form.frequency = frequency
      this.$modal.show(`${this.subcategory.uuid}_edit_subcategory`)
    },
  },
}
</script>

<style scoped></style>
