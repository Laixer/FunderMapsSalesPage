<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import TheNavbar from '@/components/TheNavbar.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { TheNavbar },
})
export default class App extends Vue { }
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,600,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif;
  color: #1a1d39;
}
</style>
