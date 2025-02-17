<template>
  <th
    scope="col"
    class="py-3.5 pr-2 text-left text-xs font-semibold"
    :class="[
      sortKey && sortKey === activeKey ? 'text-orange' : 'text-gray-900',
    ]"
  >
    <button
      v-if="sortKey"
      type="button"
      class="w-full flex justify-between"
      @click="sort(sortKey)"
    >
      <slot></slot>
      <span>
        <span v-if="sortKey !== activeKey || activeDirection === 'desc'">
          <svg
            class="w-4 h-4"
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
            ></path>
          </svg>
        </span>
        <span v-else>
          <svg
            class="w-4 h-4"
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
            ></path>
          </svg>
        </span>
      </span>
    </button>
    <span v-else><slot></slot></span>
  </th>
</template>

<script>
export default {
  props: {
    sortKey: {
      type: String,
      default: '',
    },
    activeKey: {
      type: String,
      default: '',
    },
    activeDirection: {
      type: String,
      default: '',
    },
  },
  methods: {
    sort(key) {
      this.$emit('sort', key)
    },
  },
}
</script>

<style></style>
