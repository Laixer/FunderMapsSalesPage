<template>
  <div class="homepage">
    <TheHeading />
    <InfoMenu />
    <InfoItems />
    <InfoText />
    <TheFooter />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TheHeading from '@/components/Home/TheHeading.vue';
import InfoMenu from '@/components/Home/InfoMenu.vue';
import InfoItems from '@/components/Home/InfoItems.vue';
import InfoText from '@/components/Home/InfoText.vue';
// import TheTestimonials from '@/components/Home/TestimonialsText.vue';
// import ContactInfo from '@/components/Home/ContactInfo.vue';
import TheFooter from '@/components/Home/TheFooter.vue';

@Component({
  name: 'HomePage',
  components: {
    TheHeading,
    InfoMenu,
    InfoItems,
    InfoText,
    // TheTestimonials,
    // ContactInfo,
    TheFooter,
  },
})
export default class HomePage extends Vue { }
</script>
<style lang="scss" scoped>
.homepage {
  background-image: url("../assets/images/background.svg");
  background-size: contain;
  display: block;
  background-repeat: no-repeat;
}
</style>
