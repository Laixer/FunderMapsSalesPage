<template>
  <div class="infoitems">
    <div class="item">
      <div class="item-container" id="3dModel">
        <div class="item-info">
          <h3 class="item-title">3D Modeling</h3>
          <h5 class="item-subtitle">Lorem ipsum dolor sit amet.</h5>
          <p class="item-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            officia at odit vitae eius necessitatibus dolorem repellat
            <br />
            <br />adipisci nisi, asperiores saepe magni accusamus maiores suscipit
            sit corrupti, sapiente possimus. Soluta!
          </p>
        </div>
        <img src="@/assets/Image3D.png" alt class="item-foto" />
      </div>
      <div class="item-container item-reverse" id="gevalScan">
        <img src="@/assets/ImageGevalscan.png" alt class="item-foto" />
        <div class="item-info">
          <h3 class="item-title">Gevalscan</h3>
          <h5 class="item-subtitle">Lorem ipsum dolor sit amet.</h5>
          <p class="item-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            officia at odit vitae eius necessitatibus dolorem repellat
            <br />
            <br />adipisci nisi, asperiores saepe magni accusamus maiores suscipit
            sit corrupti, sapiente possimus. Soluta!
          </p>
        </div>
      </div>
      <div class="item-container" id="database">
        <div class="item-info">
          <h3 class="item-title">Database</h3>
          <h5 class="item-subtitle">Lorem ipsum dolor sit amet.</h5>
          <p class="item-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            officia at odit vitae eius necessitatibus dolorem repellat
            adipisci nisi,
            <br />
            <br />asperiores saepe magni accusamus maiores suscipit
            sit corrupti, sapiente possimus. Soluta!
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