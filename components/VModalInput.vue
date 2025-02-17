<template>
  <div class="mb-3">
    <label v-if="showLabel" class="modal-label" :for="id"
      >{{ label }} <span v-if="required" class="text-red-600">*</span></label
    >
    <VMoney
      v-if="type === 'money'"
      :value="value"
      class="w-full modal-input"
      @input="handleMoneyInput"
    />
    <input
      v-else
      :id="id"
      :value="value"
      class="w-full modal-input"
      :type="type"
      :min="min"
      :max="max"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
    min: {
      type: String,
      default: '',
    },
    max: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleMoneyInput(inputValue) {
      const value = inputValue || 0
      this.$emit('input', value)
    },
  },
}
</script>

<style></style>
