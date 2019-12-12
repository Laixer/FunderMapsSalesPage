<template>
  <div class="testimonials">
    <h1>Testimonials</h1>
    <p class="text">
      Vestibulum ac bibendum purus. Praesent aliquam nunc libero, ut
      pellentesque quam congue at.
    </p>
    <TestimonialsQuote />
  </div>
</template>

<script>
import TestimonialsQuote from "@/components/HomeFolder/TestimonialsQuote";

export default {
  name: "TheTestimonials",
  components: {
    TestimonialsQuote
  }
};
</script>

<style lang="scss" scoped>
.testimonials {
  margin-top: 300px;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    max-width: 80%;
    text-align: center;
    margin: auto;
  }

  .text {
    font-size: 1.3rem;
    max-width: 80%;
    font-style: italic;
    margin: auto;
    text-align: center;
  }
}
</style>