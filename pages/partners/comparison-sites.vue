<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Comparison Sites"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'Money Smart',
            description:
              'Free calculators and tips to help you take control of your money and build a better life.',
            image: '/partners/moeny.png',
            href: 'https://moneysmart.gov.au/',
          },
          {
            title: 'Canstar',
            description:
              'Expert ratings help you compare home loans, credit cards, health insurance & more. Compare online now to see if you can find the right financial products for you.',
            image: '/partners/canstar.png',
            href: 'https://www.canstar.com.au/',
          },
          {
            title: 'Super Guru',
            description:
              'A great independent site  with all the  essential information and tools to help Australians better understand and maximise their super.',
            image: '/partners/superguru.png',
            href: 'https://www.superguru.com.au/',
          },
          {
            title: 'ATO Super Comparison',
            description:
              'Compare super funds based on their fees and performance. You can also see how your personal super fund compares against others within your myGov account',
            image: '/partners/au-gov.png',
            href: 'https://www.ato.gov.au/Calculators-and-tools/YourSuper-comparison-tool/',
          },
        ]"
      ></VCardList>
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
