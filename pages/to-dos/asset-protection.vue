<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Securing Your Future"
        section="PROTECTION"
        subtitle="Overview"
        image-src=""
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardTitle title="Why do you need insurance?"></VCardTitle>
      <VCardDescription>
        Insurance protects you and your assets from the risks of something
        unexpected happening. It pushes the risk of financial loss onto a third
        party in which you exchange that risk for a premium.
      </VCardDescription>
      <VCardTitle title="What is asset protection and why do you need it?">
      </VCardTitle>
      <VCardDescription>
        Asset protection is a way of protecting your current assets from
        exposure to being sued. It can involve entity structures, asset
        ownership and insurance.
      </VCardDescription>
      <VCardTitle title="Why do you need to plan your estate?"> </VCardTitle>
      <VCardDescription>
        Estate Planning assists you to protect your assets and loved ones in the
        event of your passing. It is important to have your affairs in order by
        utilising estate planning so as to have a process for your loved ones to
        follow. Estate planning includes preparing a will, considering powers of
        attorney, document storage, executors guides and also password
        management in today's digital age.
      </VCardDescription>
      <ButtonBack class="mt-10"></ButtonBack>
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
