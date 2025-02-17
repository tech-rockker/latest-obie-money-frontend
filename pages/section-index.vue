<template>
  <div class="p-3 flex flex-col min-h-screen">
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
                  class="text-gray-dark whitespace-nowrap font-bold pr-3 align-top pt-3 w-14"
                >
                  Step {{ step.step }}
                </td>
                <td>
                  <button
                    v-if="step.to"
                    @click="$router.push(step.to)"
                    class="font-bold block p-3 mb-3 border-2 text-gray-dark rounded-md w-full text-left"
                    :class="[
                      step.step > activeStep
                        ? 'bg-gray-200 text-gray-800'
                        : isActive(step.step)
                        ? 'bg-[#EBEAFF] border-light-purple'
                        : 'border-[#E5E4F5] bg-[#EBEAFF]',
                    ]"
                    :disabled="step.step > activeStep"
                  >
                    {{ step.label }}
                  </button>
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
  </div>
</template>

<script>
export default {
  computed: {
    activeStep() {
      return this.$route.query.step ? parseInt(this.$route.query.step) : 1
    },
  },
  data() {
    return {
      categories: [
        {
          label: 'Optimise',
          steps: [
            {
              step: 1,
              label: 'Allocate your income before you spend it',
              to: '/expenses/page-01',
            },
            {
              step: 2,
              label: 'Create your Safety Net',
              to: '/safety-net/page-01',
            },
            {
              step: 3,
              label: 'Deal with your Debt',
              to: '/debt/page-01',
            },
            {
              step: 4,
              label: 'Set your Financial Savings Goals',
              to: '/goals/page-01',
            },
          ],
        },
        {
          label: 'Maximise',
          steps: [
            {
              step: 5,
              label: 'Super? Enough to retire on?',
              to: '/super/page-01',
            },
            {
              step: 6,
              label: 'Invest. Small amounts over time make a big difference',
              to: '/invest/page-01',
            },
          ],
        },
        {
          label: 'Protect',
          steps: [
            {
              step: 7,
              label: 'Do I have Insurance I need?',
              to: '/insurance/page-01',
            },
            {
              step: 8,
              label: 'Are my assets protected?',
              to: '/learn/asset-protection',
            },
            {
              step: 9,
              label: "Who's in charge when I can't be?",
              to: '/to-dos/estate-planning',
            },
          ],
        },
      ],
    }
  },
  methods: {
    isActive(step) {
      return this.activeStep === step
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
