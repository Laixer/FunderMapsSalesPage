<template>
  <div>
    <h1 class="title">Frequently Asked Questions</h1>
    <div class="faq">
      <FaqItems />
    </div>
  </div>
</template>

<script>
import FaqItems from "@/components/FaqFolder/FaqItems";

export default {
  name: "FaqPage",

  components: {
    FaqItems
  },

  data() {
    return {
      item: [
        {
          id: 1,
          title: "Lorem ipsum",
          text: "Nullam at nulla sapien. Integer vel nulla augue."
        },
        {
          id: 2,
          title: "Lorem Ipsum",
          text: "Nullam at nulla sapien. Integer vel nulla augue."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: 500;
  margin: 30px;
  display: flex;
  justify-content: center;
}
</style>