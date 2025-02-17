<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Super"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'Vanguard Super',
            description:
              'Its super but not as you know it. Vanguard believe in empowering individuals by making investing strategies simple and accessible.',
            image: '/partners/Super/vanguard.png',
            href: 'https://www.vanguard.com.au/super/',
          },
          {
            title: 'Verve Super',
            description:
              'Australia\'s first ethical super fund for women, by women. Supporting women to build wealth & invest in a better world through superannuation.',
            image: '/partners/verve.png',
            href: 'https://vervesuper.com.au/',
          },
          {
            title: 'AustralianSuper',
            description:
              'AustralianSuper provides most members with basic insurance cover included with their super account.',
            image: '/partners/australiansuper.png',
            href: 'https://www.australiansuper.com/',
          },
          {
            title: 'Hostplus',
            description:
              'Another Barefoot favourite, Hostplus has an indexed fund within its offering. Meaning low fees and potentially increasing returns.',
            image: '/partners/hostplus.png',
            href: 'https://hostplus.com.au/members',
          },
          {
            title: 'HESTA',
            description:
              'HESTA Super Fund is the Australian industry superannuation fund for people working in health and community services. ',
            image: '/partners/hesta.png',
            href: 'https://www.hesta.com.au/members/your-superannuation/why-join-hesta?ecid=ISA~~~M%7CNM~~NT~~~Industry_Super~~202004~Choose-a-fund~~',
          },
          {
            title: 'Cbus Super',
            description:
              'Created by workers for workers, this new entity was to assist in giving a decent standard of living in retirement.',
            image: '/partners/Super/cbus.png',
            href: 'https://www.cbussuper.com.au/',
          },
          {
            title: 'RAIZ Super',
            description:
              'Super in the palm of your hand. RAIZ super is in the same app as RAIZ round ups.',
            image: '/partners/Super/raiz_icon.png',
            href: 'https://raizinvest.com.au/',
          },
          {
            title: 'Industry SuperFunds',
            description:
              'Low fee funds run only to benefit members, no commissions to financial planners. Join over 5 million members of Industry SuperFunds.',
            image: '/partners/industryfunds.png',
            href: 'https://www.industrysuper.com/',
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
