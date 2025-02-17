<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Estate Planning"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'Bare Funerals',
            description:
              'Bare is here to change the industry for the better.  Independent and 100% Australian owned.  Do your funeral your way.  They know where to start.',
            image: '/partners/bare_logo.png',
            href: 'https://bare.com.au/',
          },
          {
            title: 'Safewill',
            description:
              'Create your own Will online in minutes. Safewill combines modern design and technology to help every Australian and New Zealander safeguard their life\'s',
            image: '/partners/safewill_logo.png',
            href: 'https://safewill.com/',
          },
          {
            title: 'State Trustees',
            description:
              'State Trustees exists to help people plan, manage and live on through every stage of life.',
            image: '/partners/state_trustes.png',
            href: 'https://www.statetrustees.com.au/',
          },
          {
            title: 'Willed',
            description:
              'Willed is a technology platform that allows you to create your own estate planning solutions using our forms and other information. ',
            image: '/partners/willes-logo.png',
            href: 'https://www.willed.com.au/',
          },
          {
            title: 'RSCPA',
            description:
              'Check out the RSPCA\'s range of resources helping individuals and businesses create a better Australia for all creatures great and small.',
            image: '/partners/rspca.png',
            href: 'https://www.rspca.org.au/',
          },
          {
            title: 'Australian Will Kit',
            description:
              'The Online Australian Will Kit is designed to be easy to use. Each clause on the Form is numbered and there are detailed instructions for each clause.',
            href: 'https://australianwillkits.com.au/',
            image: '/partners/EstatePlanning/australian+will_icon.png',
          },
          {
            title: 'Donate Life',
            description:
              'Registering is easy and only takes one minute. Become an organ and tissue donor.Register.',
            href: 'https://www.donatelife.gov.au/',
            image: '/partners/EstatePlanning/donatelife.png',
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
