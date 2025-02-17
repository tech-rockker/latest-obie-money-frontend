<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Property"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'Assemble',
            description:
              'Our ambition is to challenge our country\'s housing affordability crisis—to develop new ideas on how we can create a fairer system.',
            image: '/partners/assemble.png',
            href: 'https://assemblecommunities.com/',
          },
          {
            title: 'CoreLogic',
            description:
              'CoreLogic is the leading property data, information, analytics and services provider in Australia and New Zealand with growing partnerships throughout Asia.',
            image: '/partners/corelogic.png',
            href: 'https://www.corelogic.com.au/',
          },
          {
            title: 'Domain',
            description:
              'Search houses & apartments for Sale & Rent. Find real estate agents & auction results. Apply for a home loan with Domain Home Loans.',
            image: '/partners/domain.png',
            href: 'https://www.domain.com.au/',
          },
          {
            title: 'realestate.com.au',
            description:
              'Australia\'s No.1 property site for real estate. Find the latest home for you, property news & real estate market data.',
            image: '/partners/realestateau.png',
            href: 'http://realestate.com.au/',
          },
          {
            title: 'Lendi',
            description:
              'Choosing from over 2,500 different home loan options means you can find the right loan for your individual needs.',
            image: '/partners/Property/lendi.png',
            href: 'https://www.lendi.com.au/',
          },
          {
            title: 'Real Estate Investor',
            description:
              'The team at Real Estate Investor helps people to achieve financial independence through property investment.',
            image: '/partners/Property/realestateinvestor.png',
            href: 'https://www.realestateinvestor.com.au/',
          },
          {
            title: 'Prop Hero',
            description:
              'We help you find, buy, and manage high return and low risk investment properties.',
            image: '/partners/Property/prophero.png',
            href: 'https://prophero.com.au/',
          },
          {
            title: 'Athena',
            description:
              'Where rates go down the better you do and their goal is to get rid of you! Your personalised loan snapshot in 5 mins. See your fee-free starting rate, repayments and savings in a couple of minutes.',
            image: '/partners/Property/athenahome.png',
            href: 'https://www.athena.com.au/',
          },
          {
            title: 'Deposit Gap Loan',
            description:
              'World first innovation made in Australia. Saving for a house deposit? Say goodbye to LMI fees. Now DGL will help you fund the gap.',
            image: '/partners/Property/qsqo.png',
            href: 'https://depositgaploans.com/',
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
