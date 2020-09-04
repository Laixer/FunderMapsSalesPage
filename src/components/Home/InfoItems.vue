<template>
  <div class="infoitems">
    <div class="item" v-for="(contentItem, index) in contentItems" v-bind:key="contentItem.title">
      <div class="item-container" v-bind:id="contentItem.title">
        <template v-if="index % 2 === 0">
          <div class="item-info">
            <h3 class="item-title">{{contentItem.title}}</h3>
            <h5 class="item-subtitle">{{contentItem.subtitle}}</h5>
            <p class="item-text">{{contentItem.text}}</p>
          </div>
          <img v-bind:src="require(`@/assets/images/` + contentItem.img)" alt class="item-foto" />
        </template>
        <template v-else>
          <img v-bind:src="require(`@/assets/images/` + contentItem.img)" alt class="item-foto" />
          <div class="item-info">
            <h3 class="item-title">{{contentItem.title}}</h3>
            <h5 class="item-subtitle">{{contentItem.subtitle}}</h5>
            <p class="item-text">{{contentItem.text}}</p>
          </div>
        </template>
      </div>
    </div>
    <InfoMap />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InfoMap from '@/components/Home/InfoMap.vue';

type ContentItem = {
  title: string,
  subtitle: string,
  text: string,
  img: string,
}

@Component({
  name: 'InfoItems',
  components: {
    InfoMap,
  },
})
export default class InfoItems extends Vue {
  private contentItems: Array<ContentItem> = [
    {
      title: 'Applicatie',
      subtitle: 'Funderingsrisico analyses en data verwerking',
      text: 'Met de FunderMaps is het mogelijk zelf data uit funderingsrapportages, '
        + 'archiefonderzoek en andere rapportages te halen en in te voeren in de database. '
        + 'De brondocumenten zijn tevens te uploaden.'
        + '\n\nHier is verder geen technische kennis noodzakelijk. '
        + 'Beschikbare data is door de FunderMaps als service als bulk te verwerken.',
      img: 'ImageDatabase.png',
    },
    {
      title: 'Gevelscan',
      subtitle: 'Deformatie detectie in gevelaanzichten',
      text: 'FunderMaps heeft voor inwinning van data de FunderMapper ontwikkeld. Middels LiDAR wordt'
        + ' een probleemgebied nauwkeurig 3D ingemeten en kunnen nauwkeurige meerassige scheefstanden '
        + 'en lintvoegmetingen uit de data worden geëxtraheerd. '
        + '\n\nOok kan het 3D model worden opgenomen in het kaartmateriaal voor een 3D weergave.',
      img: 'ImageGevelscan.png',
    },
    {
      title: 'Scheurherkenning',
      subtitle: '3D Laserscanning en As-built 3D (BIM) modellen',
      text: 'Funderingsproblemen teken de gevels van de panden met scheuren en knellende ramen en deuren. '
        + 'FunderMaps kan deze tekenen automatisch detecteren en classificeren op basis van fotomateriaal. '
        + '\n\nHier worden getrainde machine learning modellen voor in gezet '
        + 'op bestaande data of op nieuw ingewonnen data. ',
      img: 'Image3D.png',
    },

  ]
}
</script>

<style lang="scss" scoped>
.infoitems {
  .item:nth-child(even) {
    flex-wrap: wrap-reverse;
  }

  .item {
    justify-content: center;

    &-text {
      white-space: pre-wrap;
    }

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
  }
}
</style>
