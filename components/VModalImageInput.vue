<template>
  <div class="mb-3">
    <label :class="computedLocalPlaceholder ? '' : 'text-gray-600 bg-gray-100 hover:border-gray-300 focus:border-gray-300 rounded text-center border-dashed border-2 p-3'" class="w-full font-medium flex items-center justify-center relative group" for="image">
      <span v-if="computedLocalPlaceholder" class="inline-flex items-center space-x-2 absolute top-0 right-0 m-3 bg-white text-gray-700 p-2 text-xs rounded group-hover:bg-gray-50 group-focus:bg-gray-50 shadow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
        <span>Edit Image</span>
      </span>
      <img v-if="computedLocalPlaceholder" class="block max-w-full max-h-full mx-auto" :src="computedLocalPlaceholder" alt="Image">
      <span v-else>+ Upload Image</span>
    </label>
    <input id="image" class="sr-only" type="file" @input="handleFileInput($event)" accept="image/*"  />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: File,
      default: null,
    },
    imagePlaceholder: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      localPlaceholder: ''
    }
  },
  computed: {
    computedLocalPlaceholder() {
      if (this.localPlaceholder) return this.localPlaceholder
      return this.imagePlaceholder
    }
  },
  methods: {
    handleFileInput(event) {
      const file = event.target.files[0]
      if (!file) return
      this.$emit('input', file)
      this.localPlaceholder = URL.createObjectURL(file)
    },
  },
}
</script>

<style></style>
