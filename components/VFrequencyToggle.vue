<template>
  <div class="bg-white flex rounded-full inline-block">
    <button
      v-for="option in options"
      :key="option.value"
      :class="[
        frequency === option.value
          ? 'bg-orange text-dark-purple'
          : 'text-purple ',
      ]"
      class="rounded-full px-2 py-2 text-xs font-bold"
      :value="option.value"
      @click="
        $store.dispatch('setValue', { key: 'frequency', value: option.value })
      "
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      options: [
        { label: 'Yearly', value: 'yearly' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Fortnightly', value: 'fortnightly' },
        { label: 'Weekly', value: 'weekly' },
      ],
    }
  },
  computed: {
    ...mapState(['frequency']),
  },
}
</script>

<style></style>
