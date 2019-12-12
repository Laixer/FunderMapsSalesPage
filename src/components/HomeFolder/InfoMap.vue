<template>
  <div id="infomap">
    <h1 class="map-text">Lorem ipsum dolor sit amet</h1>
    <p class="map-subtext">
      Vestibulum ac bibendum purus. Praesent aliquam nunc libero, ut
      pellentesque quam congue at.
    </p>
    <img src="@/assets/ImageMap.jpg" alt class="map" />
  </div>
</template>

<script>
export default {
  name: "InfoMap"
};
</script>

<style lang="scss" scoped>
#infomap {
  text-align: center;

  &-text {
    font-size: 2.5rem;
    font-weight: bold;
  }

  &-subtext {
    font-style: italic;
    font-size: 1.3rem;
    max-width: 40%;
    margin: auto;
  }

  .map {
    width: 100vw;
    margin-top: 30px;
  }
}
</style>