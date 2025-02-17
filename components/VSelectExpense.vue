<template>
  <div class="mb-3">
    <label class="modal-label" for="select-expense">Expense</label>
    <v-select
      input-id="select-expense"
      @input="handleInput"
      :value="value"
      :options="computedOptions"
      :reduce="(option) => option.label"
      placeholder="Select an option"
      :append-to-body="false"
    >
      <template #option="{ label, icon }">
        <div class="flex items-center">
          <template
            v-if="bucket === 'Essential Bills' || bucket === 'Insurances'"
          >
            <span
              :style="{ 'background-image': `url(${icon})` }"
              class="flex-none block w-10 h-10 bg-contain bg-center"
              v-if="icon"
            ></span>
            <span
              v-else
              :class="[label === 'Other' ? 'invisible' : '']"
              class="flex-none block w-10 h-10 bg-gray-100 rounded"
            ></span>
          </template>
          <h3
            :class="[label === 'Other' ? 'italic' : 'font-medium']"
            class="text-base mx-2 my-1"
          >
            {{ label }}
          </h3>
        </div>
        <!-- <em>{{ author.firstName }} {{ author.lastName }}</em> -->
      </template>
    </v-select>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    bucket: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(['expenseOptions']),
    computedOptions() {
      return this.expenseOptions.filter(
        (option) => option.bucket === 'all' || option.bucket === this.bucket
      )
    },
  },
  data() {
    return {
      selected: null,
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event)
    },
  },
}
</script>

<style></style>
