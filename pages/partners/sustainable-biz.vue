<template>
  <div>
    <VContainer>
      <!-- <VProgress :percentage="1" /> -->
      <VHeading
        title="Sustainable Biz"
        section="PARTNERS"
        subtitle=""
        image-src="/shuttle.svg"
      ></VHeading>
    </VContainer>
    <VCard>
      <VCardList
        :cards="[
          {
            title: 'Femtek',
            description:
              'Femtek is a leading provider of innovative solutions for women’s health and cycle literacy. Check out the Basal Body Ring coming soon!',
            image: '/partners/SustainableBiz/femtek.png',
            href: 'https://femtek.co/',
          },
          {
            title: 'Zero Co',
            description:
              'Zero Co, an Australian company consciously creating sustainable cleaning and body care products, is on a mission to untrash the planet.',
            image: '/partners/zeroco-co.png',
            href: 'https://www.zeroco.com.au/pages/the-story-so-far',
          },
          {
            title: 'Scratch',
            description:
              'Meet Australian made Scratch.  A bunch of dog food nerds that believe dog food can be healthy and good for their gut.  ',
            image: '/partners/scratch.png',
            href: 'https://sniff.scratchpetfood.com.au/',
          },
          {
            title: 'UPPAREL',
            description:
              'Textile waste needs radical intervention now! At UPPAREL we’re stepping up to lead the change and demonstrating sustainability equals success.',
            image: '/partners/upparelle_btn.png',
            href: 'https://upparel.com.au/',
          },
          {
            title: 'Food 2 Soil',
            description:
              'Through the Food2Soil process we are able to return nutrients and beneficial microbes back to soil (using upcycled machinery). We believe healthy soil is part of the solution for a better future for our children and generations to come.',
            image: '/partners/SustainableBiz/food2soil.png',
            href: 'https://food2soil.com.au/',
          },
          {
            title: 'Who Gives a Crap',
            description:
              'We believe in making good stuff that’s kind to Mama Earth and helps people all around the world.',
            image: '/partners/SustainableBiz/whogivesacrap.png',
            href: 'https://au.whogivesacrap.org/',
          },
          {
            title: 'Thankyou.',
            description:
              'A social enterprise creating products to help end extreme poverty. Shop personal care, cleaning, and baby products online.',
            image: '/partners/SustainableBiz/thankyou_1.png',
            href: 'https://thankyou.co/',
          },
          {
            title: 'SecondBite.',
            description:
              'SecondBite is a registered charity with the Australian Charities and Not-for-profits Commission and is a Deductible Gift Recipient.',
            image: '/partners/SustainableBiz/secondbite.png',
            href: 'https://secondbite.org/',
          },
          {
            title: 'Happly',
            description:
              'Happly is a trusted Sydney moving company offering a wide range of services, including packing, unpacking, removals, organization, cleaning, and more.',
            image: '/partners/SustainableBiz/happly.png',
            href: 'https://happly.com.au/',
          },
          {
            title: 'Skipper',
            description:
              'Skipper develops just-add-water home and personal care products that are redefining the way we consume. Zero-waste, sustainable, and affordable.',
            image: '/partners/SustainableBiz/skipper.png',
            href: 'https://skipper.org/',
          },
          {
            title: 'Fulle',
            description:
              'Fulle the ultimate e-bike battery charger. A must have for any e-bike user. Creating a brighter future one charge at a time.',
            image: '/partners/SustainableBiz/fulle-icon.png',
            href: 'https://fulle.com.au/',
          },
          {
            title: 'Invest in Farming Co-Operative',
            description:
              'We’re on a mission to break down the barriers between the people who grow our food and everyone who eats it. The IIF app is a ridiculously easy way to back our farmers and the food they produce. Everyone benefits.',
            image: '/partners/SustainableBiz/iiftoday.png',
            href: 'https://iif.today/',
          },
          {
            title: 'Happy Cow Milk',
            description:
              'Simple, wholesome, great-tasting milk. Within minutes of milking, your milk is pasteurised and chilled, ready to be bottled.',
            image: '/partners/SustainableBiz/happycowmilk.png',
            href: 'https://www.happycowmilk.co/',
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
