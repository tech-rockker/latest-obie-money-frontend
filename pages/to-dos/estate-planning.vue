<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="End of Life"
        section="PROTECTION"
        subtitle="Overview"
        image-src="/law.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle
        title="What is included in the end of life planning?"
      ></VCardTitle>
      <VSteps
        :steps="[
          {
            title: 'Wills',
            content:
              'Sets out your wishes regarding the distribution of your property and assets.  It does not include the distribution of your super.  Less than a third of people do not have a will.',
          },
          {
            title: 'Guardianship of Children',
            content:
              'Makes sure you name a caregiver and gives them the legal rights regarding the care of your kids when you can’t.',
          },
          {
            title: 'Organ Donation',
            content:
              'Only 1 in 3 people are actually registered for organ donation.  They need more.  This is where you state your wish to donate or not to donate organs.',
          },
          {
            title: 'Funeral Arrangements',
            content:
              'There are big changes in the way funerals can be conducted now.  Do it your way and plan ahead.',
          },
          {
            title: 'Executor Guide',
            content:
              'Lost in translation.  Make it clear and set your intent.  Assist your executor to know what and why you wanted things as you do.',
          },
          {
            title: 'Digital Passwords',
            content:
              'Leave your records in order. Make it easy for your executor to close down your digital accounts.',
          },
          {
            title: 'Power of Attorney',
            content:
              'Medically and mentally incapacitated.  Assign authority to someone you trust to act for you when you can’t.',
          },
        ]"
      />

      <VCardTitle title="Learn More about End of Life Planning"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: 'Willed',
            image: '/carousel/estate_planning_07.png',
            href: 'https://www.willed.com.au/how-it-works/',
          },
          {
            title: 'BARE',
            image: '/carousel/estate_planning_06.png',
            href: 'https://bare.com.au/blog/end-of-life-planning-no-close-family-friends',
          },
          {
            title: 'RSPCA',
            image: '/carousel/estate_planning_03.jpeg',
            href: 'https://www.rspca.org.au/support-us/gifts-in-wills/',
          },
          {
            title: 'Organ Donation Australia',
            image: '/carousel/estate_planning_04.jpeg',
            href: 'https://www.youtube.com/watch?v=GFu2C8XHkSA',
          },
        ]"
      />
      <ButtonContainer>
        <ButtonBack></ButtonBack>
        <ButtonNext
          v-if="prevRoute && prevRoute.path === '/section-index'"
          :show-icon="false"
          color="blue-dark"
          @click="() => $router.push('/dashboard')"
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
