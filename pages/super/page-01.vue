<template>
  <div>
    <VContainer>
      <VProgress :percentage="92" />
      <VHeading
        title="Conduct a Health Check of your Super"
        subtitle="Overview"
        image-src="/super.svg"
        section="INVESTING FOR THE FUTURE"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle title="Obie is Checking Your Super"></VCardTitle>
      <!-- <VCardDescription>
        Insurance is there to protect you and your assets from the damage,
        negative impact, illness, disability or death, to name a few. It can
        cause chaos in your financial situation.
      </VCardDescription>
      <VCardDescription>
        There are many different types of insurance. Each is important in its
        own way and will interconnect with the other types of cover.
      </VCardDescription> -->
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

      <!-- <VCardTitle title="Learn More about Personal Insurance"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: '4 Types of Insurance Everyone Needs',
            image: '/carousel/insurance_01.png',
            href: 'https://www.huddleinsurance.com/',
          },
          {
            title:
              'Understanding the Different Types of Personal Insurance Coverage',
            image: '/carousel/insurance_02.png',
            href: 'https://www.tal.com.au/',
          },
        ]"
      /> -->
      <ButtonContainer>
        <ButtonBack></ButtonBack>
        <ButtonNext
          :show-icon="false"
          color="blue-dark"
          @click="$router.push('/super/page-02')"
          >LETS GET STARTED!</ButtonNext
        >
      </ButtonContainer>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters(['netIncomePerFrequency']),
    ...mapState(['frequency']),
  },
}
</script>
