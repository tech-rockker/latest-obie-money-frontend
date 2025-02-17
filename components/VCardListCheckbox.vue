<template>
  <div class="space-y-2 mb-4">
    <div v-for="card in cards" :key="card.title">
      <div
        class="bg-white border rounded-md shadow-lg p-3 pl-2 transition duration-75 flex justify-between"
        :class="model.includes(card.id) ? 'border-orange' : 'border-gray-200'"
      >
        <div>
          <input
            :id="card.id"
            :value="card.id"
            v-model="model"
            class="mr-2"
            type="checkbox"
          />
        </div>
        <div>
          <label :for="card.id" class="font-bold -mt-0.5">{{
            card.title
          }}</label>
          <p class="text-gray-500 text-xs mt-1">
            {{ card.description }}
          </p>
          <a class="text-xs text-orange" :href="card.href" target="_blank"
            >Visit Website</a
          >
        </div>
        <div class="w-16 h-16 ml-4 flex-none">
          <img
            class="max-w-full max-h-full ml-auto"
            :src="card.image"
            :alt="card.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [Array],
      default: () => [],
    },
  },
  computed: {
    model: {
      get() {
        return this.value || []
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>
