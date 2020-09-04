<template>
  <div class="infotext">
    <h1>Waarom FunderMaps?</h1>
    <p>
      De inschatting is dat circa 400.000 woningen in Nederland
      met funderingsproblemen te maken hebben of kunnen krijgen.
      Funderingen zijn niet zichtbaar, schade valt daarbij niet
      direct op. Bovendien zijn er veranderende omgevingsfactoren als
      het klimaat en bodemdaling die invloed hebben op de staat
      van de funderingen. FunderMaps geeft op pandniveau inzicht in
      de risico's.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'InfoText',
})
export default class InfoText extends Vue { }
</script>

<style lang="scss" scoped>
.infotext {
  text-align: center;
  justify-content: center;
  top: 40px;
  background-color: transparent;
  z-index: 1;
  position: relative;
  padding: 25px 0px;
  margin: 0px 100px 100px 100px;

  @media (max-width: 1366px) {
    margin: 0x 25px 100px 25px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-top: 50px;

    @media (max-width: 1366px) {
      margin-top: 25px;
    }
  }

  p {
    letter-spacing: 0;
    color: #707070;
    font-size: 1.3rem;
    max-width: 70%;
    margin: auto;
  }
}
</style>
