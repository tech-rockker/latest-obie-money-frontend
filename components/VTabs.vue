<template>
  <div class="w-full flex flex-col">
    <div class="flex space-x-4 px-4 mb-4">
      <button
        :class="[
          activeCategoryIndex === index
            ? 'text-orange-4 border-orange-4'
            : 'text-black border-transparent',
          'text-lg font-semibold border-b-2',
        ]"
        type="button"
        @click="activeCategoryIndex = index"
        v-for="(category, index) in categories"
        :key="category.label"
      >
        {{ category.label }}
      </button>
    </div>
    <VCard class="flex-1">
      <div
        v-for="(category, index) in categories"
        v-show="activeCategoryIndex === index"
        :key="category.label"
      >
        <div>
          <div>
            <table class="w-full">
              <tr v-for="step in category.steps" :key="step.label">
                <td
                  v-if="step.title"
                  class="text-gray-dark whitespace-nowrap font-bold pr-3 align-top pt-3 w-14"
                >
                  {{ step.title }}
                </td>
                <td>
                  <NuxtLink
                    v-if="step.to"
                    :to="step.to"
                    class="font-bold block p-3 onboarding-list-item mb-3 text-center text-lg"
                  >
                    {{ step.label }}
                  </NuxtLink>
                  <a
                    v-if="step.href"
                    target="_blank"
                    :href="step.href"
                    class="font-bold block p-3 onboarding-list-item mb-3 text-center text-lg"
                  >
                    {{ step.label }}
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </VCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategoryIndex: 0,
    }
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.onboarding-list-item {
  @apply border-[#E5E4F5] bg-[#EBEAFF] border-2 text-gray-dark;
  /* background: linear-gradient(98.45deg, #2e3986 25.2%, #1d286a 64.66%); */
  /* border: 1px solid #3f64ab; */
  box-shadow: 0px 8px 24px rgba(37, 54, 44, 0.04);
  border-radius: 6px;
}
</style>
