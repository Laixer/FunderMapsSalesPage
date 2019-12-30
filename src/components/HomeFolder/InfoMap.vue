<template>
  <div id="infomap">
    <h1 class="map-text">Kaartviewer </h1>
    <p class="map-subtext">
      Met de data van funderingen wordt de analyses naar funderingsrisicogebieden uitgevoerd. Beschikbare data hiervoor zijn oa. funderingstype en  pandzakkingssnelheid. Analyses obv grondwaterstand als droogstaand en subjectieve beoordelingen als handhavingstermijnen worden tevens gebruikt. Op deze wijze wordt op blok of wijkniveau een risico bepaald op funderingsschade.
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


  .map {
    width: 100vw;
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