<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Move Your Money"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'Wise',
            description:
              'One account to make your money work worldwide. Seemlessly send, spend and get paid.',
            image: '/partners/MoveYourMoney/wise.png',
            href: 'https://wise.com/au/',
          },
          {
            title: 'Chipper',
            description:
              'Join over 5 million people securely sending and receiving money with Chipper Cash. Join Now!',
            image: '/partners/MoveYourMoney/chipper-icon.png',
            href: 'https://chippercash.com/',
          },
          {
            title: 'OrbitRemit',
            description:
              'International money transfers with OrbitRemit™ are fast, safe & guaranteed. Easily send money online via web or app!',
            image: '/partners/MoveYourMoney/orbit-remit.png',
            href: 'https://www.orbitremit.com/',
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
