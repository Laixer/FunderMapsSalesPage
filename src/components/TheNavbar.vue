<template>
  <div id="nav">
    <router-link to="/">
      <img alt="Fundermaps logo" src="@/assets/logo.png" class="logo" />
    </router-link>
    <div class="nav-link">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/infoPage" class="link">Informatie</router-link>
      <router-link to="/faq" class="link">FAQ</router-link>
      <a to="/#contactinfo" class="link">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
};
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: auto;
  @media screen and (max-width: 900px) {
    display: block;
    justify-self: auto;
  }

  .logo {
    margin: 20px 20px;
    height: 2.3rem;

    @media screen and (max-width: 900px) {
      margin-bottom: 0;
    }
    @media screen and (min-width: 1901px) {
      height: 2.8rem;
    }
  }

  .nav-link {
    display: flex;

    .link {
      text-decoration: none;
      font-size: 1.3rem;
      padding: 1rem 1rem;
      opacity: 0.7;
      margin: 5px;
      transition: 0.3s;
      color: #1a1d39;
      @media screen and(min-width: 1901px) {
        font-size: 1.7rem;
      }

      @media screen and (max-width: 600px) {
        font-size: 1rem;
      }

      &:hover {
        color: black;
        opacity: 1;
      }
    }
  }
}
</style>