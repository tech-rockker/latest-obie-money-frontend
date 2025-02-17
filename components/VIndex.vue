<template>
  <div>
    <template v-for="category in categories">
      <div :key="category.label">
        <div
          class="text-dark-purple bg-orange-2 uppercase font-bold px-4 leading-loose rounded-md mb-3"
        >
          <h2>{{ category.label }}</h2>
        </div>
        <slot></slot>
        <div class="">
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
                  class="font-bold block p-3 mb-3 onboarding-list-item"
                  :class="{ 'text-center text-lg': graphicButtons }"
                >
                  {{ step.label }}
                </NuxtLink>
                <a
                  v-if="step.href"
                  target="_blank"
                  :href="step.href"
                  class="font-bold block p-3 mb-3 onboarding-list-item"
                  :class="{ 'text-center text-lg': graphicButtons }"
                >
                  {{ step.label }}
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    graphicButtons: {
      type: Boolean,
      default: false,
    },
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
