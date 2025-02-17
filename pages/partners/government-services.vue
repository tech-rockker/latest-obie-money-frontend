<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Government Services"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'moneysmart',
            description:
              'Providing Australians with free tools, tips and guidance to answer any of those nagging questions.',
            image: '/partners/GovernmentServices/moneysmart.png',
            href: 'https://moneysmart.gov.au/',
          },
          {
            title: 'Australian Taxation Office',
            description: 'For all things tax.',
            image: '/partners/GovernmentServices/ato.png',
            href: 'https://www.ato.gov.au/',
          },
          {
            title: 'myGov',
            description:
              'Access government services from one place.So you can focus on what really matters.',
            image: '/partners/GovernmentServices/ausgovmygov.png',
            href: 'https://my.gov.au/',
          },
          {
            title: 'Fair Work Ombudsman',
            description:
              'Helping everyone in Australia follow the laws that make all workplaces equal and fair.',
            image: '/partners/GovernmentServices/ombudsman.png',
            href: 'https://www.fairwork.gov.au/',
          },
          {
            title: 'Fair Work Commission',
            description:
              'Australia’s workplace relations tribunal and registered organisations regulator. We make awards, approve enterprise agreements and help resolve issues at work.',
            image: '/partners/GovernmentServices/faircommission.png',
            href: 'https://www.fwc.gov.au/',
          },
          {
            title: 'ASIC',
            description:
              'ASIC is an independent Australian Government body responsible for regulating financial services and consumer credit, and authorised financial markets.',
            image: '/partners/GovernmentServices/asic.png',
            href: 'https://asic.gov.au/',
          },
          {
            title: 'ACCC',
            description:
              'Australia\'s national competition, consumer, fair trading and product safety regulator.',
            image: '/partners/GovernmentServices/accc.png',
            href: 'https://www.accc.gov.au/',
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
