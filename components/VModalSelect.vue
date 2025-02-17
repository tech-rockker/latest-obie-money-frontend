<template>
  <div class="mb-3">
    <label class="modal-label" :for="id"
      >{{ label }} <span v-if="required" class="text-red-600">*</span></label
    >
    <select
      :id="id"
      :value="value"
      class="w-full modal-input"
      @input="$emit('input', $event.target.value)"
      :required="required"
    >
      <option v-if="placeholder" disabled="true" value="">
        {{ placeholder }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
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
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
