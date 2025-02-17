<template>
  <div>
    <fieldset>
      <legend class="sr-only">{{ legend }}</legend>
      <div v-for="option in options" :key="option.value">
        <input
          :id="option.value"
          class="sr-only"
          type="checkbox"
          :value="option.value"
          v-model="model"
          name="option"
        />
        <label
          class="radio-label text-gray-dark"
          :class="[
            model.includes(option.value) ? 'active' : '',
            option.imageSrc ? 'flex items-center' : 'block text-center',
          ]"
          :for="option.value"
        >
          <img
            v-if="option.imageSrc"
            class="w-10 mr-4"
            :src="option.imageSrc"
            :alt="option.optioimageAlt"
          />
          <span>{{ option.label }}</span>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Array],
      default: () => [],
    },
    legend: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
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

<style lang="scss">
.radio-label {
  @apply p-5 mb-3 bg-[#EBEAFF]  border-2 border-transparent;
  box-shadow: 0px 8px 24px rgba(37, 54, 44, 0.04);
  border-radius: 6px;
  span {
    @apply opacity-70;
  }
  &.active {
    @apply font-bold border-[#E5E4F5];
    span {
      @apply opacity-100;
    }
  }
}
</style>
