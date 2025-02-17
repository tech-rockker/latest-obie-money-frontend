<template>
  <div class="p-3 flex flex-col min-h-screen">
    <div>
      <!-- <div class="flex items-center mb-6">
        <VObieYourMoney />
        <div class="text-gray-dark border-orange border-l-2 ml-6 pl-3">
          <h1 class="text-lg font-bold leading-tight">Your path, your pace.</h1>
          <p class="font-light leading-tight">
            Checking the health of your wealth
          </p>
        </div>
      </div> -->
      <div
        class="text-dark-purple bg-orange-2 uppercase font-bold px-4 leading-loose rounded-md mb-3"
      >
        <h2>Optimise</h2>
      </div>
      <div class="px-6">
        <table class="w-full">
          <tr v-for="(step, index) in steps" :key="step">
            <td
              class="text-gray-dark whitespace-nowrap font-bold pr-3 align-top pt-3"
            >
              Step {{ index + 1 }}
            </td>
            <td>
              <p class="font-bold p-3 onboarding-list-item mb-3">
                {{ step }}
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="flex space-x-3">
      <ButtonBack @click="$router.push('/onboarding/page-08')" />
      <ButtonNext color="blue" @click="buildScenario()">GET STARTED</ButtonNext>
    </div>
    <div
      class="pt-10 text-navy-dark"
      style="
        font-family: 'Playpen Sans', cursive;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
      "
    >
      <p class="text-xl mb-3 text-center">
        “As soon as I saw you I knew a grand adventure was about to happen!”
      </p>
      <p class="text-right text-lg">-AA Milne</p>
    </div>
    <!-- <div class="mt-10">
      <img
        class="mx-auto"
        src="/onboarding/characters/Characters-7.png"
        aria-hidden="true"
      />
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'onboarding',
  auth: false,
  data() {
    return {
      steps: [
        'Allocate your income before you spend it',
        'Create your Safety Net',
        'Deal with your Debt',
        'Set your Financial Savings Goals',
        'Invest. Small amounts over time make a big difference',
      ],
    }
  },
  computed: {
    ...mapState(['onboarding']),
  },
  methods: {
    buildScenario() {
      this.$router.push('/expenses/page-01')
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
