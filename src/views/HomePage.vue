<template>
  <div class="homepage">
    <TheHeading />
    <InfoMenu />
    <hr />
    <InfoItems />
    <InfoText />

    <TheTestimonials />

    <ContactInfo />
    <TheFooter />
  </div>
</template>

<script>
// @ Header section
import TheHeading from "@/components/HomeFolder/TheHeading";

// @ Info Section
import InfoMenu from "@/components/HomeFolder/InfoMenu";
import InfoItems from "@/components/HomeFolder/InfoItems";
import InfoText from "@/components/HomeFolder/InfoText";

// @ Testimonials Section
import TheTestimonials from "@/components/HomeFolder/TestimonialsText";

// @ Contact Section
import ContactInfo from "@/components/HomeFolder/ContactInfo";

// @ Footer Section
import TheFooter from "@/components/HomeFolder/TheFooter";

// @ Jquery Import $

export default {
  name: "HomePage",
  components: {
    TheHeading,
    InfoMenu,
    InfoItems,
    InfoText,
    TheTestimonials,
    ContactInfo,
    TheFooter
  }

};
</script>
<style lang="scss" scoped>
.homepage {
  background-image: url("../assets/background.svg");
  background-size: contain;
  display: block;
  background-repeat: no-repeat;
}
</style>
