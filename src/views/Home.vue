<template>
  <div class="home">
    <HeaderMarket />
    <HeroMarket />
    <WomanBannerMarket />
    <InstaMarket />
    <PartnerMarket />
    <FooterMarket />

  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMarket from '@/components/HeaderMarket.vue'
import HeroMarket from '@/components/HeroMarket.vue'
import WomanBannerMarket from '@/components/WomanBannerMarket.vue'
import InstaMarket from '@/components/InstaMarket.vue'
import PartnerMarket from '@/components/PartnerMarket.vue'
import FooterMarket from '@/components/FooterMarket.vue'

export default {
  name: 'Home',
  components: {
    HeaderMarket, HeroMarket, WomanBannerMarket, InstaMarket, PartnerMarket, FooterMarket
  }
}
</script>
