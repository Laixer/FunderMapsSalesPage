<template>
  <div class="container">
    <div class="error">
      <div class="text">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
      <div class="image">
        <img src="@/assets/images/ErrorSVG.svg" />
      </div>
    </div>

    <div class="copyright">
      <span>©2019 KCAF & Laixer</span>
      <span class="link">
        <a href="#">Privacy Policy</a>
      </span>
      <span class="link">
        <a href="#">Terms of Service</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'error404',
})
export default class ErrorPage extends Vue { }
</script>

<style lang="scss" scoped>
body {
  height: 100%;
}
.container {
  width: 80%;
  margin: auto;
}
.error {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
.text {
  display: flex;

  justify-content: center;
  flex-direction: column;
  flex: 1 0 40%;
  h1 {
    font-size: 7rem;
  }
  p {
    font-size: 2.5rem;
  }
}
.image {
  padding: 10px;
  flex: 1 0 50%;
  img {
    max-width: 100%;
  }
}

.copyright {
  display: flex;
  justify-content: left;
  margin-bottom: 25px;
  align-self: flex-end;
  span {
    margin: 10px;
    font-size: 0.7em;
  }

  span.link {
    a {
      text-decoration: none;
      color: #17a4ea;
      font-weight: 800;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        color: #1a1d39;
      }
    }
  }
}
</style>
