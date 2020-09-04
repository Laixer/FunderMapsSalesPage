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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TestimonialsQuote from '@/components/Home/TestimonialsQuote.vue';

@Component({
  name: 'TheTestimonials',
  components: {
    TestimonialsQuote,
  },
})
export default class TheTestimonials extends Vue { }
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
