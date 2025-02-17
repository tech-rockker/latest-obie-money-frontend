<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Personal Insurance"
        section="PROTECTION"
        subtitle="Summary"
        image-src="/clipboard.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle
        title="What are the types of Personal Insurance? "
      ></VCardTitle>
      <VCardDescription
        >Personal Insurance is there to protect you from the impact illness,
        disability or death can cause to your financial situation and your loved
        ones.
      </VCardDescription>
      <VCardDescription
        >There are many different types of personal insurance (as mentioned
        below). Each is important in its own way and will interconnect with the
        other types of cover.
      </VCardDescription>
      <VCardTitle title="What are the Personal Insurance Types?"></VCardTitle>
      <VSteps
        :steps="[
          {
            title: 'Life',
          },
          {
            title: 'Income',
          },
          {
            title: 'Trauma',
          },
          {
            title: 'Total and Permanent Disability',
          },
          {
            title: 'Child Trauma Insurance',
          },
        ]"
      />

      <VCardTitle title="Learn More about Personal Insurance"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: '4 Types of Insurance Everyone Needs',
            image: '/carousel/insurance_01.png',
            href: '',
          },
          {
            title:
              'Understanding the Different Types of Personal Insurance Coverage',
            image: '/carousel/insurance_02.png',
            href: '',
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
