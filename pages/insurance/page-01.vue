<template>
  <div>
    <VContainer>
      <VProgress :percentage="92" />
      <VHeading
        title="Insurance"
        subtitle="Summary"
        image-src="/mountain.svg"
        section="PROTECT"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle title="What are the types of Insurance? "></VCardTitle>
      <VCardDescription>
        Insurance is there to protect you and your assets from the damage,
        negative impact, illness, disability or death, to name a few. It can
        cause chaos in your financial situation.
      </VCardDescription>
      <VCardDescription>
        There are many different types of insurance. Each is important in its
        own way and will interconnect with the other types of cover.
      </VCardDescription>
      <VSteps
        :steps="[
          {
            title: 'Life Insurances',
          },
          {
            title: 'Health Insurances',
          },
          {
            title: 'General Insurances',
          },
          {
            title: 'Business Insurances',
          },
          {
            title: 'Income Protection and Disability Insurances',
          },
        ]"
      />

      <VCardTitle title="Learn More about Personal Insurance"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: 'Huddle. Car. Home. Travel.',
            image: '/carousel/insurance_03.png',
            href: 'https://www.huddleinsurance.com/',
          },
          {
            title: 'TAL Personal Insurances',
            image: '/carousel/insurance_04.png',
            href: 'https://www.tal.com.au/',
          },
        ]"
      />
      <ButtonContainer>
        <ButtonBack></ButtonBack>
        <ButtonNext
          :show-icon="false"
          color="blue-dark"
          @click="$router.push('/insurance/page-02')"
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
