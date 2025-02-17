<template>
  <!-- <div>
    <div v-for="step in steps" :key="step.title">

    </div>
  </div> -->
  <div class="flow-root mb-10">
    <ul role="list" class="-mb-8">
      <li v-for="(step, index) in steps" :key="step.title">
        <div class="relative pb-4">
          <span
            v-if="index !== steps.length - 1"
            class="absolute left-5 top-5 -ml-px h-full w-0.5 border-l-2 border-dashed"
            aria-hidden="true"
          ></span>
          <div class="relative flex items-start space-x-3">
            <div class="relative">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-light-green text-green-2 font-bold ring-8 ring-white"
                src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                alt=""
              >
                {{ index + 1 }}
              </div>
            </div>
            <div
              class="min-w-0 flex-1 bg-white shadow-lg border rounded-md p-3"
            >
              <div>
                <div class="text-sm">
                  <p class="text-gray-1 font-bold">{{ step.title }}</p>
                </div>
              </div>
              <div v-if="step.content" class="mt-1 text-sm text-gray-500">
                <p>
                  {{ step.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // A method that adds an object to an array

    getSumFromArrayObjectKey(array, key) {
      return array.reduce((sum, item) => sum + item[key], 0)
    },
  },
}
</script>

<style></style>
