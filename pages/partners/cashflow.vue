<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Cashflow & Spending"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'UP',
            description:
              'Up is banking bliss and 100% mobile, Join over 700,000 Australians experiencing the financial control of Up.',
            image: '/partners/up.png',
            href: 'https://up.com.au/',
          },
          {
            title: 'Petrol Spy',
            description:
              'Petrol Spy in AUS and NZ.  Find the best fuel price near you. Download the app.',
            image: '/partners/Cashflow/petrolspy.png',
            href: 'https://petrolspy.com.au/map/latlng/-37.7631799/144.9734982',
          },
          {
            title: 'Yondr Money',
            description:
              'Your payment and loyalty platform for budgeting, saving and travelling.  Create your free account in minutes.',
            image: '/partners/yondrc.png',
            href: 'https://www.yondr.money/',
          },
          {
            title: 'Revolut',
            description:
              'From everyday spending to, to planning for your future with savings and investment accounts.',
            image: '/partners/revolut.png',
            href: 'https://www.revolut.com/',
          },
          {
            title: 'Hay Bank',
            description:
              'Your smart life admin.  Open a fee free account in minutes.  Money at life-speed.',
            image: '/partners/haybank_icon.png',
            href: 'https://www.commsec.com.au/Pocket',
          },
          {
            title: 'ING',
            description:
              'ING is  a Barefoot readers favourite.  Orange can be good for your money with plenty of Savers to squirrel away your $$.',
            image: '/partners/ing_icon.png',
            href: 'https://www.ing.com.au/',
          },
          {
            title: 'ubank',
            description:
              'Previously 86400, it was bought and rebranded by NAB as Ubank.  Check out competitive savings rates as you do your due diligence.',
            image: '/partners/Cashflow/ubank_icon.png',
            href: 'https://www.ubank.com.au/',
          },
          {
            title: 'WiseList',
            description:
              'Compare Supermarket Prices & Save Smarter more effficent grocery shopping right when we need it.  A  membership program with benefits.',
            image: '/partners/Cashflow/wiselist.png',
            href: 'https://www.wiselist.app/',
          },
          {
            title: 'Meet Ayla',
            description:
              'Your smart life admin.  Open a fee free account in minutes.  Money at life-speed.',
            image: '/partners/Cashflow/meetayla.png',
            href: 'https://www.ayla.app/',
          },
          {
            title: 'Bree',
            description:
              'The app that pays your bills on your terms, while finding you better deals to help you save. Tackle bulky bills over 4 fortnightly instalments.',
            image: '/partners/Cashflow/bree_icon.png',
            href: 'https://meetbree.com.au/',
          },
          {
            title: 'Beem',
            description:
              'Beem allows you to send & receive money using your phone in seconds, regardless of the bank.',
            image: '/partners/Cashflow/beem.png',
            href: 'https://www.beem.com.au/',
          },
          {
            title: 'Financial Counselling Australia',
            description:
              'Its not all rainbows and unicorns out there right now.  If you feel overwhelmed or unsupported you can get help from a financial counsellor.',
            image: '/partners/Cashflow/financialcounsellingaustralia.png',
            href: 'https://www.financialcounsellingaustralia.org.au/',
          },
          {
            title: 'MyBudget',
            description:
              'MyBudget has been around for a while and does come with a price tag.  But they really own your money management with you.',
            image: '/partners/Cashflow/mybudget-icon.png',
            href: 'https://www.mybudget.com.au/',
          },
          {
            title: 'Humaniti',
            description:
              'Humaniti offers Australians linked accounts and insights on your personal finances.  It also offes the ability to make money through surveys.',
            image: '/partners/Cashflow/humanitis_logo.png',
            href: 'https://www.humaniti.com/',
          },
          {
            title: 'Way Forward',
            description:
              'Way Forward is a small not for-profit-organisation. We have a dedicated team of hardship advocates.',
            image: '/partners/Cashflow/wayforward.png',
            href: 'https://wayforward.org.au/',
          },
          {
            title: 'Savely',
            description:
              'Savely is your money saving companion. We do all the work to get you on the best deals for all of your bills.',
            image: '/partners/Cashflow/savely.png',
            href: 'https://www.savely.com.au/',
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
