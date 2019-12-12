<template>
  <div id="infomenu">
    <div class="main-info">
      <h1 class="title">Lorem ipsum dolor sit amet.</h1>
      <p class="subtitle">Lorem ipsum dolor sit amet consectet.</p>
      <div class="icon">
        <div class="icon-container">
          <a href="#3dModel">
            <div class="icon-box">
              <img src="@/assets/Icon3D.svg" alt />
            </div>
            <p class="icon-text">3D Modeling</p>
          </a>
        </div>

        <div class="icon-container">
          <a href="#gevalScan">
            <div class="icon-box">
              <img src="@/assets/IconHouse.svg" alt />
            </div>
            <p class="icon-text">Geval Scan</p>
          </a>
        </div>
        <div class="icon-container">
          <a href="#database">
            <div class="icon-box">
              <img src="@/assets/IconFile.svg" alt />
            </div>
            <p class="icon-text">Database</p>
          </a>
        </div>
        <a href="#infomap">
          <div class="icon-container">
            <div class="icon-box">
              <img src="@/assets/IconGlobe.svg" alt />
            </div>
            <p class="icon-text">Live Map</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "InfoMenu"
};
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
      margin: 20px 50px 10px 50px;
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