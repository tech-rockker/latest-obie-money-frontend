<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Insurance"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'KOBA',
            description:
              'KOBA Insurance is on a mission to help over 10M Aussie drivers lower their annual premiums by only charging them for what they use.',
            image: '/partners/koba.png',
            href: 'https://www.kobainsurance.com.au/',
          },
          {
            title: 'TAL',
            description:
              'No two lives are the same. So naturally your life insurance should be unique for you. With TAL, protect what matters most to you so you can enjoy the life you love.',
            image: '/partners/Insurance/TAL.svg',
            href: 'https://www.tal.com.au/',
          },
          {
            title: 'Huddle',
            description:
              'Life moves fast. Who wants to hang around for insurance? Buy, manage and claim 24/7. Local experts when you need help.',
            image: '/partners/Insurance/Huddle.svg',
            href: 'https://www.huddleinsurance.com/',
          },
          {
            title: 'Frank',
            description:
              'As a not for profit online health fund, delivering affordable health cover and great customer service is what Frank does best.',
            image: '/partners/Insurance/Frank.svg',
            href: 'https://www.frankhealthinsurance.com.au/',
          },
          {
            title: 'NobleOak',
            description:
              'Whether you are new to life insurance or looking to switch, NobleOak offers award-winning cover, competitive premiums and fully-underwritten insurance to help protect you and your loved ones.',
            image: '/partners/Insurance/Noble Oak.svg',
            href: 'https://www.nobleoak.com.au/',
          },
          {
            title: 'Honey',
            description:
              'Home. Renters. Landlords. Smarter home insurance helping you prevent avoidable accidents.',
            image: '/partners/Insurance/honey.png',
            href: 'https://www.honeyinsurance.com/',
          },
          {
            title: 'Petsy',
            description:
              'Protect who you love coming home to. Get a quickpet insurance quote.',
            image: '/partners/Insurance/Petsy.svg',
            href: 'https://quote.petsy.com.au/step-1',
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
