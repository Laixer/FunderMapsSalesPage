<template>
  <div class="full">
    <error404 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import error404 from '@/components/Error/ErrorPage.vue';

@Component({
  components: {
    error404,
  },
})
export default class Page404 extends Vue { }
</script>

<style lang="scss" scoped>
</style>
