<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="56" /> -->
      <VHeading
        title="Set Your Investment Goals"
        subtitle="Overview"
        image-src="/mountain.svg"
        section="INVESTING FOR THE FUTURE"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle title="Investment Goals"></VCardTitle>
      <VSteps
        :steps="[
          {
            title: 'Where to Invest',
          },
          {
            title: 'Set Your Investment Goals',
          },
          {
            title: 'Allocate regular payments to your Investments',
          },
        ]"
      />

      <VCardTitle
        title="Learn how to invest, trade and develop wealth building principles in the palm of your hand."
      ></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: 'Not all Investment properties are created equal.  ',
            image: '/carousel/invest_01.jpg',
            href: 'https://www.youtube.com/@IloverealestateTv1',
          },
          {
            title: 'Investing 101 with Sharesies',
            image: '/carousel/invest_02.jpg',
            href: 'https://www.youtube.com/watch?v=nxULFUsfgz0&t=2s',
          },
        ]"
      />
      <ButtonNext
        :show-icon="false"
        color="blue-dark"
        @click="$router.push('/invest/page-02')"
        >LETS GET STARTED!</ButtonNext
      >
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters(['netIncomePerFrequency']),
    ...mapState(['frequency']),
  },
}
</script>
