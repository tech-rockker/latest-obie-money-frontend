<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Asset Protection"
        section="INVESTING FOR THE FUTURE"
        subtitle="Overview"
        image-src="/protection4.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle title="Asset Protection – What is it?"></VCardTitle>
      <VCardDescription>
        <p>
          Asset protection is a way of protecting your current assets from
          exposure to being sued. It can be involve entity structures, asset
          ownership and insurance.
        </p>
      </VCardDescription>
      <VCardTitle
        title="What is the difference between joint tenants and tenants in common when it comes to purchasing property?"
      ></VCardTitle>
      <VCardDescription>
        <p class="mb-4">
          Joint Tenancy is "right of survivorship" and hence the surviving party
          receives the ownership of the passing party.
        </p>
        <p>
          Tenants in common, do not have a right of survivorship and hence the
          property percentage pertaining to the individual who has passed away
          will go to their estate and be dealt with by their will and estate
          planning arrangements.
        </p>
      </VCardDescription>
      <VCardTitle title="Explore More about Asset Protection"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: 'Ownership - Different types, whats right for you',
            image: '/carousel/asset_prot_01.png',
            href: 'https://www.barefootinvestor.com/articles/protect-your-most-important-assets-your-family?rq=asset%20protection',
          },
          {
            title: 'Benefits of asset ownership for tax',
            image: '/carousel/asset_prot_02.png',
            href: 'https://iloverealestate.tv/video-intelligent-property-investor-update-16/',
          },
        ]"
      />
      <ButtonContainer>
        <ButtonBack></ButtonBack>
        <ButtonNext
          v-if="prevRoute && prevRoute.path === '/section-index'"
          :show-icon="false"
          color="blue-dark"
          @click="() => $router.push('/section-index?step=9')"
        >
          NEXT</ButtonNext
        >
      </ButtonContainer>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SandboxPage',
  data() {
    return {
      prevRoute: null,
    }
  },
  computed: {
    ...mapGetters(['netIncomePerFrequency']),
    ...mapState(['frequency']),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from
    })
  },
}
</script>
