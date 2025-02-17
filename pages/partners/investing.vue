<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Choose from a set of industry share management providers"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'Sharesies',
            id: 'sharesies',
            description:
              'Choose from thousands of companies and funds across New Zealand, the US, and Australia.',
            image: '/partners/sharesies.png',
            href: 'https://sharesies.com.au/',
          },
          {
            title: 'Birchal',
            id: 'birchal',
            description:
              'Birchal is an Australian Equity Crowdfunding platform for consumer brands and companies.',
            image: '/partners/Invest/birchal.png',
            href: 'https://www.birchal.com/',
          },
          {
            title: 'Spaceship',
            id: 'spaceship',
            description:
              'Choose from thousands of companies and funds across New Zealand, the US, and Australia.',
            image: '/partners/spaceship.png',
            href: 'https://www.spaceship.com.au/',
          },
          {
            title: 'RAIZ',
            id: 'raiz',
            description:
              'Choose from thousands of companies and funds across New Zealand, the US, and Australia.',
            image: '/partners/raiz.png',
            href: 'https://raizinvest.com.au/',
          },
          {
            title: 'CommSec Pocket',
            id: 'commsec_pocket',
            description:
              'Choose from thousands of companies and funds across New Zealand, the US, and Australia.',
            image: '/partners/commsec_pocket.png',
            href: 'https://www.commsec.com.au/Pocket',
          },
          {
            title: 'Superhero',
            id: 'superhero',
            description:
              'Choose from thousands of companies and funds across New Zealand, the US, and Australia.',
            image: '/partners/superhero.png',
            href: 'https://www.superhero.com.au/',
          },
          {
            title: 'Stake',
            id: 'stake',
            description:
              'Choose from thousands of companies and funds across New Zealand, the US, and Australia.',
            image: '/partners/stake.png',
            href: 'https://hellostake.com/au',
          },
          {
            title: 'Pearler',
            id: 'pearler',
            description:
              'Choose from thousands of companies and funds across New Zealand, the US, and Australia.',
            image: '/partners/pearler.png',
            href: 'https://pearler.com/',
          },
          {
            title: 'Sharesight',
            id: 'sharesight',
            description:
              'Powerful portfolio tracking software that lets you check your investments in one place with award-winning performance, dividend tracking and tax reporting. Amazing!',
            image: '/partners/Invest/sharesight_icon.png',
            href: 'https://www.sharesight.com/au/',
          },
          {
            title: 'Unhedged',
            id: 'unhedged',
            description:
              'Unhedged helps funds and wealth managers to built better portfolios, brokers to give their clients advanced insights. Better outcomes: happier clients!',
            image: '/partners/Invest/unhedge.png',
            href: 'https://unhedged.com.au/',
          },
          {
            title: 'Elbaite',
            id: 'elbaite',
            description:
              'Elbaite is an Australian Crypto Exchange. Enjoy the freedom, simplicity and safety of trading directly from your crypto wallet. Easy 3 step start.',
            image: '/partners/Invest/elbaite.png',
            href: 'https://www.elbaite.com/',
          },
          {
            title: 'Coinstash',
            id: 'coinstash',
            description:
              'Bridging the gap between traditional finance and the world of crypto, to build a better financial future for all.',
            image: '/partners/Invest/coinstash.png',
            href: 'https://coinstash.com.au/',
          },
          {
            title: 'Vanguard',
            id: 'vanguard',
            description:
              'This is the type of EFT fund Warren Buffet recommends to the non-sophisticated investor. It is widely available through a number of platforms. Always do your due diligence.',
            image: '/partners/Invest/vanguard.png',
            href: 'https://investor.vanguard.com/corporate-portal',
          },
          {
            title: 'ASX',
            id: 'asx',
            description:
              'ASX Online helps you to easily locate a wide variety of information regarding ASX products and services.',
            image: '/partners/Invest/asx.png',
            href: 'https://www.asx.com.au/',
          },
          {
            title: 'Hnry',
            id: 'hnry',
            description:
              'Hnry is designed to ensure you’re up-to-date on your taxes so that you never get a big tax bill at the end of the year.',
            image: '/partners/Invest/henry.png',
            href: 'https://hnry.com.au/',
          },
          {
            title: 'Blossom',
            id: 'blossom',
            description:
              '5.95% p.a. and 7.00% p.a. targeted returns to help you reach your goals faster.',
            image: '/partners/Invest/blossom.png',
            href: 'https://www.blossomapp.com/',
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
