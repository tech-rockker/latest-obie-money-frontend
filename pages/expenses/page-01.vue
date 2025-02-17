<template>
  <div>
    <VContainer>
      <VProgress :percentage="2" />
      <VHeading
        title="Optimise your Income"
        section="Manage Cashflow and Budgeting"
        image-src="/growth.svg"
      ></VHeading>

      <div class="flex items-center justify-between mt-3">
        <div class="mr-3">
          <p class="text-xs text-gray-dark">
            Net Income per {{ frequency | frequencyToNoun }}
          </p>
          <p class="gray-dark text-xl font-bold flex items-center space-x-2">
            <span>{{ netIncomePerFrequency | currency }}</span> <VPayModal />
          </p>
        </div>

        <VFrequencyToggle />
      </div>
    </VContainer>
    <VCard>
      <VCardTitle
        image-src="/icons/heat.svg"
        title="Optimise Your Monthly Income"
        text-alignment="center"
      ></VCardTitle>
      <VCardDescription class="text-center text-lg">
        <p>Its not how much money you make.</p>
        <p>Its what you do with it that counts.</p>
        <p>What counts is how much you keep.</p>
        <p>And how hard you make it work.</p>
      </VCardDescription>
      <div class="mb-4 mt-2">
        <img class="w-full" aria-hidden="true" src="/drag-bar.svg" alt="bar" />
      </div>
      <VSummary :show-comparison="false" :show-optimal="true" class="mb-3" />
      <ButtonContainer>
        <ButtonBack @click="$router.push('/dashboard')" />
        <ButtonNext color="blue-dark" @click="$router.push('/expenses/page-02')"
          >NEXT</ButtonNext
        >
      </ButtonContainer>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SandboxPage',
  computed: {
    ...mapGetters(['netIncomePerFrequency']),
    ...mapState(['frequency']),
  },
}
</script>
