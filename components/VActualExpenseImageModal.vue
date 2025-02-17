<template>
  <VModal @before-open="handleBeforeOpen" name="actual-expense-image-modal">
    <template v-if="transaction">
      <div class="flex justify-between">
        <VModalTitle>{{ transaction.name }}</VModalTitle>
        <p class="font-medium">{{ transaction.amount | currency }}</p>
      </div>
      <img class="mb-6" :src="transaction.image_url" :alt="transaction.name">
      <ButtonNext :show-icon="false" color="orange" @click="$modal.hide('actual-expense-image-modal')"
        >Close</ButtonNext
      >
    </template>
  </VModal>
</template>

<script>
export default {
  data() {
    return {
      transaction: null,
    }
  },
  methods: {
    handleBeforeOpen({ params }) {
      this.resetModal()
      this.transaction = params.transaction
    },
    resetModal() {
      this.transaction = null
    }
  },
}
</script>

<style></style>
