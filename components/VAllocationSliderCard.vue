<template>
  <div class="shadow-md rounded-lg border border-gray-2">
    <div>
      <div class="p-3">
        <p class="font-bold text-base mb-2">
          {{ title }}
        </p>
        <div class="w-36 mx-auto">
          <VModalInput
            id="emergency-fund"
            label="Emergency Fund"
            type="money"
            class="modal-input-underlined text-center mb-6"
            :show-label="false"
            :value="value"
            @input="$emit('input', $event)"
          ></VModalInput>
        </div>
        <VSlider
          class="mb-2"
          :max="max"
          :value="value"
          @input="$emit('input', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 1000,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style scoped></style>
