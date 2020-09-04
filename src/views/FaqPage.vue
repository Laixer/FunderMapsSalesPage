<template>
  <div>
    <h1 class="title">Frequently Asked Questions</h1>
    <div class="faq">
      <FaqItems />
    </div>
  </div>
</template>

<script lang='ts'>
import FaqItems from '@/components/Faq/FaqItems.vue';
import { Component, Vue } from 'vue-property-decorator';

type Faq = {
  id: number,
  title: string,
  text: string
}

@Component({
  name: 'FaqPage',
  components: {
    FaqItems,
  },
})
export default class FaqPage extends Vue {
  private data: Array<Faq> = [
    {
      id: 1,
      title: 'Lorem ipsum',
      text: 'Nullam at nulla sapien. Integer vel nulla augue.',
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      text: 'Nullam at nulla sapien. Integer vel nulla augue.',
    },
  ];
}
</script>

<style lang='scss' scoped>
.title {
  font-weight: 500;
  margin: 30px;
  display: flex;
  justify-content: center;
}
</style>
