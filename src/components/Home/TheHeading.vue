<template>
  <div class="theheading container">
    <img alt="Fundermaps logo" src="@/assets/images/logo.svg" class="logo" />
    <p>Asset Management Tool voor funderingen</p>
    <!-- <div class="cta">
      <button type="button" class="button-filled">Lees meer</button>
      <button type="button" class="button-borderd">Contact</button>
    </div>-->
    <img src="@/assets/images/ImageHeader.svg" alt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'heading',
})
export default class TheHeading extends Vue { }
</script>

<style lang="scss" scoped>
.theheading {
  margin: 20px;
  padding: 16px;

  align-items: center;
  flex-direction: column;
  display: flex;
  // min-height: 80vh;
  text-align: center;

  background-size: 90% auto;
  background-position: center center;
  background-repeat: no-repeat;

  overflow: hidden;

  h1 {
    font-weight: bold;
    font-size: 2.5rem;

    @media (max-width: 600px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.2rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .logo {
    margin-top: 50px;
    width: 50%;
    padding: 0px;
  }

  img {
    width: 70%;
    margin: auto;
    padding: 20px;
  }

  .cta {
    // call to action
    display: flex;
    text-align: center;
    text-decoration: none;
    justify-content: center;
    margin-top: 20px;
  }
}

.button-filled {
  background-color: #17a4ea;
  border: none;
  color: white;
  padding: 12px;
  margin: 4px 16px;
  font-weight: 700;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 30px white;
  }
}

.button-borderd {
  border: 2px solid #17a4ea;
  color: #17a4ea;
  padding: 12px;
  margin: 4px 16px;
  font-weight: 700;
  background-color: white;
  min-width: 32px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 30px #17a4ea;
  }
}
.container {
  width: 80%;
  margin: auto;
  position: relative;
}
</style>
