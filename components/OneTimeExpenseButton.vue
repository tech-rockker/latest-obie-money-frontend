<template>
  <div>
    <button
      @click="$modal.show('actual-expense-modal')"
      class="bottom-20 right-4 absolute bg-white hover:bg-gray-100 focus:bg-gray-100 text-orange shadow-md w-12 h-12 rounded-full flex items-center justify-center"
    >
      <span class="sr-only">Create One Time Expense</span>
      <svg
        class="w-10"
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        ></path>
      </svg>
    </button>
    <VModal name="create-one-time-expense">
      <VModalTitle>Create One Time Expense</VModalTitle>
      <form @submit.prevent="createOneTimeExpense()">
        <VModalInput
          id="editname"
          v-model="form.name"
          label="Name of your Investment Goal"
        />
        <!-- <VModalSelect
          id="editType"
          v-model="form.type"
          label="Type of Investment"
          placeholder="Select a type"
          :options="investmentTypeOptions"
        /> -->
        <VModalInput
          id="editamount"
          v-model="form.amount"
          label="Amount"
          type="money"
        />
        <VModalInput
          id="date"
          v-model="form.date"
          label="Date"
          max="9999-12-31"
          type="date"
        />
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
          >Create One Time Expense</ButtonNext
        >
      </form>
    </VModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        amount: '',
        hasDeadline: true,
        date: '',
        allocationSavings: 0,
        allocationIncome: 0,
      },
    }
  },
  methods: {
    createOneTimeExpense() {},
  },
}
</script>

<style></style>
