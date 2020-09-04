<template>
  <div id="infomenu">
    <div class="main-info">
      <div class="icon">
        <div class="icon-container" v-for="menuItem in menuItems" v-bind:key="menuItem.name">
          <a v-bind:href="`#` + menuItem.name">
            <div class="icon-box">
              <img v-bind:src="require(`@/assets/images/` + menuItem.img)" alt />
            </div>
            <p class="icon-text">{{menuItem.name}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

type MenuItem = {
  name: string,
  img: string,
}

@Component({
  name: 'InfoMenu',
})
export default class InfoMenu extends Vue {
  private menuItems: Array<MenuItem> = [
    {
      name: 'Applicatie',
      img: 'IconFile.svg',
    },
    {
      name: 'Scheurherkenning',
      img: 'IconHouse.svg',
    },
    {
      name: 'Gevelscan',
      img: 'Icon3D.svg',
    },
    {
      name: 'Kaartviewer',
      img: 'IconGlobe.svg',
    },
  ]
}
</script>

<style lang="scss" scoped>
.main-info {
  margin: 0 0 0px 0;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  text-align: center;
}

.icon {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    text-decoration: none;
  }

  .icon-container {
    display: flex;
    flex-direction: column;

    .icon-box {
      height: 90px;
      width: 90px;
      background-color: #17a4ea;
      margin: 0px 50px 10px 50px;
      border-radius: 25px;
      display: flex;
      justify-content: center;

      &:hover {
        background-color: darken($color: #17a4ea, $amount: 20%);
      }

      img {
        max-width: 60px;
        overflow: visible;
        align-items: center;
      }
    }

    .icon-text {
      font-weight: 500;
      color: #1a1d39;
    }
  }
}
</style>
