<template>
  <div class="infoitems">
    <div class="item">
      <div class="item-container" id="gevelScan">
        <div class="item-info">
          <h3 class="item-title">Gevelscan</h3>
          <h5 class="item-subtitle">Lorem ipsum dolor sit amet.</h5>
          <p class="item-text">
            FunderMaps heeft voor inwinning van data de FunderMapper ontwikkeld. Middels LiDAR wordt een probleemgebied nauwkeurig 3D ingemeten en kunnen nauwkeurige meerassige scheefstanden en lintvoegmetingen uit de data worden geëxtraheerd
            <br />
            <br />Ook kan het 3D model worden opgenomen in het kaartmateriaal voor een 3D weergave.
          </p>
        </div>
        <img src="@/assets/Image3D.png" alt class="item-foto" />
      </div>
      <div class="item-container item-reverse" id="scheurHerkenning">
        <img src="@/assets/ImageGevalscan.png" alt class="item-foto" />
        <div class="item-info">
          <h3 class="item-title">Scheurherkenning </h3>
          <h5 class="item-subtitle">Lorem ipsum dolor sit amet.</h5>
          <p class="item-text">
            Funderingsproblemen teken de gevels van de panden met scheuren en knellende ramen en deuren. FunderMaps kan deze tekenen automatisch detecteren en classificeren op basis van fotomateriaal.
            <br />
            <br />Hier worden getrainde machine learning modellen voor in gezet op bestaande data of op nieuw ingewonnen data.
          </p>
        </div>
      </div>
      <div class="item-container" id="applivatie">
        <div class="item-info">
          <h3 class="item-title">Applicatie</h3>
          <h5 class="item-subtitle">Lorem ipsum dolor sit amet.</h5>
          <p class="item-text">
            Met de FunderMaps is het mogelijk zelf data uit funderingsrapportages, archiefonderzoek en andere rapportages te halen en in te voeren in de database. De brondocumenten zijn tevens te uploaden. 
            <br />
            <br />Hier is verder geen technische kennis noodzakelijk. Beschikbare data is door de FunderMaps als service als bulk te verwerken.
          </p>
        </div>
        <img src="@/assets/ImageDatabase.png" alt class="item-foto" />
      </div>
    </div>
    <InfoMap />
  </div>
</template>

<script>
import InfoMap from "@/components/HomeFolder/InfoMap";
export default {
  name: "InfoItems",
  components: {
    InfoMap
  }
};
</script>

<style lang="scss" scoped>
.infoitems {
  .item {
    justify-content: center;

    &-container {
      overflow-x: visible;
      display: flex;
      padding: 100px 0px 100px 0;
      flex-wrap: wrap;
    }

    &-info {
      margin: auto;
      max-width: 500px;

      @media (max-width: 1366px) {
        text-align: center;
      }
    }

    &-title {
      font-size: 2.5rem;
      font-weight: 800;
    }

    &-subtitle {
      font-size: 1.5rem;
      color: #17a4ea;
      font-weight: 800;
      padding: 0px 0px 5px 0px;
    }

    &-foto {
      overflow-x: visible;
      width: 45vw;

      @media (max-width: 1366px) {
        width: 80vw;
        margin: auto;
        margin-top: 25px;
      }
    }

    &-reverse {
      flex-wrap: wrap-reverse;
    }
  }
}
</style>