<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Conduct a Health Check of your Super"
        section="INVESTING FOR THE FUTURE"
        subtitle="Overview"
        image-src="/hypoallergenic.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle title="Obie is Checking Your Super"></VCardTitle>
      <VSteps
        :steps="[
          {
            title: 'Review of Holdings across Multiple Super Funds',
          },
          {
            title: 'Fee Structures of Super Funds',
            content: 'Review and compare your fee structure',
          },
          {
            title: 'Effective Returns of Super Funds',
          },
          {
            title: 'Lost Super',
          },
          {
            title: 'Binding Nominations',
          },
          {
            title: 'Level of Insurances covered by superanuation',
          },
        ]"
      />
      <ButtonBack></ButtonBack>
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
