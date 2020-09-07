<template>
  <div class="infomap" id="Kaartviewer">
    <h1 class="map-text">Kaartviewer</h1>
    <p class="map-subtext">
      Analyse resultaten, funderingstype en pandzakkingssnelheid
      worden op pandniveau gepresenteerd.
    </p>
    <img src="@/assets/images/ImageMap.webp" type="image/webp" alt class="map" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class InfoMap extends Vue { }
</script>

<style lang="scss" scoped>
.infomap {
  text-align: center;

  .map {
    margin-top: 30px;

    &-text {
      font-size: 2.5rem;
      font-weight: bold;
    }

    &-subtext {
      font-style: italic;
      font-size: 1.3rem;
      max-width: 70%;
      margin: auto;
    }
  }
}
</style>
