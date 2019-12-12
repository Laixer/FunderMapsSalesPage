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
import $ from "jquery";

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
  },
  mounted: function() {
    $('a[href*="#"]').on("click", function(e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        600,
        "linear"
      );
    });
  }

  // SCROLL On ahref ID
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
