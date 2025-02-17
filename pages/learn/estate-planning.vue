<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Power of Attorney"
        section="PROTECTION"
        subtitle="Overview"
        image-src="/divorce.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle title="Who’s in charge when you cant be?"></VCardTitle>
      <VSteps
        :steps="[
          {
            title: 'Personal',
            content:
              'to appoint someone to make important live decisions when you are overseas or to frail to sign documents',
          },
          {
            title: 'Financial',
            content:
              'lets you appoint someone to manage your finances and property for you',
          },
          {
            title: 'Medical / Incapacitated',
            content:
              'lets you give someone legal authority to make important decisions about your medical care',
          },
        ]"
      />

      <VCardTitle title="Explore More about Short Term Goals"></VCardTitle>
      <VCardCarousel
        :cards="[
          {
            title: 'Willed',
            image: '/carousel/estate_planning_01.jpeg',
            href: 'https://www.youtube.com/watch?v=lN2B4ywof4I',
          },
          {
            title: 'BARE',
            image: '/carousel/estate_planning_02.jpeg',
            href: 'https://www.youtube.com/watch?v=5SeaikUJ5q8',
          },
          {
            title: 'RSPCA',
            image: '/carousel/estate_planning_03.jpeg',
            href: 'https://www.youtube.com/watch?v=BSLc1Lf0okY',
          },
          {
            title: 'Organ Donation Australia',
            image: '/carousel/estate_planning_05.jpeg',
            href: 'https://www.youtube.com/watch?v=79KdJJLePCU',
          },
        ]"
      />
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
