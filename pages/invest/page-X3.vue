<template>
  <VPageContainer>
    <VContainer>
      <VProgress :percentage="50" />
      <VHeading
        title="Choose from a set of industry share management providers"
        image-src="/market-investment.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <template slot="top">
        <VCardListCheckbox
          :cards="partners"
          :value="onboarding.industry_provider_examples"
          @input="
            $store.dispatch('setOnboardingValue', {
              key: 'industry_provider_examples',
              value: $event,
            })
          "
        ></VCardListCheckbox>
      </template>
      <template slot="bottom">
        <ButtonContainer>
          <ButtonBack></ButtonBack>
          <ButtonNext
            :show-icon="false"
            color="blue-dark"
            @click="
              $store.dispatch('setValue', {
                key: 'completedInvest',
                value: true,
              })
              $router.push('/dashboard')
            "
            >NEXT</ButtonNext
          >
        </ButtonContainer>
      </template>
    </VCard>
  </VPageContainer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selected: [],
      partners: [
        {
          title: 'Sharesies',
          id: 'sharesies',
          description:
            'Choose from thousands of companies and funds across New Zealand, the US, and Australia.',
          image: '/partners/sharesies.png',
          href: 'https://sharesies.com.au/',
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
      ],
    }
  },
  computed: {
    ...mapState(['onboarding']),
  },
}
</script>
