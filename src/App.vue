<template>
  <div id="app">
    <TheNavbar />
    <!-- Navbar -->
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheNavbar
  }
};
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
